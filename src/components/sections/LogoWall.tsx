import { useEffect, useRef, useState } from "react"
import { logoWall } from "../../content/site"
import paymentsImage from "../../assets/product-scenes/payments.jpg"
import cardsImage from "../../assets/product-scenes/corporate-cards-hinstantt.png"
import treasuryImage from "../../assets/product-scenes/treasury.jpg"
import accountingImage from "../../assets/product-scenes/accounting.jpg"
import stablecoinImage from "../../assets/product-scenes/stablecoin-ramp.jpg"
import expenseImage from "../../assets/product-scenes/expense.jpg"
import procurementImage from "../../assets/product-scenes/procurement.jpg"
import invoicingImage from "../../assets/product-scenes/invoicing.jpg"
import reportingImage from "../../assets/product-scenes/reporting.jpg"
import aiFinanceImage from "../../assets/product-scenes/ai-finance.jpg"

const images = [
  { title: "Corporate Cards", description: "Issue virtual and physical cards with real-time limits and controls.", src: cardsImage, className: "-top-14 left-[14%]", speed: -120 },
  { title: "Global Payments", description: "Send and receive money from one account.", src: paymentsImage, className: "-top-20 left-[45%]", speed: 80 },
  { title: "Treasury", description: "Manage liquidity, currencies, yield, and cash positions in real time.", src: treasuryImage, className: "-top-8 right-[11%]", speed: -70 },
  { title: "Accounting", description: "Reconcile transactions and keep the ledger continuously up to date.", src: accountingImage, className: "bottom-[2%] left-[18%]", speed: 115 },
  { title: "Stablecoin Ramp", description: "Move between fiat and stablecoins through compliant global rails.", src: stablecoinImage, className: "bottom-[-2%] right-[8%]", speed: -95 },
  { title: "Expense", description: "Capture receipts, enforce policy, and reimburse teams automatically.", src: expenseImage, className: "top-[18%] -left-8", speed: 92 },
  { title: "Procurement", description: "Run requests, approvals, purchase orders, and vendor payments.", src: procurementImage, className: "top-[24%] -right-10", speed: -105 },
  { title: "Invoicing & Billing", description: "Create invoices, automate billing, and collect customer payments.", src: invoicingImage, className: "bottom-[12%] left-[2%]", speed: -78 },
  { title: "Reporting", description: "See spend, revenue, budgets, and cash flow without spreadsheet work.", src: reportingImage, className: "bottom-[7%] left-[46%]", speed: 128 },
  { title: "AI Financial Management", description: "Deploy an agent inside every module to handle repetitive work.", src: aiFinanceImage, className: "top-[42%] right-[3%]", speed: 68 },
]

const productScenes = [
  { number: "01", label: "PAYMENTS", title: "Money that moves", body: "Send, receive, and settle money from one operating account.", points: ["Local rails selected automatically", "Multi-currency balances in one view", "Approvals built into every transfer"], imageIndex: 1 },
  { number: "02", label: "CORPORATE CARDS", title: "Control before the spend", body: "Issue cards in seconds and enforce limits, merchants, and policies at authorization.", points: ["Virtual and physical issuance", "Live limits by person or team", "Receipts captured and coded by AI"], imageIndex: 0 },
  { number: "03", label: "ACCOUNTING", title: "A ledger that keeps up", body: "Every transaction is classified, matched, and reconciled while the business is still moving.", points: ["AI-classified transactions", "Continuous three-way matching", "Real-time ERP synchronization"], imageIndex: 3 },
  { number: "04", label: "REPORTING", title: "Answers, not exports", body: "See cash, spend, revenue, and risk across every entity without rebuilding the report.", points: ["Live multi-entity reporting", "Automatic anomaly detection", "Board-ready views on demand"], imageIndex: 8 },
  { number: "05", label: "TREASURY", title: "Liquidity in one view", body: "Manage balances, currencies, yield, and cash positions without switching between banks.", points: ["Real-time cash positions", "Automated liquidity rules", "Yield across idle balances"], imageIndex: 2 },
  { number: "06", label: "STABLECOIN RAMP", title: "Global rails, built in", body: "Move between fiat and stablecoins through compliant infrastructure designed for business.", points: ["Fast fiat conversion", "Compliant global settlement", "Unified transaction history"], imageIndex: 4 },
  { number: "07", label: "EXPENSE", title: "Expenses without cleanup", body: "Capture receipts, enforce policy, and reimburse teams while every transaction stays coded.", points: ["Automatic receipt capture", "Policy checks in real time", "Instant reimbursements"], imageIndex: 5 },
  { number: "08", label: "PROCUREMENT", title: "Buying with control", body: "Run requests, approvals, purchase orders, and vendor payments through one clear workflow.", points: ["Configurable approvals", "Purchase order matching", "Vendor payment controls"], imageIndex: 6 },
  { number: "09", label: "INVOICING", title: "Revenue that runs itself", body: "Create invoices, automate billing, and collect customer payments without manual follow-up.", points: ["Automated billing cycles", "Smart payment reminders", "Live receivables tracking"], imageIndex: 7 },
  { number: "10", label: "AI FINANCE", title: "Work handled for you", body: "Deploy an AI agent inside every module to complete repetitive financial operations continuously.", points: ["Agents across every module", "Approval-aware automation", "Complete operational visibility"], imageIndex: 9 },
]

