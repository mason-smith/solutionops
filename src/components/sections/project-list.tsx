import { ArrowRightIcon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"
import { ProjectHeroImage } from "@/components/project-hero-image"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/data/projects"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"

export function ProjectList() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="pb-16">
      <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
        What I've been building
      </h2>

      {featured.length > 0 && (
        <div className="space-y-8">
          {featured.map((project, i) => (
            <FeaturedRow key={project.slug} project={project} imageFirst={i % 2 === 0} />
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <div className={cn("divide-y divide-border/40", featured.length > 0 && "mt-8 border-t border-border/40")}>
          {rest.map((project) => (
            <IndexRow key={project.slug} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}

function FeaturedRow({ project, imageFirst }: { project: Project; imageFirst: boolean }) {
  return (
    <Link to="/projects/$slug" params={{ slug: project.slug }} className="group block no-underline">
      <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-center", !imageFirst && "sm:flex-row-reverse")}>
        {project.images?.hero && (
          <div className="sm:w-1/2">
            <ProjectHeroImage hero={project.images.hero} />
          </div>
        )}
        <div className="space-y-2 sm:w-1/2">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-medium tracking-tight">{project.name}</h3>
            <Badge variant={project.status === "live" ? "secondary" : "outline"}>
              {project.status === "live" ? "Live" : "In development"}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{project.tagline}</p>
        </div>
      </div>
    </Link>
  )
}

function IndexRow({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group flex items-baseline justify-between gap-4 py-4 no-underline"
    >
      <div className="flex items-baseline gap-3">
        <span className="text-lg font-medium tracking-tight group-hover:text-foreground">{project.name}</span>
        <span className="hidden text-sm text-muted-foreground sm:inline">{project.tagline}</span>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <Badge variant={project.status === "live" ? "secondary" : "outline"} className="hidden sm:inline-flex">
          {project.status === "live" ? "Live" : "In development"}
        </Badge>
        <ArrowRightIcon size={14} className="text-muted-foreground transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  )
}
