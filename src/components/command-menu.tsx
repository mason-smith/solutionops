import { ArrowUpRightIcon, BracketsCurlyIcon, EnvelopeIcon, GithubLogoIcon } from "@phosphor-icons/react"
import { useNavigate } from "@tanstack/react-router"
import { useCallback, useEffect, useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { company } from "@/data/company"
import { projects } from "@/data/projects"

type CommandItem = {
  label: string
  href: string
  icon: React.ReactNode
  external?: boolean
}

const commands: Array<CommandItem> = [
  { label: "Work", href: "/#work", icon: <BracketsCurlyIcon size={16} /> },
  { label: "GitHub", href: company.github, icon: <GithubLogoIcon size={16} />, external: true },
  { label: "Contact", href: `mailto:${company.email}`, icon: <EnvelopeIcon size={16} />, external: true },
  ...projects.map((p) => ({
    label: p.name,
    href: `/projects/${p.slug}`,
    icon: <ArrowUpRightIcon size={16} />,
  })),
]

export function CommandMenu() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault()
      setOpen((prev) => !prev)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  function handleSelect(item: CommandItem) {
    setOpen(false)
    if (item.external) {
      window.open(item.href, "_blank", "noopener,noreferrer")
    } else if (item.href.startsWith("/#")) {
      window.location.href = item.href
    } else {
      navigate({ to: item.href })
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-md border border-border px-2 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="sm:hidden">Menu</span>
        <kbd className="hidden font-sans text-[10px] sm:inline">&#8984;K</kbd>
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent showCloseButton={false} className="top-[20%] translate-y-0 gap-0 p-0">
          <DialogTitle className="sr-only">Command menu</DialogTitle>
          <nav className="flex flex-col py-2">
            {commands.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleSelect(item)}
                className="flex items-center gap-3 px-4 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <span className="text-muted-foreground">{item.icon}</span>
                {item.label}
                {item.external && <ArrowUpRightIcon size={10} className="ml-auto" />}
              </button>
            ))}
          </nav>
        </DialogContent>
      </Dialog>
    </>
  )
}
