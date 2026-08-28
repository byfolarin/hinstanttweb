import { useId, useState, type ReactNode } from "react"
import { cn } from "../../lib/cn"

export type Tab = {
  label: string
  panel: ReactNode
}

/** Roving-tabindex tab list following the WAI-ARIA tabs pattern. */
export function Tabs({
  tabs,
  tone = "light",
  className,
  onChange,
}: {
  tabs: Tab[]
  tone?: "light" | "dark"
  className?: string
  onChange?: (index: number) => void
}) {
  const [active, setActive] = useState(0)
  const id = useId()
  const dark = tone === "dark"

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return
    e.preventDefault()
    const next =
      e.key === "ArrowRight"
        ? (active + 1) % tabs.length
        : (active - 1 + tabs.length) % tabs.length
    setActive(next)
    onChange?.(next)
    document.getElementById(`${id}-tab-${next}`)?.focus()
  }

  return (
    <div className={className}>
      <div
        role="tablist"
        onKeyDown={onKeyDown}
        className={cn(
          "inline-flex max-w-full flex-wrap gap-2 rounded-full p-1.5",
          dark ? "bg-white/10" : "bg-ink/5",
        )}
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            id={`${id}-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls={`${id}-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => {
              setActive(i)
              onChange?.(i)
            }}
            className={cn(
              "rounded-full px-5 py-2.5 text-[0.9rem] font-medium transition-colors duration-200",
              active === i
                ? dark
                  ? "bg-white text-navy"
                  : "bg-navy text-white"
                : "opacity-65 hover:opacity-100",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.label}
          id={`${id}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${i}`}
          hidden={active !== i}
          className="pt-10"
        >
          {tab.panel}
        </div>
      ))}
    </div>
  )
}
