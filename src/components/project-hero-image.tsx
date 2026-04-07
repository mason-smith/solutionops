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
    <img
      src={src}
      alt={hero.alt}
      loading="lazy"
      className={cn("w-full rounded-lg border border-border/40 object-cover", className)}
    />
  )
}
