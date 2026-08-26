import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "../../lib/cn"

/**
 * Fades and lifts its children into place the first time they scroll into view.
 * Falls back to visible-immediately when IntersectionObserver is unavailable.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode
  /** Stagger, in milliseconds. */
  delay?: number
  className?: string
  as?: "div" | "li" | "span"
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === "undefined") {
      setShown(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    )
    observer.observe(node)

    // Failsafe: observers are suspended while a tab is hidden, and a missed
    // callback would leave the section permanently blank. Reveal regardless.
    const failsafe = window.setTimeout(() => {
      setShown(true)
      observer.disconnect()
    }, 2500)

    return () => {
      window.clearTimeout(failsafe)
      observer.disconnect()
    }
  }, [])

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-[opacity,transform] duration-[700ms] ease-[var(--ease-out-soft)] motion-reduce:transition-none",
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </Tag>
  )
}
