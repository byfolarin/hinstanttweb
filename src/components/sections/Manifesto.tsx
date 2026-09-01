import { useEffect, useRef } from "react"
import seatedProfessional from "../../assets/seated-professional-tablet.png"

export function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null)
  const overlapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const overlap = overlapRef.current
    if (!section || !overlap) return

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

      overlap.style.transform = `translate3d(0, ${-32 * eased}%, 0) scale(${1 + eased * 0.04})`
      overlap.style.opacity = `${1 - eased * 0.94}`
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
    <section
      ref={sectionRef}
      className="relative h-[82svh] min-h-[620px] w-full overflow-hidden bg-[#111927]"
    >
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

      <div className="absolute left-8 top-1/2 z-10 w-[min(462px,46vw)] -translate-y-1/2 rounded-[32px] border border-white/20 bg-[#111927]/78 p-3 shadow-[0_30px_100px_rgba(17,25,39,.42)] backdrop-blur-xl sm:left-12 sm:p-4 lg:left-16 max-md:bottom-5 max-md:left-5 max-md:right-5 max-md:top-auto max-md:w-auto max-md:translate-y-0">
        <div className="overflow-hidden rounded-[22px] border border-white/70 bg-[#fffaf2] text-[#111927]">
          <div className="flex items-center justify-between border-b border-[#111927]/10 px-5 py-4">
            <div className="flex items-center gap-2.5">
              <span className="grid size-7 place-items-center rounded-full bg-[#111927] text-[11px] text-white">H</span>
              <span className="text-sm font-semibold">Hinstantt Agent</span>
            </div>
            <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[.1em] text-emerald-700">
              <i className="size-1.5 rounded-full bg-emerald-500" />Live
            </span>
          </div>

          <div className="p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[.12em] text-[#111927]/45">Ask Hinstantt</p>
            <p className="mt-2 font-display text-[clamp(1.15rem,1.7vw,1.55rem)] leading-tight tracking-[-.035em]">
              Pay approved vendors and reconcile every transaction.
            </p>

            <div className="mt-5 space-y-2">
              {["Reviewing 18 approved invoices", "Selecting the fastest local rails", "Preparing ledger entries"].map((task, index) => (
                <div key={task} className="flex items-center gap-3 rounded-xl border border-[#111927]/8 bg-white/75 px-3 py-2.5 text-xs">
                  <span className={`grid size-5 shrink-0 place-items-center rounded-full text-[9px] font-bold ${index < 2 ? "bg-[#111927] text-white" : "bg-[#111927]/8 text-[#111927]/55"}`}>
                    {index < 2 ? "✓" : "03"}
                  </span>
                  <span className={index === 2 ? "text-[#111927]/55" : ""}>{task}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl bg-[#111927] px-4 py-3 text-white">
              <span>
                <small className="block text-[9px] uppercase tracking-[.12em] text-white/50">Ready to move</small>
                <strong className="mt-0.5 block text-sm">$48,240.00</strong>
              </span>
              <button type="button" className="rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-[#111927]">Review plan</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
