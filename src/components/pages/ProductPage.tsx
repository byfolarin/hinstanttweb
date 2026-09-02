import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"
import { Nav } from "../layout/Nav"
import { Footer } from "../layout/Footer"
import { Reveal } from "../ui/Reveal"
import paymentsScene from "../../assets/product-scenes/payments.jpg"
import cardsScene from "../../assets/product-scenes/corporate-cards-hinstantt.png"
import treasuryScene from "../../assets/product-scenes/treasury.jpg"
import stablecoinScene from "../../assets/product-scenes/stablecoin-ramp.jpg"
import accountingScene from "../../assets/product-scenes/accounting.jpg"
import expenseScene from "../../assets/product-scenes/expense.jpg"
import procurementScene from "../../assets/product-scenes/procurement.jpg"
import invoicingScene from "../../assets/product-scenes/invoicing.jpg"
import reportingScene from "../../assets/product-scenes/reporting.jpg"
import aiFinanceScene from "../../assets/product-scenes/ai-finance.jpg"
import { productPages } from "../../content/products"

const productScenes: Record<string, string> = {
  payments: paymentsScene, "corporate-cards": cardsScene, expense: expenseScene, travel: expenseScene,
  accounts: treasuryScene, treasury: treasuryScene, "stablecoin-ramp": stablecoinScene,
  accounting: accountingScene, procurement: procurementScene, "invoicing-billing": invoicingScene,
  reporting: reportingScene, "ai-financial-management": aiFinanceScene,
}

