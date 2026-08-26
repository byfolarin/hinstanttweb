import type { ReactNode } from "react"
import { cn } from "../../lib/cn"

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] opacity-60",
        className,
      )}
    >
      {children}
    </p>
  )
}
