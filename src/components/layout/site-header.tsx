import { ArrowUpRightIcon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"
import { CommandMenu } from "@/components/command-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { company, navigation } from "@/data/company"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-sm font-medium tracking-tight transition-colors focus-visible:text-foreground focus-visible:outline-none"
        >
          {company.name}
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          {navigation.map((item) =>
            "external" in item && item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-0.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none sm:flex"
              >
                {item.label}
                <ArrowUpRightIcon size={12} />
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none sm:inline"
              >
                {item.label}
              </a>
            ),
          )}
          <CommandMenu />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