export function LogoWall() {
  const [activeProduct, setActiveProduct] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const gradientRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)
  const productCopyRef = useRef<HTMLDivElement>(null)
  const productNavRef = useRef<HTMLDivElement>(null)
  const productHeaderRef = useRef<HTMLDivElement>(null)
  const productCardRef = useRef<HTMLDivElement>(null)
  const productScrimRef = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      if (!sectionRef.current || !stageRef.current || !gradientRef.current || !copyRef.current || !productCopyRef.current || !productNavRef.current || !productHeaderRef.current || !productCardRef.current || !productScrimRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const travel = Math.max(rect.height - window.innerHeight, 1)
      const progress = Math.min(1, Math.max(0, -rect.top / travel))
      const rawSplit = Math.min(1, progress / .18)
      const split = rawSplit * rawSplit * (3 - 2 * rawSplit)
      const rawArrange = Math.min(1, Math.max(0, (progress - .2) / .1))
      const arrange = rawArrange * rawArrange * (3 - 2 * rawArrange)
      const grid = 0
      const rawProduct = Math.min(1, Math.max(0, (progress - .3) / .08))
      const product = rawProduct * rawProduct * (3 - 2 * rawProduct)
      const rawProductReveal = Math.min(1, Math.max(0, (progress - .34) / .06))
      const productReveal = rawProductReveal * rawProductReveal * (3 - 2 * rawProductReveal)
      const productSceneProgress = Math.min(1, Math.max(0, (progress - .38) / .58))
      const activeIndex = Math.min(productScenes.length - 1, Math.floor(productSceneProgress * productScenes.length))
      setActiveProduct(activeIndex)
      const activeImageIndex = productScenes[activeIndex].imageIndex
      const centered = Math.max(0, Math.min(.12, progress - .38))
      const red = Math.round(255 + (17 - 255) * arrange)
      const green = Math.round(255 + (25 - 255) * arrange)
      const blue = Math.round(255 + (39 - 255) * arrange)
      stageRef.current.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
      gradientRef.current.style.opacity = `${arrange}`
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
        const visualWidth = productCardRect.width
        const productScale = Math.max(visualWidth / image.offsetWidth, productCardRect.height / image.offsetHeight)
        const renderedImageWidth = image.offsetWidth * productScale
        const renderedImageHeight = image.offsetHeight * productScale
        const productX = productCardRect.left + renderedImageWidth / 2 - (image.offsetLeft + image.offsetWidth / 2)
        const productY = productCardRect.top + renderedImageHeight / 2 - (image.offsetTop + image.offsetHeight / 2)
        const x = gridResolvedX + (productX - gridResolvedX) * product
        const y = gridResolvedY + (productY - gridResolvedY) * product
        const scale = gridResolvedScale + ((isPaymentImage ? productScale : gridResolvedScale) - gridResolvedScale) * product
        image.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`
        image.style.transition = product > .98 ? "transform 200ms cubic-bezier(.22,1,.36,1), opacity 140ms ease" : "opacity 180ms ease"
        image.style.opacity = `${isPaymentImage ? .82 + split * .18 : (.82 + split * .18) * (1 - product)}`
        image.style.zIndex = isPaymentImage ? "20" : "1"
        image.style.setProperty("--label-opacity", "0")

        if (isPaymentImage && scale > 0) {
          const overflowY = Math.max(0, image.offsetHeight * scale - productCardRect.height)
          const insetPx = overflowY / 2 / scale
          image.style.clipPath = insetPx > 0.5 ? `inset(${insetPx}px 0 ${insetPx}px 0 round 12px)` : "none"
        } else {
          image.style.clipPath = "none"
        }
      })

      const copyProgress = Math.min(1, Math.max(0, (progress - .06) / .08))
      const copyExit = Math.min(1, Math.max(0, (progress - .18) / .08))
      copyRef.current.style.opacity = `${copyProgress * (1 - copyExit)}`
      copyRef.current.style.transform = `translate3d(0, ${(1 - copyProgress) * 34 - copyExit * 70}px, 0)`
      productCopyRef.current.style.opacity = `${productReveal}`
      productCopyRef.current.style.transform = `translate3d(0, ${(1 - productReveal) * 40}px, 0)`
      productNavRef.current.style.opacity = `${productReveal}`
      productNavRef.current.style.transform = `translate3d(0, ${(1 - productReveal) * -18}px, 0)`
      productHeaderRef.current.style.opacity = `${productReveal}`
      productHeaderRef.current.style.transform = `translate3d(0, ${(1 - productReveal) * 24}px, 0)`
      productCardRef.current.style.opacity = `${productReveal}`
      productScrimRef.current.style.opacity = `${productReveal}`
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
    <section ref={sectionRef} id="product" className="relative h-[1100vh] bg-white text-ink">
      <div ref={stageRef} className="sticky top-0 h-screen overflow-hidden bg-white will-change-[background-color]">
        <div
          ref={gradientRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,#354866_0%,#23334d_24%,#111927_58%,#08101c_100%)] opacity-0 will-change-[opacity]"
        />
        {images.map((image, index) => (
          <div key={`${image.src}-${index}`} ref={(node) => { imageRefs.current[index] = node }} className={`second-section-image absolute h-[150px] w-[210px] overflow-hidden rounded-xl will-change-transform sm:h-[170px] sm:w-[240px] ${image.className}`}>
            <img src={image.src} alt={`${image.title} in action`} className="size-full object-cover" />
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
          <div ref={productHeaderRef} className="absolute left-[5%] right-[5%] top-[13%] z-40 flex flex-col items-start text-left text-white opacity-0 will-change-transform lg:left-[2%] lg:right-auto lg:w-[62%]">
            <div className="inline-flex items-center gap-2 border border-white px-2 py-1"><span className="size-1.5 bg-white" /><span className="text-[10px] font-semibold tracking-[.14em]">WHY HINSTANTT</span></div>
            <h2 className="mt-4 max-w-[760px] font-display text-[clamp(1.9rem,3.2vw,3.4rem)] leading-[.96] tracking-[-.045em]">Your back office is complex.<br />Running it shouldn’t be.</h2>
          </div>
          <div ref={productCardRef} className="absolute left-[28%] right-[28%] top-[39%] h-[48%] overflow-hidden rounded-[28px] opacity-0" />
          <div ref={productScrimRef} aria-hidden="true" className="pointer-events-none absolute hidden opacity-0" />
          <div ref={productCopyRef} className="absolute left-[75%] top-[39%] w-[20%] text-white opacity-0 will-change-transform">
            <div className="grid size-7 place-items-center rounded-sm bg-white/[.08] text-xs text-white/65">{productScenes[activeProduct].number}</div>
            <h3 className="mt-3 font-display text-[clamp(1.6rem,2.4vw,2.2rem)] leading-tight tracking-[-.035em]">{productScenes[activeProduct].title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/64">{productScenes[activeProduct].body}</p>
            <ul className="relative mt-6 space-y-4 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-[3px] before:rounded-full before:bg-white/20">
              {productScenes[activeProduct].points.map((point) => <li key={point} className="relative flex gap-4 text-sm leading-snug text-white/80"><span className="relative z-10 mt-0.5 h-4 w-[3px] shrink-0 rounded-full bg-white/60" />{point}</li>)}
            </ul>
          </div>
          <div
            ref={productNavRef}
            aria-hidden="true"
            className="absolute left-[2%] top-[39%] flex w-[20%] flex-col gap-6 text-white opacity-0 will-change-transform"
            style={{ opacity: activeProduct >= 0 ? undefined : 0 }}
          >
            {productScenes.map((item, index) => (
              <div key={item.number} className="flex items-center gap-2">
                <span className={`block origin-left transition-all duration-500 ${activeProduct === index ? "h-[2px] w-7 bg-white" : "h-px w-3 bg-white/25"}`} />
                <span className={`text-[11px] font-semibold tracking-[.075em] transition-all duration-300 ${activeProduct === index ? "translate-x-1 text-white" : "text-white/35"}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
