import { ArrowRightIcon, CheckCircleIcon } from "@phosphor-icons/react"
import { useState } from "react"
import { Turnstile } from "@/components/turnstile"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"

type FormState = "idle" | "submitting" | "success" | "error"

const INLINE_INPUT =
  "inline-block border-b border-border bg-transparent px-1 text-foreground transition-colors focus:border-foreground focus:outline-none placeholder:text-muted-foreground/40"

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle")
  const [token, setToken] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    if (!token) {
      setError("Please complete the verification below before sending.")
      return
    }

    setState("submitting")

    const formData = new FormData(event.currentTarget)
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      token,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.message || "Something went wrong. Please try again.")
      }

      setState("success")
    } catch (err) {
      setState("error")
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  if (state === "success") {
    return (
      <div className="space-y-6">
        <CheckCircleIcon size={28} weight="regular" className="text-foreground" />
        <div className="space-y-3">
          <p className="text-2xl font-medium tracking-[-0.02em]">Your message is on its way.</p>
          <p className="max-w-[48ch] text-base leading-7 text-muted-foreground">
            I read every inquiry personally and reply within a business day. If it's urgent, feel free to email me
            directly at{" "}
            <a href="mailto:mason.smith@solutionops.com" className="text-foreground underline underline-offset-4">
              mason.smith@solutionops.com
            </a>
            .
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="text-xl leading-[2.25rem] tracking-[-0.01em] text-muted-foreground sm:text-2xl sm:leading-[2.75rem]">
        <span className="text-foreground">Hey Mason,</span>
        <span className="mx-1 sm:mx-2">I'm</span>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="your name"
          className={cn(INLINE_INPUT, "w-36 sm:w-48")}
        />
        <span>.</span>
        <span className="mx-1 sm:mx-2">You can reach me at</span>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="your@email.com"
          className={cn(INLINE_INPUT, "w-44 sm:w-56")}
        />
        <span>.</span>

        <div className="mt-8">
          <label htmlFor="message" className="sr-only">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Here's what I have in mind..."
            className="block w-full resize-none border-b border-border bg-transparent py-2 text-xl leading-relaxed tracking-[-0.01em] text-foreground transition-colors focus:border-foreground focus:outline-none placeholder:text-muted-foreground/40 sm:text-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Turnstile
          siteKey={TURNSTILE_SITE_KEY}
          onVerify={setToken}
          onExpire={() => setToken(null)}
          onError={() => setToken(null)}
        />

        <Button
          type="submit"
          disabled={state === "submitting" || !token}
          size="lg"
          className="gap-2 self-start sm:self-auto"
        >
          {state === "submitting" ? "Sending" : "Send it"}
          {state !== "submitting" && <ArrowRightIcon size={14} />}
        </Button>
      </div>

      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </form>
  )
}
