import { createFileRoute } from "@tanstack/react-router"
import { Hero } from "@/components/sections/hero"
import { ProjectList } from "@/components/sections/project-list"

export const Route = createFileRoute("/")({ component: HomePage })

function HomePage() {
  return (
    <>
      <Hero />
      <ProjectList />
    </>
  )
}
