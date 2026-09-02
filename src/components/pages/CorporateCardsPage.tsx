import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"
import { Nav } from "../layout/Nav"
import { Footer } from "../layout/Footer"
import { Reveal } from "../ui/Reveal"
import cardsScene from "../../assets/product-scenes/corporate-cards-hinstantt.png"
import expenseScene from "../../assets/product-scenes/expense.jpg"
import accountingScene from "../../assets/product-scenes/accounting.jpg"
import paymentsScene from "../../assets/product-scenes/payments.jpg"
import cardFilm from "../../assets/corporate-card-3d.mp4"

const stories = [
  { number: "01", title: "Finance sets the rules", body: "Limits, merchant categories, geography, and approval policy are defined before a card is ever used.", image: cardsScene },
  { number: "02", title: "Teams keep moving", body: "Virtual and physical cards are issued in seconds, so every person and project can spend without waiting on finance.", image: expenseScene },
  { number: "03", title: "The books stay current", body: "Receipts, coding, and reconciliation happen as transactions arrive—not weeks after the statement closes.", image: accountingScene },
]

const architecture = [
  ["Issuance", "Create a virtual card instantly or order a physical card for any employee, team, project, or subscription."],
  ["Controls", "Enforce limits, merchants, categories, locations, and time windows at authorization."],
  ["Reconciliation", "Capture receipts, code transactions, and sync every entry into the shared ledger automatically."],
]

const faqs = [
  ["How quickly can we issue a card?", "Virtual cards are available immediately after approval. Physical cards can be ordered from the same control center."],
  ["Can every card have different controls?", "Yes. Rules can be set by cardholder, team, project, merchant category, geography, amount, and time period."],
  ["What happens when a transaction breaks policy?", "Hinstantt evaluates policy at authorization. It can decline the payment or route the exception for approval."],
  ["How are receipts and accounting handled?", "Receipts are captured automatically, transactions are coded, and approved entries synchronize with your accounting system."],
]

