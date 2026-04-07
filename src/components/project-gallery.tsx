import type { ProjectImage } from "@/data/projects"
import { cn } from "@/lib/utils"

type ProjectGalleryProps = {
  images: Array<ProjectImage>
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <div className="grid auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-3">
      {images.map((image) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className={cn(
            "h-full rounded-lg border border-border/40 object-cover object-top",
            image.size === "mobile" && "max-w-48 justify-self-center",
          )}
        />
      ))}
    </div>
  )
}
