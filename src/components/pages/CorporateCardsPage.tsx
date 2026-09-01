import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle02Icon, CreditCardIcon, SecurityCheckIcon } from "@hugeicons/core-free-icons"
import { Nav } from "../layout/Nav"
import { Footer } from "../layout/Footer"
import { Reveal } from "../ui/Reveal"
import heroBackground from "../../assets/hero-background.png"
import professional from "../../assets/seated-professional-tablet.png"

const controls = ["Merchant and category limits", "Per-card spending limits", "Instant freeze and replacement"]
const capability = [
  ["Card issuance", "Create virtual cards immediately and order physical cards for every team."],
  ["Policy controls", "Set rules by merchant, category, geography, amount, and time period."],
  ["Live visibility", "See purchases the moment they happen, matched to cardholder and budget."],
  ["Receipt matching", "Capture receipts automatically and attach them to the right transaction."],
]

function Button({ children, dark = false }: { children: string; dark?: boolean }) {
  return <a href={children === "talk to sales" ? "mailto:newbusiness@hinstantt.com" : "https://app.hinstantt.com/signup"} className={`inline-flex h-12 min-w-40 items-center justify-center rounded-full border px-6 text-sm font-medium ${dark ? "border-black bg-black text-white" : "border-[#e6e6e6] bg-white text-black"}`}>{children}</a>
}

function CardsHeroVisual() {
  return (
    <div className="grid h-auto w-full gap-6 md:h-[560px] md:grid-cols-[minmax(0,2.12fr)_minmax(260px,1fr)]">
      <div className="relative aspect-[1.4569] overflow-hidden rounded-[28px] bg-[#558bfb] md:aspect-auto">
        <img src={heroBackground} alt="" className="absolute inset-0 size-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-[#135cf0]/25" />
        <div className="absolute left-[10%] top-[13%] w-[72%] rounded-[18px] border border-white/35 bg-white/95 p-4 shadow-[0_30px_80px_rgba(0,30,110,.28)] sm:p-6">
          <div className="flex items-center justify-between text-[11px] font-semibold"><span>Corporate cards</span><span className="rounded-full bg-[#eaf1ff] px-2 py-1 text-[#356cd0]">12 active</span></div>
          <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-4">{["Total spend", "Available", "Cards"].map((label, index) => <div key={label} className="rounded-xl bg-[#f5f7fa] p-3"><small className="text-[9px] text-black/40">{label}</small><b className="mt-1 block text-xs sm:text-lg">{["$48,250", "$151,750", "12"][index]}</b></div>)}</div>
          <div className="mt-4 h-24 rounded-xl bg-[linear-gradient(180deg,#eef4ff,#fff)] p-3"><div className="flex h-full items-end gap-2">{[32,58,44,72,52,82,68,92].map((height,i)=><span key={i} className="flex-1 rounded-t bg-[#558bfb]" style={{height:`${height}%`}} />)}</div></div>
        </div>
        <div className="absolute bottom-[9%] right-[8%] aspect-[1.586/1] w-[50%] rotate-[-5deg] rounded-[18px] border border-white/25 bg-[linear-gradient(145deg,#122b65,#071330)] p-5 text-white shadow-[0_32px_70px_rgba(0,0,0,.4)]"><div className="flex justify-between text-xs"><b>hinstantt</b><HugeiconsIcon icon={CreditCardIcon} size={18}/></div><div className="absolute bottom-5 left-5 right-5 text-[10px] tracking-[.16em] sm:text-sm">•••• &nbsp; •••• &nbsp; 4827</div></div>
      </div>
      <div className="flex flex-col gap-4 rounded-[28px] bg-[#f7f7f7] p-2">
        <div className="rounded-[22px] bg-white p-6"><div className="flex items-center justify-between"><span className="text-sm font-medium">Card controls</span><span className="size-2 rounded-full bg-emerald-400" /></div><div className="mt-5 space-y-3">{controls.map(item=><div key={item} className="flex items-center gap-3 text-xs text-black/65"><HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} color="#558bfb" />{item}</div>)}</div></div>
        <div className="relative min-h-[330px] flex-1 overflow-hidden rounded-[22px] bg-[#d8e6ff]"><img src={professional} alt="Finance professional managing cards" className="absolute inset-0 size-full object-cover object-top" /></div>
      </div>
    </div>
  )
}

