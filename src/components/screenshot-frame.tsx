import { cn } from "@/lib/utils"

type ScreenshotFrameProps = {
  children: React.ReactNode
  className?: string
}

export function ElevatedSurface({ children, className }: ScreenshotFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg bg-card shadow-md ring-1 ring-foreground/5 dark:shadow-none dark:ring-foreground/10",
        className,
      )}
    >
      {children}
    </div>
  )
}