export function ProductPage({ slug }: { slug: string }) {
  const product = productPages[slug] ?? productPages.payments
  const scene = productScenes[slug] ?? paymentsScene
  const [openCapability, setOpenCapability] = useState(0)
  const related = product.related.map((relatedSlug) => ({ slug: relatedSlug, product: productPages[relatedSlug], image: productScenes[relatedSlug] ?? paymentsScene })).filter((item) => item.product)

  return <><Nav /><main id="top" className="bg-[#eef3f6] text-[#111927]">
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#061e2a] px-5 pb-8 pt-28 text-white sm:px-8 lg:px-12 lg:pt-32">
      <img src={scene} alt={`${product.name} in action`} className="inner-page-scene absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,30,42,.58)_0%,rgba(6,30,42,.18)_42%,rgba(6,30,42,.9)_100%)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] items-center justify-between text-[11px] font-semibold uppercase tracking-[.14em]"><span className="flex items-center gap-2"><i className="size-2 rounded-full bg-white" />{product.eyebrow} running on Hinstantt</span><span>{product.name} · 01</span></div>
      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-1 flex-col items-start justify-end pb-[clamp(2.25rem,8svh,7rem)] pt-[clamp(5.5rem,13svh,9rem)]"><h1 className="max-w-[1050px] font-serif text-[clamp(1.8rem,min(6vw,9svh),4.75rem)] font-light leading-[1.1] tracking-[-.042em] drop-shadow-[0_4px_30px_rgba(0,0,0,.35)]">{product.headline}</h1></div>
      <div className="relative z-10 mx-auto grid w-full max-w-[1500px] gap-8 border-t border-white/30 pt-6 lg:grid-cols-2 lg:items-end"><p className="max-w-[650px] text-[clamp(1.1rem,1.7vw,1.55rem)] leading-[1.35] tracking-[-.025em] text-white/82">{product.sub}</p><div className="flex gap-3 lg:justify-end"><a href="https://app.hinstantt.com/signup" className="inline-flex h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-[#111927]">Join Hinstantt</a><a href="mailto:newbusiness@hinstantt.com" className="inline-flex h-12 items-center gap-2 rounded-full border border-white/45 px-6 text-sm font-semibold">Talk to sales ↗</a></div></div>
    </section>

    <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"><div className="mx-auto max-w-[1500px]"><Reveal><p className="max-w-[680px] text-[clamp(1.1rem,1.8vw,1.55rem)] leading-[1.45]">{product.spotlight.body}</p></Reveal><Reveal delay={80}><h2 className="mt-24 max-w-[1080px] font-serif text-[clamp(2.35rem,4.5vw,4.6rem)] font-light leading-[1.02] tracking-[-.045em]">{product.spotlight.headline}</h2></Reveal></div></section>

    <section className="bg-[#080b10] text-white">{product.capabilities.map((capability, index) => { const supporting = related[index % Math.max(related.length, 1)]; const image = index === 0 ? scene : supporting?.image ?? scene; return <article key={capability.t} className="grid min-h-[82svh] border-b border-white/15 lg:grid-cols-2"><div className={`relative min-h-[48svh] overflow-hidden ${index % 2 ? "lg:order-2" : ""}`}><img src={image} alt="" className="card-exchange-story-image absolute inset-0 size-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" /></div><div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14"><div className="flex items-center justify-between border-b border-white/20 pb-5 text-[11px] uppercase tracking-[.14em] text-white/55"><span>{product.name} capability</span><span>0{index + 1}</span></div><div className="py-20 lg:py-10"><Reveal><h3 className="max-w-[570px] font-serif text-[clamp(2.25rem,4vw,4rem)] font-light leading-[1] tracking-[-.045em]">{capability.t}</h3><p className="mt-8 max-w-[520px] text-lg leading-[1.45] text-white/62">{capability.d}</p></Reveal></div><span className="text-4xl text-white">↘</span></div></article> })}</section>

    <section className="relative min-h-[100svh] overflow-hidden bg-[#080b10] text-white"><div className="absolute inset-0 bg-[linear-gradient(135deg,#080b10,#111927)]" /><div className="relative z-10 mx-auto grid min-h-[100svh] max-w-[1500px] gap-16 px-5 py-28 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-12 lg:py-36"><div><p className="text-[11px] uppercase tracking-[.16em] text-white/60">One system, end to end</p><h2 className="mt-8 max-w-[660px] font-serif text-[clamp(2.5rem,4.5vw,4.6rem)] font-light leading-[1] tracking-[-.045em]">Everything {product.name.toLowerCase()} needs, connected.</h2></div><div className="self-end border-t border-white/25">{product.capabilities.map((capability, index) => { const active = openCapability === index; return <div key={capability.t} className="border-b border-white/25"><button type="button" onClick={() => setOpenCapability(index)} className="flex w-full items-center py-6 text-left"><span className="w-12 text-xs text-white/35">0{index + 1}</span><span className="text-xl">{capability.t}</span><span className={`ml-auto text-2xl transition-transform ${active ? "rotate-45 text-white" : "text-white/35"}`}>+</span></button><div className={`grid transition-[grid-template-rows,opacity] duration-500 ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><div className="overflow-hidden"><p className="max-w-[570px] pb-7 pl-12 text-base leading-7 text-white/58">{capability.d}</p></div></div></div> })}</div></div></section>

    <section className="overflow-hidden bg-[#eef3f6] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"><div className="mx-auto max-w-[1500px]"><Reveal><p className="text-[11px] uppercase tracking-[.16em] text-black/45">Built into the workflow</p><h2 className="mt-7 max-w-[980px] font-serif text-[clamp(2.4rem,4.5vw,4.6rem)] font-light leading-[1.02] tracking-[-.045em]">From first action to final record, nothing falls between systems.</h2></Reveal><div className="mt-20 grid gap-4 lg:grid-cols-3">{product.spotlight.bullets.map((bullet, index) => <Reveal key={bullet} delay={index * 70}><article className="group flex min-h-[390px] flex-col border border-black/20 bg-[#e3ebf0] p-7 transition-colors hover:bg-[#253248] hover:text-white"><span className="text-xs opacity-50">0{index + 1}</span><h3 className="mt-auto font-serif text-[clamp(2rem,3.2vw,3.4rem)] font-light leading-[.95] tracking-[-.05em]">{bullet}</h3><span className="mt-8 grid size-11 place-items-center rounded-full border border-current/30 transition-transform group-hover:rotate-45"><HugeiconsIcon icon={ArrowUpRight01Icon} size={18} /></span></article></Reveal>)}</div></div></section>

    <section className="relative overflow-hidden bg-[#111927] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40"><div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><div><p className="text-[11px] uppercase tracking-[.16em] text-white/60">{product.agent.name} · always on</p><h2 className="mt-7 font-serif text-[clamp(3.2rem,6.7vw,7rem)] font-light leading-[.86] tracking-[-.06em]">{product.agent.line}</h2></div><div className="relative aspect-square overflow-hidden rounded-full border border-white/25 bg-[#061e2a]"><img src={scene} alt="" className="size-full object-cover" /></div></div></section>

    <section className="bg-[#111927] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12"><div className="mx-auto max-w-[1500px]"><div className="flex items-end justify-between border-b border-white/20 pb-8"><h2 className="font-serif text-[clamp(2.8rem,5vw,5.5rem)] font-light tracking-[-.055em]">Keep the whole system moving</h2><a href="/" className="hidden text-sm sm:block">Explore Hinstantt ↗</a></div><div className="mt-8 grid gap-4 md:grid-cols-3">{related.map(({ slug: relatedSlug, product: item, image }) => <a key={relatedSlug} href={`/products/${relatedSlug}`} className="group relative aspect-[4/3] overflow-hidden"><img src={image} alt="" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" /><span className="absolute inset-x-6 bottom-6 flex items-center justify-between text-2xl">{item.name}<HugeiconsIcon icon={ArrowUpRight01Icon} size={22} /></span></a>)}</div></div></section>
  </main><Footer /></>
}
