import { useEffect, useRef, useState } from "react"
import { logoWall } from "../../content/site"

const images = [
  { title: "Corporate Cards", description: "Issue virtual and physical cards with real-time limits and controls.", src: "https://www.usemultiplier.com/wp-content/uploads/2025/12/img-1.webp", className: "-top-14 left-[14%]", speed: -120 },
  { title: "Global Payments", description: "Send and receive money across 60+ markets from one account.", src: "https://www.usemultiplier.com/wp-content/uploads/2025/12/img-2.webp", className: "-top-20 left-[45%]", speed: 80 },
  { title: "Treasury", description: "Manage liquidity, currencies, yield, and cash positions in real time.", src: "https://www.usemultiplier.com/wp-content/uploads/2025/12/img-3.webp", className: "-top-8 right-[11%]", speed: -70 },
  { title: "Accounting", description: "Reconcile transactions and keep the ledger continuously up to date.", src: "https://www.usemultiplier.com/wp-content/uploads/2025/12/img-4.webp", className: "bottom-[2%] left-[18%]", speed: 115 },
  { title: "Stablecoin Ramp", description: "Move between fiat and stablecoins through compliant global rails.", src: "https://www.usemultiplier.com/wp-content/uploads/2025/12/img-5.webp", className: "bottom-[-2%] right-[8%]", speed: -95 },
  { title: "Expense", description: "Capture receipts, enforce policy, and reimburse teams automatically.", src: "https://www.usemultiplier.com/wp-content/uploads/2025/12/img-2.webp", className: "top-[18%] -left-8", speed: 92 },
  { title: "Procurement", description: "Run requests, approvals, purchase orders, and vendor payments.", src: "https://www.usemultiplier.com/wp-content/uploads/2025/12/img-4.webp", className: "top-[24%] -right-10", speed: -105 },
  { title: "Invoicing & Billing", description: "Create invoices, automate billing, and collect customer payments.", src: "https://www.usemultiplier.com/wp-content/uploads/2025/12/img-1.webp", className: "bottom-[12%] left-[2%]", speed: -78 },
  { title: "Reporting", description: "See spend, revenue, budgets, and cash flow without spreadsheet work.", src: "https://www.usemultiplier.com/wp-content/uploads/2025/12/img-3.webp", className: "bottom-[7%] left-[46%]", speed: 128 },
  { title: "AI Financial Management", description: "Deploy an agent inside every module to handle repetitive work.", src: "https://www.usemultiplier.com/wp-content/uploads/2025/12/img-5.webp", className: "top-[42%] right-[3%]", speed: 68 },
]

const productScenes = [
  { number: "01", label: "PAYMENTS", title: "Money that moves", body: "Send, receive, and settle money across 60+ markets from one operating account.", points: ["Local rails selected automatically", "Multi-currency balances in one view", "Approvals built into every transfer"], imageIndex: 0 },
  { number: "02", label: "CORPORATE CARDS", title: "Control before the spend", body: "Issue cards in seconds and enforce limits, merchants, and policies at authorization.", points: ["Virtual and physical issuance", "Live limits by person or team", "Receipts captured and coded by AI"], imageIndex: 1 },
  { number: "03", label: "ACCOUNTING", title: "A ledger that keeps up", body: "Every transaction is classified, matched, and reconciled while the business is still moving.", points: ["AI-classified transactions", "Continuous three-way matching", "Real-time ERP synchronization"], imageIndex: 3 },
  { number: "04", label: "REPORTING", title: "Answers, not exports", body: "See cash, spend, revenue, and risk across every entity without rebuilding the report.", points: ["Live multi-entity reporting", "Automatic anomaly detection", "Board-ready views on demand"], imageIndex: 2 },
]

