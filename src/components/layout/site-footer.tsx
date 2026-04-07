import { company } from "@/data/company"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {company.name}
        </p>
        <a
          href={`mailto:${company.email}`}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {company.email}
        </a>
      </div>
    </footer>
  )
}
