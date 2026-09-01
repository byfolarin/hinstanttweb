import { useEffect, useRef } from "react"
import { Section } from "../ui/Section"
import { Reveal } from "../ui/Reveal"
import { Accordion } from "../ui/Accordion"
import { trust } from "../../content/site"

export function Trust() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return
    let frame = 0

    const update = () => {
      frame = 0
      const progress = Math.min(1, Math.max(0, -wrapper.getBoundingClientRect().top / window.innerHeight))
      wrapper.style.setProperty("--stack-shade", `${progress * 0.3}`)
    }
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", requestUpdate, { passive: true })
    window.addEventListener("resize", requestUpdate)
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", requestUpdate)
      window.removeEventListener("resize", requestUpdate)
    }
  }, [])

  return (
    <div ref={wrapperRef} className="relative z-30 -mt-[100svh] h-[200svh] bg-cream [--stack-shade:0]">
      <Section
        tone="cream"
        id="why-us"
        className="sticky top-0 min-h-[100svh] overflow-hidden after:pointer-events-none after:absolute after:inset-0 after:z-20 after:bg-black after:opacity-[var(--stack-shade)]"
      >
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <h2 className="text-h2 text-balance lg:sticky lg:top-28 lg:pt-5">{trust.heading}</h2>
          </Reveal>
          <Reveal delay={100}>
            <Accordion
              items={trust.items.map((item) => ({
                title: item.title,
                body: <p className="max-w-lg">{item.body}</p>,
              }))}
            />
          </Reveal>
        </div>
      </Section>
    </div>
  )
}