export function CorporateCardsPage() {
  return (
    <>
      <Nav />
      <main id="top" className="bg-white font-sans text-black">
        <section className="px-4 py-20 pt-32 sm:px-6 sm:py-20 sm:pt-36">
          <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-20">
            <Reveal className="flex w-full max-w-[780px] flex-col items-center gap-5 text-center">
              <div className="inline-flex items-center gap-2 text-sm"><span className="grid size-5 place-items-center rounded-full bg-black text-white"><HugeiconsIcon icon={CreditCardIcon} size={12}/></span>Built for modern finance teams</div>
              <h1 className="font-serif text-[40px] font-light leading-[48px] tracking-normal sm:text-[56px] sm:leading-[64px]">Issue company cards with complete control</h1>
              <p className="max-w-[696px] text-base leading-[26px] text-black/70">Create intelligent card controls that understand context, enforce policy, and keep every transaction visible across your operations.</p>
              <div className="flex w-[90%] flex-col justify-center gap-2.5 pt-1 sm:w-auto sm:flex-row"><Button>talk to sales</Button><Button dark>get started</Button></div>
            </Reveal>
            <Reveal delay={90} className="w-full"><CardsHeroVisual /></Reveal>
          </div>
        </section>

        <section className="overflow-hidden bg-black py-24 text-white sm:py-32">
          <div className="mx-auto max-w-[1280px] px-6"><Reveal><p className="text-sm text-white/50">The Problem</p><h2 className="mt-7 max-w-[1080px] font-serif text-[32px] font-light leading-[42px] sm:text-[48px] sm:leading-[60px]">Most card programs operate with delayed data, manual controls, and disconnected expense workflows.</h2></Reveal><div className="mt-20 grid gap-px bg-white/15 md:grid-cols-3">{[["No real-time control","Static card limits cannot adapt to how your team actually spends."],["Time-consuming admin","Manual card requests and receipt chasing slow finance teams down."],["Zero spend visibility","Delayed transaction data makes managing budgets a guessing game."]].map(([title,body])=><Reveal key={title} className="min-h-[260px] bg-black p-8"><span className="grid size-10 place-items-center rounded-full border border-white/20"><HugeiconsIcon icon={SecurityCheckIcon} size={18}/></span><h3 className="mt-16 text-xl">{title}</h3><p className="mt-4 max-w-xs text-sm leading-6 text-white/55">{body}</p></Reveal>)}</div></div>
        </section>

        <section className="px-6 py-24 sm:py-32"><div className="mx-auto max-w-[1280px]"><Reveal className="mx-auto max-w-[980px] text-center"><p className="text-sm text-black/50">The Solution</p><h2 className="mt-6 font-serif text-[32px] font-light leading-[42px] sm:text-[48px] sm:leading-[60px]">Move faster, reduce errors, and control company spend with intelligent card infrastructure</h2></Reveal><div className="mt-20 grid gap-8 lg:grid-cols-2"><Reveal className="flex min-h-[520px] flex-col rounded-[24px] bg-[#fafafa] p-8"><p className="text-sm text-black/45">Smart card issuance</p><h3 className="mt-4 max-w-md font-serif text-[30px] font-light leading-10">Issue virtual and physical cards in minutes</h3><p className="mt-4 max-w-md text-sm leading-6 text-black/55">Create cards for employees, teams, subscriptions, and projects without waiting on a bank.</p><div className="mt-auto rounded-[20px] bg-[#558bfb] p-7 text-white"><div className="aspect-[1.586/1] rounded-[18px] bg-[linear-gradient(145deg,#17377b,#071532)] p-6"><b>hinstantt</b><p className="mt-24 tracking-[.18em]">•••• &nbsp; •••• &nbsp; 4827</p></div></div></Reveal><Reveal delay={80} className="flex min-h-[520px] flex-col rounded-[24px] bg-[#fafafa] p-8"><p className="text-sm text-black/45">Workflow automation</p><h3 className="mt-4 max-w-md font-serif text-[30px] font-light leading-10">Automate complex card controls</h3><p className="mt-4 max-w-md text-sm leading-6 text-black/55">Apply limits and policies automatically, then route only true exceptions to finance.</p><div className="mt-auto rounded-[20px] border border-black/8 bg-white p-6">{controls.map((item,i)=><div key={item} className="flex items-center gap-4 border-b border-black/8 py-4 last:border-0"><span className="grid size-8 place-items-center rounded-full bg-[#eaf1ff] text-xs text-[#356cd0]">0{i+1}</span><span className="text-sm">{item}</span><span className="ml-auto text-emerald-600">✓</span></div>)}</div></Reveal></div></div></section>

        <section className="bg-[#558bfb] py-24 text-white sm:py-32"><div className="mx-auto max-w-[1280px] px-6"><Reveal className="max-w-[850px]"><p className="text-sm text-white/65">ROI</p><h2 className="mt-6 font-serif text-[36px] font-light leading-[48px] sm:text-[48px] sm:leading-[60px]">Impact you can measure</h2></Reveal><div className="mt-16 grid gap-px bg-white/25 md:grid-cols-3">{[["10x","faster card issuance"],["90%","less manual card admin"],["100%","real-time transaction visibility"]].map(([number,label])=><div key={label} className="bg-[#558bfb] py-10 md:px-8"><strong className="font-serif text-6xl font-light sm:text-7xl">{number}</strong><p className="mt-4 text-sm text-white/70">{label}</p></div>)}</div></div></section>

        <section className="px-6 py-24 sm:py-32"><div className="mx-auto max-w-[1280px]"><Reveal className="max-w-[900px]"><p className="text-sm text-black/45">Capabilities</p><h2 className="mt-6 font-serif text-[32px] font-light leading-[42px] sm:text-[48px] sm:leading-[60px]">Everything you need to run company cards with confidence</h2></Reveal><div className="mt-16 grid gap-px overflow-hidden rounded-[24px] bg-black/10 md:grid-cols-2">{capability.map(([title,body],i)=><Reveal key={title} className="min-h-[260px] bg-[#fafafa] p-8"><span className="text-xs text-black/35">0{i+1}</span><h3 className="mt-16 text-xl">{title}</h3><p className="mt-4 max-w-md text-sm leading-6 text-black/55">{body}</p></Reveal>)}</div></div></section>

        <section className="overflow-hidden bg-black py-24 text-white sm:py-32"><div className="mx-auto flex min-h-[480px] max-w-[1280px] flex-col items-center justify-center px-6 text-center"><Reveal className="max-w-[720px]"><p className="text-sm text-white/50">Get started</p><h2 className="mt-6 font-serif text-[36px] font-light leading-[48px] sm:text-[48px] sm:leading-[60px]">Put every company card under control</h2><div className="mt-8"><a href="https://app.hinstantt.com/signup" className="inline-flex h-12 min-w-40 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black">get started</a></div></Reveal></div></section>
      </main>
      <Footer />
    </>
  )
}
