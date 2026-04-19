import { useEffect, useRef } from "react"

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string
          callback: (token: string) => void
          "error-callback"?: () => void
          "expired-callback"?: () => void
          theme?: "light" | "dark" | "auto"
          appearance?: "always" | "execute" | "interaction-only"
        },
      ) => string
      reset: (widgetId?: string) => void
      remove: (widgetId?: string) => void
    }
  }
}

const TURNSTILE_SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js"

type TurnstileProps = {
  siteKey: string
  onVerify: (token: string) => void
  onExpire?: () => void
  onError?: () => void
}

export function Turnstile({ siteKey, onVerify, onExpire, onError }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  const onVerifyRef = useRef(onVerify)
  const onExpireRef = useRef(onExpire)
  const onErrorRef = useRef(onError)

  useEffect(() => {
    onVerifyRef.current = onVerify
  }, [onVerify])
  useEffect(() => {
    onExpireRef.current = onExpire
  }, [onExpire])
  useEffect(() => {
    onErrorRef.current = onError
  }, [onError])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let cancelled = false
    let intervalId: ReturnType<typeof setInterval> | null = null

    const existing = document.querySelector(`script[src="${TURNSTILE_SCRIPT}"]`)
    if (!existing) {
      const script = document.createElement("script")
      script.src = TURNSTILE_SCRIPT
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }

    const render = () => {
      if (cancelled || !window.turnstile || widgetIdRef.current) return
      container.innerHTML = ""
      widgetIdRef.current = window.turnstile.render(container, {
        sitekey: siteKey,
        callback: (token) => onVerifyRef.current(token),
        "expired-callback": () => onExpireRef.current?.(),
        "error-callback": () => onErrorRef.current?.(),
        theme: "auto",
      })
    }

    if (window.turnstile) {
      render()
    } else {
      intervalId = setInterval(() => {
        if (window.turnstile) {
          if (intervalId) clearInterval(intervalId)
          intervalId = null
          render()
        }
      }, 100)
    }

    return () => {
      cancelled = true
      if (intervalId) clearInterval(intervalId)
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
      container.innerHTML = ""
    }
  }, [siteKey])

  return <div ref={containerRef} />
}
