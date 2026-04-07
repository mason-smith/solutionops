import type { ProjectImage } from "@/data/projects"
import { cn } from "@/lib/utils"

type ProjectGalleryProps = {
  images: Array<ProjectImage>
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const desktopImages = images.filter((i) => i.size === "desktop")
  const mobileImages = images.filter((i) => i.size === "mobile")

  return (
    <div className="space-y-3">
      {desktopImages.length > 0 && (
        <div className="flex gap-3">
          {desktopImages.map((image) => (
            <div key={image.src} className="min-w-0 flex-1 overflow-hidden rounded-lg border border-border/40">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="aspect-16/10 w-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      )}
      {mobileImages.length > 0 && (
        <div className="flex justify-center gap-3">
          {mobileImages.map((image) => (
            <div
              key={image.src}
              className={cn("w-32 shrink-0 overflow-hidden rounded-lg border border-border/40 sm:w-40")}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="aspect-750/1624 w-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
