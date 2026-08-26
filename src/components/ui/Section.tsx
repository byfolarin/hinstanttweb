import type { ReactNode } from "react"
import { cn } from "../../lib/cn"
import { Container } from "./Container"

type Tone = "cream" | "creamDeep" | "navy" | "white"

const tones: Record<Tone, string> = {
  cream: "bg-cream text-ink",
  creamDeep: "bg-cream-deep text-ink",
  navy: "bg-navy text-white",
  white: "bg-white text-ink",
}

export function Section({
  children,
  tone = "cream",
  id,
  className,
  bleed = false,
}: {
  children: ReactNode
  tone?: Tone
  id?: string
  className?: string
  /** Skip the inner Container when the section manages its own width. */
  bleed?: boolean
}) {
  return (
    <section
      id={id}
      className={cn("py-20 sm:py-28 lg:py-32", tones[tone], className)}
    >
      {bleed ? children : <Container>{children}</Container>}
    </section>
  )
}
