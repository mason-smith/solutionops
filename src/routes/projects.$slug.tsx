import { ArrowLeftIcon, ArrowUpRightIcon } from "@phosphor-icons/react"
import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectPage,
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug)
    if (!project) throw notFound()
    return { project }
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.name} | SolutionOps` },
      { name: "description", content: loaderData?.project.tagline },
    ],
  }),
})

function ProjectPage() {
  const { project } = Route.useLoaderData()

  return (
    <div className="py-16 sm:py-24">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeftIcon size={14} />
        Back
      </Link>

      <div className="mt-12 space-y-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-medium tracking-tight">{project.name}</h1>
            <Badge variant={project.status === "live" ? "secondary" : "outline"}>
              {project.status === "live" ? "Live" : "In development"}
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground">{project.tagline}</p>
        </div>

        <p className="max-w-2xl leading-relaxed text-muted-foreground">{project.description}</p>

        <div className="space-y-3 border-t border-border/40 pt-8">
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "default" }), "gap-1.5")}
            >
              Visit site
              <ArrowUpRightIcon size={14} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "gap-1.5")}
            >
              View source
              <ArrowUpRightIcon size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
