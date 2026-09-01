import { useEffect, useRef, useState } from "react"
import seatedProfessional from "../../assets/seated-professional-tablet.png"
import sendIcon from "../../assets/agent-ui/send-icon.svg"
import sparkleIcon from "../../assets/agent-ui/sparkle-icon.svg"

const agentActions = [
  { label: "Email Responder", prompt: "Reply to the refund request from Sarah", response: "Done — reply sent and logged." },
  { label: "Customer support agent", prompt: "Resolve the failed payment ticket", response: "Ticket resolved and closed." },
  { label: "Sales Lead Qualifier", prompt: "Qualify the lead from our website", response: "Lead qualified — routed to sales." },
  { label: "Data Analysis Agent", prompt: "Summarize this month's spend by category", response: "Summary ready — 3 categories over budget." },
]

export function Manifesto() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const overlapRef = useRef<HTMLDivElement>(null)
  const darkOverlayRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [cardVisible, setCardVisible] = useState(false)
  const [activeAction, setActiveAction] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [mode, setMode] = useState<"typing" | "responding">("typing")

  useEffect(() => {
    const card = cardRef.current
    if (!card || typeof IntersectionObserver === "undefined") {
      setCardVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!cardVisible) return
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches) return
    let cancelled = false
    const sleep = (ms: number) => new Promise<void>((resolve) => {
      window.setTimeout(() => { if (!cancelled) resolve() }, ms)
    })

    const run = async () => {
      let index = 0
      while (!cancelled) {
        const { prompt, response } = agentActions[index]
        setActiveAction(index)
        setMode("typing")
        setTypedText("")
        for (let i = 1; i <= prompt.length && !cancelled; i++) {
          setTypedText(prompt.slice(0, i))
          await sleep(28)
        }
        if (cancelled) break
        await sleep(500)
        if (cancelled) break
        setMode("responding")
        setTypedText(response)
        await sleep(1900)
        if (cancelled) break
        index = (index + 1) % agentActions.length
      }
    }

    run()
    return () => { cancelled = true }
  }, [cardVisible])

  useEffect(() => {
    const section = sectionRef.current
    const overlap = overlapRef.current
    const darkOverlay = darkOverlayRef.current
    if (!section || !overlap || !darkOverlay) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame = 0

    const update = () => {
      frame = 0
      const rect = section.getBoundingClientRect()
      const distance = window.innerHeight * 0.68
      const progress = reducedMotion.matches
        ? 1
        : Math.min(1, Math.max(0, (window.innerHeight - rect.top) / distance))
      const eased = progress * progress * (3 - 2 * progress)
      const stackProgress = Math.min(1, Math.max(0, -rect.top / window.innerHeight))

      overlap.style.transform = `translate3d(0, ${-32 * eased}%, 0) scale(${1 + eased * 0.04})`
      overlap.style.opacity = `${1 - eased * 0.94}`
      darkOverlay.style.opacity = `${stackProgress * 0.34}`
    }

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", requestUpdate, { passive: true })
    window.addEventListener("resize", requestUpdate)
    reducedMotion.addEventListener("change", requestUpdate)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", requestUpdate)
      window.removeEventListener("resize", requestUpdate)
      reducedMotion.removeEventListener("change", requestUpdate)
    }
  }, [])

  return (
    <div ref={sectionRef} className="relative h-[200svh] bg-[#111927]">
      <section className="sticky top-0 h-[100svh] min-h-[620px] w-full overflow-hidden bg-[#111927]">
      <img
        src={seatedProfessional}
        alt="A professional seated and holding a tablet"
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111927]/55 via-[#111927]/5 to-transparent" />

      <div
        ref={overlapRef}
        aria-hidden="true"
        className="manifesto-overlap-field pointer-events-none absolute inset-x-0 top-0 z-[1] h-[68%] origin-top will-change-[transform,opacity]"
      />

      <div
        ref={darkOverlayRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 bg-black opacity-0 will-change-[opacity]"
      />

      <div
        ref={cardRef}
        className={`absolute left-8 top-1/2 z-10 w-[min(462px,46vw)] -translate-y-1/2 rounded-[32px] border border-white/20 bg-[#111927]/78 p-3 shadow-[0_30px_100px_rgba(17,25,39,.42)] backdrop-blur-xl transition-[opacity,transform] duration-700 ease-[var(--ease-out-soft)] sm:left-12 sm:p-4 lg:left-16 max-md:bottom-5 max-md:left-5 max-md:right-5 max-md:top-auto max-md:w-auto max-md:translate-y-0 ${cardVisible ? "opacity-100 max-md:translate-y-0 md:translate-y-[-50%]" : "opacity-0 max-md:translate-y-6 md:translate-y-[-46%]"}`}
      >
        <div className="overflow-hidden rounded-[22px] border border-white/70 bg-white p-5 text-[#111927]">
          <p className="text-[13px] font-medium uppercase">Automate tasks with AI agent</p>

          <div className="relative mt-4 min-h-[62px] rounded-[4px] border border-[#111927]/10 bg-white p-4">
            <p className="flex items-start gap-2 text-sm leading-snug">
              {mode === "responding" && <img src={sparkleIcon} alt="" className="mt-0.5 size-4 shrink-0" />}
              <span className={mode === "responding" ? "font-medium text-[#111927]" : "text-[#111927]/70"}>
                {typedText || "How can I help you today?"}
                {mode === "typing" && <span aria-hidden="true" className="ml-0.5 inline-block h-[1em] w-[2px] -translate-y-[1px] animate-pulse bg-[#111927]/60 align-middle" />}
              </span>
            </p>
            <span className="relative mt-4 flex size-8 items-center justify-center">
              <span aria-hidden="true" className={`absolute inset-0 rounded-full bg-[#111927]/25 transition-opacity duration-300 ${mode === "responding" ? "animate-ping opacity-100" : "opacity-0"}`} />
              <img src={sendIcon} alt="" className={`relative size-full transition-transform duration-300 ${mode === "responding" ? "scale-90" : "scale-100"}`} />
            </span>
          </div>

          <p className="mt-4 text-[11px] font-medium uppercase tracking-[-.28px] text-[#111927]/50">Actions</p>
          <div className="mt-2.5 space-y-2.5">
            {agentActions.map((action, index) => {
              const highlighted = activeAction === index && mode === "responding"
              return (
                <div
                  key={action.label}
                  style={{ transitionDelay: cardVisible ? `${300 + index * 90}ms` : "0ms" }}
                  className={`flex items-center gap-3 rounded-[4px] border p-2 transition-all duration-500 ease-[var(--ease-out-soft)] ${cardVisible ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"} ${highlighted ? "border-[#111927]/30 bg-[#f2f0eb] shadow-[0_6px_16px_rgba(17,25,39,.1)]" : "border-[#e6e6e6] bg-[#fafafa]"}`}
                >
                  <img src={sparkleIcon} alt="" className={`size-5 shrink-0 transition-transform duration-500 ${highlighted ? "scale-110" : "scale-100"}`} />
                  <p className="text-xs font-medium uppercase tracking-[-.12px]">{action.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}
