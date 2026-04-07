import { ArrowRightIcon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Project } from "@/data/projects"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to="/projects/$slug" params={{ slug: project.slug }} className="block no-underline">
      <Card className="h-full transition-all hover:bg-accent/50">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.tagline}</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={project.status === "live" ? "secondary" : "outline"}>
                {project.status === "live" ? "Live" : "In development"}
              </Badge>
              <ArrowRightIcon
                size={16}
                className="text-muted-foreground transition-transform group-hover/card:translate-x-0.5"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
            {project.stack.length > 4 && <Badge variant="outline">+{project.stack.length - 4}</Badge>}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
