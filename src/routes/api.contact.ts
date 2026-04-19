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

async function sendViaResend(options: {
  apiKey: string
  to: string
  from: string
  replyTo: string
  subject: string
  text: string
  html: string
}): Promise<{ ok: true } | { ok: false; message: string }> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${options.apiKey}`,
    },
    body: JSON.stringify({
      to: options.to,
      from: options.from,
      reply_to: options.replyTo,
      subject: options.subject,
      text: options.text,
      html: options.html,
    }),
  })

  if (response.ok) return { ok: true }

  const body = (await response.json().catch(() => ({}))) as { message?: string }
  return { ok: false, message: body.message ?? `Resend returned ${response.status}` }
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
        const turnstileSecret = env.TURNSTILE_SECRET_KEY as string | undefined
        const resendKey = env.RESEND_API_KEY as string | undefined
        const toAddress = (env.CONTACT_TO_EMAIL as string | undefined) ?? "mason.smith@solutionops.com"
        const fromAddress = (env.CONTACT_FROM_EMAIL as string | undefined) ?? "SolutionOps <forms@solutionops.com>"

        if (!(turnstileSecret && resendKey)) {
          console.error("Missing required environment variables for contact form")
          return jsonResponse({ message: "Server is not configured to send email." }, 500)
        }

        const remoteIp = request.headers.get("CF-Connecting-IP") ?? request.headers.get("X-Forwarded-For")
        const verified = await verifyTurnstile(token, turnstileSecret, remoteIp)

        if (!verified) {
          return jsonResponse({ message: "Verification failed. Please try again." }, 400)
        }

        const trimmedName = name.trim()
        const trimmedEmail = email.trim()
        const trimmedMessage = message.trim()

        const result = await sendViaResend({
          apiKey: resendKey,
          to: toAddress,
          from: fromAddress,
          replyTo: trimmedEmail,
          subject: `New inquiry from ${trimmedName}`,
          text: `From: ${trimmedName} <${trimmedEmail}>\n\n${trimmedMessage}`,
          html: `<p><strong>From:</strong> ${escapeHtml(trimmedName)} &lt;${escapeHtml(trimmedEmail)}&gt;</p><p>${escapeHtml(trimmedMessage).replace(/\n/g, "<br>")}</p>`,
        })

        if (!result.ok) {
          console.error("Failed to send contact email via Resend:", result.message)
          return jsonResponse({ message: "Failed to send message. Please try again or email directly." }, 500)
        }

        return jsonResponse({ success: true }, 200)
      },
    },
  },
})
