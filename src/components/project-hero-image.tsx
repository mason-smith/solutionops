import { ElevatedSurface } from "@/components/screenshot-frame"
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
    <ElevatedSurface className={cn(className)}>
      <img src={src} alt={hero.alt} loading="lazy" className="w-full object-cover object-top" />
    </ElevatedSurface>
  )
}
