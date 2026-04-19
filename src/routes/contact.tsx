import { createFileRoute } from "@tanstack/react-router"
import { ContactForm } from "@/components/sections/contact-form"
import { createCanonicalLink, createSeoMeta } from "@/lib/seo"

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: createSeoMeta({
      title: "Contact",
      description: "Tell me about your project. I'll reply within a business day.",
      path: "/contact",
    }),
    links: [createCanonicalLink("/contact")],
  }),
})

function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <header className="mb-12 space-y-6 sm:mb-16">
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">Start a conversation</p>
        <h1 className="max-w-[16ch] text-5xl font-medium tracking-[-0.04em] sm:text-7xl">
          The best projects start with a good conversation.
        </h1>
      </header>

      <ContactForm />

      <footer className="mt-24 grid gap-10 border-t border-border/40 pt-10 sm:grid-cols-[auto_1fr] sm:gap-16 sm:mt-32">
        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">Response time</p>
          <p className="text-sm text-foreground">Within one business day.</p>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">On pricing</p>
          <p className="max-w-[60ch] text-sm leading-6 text-muted-foreground">
            Every project is different. I price based on scope, complexity, and timeline. I don't publish fixed rates
            because I want to give you an honest number, not a generic one.
          </p>
          <p className="max-w-[60ch] text-sm leading-6 text-muted-foreground">
            Most engagements start with an estimated range after our first conversation. From there, we refine the
            details and land on a fixed-price scope you can plan around before any work begins.
          </p>
        </div>
      </footer>
    </div>
  )
}
