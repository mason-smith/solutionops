import { ProjectCard } from "@/components/sections/project-card"
import { projects } from "@/data/projects"

export function ProjectGrid() {
  return (
    <section id="work" className="pb-24">
      <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">Selected Work</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
