import { company } from "@/data/company"

const CURRENT_YEAR = "2026"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-muted-foreground">
          &copy; {CURRENT_YEAR} {company.name}
        </p>
        <a
          href={`mailto:${company.email}`}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
        >
          {company.email}
        </a>
      </div>
    </footer>
  )
}
