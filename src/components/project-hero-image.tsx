import { ElevatedSurface } from "@/components/screenshot-frame"
import type { ProjectHero } from "@/data/projects"
import { cn } from "@/lib/utils"

type ProjectHeroImageProps = {
  hero: ProjectHero
  eager?: boolean
  className?: string
}

export function ProjectHeroImage({ hero, eager = false, className }: ProjectHeroImageProps) {
  return (
    <ElevatedSurface className={cn(className)}>
      <img
        src={hero.dark}
        alt={hero.alt}
        width={2888}
        height={1798}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="hidden w-full object-cover object-top dark:block"
      />
      <img
        src={hero.light}
        alt={hero.alt}
        width={2888}
        height={1798}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="block w-full object-cover object-top dark:hidden"
      />
    </ElevatedSurface>
  )
}
