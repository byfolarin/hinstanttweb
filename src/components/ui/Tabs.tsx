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

  if (dark) {
    return (
      <div className={cn("w-full border-t border-white/18", className)}>
        {tabs.map((tab, i) => {
          const expanded = active === i
          return (
            <div key={tab.label} className="border-b border-white/18">
              <button
                id={`${id}-tab-${i}`}
                type="button"
                aria-expanded={expanded}
                aria-controls={`${id}-panel-${i}`}
                onClick={() => {
                  setActive(i)
                  onChange?.(i)
                }}
                className={cn(
                  "group flex w-full items-center py-4 text-left transition-colors duration-200 sm:py-5",
                  expanded ? "text-white" : "text-white/42 hover:text-white/75",
                )}
              >
                <span className={cn("w-10 text-[10px] font-semibold tracking-[.14em] transition-colors", expanded ? "text-[#918df6]" : "text-white/25")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[clamp(1rem,1.4vw,1.2rem)] font-medium tracking-[-.025em]">{tab.label}</span>
                <span className={cn("ml-auto text-xl transition-[transform,color] duration-300", expanded ? "rotate-45 text-[#918df6]" : "text-white/25 group-hover:text-white/55")} aria-hidden="true">+</span>
              </button>

              <div
                id={`${id}-panel-${i}`}
                role="region"
                aria-labelledby={`${id}-tab-${i}`}
                className={cn(
                  "grid transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-out-soft)]",
                  expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <div className="pb-10 pl-10 pt-2">{tab.panel}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className={className}>
      <div
        role="tablist"
        onKeyDown={onKeyDown}
        className={cn(
          "flex max-w-full",
          "inline-flex flex-wrap gap-2 rounded-full bg-ink/5 p-1.5",
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
                ? "bg-navy text-white"
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
