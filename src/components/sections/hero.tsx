import { company } from "@/data/company"

export function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="space-y-6">
        <h1 className="text-5xl font-medium tracking-[-0.04em] sm:text-7xl">{company.tagline}</h1>
        <p className="max-w-[48ch] text-base leading-7 text-muted-foreground">{company.description}</p>
      </div>
    </section>
  )
}