export function LogoWall() {
  const [activeProduct, setActiveProduct] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)
  const productCopyRef = useRef<HTMLDivElement>(null)
  const productNavRef = useRef<HTMLDivElement>(null)
  const productHeaderRef = useRef<HTMLDivElement>(null)
  const productCardRef = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      if (!sectionRef.current || !stageRef.current || !copyRef.current || !productCopyRef.current || !productNavRef.current || !productHeaderRef.current || !productCardRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const travel = Math.max(rect.height - window.innerHeight, 1)
      const progress = Math.min(1, Math.max(0, -rect.top / travel))
      const rawSplit = Math.min(1, progress / .38)
      const split = rawSplit * rawSplit * (3 - 2 * rawSplit)
      const rawArrange = Math.min(1, Math.max(0, (progress - .44) / .22))
      const arrange = rawArrange * rawArrange * (3 - 2 * rawArrange)
      const grid = 0
      const rawProduct = Math.min(1, Math.max(0, (progress - .68) / .16))
      const product = rawProduct * rawProduct * (3 - 2 * rawProduct)
      const rawProductReveal = Math.min(1, Math.max(0, (progress - .76) / .12))
      const productReveal = rawProductReveal * rawProductReveal * (3 - 2 * rawProductReveal)
      const productSceneProgress = Math.min(1, Math.max(0, (progress - .68) / .32))
      const activeIndex = Math.min(3, Math.floor(productSceneProgress * 4))
      setActiveProduct(activeIndex)
      const activeImageIndex = productScenes[activeIndex].imageIndex
      const centered = Math.max(0, Math.min(.12, progress - .38))
      const red = Math.round(255 + (17 - 255) * arrange)
      const green = Math.round(255 + (25 - 255) * arrange)
      const blue = Math.round(255 + (39 - 255) * arrange)
      stageRef.current.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
      const productCardRect = productCardRef.current.getBoundingClientRect()

      imageRefs.current.forEach((image, index) => {
        if (!image) return
        const startX = window.innerWidth / 2 - (image.offsetLeft + image.offsetWidth / 2)
        const startY = window.innerHeight / 2 - (image.offsetTop + image.offsetHeight / 2)
        const startScale = Math.min(1, 210 / image.offsetWidth)
        const lineX = ((index + .5) / images.length) * window.innerWidth - (image.offsetLeft + image.offsetWidth / 2)
        const lineY = window.innerHeight * .55 - (image.offsetTop + image.offsetHeight / 2)
        const lineScale = Math.min(1, Math.min(150, window.innerWidth * .085) / image.offsetWidth)
        const column = index % 5
        const row = Math.floor(index / 5)
        const gridX = ((column + .5) / 5) * window.innerWidth - (image.offsetLeft + image.offsetWidth / 2)
        const gridY = window.innerHeight * (.3 + row * .4) - (image.offsetTop + image.offsetHeight / 2)
        const gridScale = Math.min(1.25, Math.min(290, window.innerWidth * .18) / image.offsetWidth)
        const gridResolvedX = startX * (1 - split) + lineX * arrange + (gridX - lineX) * grid
        const gridResolvedY = startY * (1 - split) + centered * images[index].speed * (1 - arrange) + lineY * arrange + (gridY - lineY) * grid
        const splitScale = startScale + (1 - startScale) * split
        const arrangedScale = splitScale + (lineScale - splitScale) * arrange
        const gridResolvedScale = arrangedScale + (gridScale - arrangedScale) * grid
        const isPaymentImage = index === activeImageIndex
        const visualWidth = productCardRect.width * .56
        const productX = productCardRect.left + visualWidth / 2 - (image.offsetLeft + image.offsetWidth / 2)
        const productY = productCardRect.top + productCardRect.height / 2 - (image.offsetTop + image.offsetHeight / 2)
        const productScale = Math.min(visualWidth / image.offsetWidth, productCardRect.height / image.offsetHeight)
        const x = gridResolvedX + (productX - gridResolvedX) * product
        const y = gridResolvedY + (productY - gridResolvedY) * product
        const scale = gridResolvedScale + ((isPaymentImage ? productScale : gridResolvedScale) - gridResolvedScale) * product
        image.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`
        image.style.transition = product > .98 ? "transform 200ms cubic-bezier(.22,1,.36,1), opacity 140ms ease" : "opacity 180ms ease"
        image.style.opacity = `${isPaymentImage ? .82 + split * .18 : (.82 + split * .18) * (1 - product)}`
        image.style.zIndex = isPaymentImage ? "20" : "1"
        image.style.setProperty("--label-opacity", "0")
      })

      const copyProgress = Math.min(1, Math.max(0, (progress - .24) / .28))
      const copyExit = Math.min(1, Math.max(0, (progress - .42) / .16))
      copyRef.current.style.opacity = `${copyProgress * (1 - copyExit)}`
      copyRef.current.style.transform = `translate3d(0, ${(1 - copyProgress) * 34 - copyExit * 70}px, 0)`
      productCopyRef.current.style.opacity = `${productReveal}`
      productCopyRef.current.style.transform = `translate3d(0, ${(1 - productReveal) * 40}px, 0)`
      productNavRef.current.style.opacity = `${productReveal}`
      productNavRef.current.style.transform = `translate3d(0, ${(1 - productReveal) * -18}px, 0)`
      productHeaderRef.current.style.opacity = `${productReveal}`
      productHeaderRef.current.style.transform = `translate3d(0, ${(1 - productReveal) * 24}px, 0)`
      productCardRef.current.style.opacity = `${productReveal}`
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

  return (
    <section ref={sectionRef} id="product" className="relative h-[520vh] bg-white text-ink">
      <div ref={stageRef} className="sticky top-0 h-screen overflow-hidden bg-white will-change-[background-color]">
        {images.map((image, index) => (
          <div key={`${image.src}-${index}`} ref={(node) => { imageRefs.current[index] = node }} className={`second-section-image absolute h-[150px] w-[210px] overflow-hidden rounded-xl will-change-transform sm:h-[170px] sm:w-[240px] ${image.className}`}>
            <img src={image.src} alt="" className="size-full object-cover" />
            <div className="second-section-label absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/90 to-transparent px-4 pb-3 pt-12 text-white"><p className="text-sm font-semibold">{image.title}</p><p className="mt-1 text-[10px] leading-snug text-white/65">{image.description}</p></div>
          </div>
        ))}
        <div className="absolute left-1/2 top-1/2 z-30 w-[min(760px,84vw)] -translate-x-1/2 -translate-y-1/2">
          <div ref={copyRef} className="text-balance text-center opacity-0 will-change-transform">
            <p className="mx-auto max-w-[720px] text-[clamp(1.1rem,1.55vw,1.4rem)] font-medium leading-[1.4] tracking-[-.025em]">{logoWall.introLead}</p>
            <h2 className="mt-9 font-display text-[clamp(2.2rem,4vw,4.25rem)] leading-[1] tracking-[-.05em]">{logoWall.introHeading}</h2>
            <p className="mx-auto mt-6 max-w-[650px] text-[clamp(1rem,1.35vw,1.25rem)] leading-[1.5] text-ink/65">{logoWall.introBody}</p>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 inset-x-0 z-30 mx-auto max-w-[1500px]">
          <div ref={productHeaderRef} className="absolute left-[5%] top-[5%] z-40 w-[90%] text-white opacity-0 will-change-transform">
            <div className="inline-flex items-center gap-2 border border-white px-2 py-1"><span className="size-1.5 bg-white" /><span className="text-[10px] font-semibold tracking-[.14em]">WHY HINSTANTT</span></div>
            <h2 className="mt-4 max-w-[900px] font-display text-[clamp(2.2rem,4vw,4.2rem)] leading-[.92] tracking-[-.055em]">Your back office is complex.<br />Running it shouldn’t be.</h2>
          </div>
          <div ref={productNavRef} className="absolute left-[5%] top-[32%] flex h-[48%] w-[18%] min-w-[190px] flex-col justify-start text-white opacity-0 will-change-transform">
            {productScenes.map((item, index) => <span key={item.label} className={`flex items-center gap-3 border-b border-white/14 p-2.5 text-[10px] font-semibold tracking-[.1em] last:border-b-0 ${activeProduct === index ? "bg-white/[.05] text-white" : "text-white/35"}`}><b className={`grid size-6 place-items-center rounded-sm font-medium ${activeProduct === index ? "bg-[#637cf2] text-white" : "bg-white/[.04]"}`}>{item.number}</b>{item.label}</span>)}
          </div>
          <div ref={productCardRef} className="absolute left-[25%] right-[5%] top-[32%] h-[48%] overflow-hidden opacity-0" />
          <div ref={productCopyRef} className="absolute left-[66%] top-[32%] w-[25%] text-white opacity-0 will-change-transform">
            <div className="grid size-7 place-items-center rounded-sm bg-white/[.08] text-xs text-white/65">{productScenes[activeProduct].number}</div>
            <h3 className="mt-3 font-display text-[clamp(1.6rem,2.4vw,2.2rem)] leading-tight tracking-[-.035em]">{productScenes[activeProduct].title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/64">{productScenes[activeProduct].body}</p>
            <ul className="relative mt-6 space-y-4 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-[3px] before:rounded-full before:bg-white/20">
              {productScenes[activeProduct].points.map((point) => <li key={point} className="relative flex gap-4 text-sm leading-snug text-white/80"><span className="relative z-10 mt-0.5 h-4 w-[3px] shrink-0 rounded-full bg-white/60" />{point}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
