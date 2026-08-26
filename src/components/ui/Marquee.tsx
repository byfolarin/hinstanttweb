import type { ReactNode } from "react"
import { cn } from "../../lib/cn"

/**
 * Seamless horizontal scroller. Renders the track twice and translates by
 * exactly -50%, so the loop point is invisible regardless of content width.
 */
export function Marquee({
  children,
  speed = 40,
  reverse = false,
  className,
}: {
  children: ReactNode
  /** Seconds for one full pass. */
  speed?: number
  reverse?: boolean
  className?: string
}) {
  return (
    <div className={cn("marquee-mask group relative overflow-hidden", className)}>
      <div
        className="flex w-max animate-[marquee_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
      <style>{`@keyframes marquee { to { transform: translateX(-50%) } }`}</style>
    </div>
  )
}
