import { useTheme } from "@/components/theme-provider"
import type { ProjectHero } from "@/data/projects"
import { cn } from "@/lib/utils"

type ProjectHeroImageProps = {
  hero: ProjectHero
  className?: string
}

export function ProjectHeroImage({ hero, className }: ProjectHeroImageProps) {
  const { theme } = useTheme()
  const resolved = theme === "system" ? "dark" : theme
  const src = resolved === "dark" ? hero.dark : hero.light

  return (
    <div className={cn("overflow-hidden rounded-lg border border-border/40", className)}>
      <img src={src} alt={hero.alt} loading="lazy" className="aspect-16/10 w-full object-cover object-top" />
    </div>
  )
}
