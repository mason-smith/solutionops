import { createFileRoute } from "@tanstack/react-router"

type ContactPayload = {
  name?: unknown
  email?: unknown
  message?: unknown
  token?: unknown
}

type TurnstileResponse = {
  success: boolean
  "error-codes"?: Array<string>
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0
}

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  })
}

async function verifyTurnstile(token: string, secret: string, remoteIp: string | null): Promise<boolean> {
  const form = new FormData()
  form.append("secret", secret)
  form.append("response", token)
  if (remoteIp) form.append("remoteip", remoteIp)

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  })

  if (!response.ok) return false

  const result = (await response.json()) as TurnstileResponse
  return result.success === true
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: ContactPayload
        try {
          payload = (await request.json()) as ContactPayload
        } catch {
          return jsonResponse({ message: "Invalid request body." }, 400)
        }

        const { name, email, message, token } = payload

        if (!isNonEmptyString(name)) {
          return jsonResponse({ message: "Please tell me your name." }, 400)
        }
        if (!isValidEmail(email)) {
          return jsonResponse({ message: "Please provide a valid email address." }, 400)
        }
        if (!isNonEmptyString(message)) {
          return jsonResponse({ message: "Please include a message." }, 400)
        }
        if (!isNonEmptyString(token)) {
          return jsonResponse({ message: "Verification token is missing." }, 400)
        }

        const env = (globalThis as { env?: Record<string, unknown> }).env ?? process.env
        const secret = env.TURNSTILE_SECRET_KEY as string | undefined
        const toAddress = (env.CONTACT_TO_EMAIL as string | undefined) ?? "mason.smith@solutionops.com"
        const fromAddress = (env.CONTACT_FROM_EMAIL as string | undefined) ?? "forms@solutionops.com"

        if (!secret) {
          return jsonResponse({ message: "Server is not configured to send email." }, 500)
        }

        const remoteIp = request.headers.get("CF-Connecting-IP") ?? request.headers.get("X-Forwarded-For")
        const verified = await verifyTurnstile(token, secret, remoteIp)

        if (!verified) {
          return jsonResponse({ message: "Verification failed. Please try again." }, 400)
        }

        const trimmedName = name.trim()
        const trimmedEmail = email.trim()
        const trimmedMessage = message.trim()

        const subject = `New inquiry from ${trimmedName}`
        const textBody = `From: ${trimmedName} <${trimmedEmail}>\n\n${trimmedMessage}`
        const htmlBody = `<p><strong>From:</strong> ${escapeHtml(trimmedName)} &lt;${escapeHtml(trimmedEmail)}&gt;</p><p>${escapeHtml(trimmedMessage).replace(/\n/g, "<br>")}</p>`

        const emailBinding = (env as { EMAIL?: { send: (options: unknown) => Promise<unknown> } }).EMAIL

        if (!emailBinding) {
          console.error("Email binding not available. Contact submission from", trimmedEmail, "could not be sent.")
          return jsonResponse({ message: "Email service is not configured yet." }, 500)
        }

        try {
          await emailBinding.send({
            to: toAddress,
            from: fromAddress,
            replyTo: trimmedEmail,
            subject,
            text: textBody,
            html: htmlBody,
          })
        } catch (error) {
          console.error("Failed to send contact email:", error)
          return jsonResponse({ message: "Failed to send message. Please try again or email directly." }, 500)
        }

        return jsonResponse({ success: true }, 200)
      },
    },
  },
})
