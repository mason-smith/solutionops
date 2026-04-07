import { ProjectCard } from "@/components/sections/project-card"
import { projects } from "@/data/projects"

export function ProjectGrid() {
  const [featured, ...rest] = projects

  return (
    <section id="work" className="pb-24">
      <h2 className="mb-8 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
        What I've been building
      </h2>
      <div className="space-y-4">
        {featured && <ProjectCard project={featured} featured />}
        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
