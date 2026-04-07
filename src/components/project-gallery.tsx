import type { ProjectImage } from "@/data/projects"

type ProjectGalleryProps = {
  images: [ProjectImage, ProjectImage, ProjectImage]
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <div className="flex items-end justify-center gap-3">
      <div className="w-36 -rotate-6 overflow-hidden rounded-2xl shadow-md ring-1 ring-foreground/10 sm:w-44">
        <img src={images[0].src} alt={images[0].alt} loading="lazy" className="w-full" />
      </div>
      <div className="z-10 w-40 overflow-hidden rounded-2xl shadow-md ring-1 ring-foreground/10 sm:w-48">
        <img src={images[1].src} alt={images[1].alt} loading="lazy" className="w-full" />
      </div>
      <div className="w-36 rotate-6 overflow-hidden rounded-2xl shadow-md ring-1 ring-foreground/10 sm:w-44">
        <img src={images[2].src} alt={images[2].alt} loading="lazy" className="w-full" />
      </div>
    </div>
  )
}
