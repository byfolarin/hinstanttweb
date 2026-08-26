import { useEffect, useState } from "react"
import { cn } from "../../lib/cn"

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function Reel({ digit, index }: { digit: string; index: number }) {
  if (!/\d/.test(digit)) {
    return <span className="tabular-nums">{digit}</span>
  }
  return (
    <span className="relative inline-block h-[1em] w-[0.62em] overflow-hidden align-bottom">
      <span
        className="absolute inset-x-0 top-0 flex flex-col transition-transform duration-[900ms] ease-[var(--ease-out-soft)] motion-reduce:transition-none"
        style={{
          transform: `translateY(-${Number(digit) * 10}%)`,
          transitionDelay: `${index * 45}ms`,
        }}
      >
        {DIGITS.map((d) => (
          <span key={d} className="flex h-[1em] items-center justify-center tabular-nums">
            {d}
          </span>
        ))}
      </span>
    </span>
  )
}

/**
 * Slot-machine counter that climbs toward `value` while mounted — used for the
 * live "wages running on the platform" ticker.
 */
export function Odometer({
  value,
  prefix = "",
  className,
  incrementPerTick = 0,
  tickMs = 2000,
}: {
  value: number
  prefix?: string
  className?: string
  /** Adds this much on every tick, so the number visibly climbs. */
  incrementPerTick?: number
  tickMs?: number
}) {
  // Start low so the reels visibly spin up to the real figure on first paint.
  const [current, setCurrent] = useState(() => Math.floor(value * 0.94))

  useEffect(() => {
    const settle = window.setTimeout(() => setCurrent(value), 120)
    return () => window.clearTimeout(settle)
  }, [value])

  useEffect(() => {
    if (!incrementPerTick) return
    const id = window.setInterval(
      () => setCurrent((n) => n + incrementPerTick),
      tickMs,
    )
    return () => window.clearInterval(id)
  }, [incrementPerTick, tickMs])

  const text = current.toLocaleString("en-US")

  return (
    <span
      className={cn("inline-flex items-baseline font-display", className)}
      aria-label={`${prefix}${text}`}
      role="status"
    >
      <span aria-hidden="true">{prefix}</span>
      <span aria-hidden="true" className="inline-flex">
        {text.split("").map((ch, i) => (
          <Reel key={`${i}-${ch}`} digit={ch} index={i} />
        ))}
      </span>
    </span>
  )
}
