import { createFileRoute } from "@tanstack/react-router"
import { Hero } from "@/components/sections/hero"
import { ProjectGrid } from "@/components/sections/project-grid"

export const Route = createFileRoute("/")({ component: HomePage })

function HomePage() {
  return (
    <>
      <Hero />
      <ProjectGrid />
    </>
  )
}