export function CorporateCardsPage() {
  const [activeArchitecture, setActiveArchitecture] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <Nav />
      <main id="top" className="card-exchange-page bg-[#eef3f6] text-[#111927]">
        <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#061e2a] px-5 pb-8 pt-28 text-white sm:px-8 lg:px-12 lg:pt-32">
          <video className="absolute inset-0 size-full object-cover" src={cardFilm} autoPlay muted loop playsInline />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,30,42,.5)_0%,rgba(6,30,42,.08)_42%,rgba(6,30,42,.82)_100%)]" />
          <div className="relative z-10 mx-auto flex w-full max-w-[1500px] items-center justify-between text-[11px] font-semibold uppercase tracking-[.14em]">
            <span className="flex items-center gap-2"><i className="size-2 rounded-full bg-white" />Spend running on Hinstantt</span><span>Corporate Cards · 01</span>
          </div>
          <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-1 flex-col items-start justify-end pb-[clamp(2.25rem,8svh,7rem)] pt-[clamp(5.5rem,13svh,9rem)]">
            <h1 className="max-w-[1050px] font-serif text-[clamp(1.8rem,min(6vw,9svh),4.75rem)] font-light leading-[1.1] tracking-[-.042em] drop-shadow-[0_4px_30px_rgba(0,0,0,.35)]"><span className="block">Company spend</span><span className="block">is under control</span></h1>
          </div>
          <div className="relative z-10 mx-auto grid w-full max-w-[1500px] gap-8 border-t border-white/30 pt-6 lg:grid-cols-2 lg:items-end">
            <p className="max-w-[620px] text-[clamp(1.2rem,2vw,1.8rem)] leading-[1.25] tracking-[-.03em]">Issue cards instantly. Set the rules before money moves. Reconcile every transaction while it happens.</p>
            <div className="flex gap-3 lg:justify-end"><a href="https://app.hinstantt.com/signup" className="inline-flex h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-[#111927]">Join Hinstantt</a><a href="mailto:newbusiness@hinstantt.com" className="inline-flex h-12 items-center gap-2 rounded-full border border-white/45 px-6 text-sm font-semibold">Talk to sales ↗</a></div>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"><div className="mx-auto max-w-[1500px]">
          <Reveal><p className="max-w-[660px] text-[clamp(1.1rem,1.8vw,1.55rem)] leading-[1.45]">Most card programs make businesses choose between speed and control. Employees wait for access, finance discovers problems after the fact, and accounting cleans up the mess at month-end.</p></Reveal>
          <Reveal delay={80}><h2 className="mt-24 max-w-[1050px] font-serif text-[clamp(2.35rem,4.5vw,4.6rem)] font-light leading-[1.02] tracking-[-.045em]">Hinstantt turns every company card into programmable financial infrastructure.</h2></Reveal>
        </div></section>

        <section className="bg-[#111] text-white">{stories.map((story, index) => (
          <article key={story.title} className="grid min-h-[92svh] border-b border-white/15 lg:grid-cols-2">
            <div className={`relative min-h-[52svh] overflow-hidden ${index % 2 ? "lg:order-2" : ""}`}><img src={story.image} alt="" className="card-exchange-story-image absolute inset-0 size-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" /></div>
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14"><div className="flex items-center justify-between border-b border-white/20 pb-5 text-[11px] uppercase tracking-[.14em] text-white/55"><span>Built for every side of spend</span><span>{story.number}</span></div><div className="py-20 lg:py-10"><Reveal><h3 className="max-w-[560px] font-serif text-[clamp(2.25rem,4vw,4rem)] font-light leading-[1] tracking-[-.045em]">{story.title}</h3><p className="mt-8 max-w-[520px] text-lg leading-[1.45] text-white/62">{story.body}</p></Reveal></div><span className="text-4xl text-white">↘</span></div>
          </article>
        ))}</section>

        <section className="relative min-h-[110svh] overflow-hidden bg-[#080b10] text-white">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#080b10,#111927)]" /><div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(8,11,16,.98)_0%,rgba(8,11,16,.78)_48%,rgba(8,11,16,.08)_100%)]" />
          <div className="relative z-[3] mx-auto grid min-h-[110svh] max-w-[1500px] gap-16 px-5 py-28 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-12 lg:py-36">
            <div><p className="text-[11px] uppercase tracking-[.16em] text-white/60">The infrastructure company spend runs on</p><h2 className="mt-8 max-w-[620px] font-serif text-[clamp(2.5rem,4.5vw,4.6rem)] font-light leading-[1] tracking-[-.045em]">Cards that understand the business.</h2></div>
            <div className="self-end border-t border-white/25">{architecture.map(([title, body], index) => { const active = activeArchitecture === index; return <div key={title} className="border-b border-white/25"><button type="button" onClick={() => setActiveArchitecture(index)} className="flex w-full items-center py-6 text-left"><span className="w-12 text-xs text-white/35">0{index + 1}</span><span className="text-xl">{title}</span><span className={`ml-auto text-2xl transition-transform ${active ? "rotate-45 text-white" : "text-white/35"}`}>+</span></button><div className={`grid transition-[grid-template-rows,opacity] duration-500 ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><div className="overflow-hidden"><p className="max-w-[570px] pb-7 pl-12 text-base leading-7 text-white/58">{body}</p></div></div></div> })}</div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#eef3f6] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"><div className="mx-auto max-w-[1500px]">
          <Reveal><p className="text-[11px] uppercase tracking-[.16em] text-black/45">One system, end to end</p><h2 className="mt-7 max-w-[900px] font-serif text-[clamp(2.4rem,4.5vw,4.6rem)] font-light leading-[1.02] tracking-[-.045em]">Access the card network through one operating system.</h2></Reveal>
          <div className="mt-20 grid gap-4 lg:grid-cols-3">{[["Issue", "Virtual and physical cards for every team."],["Control", "Policy enforced at the moment of spend."],["Close", "Receipts and ledger entries handled automatically."]].map(([title, body], index) => <Reveal key={title} delay={index * 70}><article className="group flex min-h-[390px] flex-col border border-black/20 bg-[#e3ebf0] p-7 transition-colors hover:bg-[#253248] hover:text-white"><span className="text-xs opacity-50">0{index + 1}</span><h3 className="mt-auto font-serif text-5xl font-light tracking-[-.05em]">{title}</h3><p className="mt-5 max-w-[300px] text-sm leading-6 opacity-65">{body}</p><span className="mt-8 grid size-11 place-items-center rounded-full border border-current/30 transition-transform group-hover:rotate-45"><HugeiconsIcon icon={ArrowUpRight01Icon} size={18} /></span></article></Reveal>)}</div>
        </div></section>

        <section className="relative overflow-hidden bg-[#111927] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40"><div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div><p className="text-[11px] uppercase tracking-[.16em]">The whole company is open</p><h2 className="mt-7 font-serif text-[clamp(4rem,8vw,8.5rem)] font-light leading-[.82] tracking-[-.065em]">Spend moves. Control stays.</h2><p className="mt-8 max-w-[520px] text-lg leading-7">Every swipe becomes a clean, policy-aware, reconciled transaction across the Hinstantt operating system.</p></div>
          <div className="relative aspect-square overflow-hidden rounded-full border border-black/25 bg-[#061e2a]"><img className="size-full object-cover" src={cardsScene} alt="Hinstantt corporate cards" /></div>
        </div><div className="mx-auto mt-24 grid max-w-[1500px] border-y border-black/25 sm:grid-cols-3">{[["10x", "faster card issuance"],["90%", "less manual card admin"],["100%", "live transaction visibility"]].map(([value, label]) => <div key={label} className="border-b border-black/25 py-8 sm:border-b-0 sm:border-r sm:px-7 sm:last:border-r-0"><strong className="font-serif text-6xl font-light tracking-[-.06em] lg:text-8xl">{value}</strong><p className="mt-3 text-sm">{label}</p></div>)}</div></section>

        <section className="bg-[#eef3f6] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"><div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[.55fr_1fr]">
          <div><p className="text-[11px] uppercase tracking-[.16em] text-black/45">FAQ</p><h2 className="mt-6 font-serif text-[clamp(3.5rem,6vw,6.5rem)] font-light leading-[.88] tracking-[-.055em]">Questions, answered.</h2></div>
          <div className="border-t border-black/25">{faqs.map(([question, answer], index) => { const open = openFaq === index; return <div key={question} className="border-b border-black/25"><button type="button" onClick={() => setOpenFaq(index)} className="flex w-full items-center py-6 text-left"><span className="pr-8 text-xs text-black/35">0{index + 1}</span><span className="text-lg font-medium">{question}</span><span className={`ml-auto text-2xl transition-transform ${open ? "rotate-45 text-[#253248]" : ""}`}>+</span></button><div className={`grid transition-[grid-template-rows,opacity] duration-500 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><div className="overflow-hidden"><p className="max-w-[650px] pb-7 pl-12 leading-7 text-black/58">{answer}</p></div></div></div> })}</div>
        </div></section>

        <section className="bg-[#111] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12"><div className="mx-auto max-w-[1500px]"><div className="flex items-end justify-between border-b border-white/20 pb-8"><h2 className="font-serif text-[clamp(2.8rem,5vw,5.5rem)] font-light tracking-[-.055em]">The infrastructure finance runs on</h2><a href="/" className="hidden text-sm sm:block">Explore Hinstantt ↗</a></div><div className="mt-8 grid gap-4 md:grid-cols-3">{[["Payments", paymentsScene, "payments"],["Expense", expenseScene, "expense"],["Accounting", accountingScene, "accounting"]].map(([title, image, slug]) => <a key={title} href={`/products/${slug}`} className="group relative aspect-[4/3] overflow-hidden"><img src={image} alt="" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" /><span className="absolute inset-x-6 bottom-6 flex items-center justify-between text-2xl">{title}<HugeiconsIcon icon={ArrowUpRight01Icon} size={22} /></span></a>)}</div></div></section>
      </main>
      <Footer />
    </>
  )
}
