import { useEffect, useRef, useState } from "react"

const products = [
  { number: "01", label: "PAYMENTS", title: "Money that moves", body: "Send, receive, and settle money from one operating account.", points: ["Local rails selected automatically", "Multi-currency balances in one view", "Approvals built into every transfer"], visual: "payments" },
  { number: "02", label: "CORPORATE CARDS", title: "Control before the spend", body: "Issue cards in seconds and enforce limits, merchants, and policies at authorization.", points: ["Virtual and physical issuance", "Live limits by person or team", "Receipts captured and coded by AI"], visual: "cards" },
  { number: "03", label: "ACCOUNTING", title: "A ledger that keeps up", body: "Every transaction is classified, matched, and reconciled while the business is still moving.", points: ["AI-classified transactions", "Continuous three-way matching", "Real-time ERP synchronization"], visual: "accounting" },
  { number: "04", label: "REPORTING", title: "Answers, not exports", body: "See cash, spend, revenue, and risk across every entity without rebuilding the report.", points: ["Live multi-entity reporting", "Automatic anomaly detection", "Board-ready views on demand"], visual: "reporting" },
] as const

function ProductVisual({ type }: { type: (typeof products)[number]["visual"] }) {
  const images: Record<string, string> = {
    payments: "https://www.usemultiplier.com/wp-content/uploads/2025/12/img-1.webp",
    cards: "https://www.usemultiplier.com/wp-content/uploads/2025/12/img-2.webp",
    accounting: "https://www.usemultiplier.com/wp-content/uploads/2025/12/img-4.webp",
    reporting: "https://www.usemultiplier.com/wp-content/uploads/2025/12/img-3.webp",
  }

  return (
    <figure className="product-photo">
      <img src={images[type]} alt={`${type} at Hinstantt`} className="h-full w-full object-cover" />
    </figure>
  )
}

export function Pillars() {
  const [active, setActive] = useState(1)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const travel = Math.max(rect.height - window.innerHeight, 1)
      const progress = Math.min(1, Math.max(0, -rect.top / travel))
      const nextScene = Math.min(3, 1 + progress * 2.25)
      setActive(Math.min(3, Math.round(nextScene)))
    }
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update) }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const goTo = (index: number) => {
    if (!sectionRef.current) return
    const top = window.scrollY + sectionRef.current.getBoundingClientRect().top
    const travel = sectionRef.current.offsetHeight - window.innerHeight
    window.scrollTo({ top: top + (Math.max(1, index) - 1) / 2.25 * travel, behavior: "smooth" })
  }

  const product = products[active]

  return (
    <section id="product" className="bg-[#111927] text-white">
      <div className="mx-auto w-full max-w-[1240px] px-4 pb-20 sm:px-6 sm:pb-28">
        <div ref={sectionRef} className="relative h-[200vh] lg:grid lg:grid-cols-[226px_minmax(0,1fr)] lg:gap-[58px]">
          <nav className="z-30 mb-4 grid grid-cols-2 overflow-hidden border border-white/14 bg-[#111927] sm:grid-cols-4 lg:sticky lg:top-24 lg:mb-0 lg:flex lg:h-fit lg:flex-col" aria-label="Product chapters">
            {products.map((item, index) => <button type="button" key={item.label} onClick={() => goTo(index)} className={`flex min-h-11 items-center gap-3 border-white/14 p-2.5 text-left text-[.68rem] font-semibold tracking-[.1em] transition-colors lg:w-full lg:border-b lg:last:border-b-0 ${active === index ? "border-[#8da6ff] bg-white/[.05] text-white" : "text-white/40 hover:text-white/70"}`}><span className={`grid size-6 shrink-0 place-items-center rounded-sm text-[10px] ${active === index ? "bg-[#637cf2] text-white" : "bg-white/[.04] text-white/55"}`}>{item.number}</span><span>{item.label}</span></button>)}
          </nav>

          <div className="lg:sticky lg:top-24 lg:h-fit">
            <article key={product.label} className="product-scene-enter overflow-hidden border border-white/14 bg-[#0d1523] lg:flex lg:min-h-[430px] lg:items-stretch">
              <ProductVisual type={product.visual} />
              <div className="flex min-w-0 flex-1 flex-col px-5 py-6 lg:px-7 lg:py-8">
                <div className="grid size-7 place-items-center rounded-sm bg-white/[.08] text-xs text-white/65">{product.number}</div>
                <h3 className="mt-3 font-display text-[clamp(1.6rem,2.4vw,2.2rem)] leading-tight tracking-[-.035em]">{product.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/64">{product.body}</p>
                <ul className="relative mt-8 space-y-5 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-[3px] before:rounded-full before:bg-white/20">
                  {product.points.map((point) => <li className="relative flex gap-4 pl-0 text-sm leading-snug text-white/80" key={point}><span className="relative z-10 mt-0.5 h-4 w-[3px] shrink-0 rounded-full bg-white/60" />{point}</li>)}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
