import { company } from "@/data/company"

export function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <div className="space-y-6">
        <h1 className="text-3xl font-medium tracking-[-0.03em] sm:text-4xl">{company.tagline}</h1>
        <p className="max-w-[52ch] text-lg leading-7 text-muted-foreground">{company.description}</p>
      </div>
    </section>
  )
}
