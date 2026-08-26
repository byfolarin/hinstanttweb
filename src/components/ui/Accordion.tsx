import { useId, useState, type ReactNode } from "react"
import { cn } from "../../lib/cn"

export type AccordionItem = {
  title: string
  body: ReactNode
}

/** Single-open disclosure list. Keyboard- and screen-reader-friendly. */
export function Accordion({
  items,
  defaultOpen = 0,
  tone = "light",
  className,
}: {
  items: AccordionItem[]
  defaultOpen?: number
  tone?: "light" | "dark"
  className?: string
}) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  const dark = tone === "dark"

  return (
    <div className={cn("divide-y", dark ? "divide-white/15" : "divide-line", className)}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.title}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-panel-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={cn(
                  "flex w-full items-center justify-between gap-6 py-5 text-left text-h3 transition-opacity",
                  !isOpen && "opacity-60 hover:opacity-100",
                )}
              >
                <span>{item.title}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid size-8 shrink-0 place-items-center rounded-full text-lg leading-none transition-transform duration-300 ease-[var(--ease-out-soft)]",
                    dark ? "bg-white/10" : "bg-ink/5",
                    isOpen && "rotate-45",
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={`${id}-panel-${i}`}
              hidden={!isOpen}
              className="grid pb-6 text-lead opacity-75"
            >
              {item.body}
            </div>
          </div>
        )
      })}
    </div>
  )
}
