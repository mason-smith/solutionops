import { ArrowUpRightIcon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"
import { ThemeToggle } from "@/components/theme-toggle"
import { company, navigation } from "@/data/company"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link to="/" className="text-sm font-medium tracking-tight">
          {company.name}
        </Link>
        <nav className="flex items-center gap-6">
          {navigation.map((item) =>
            "external" in item && item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-0.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
                <ArrowUpRightIcon size={12} />
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ),
          )}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
