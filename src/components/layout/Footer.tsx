import { Container } from "../ui/Container"
import { brand, footer } from "../../content/site"
import logo from "../../assets/hinstanttlogo.png"

export function Footer() {
  return (
    <footer className="overflow-hidden bg-navy text-white">
      <Container>
        <div className="pt-5 sm:pt-8">
          <div className="relative overflow-hidden rounded-[28px] bg-cream px-6 py-10 text-navy sm:rounded-[36px] sm:px-10 sm:py-14 lg:px-14">
            <div aria-hidden="true" className="absolute -right-24 -top-40 size-[430px] rounded-full bg-[radial-gradient(circle,#c8d4ff_0%,rgba(200,212,255,.42)_35%,transparent_70%)]" />
            <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[.18em] text-navy/45">Start operating differently</p>
                <h2 className="max-w-[820px] font-display text-[clamp(2.8rem,6vw,6.5rem)] leading-[.9] tracking-[-.06em]">Your back office,<br />finally in motion.</h2>
              </div>
              <a href="#demo" className="group inline-flex h-14 w-fit items-center gap-7 rounded-full bg-navy pl-7 pr-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1">
                Get started
                <span className="grid size-9 place-items-center rounded-full bg-white text-lg text-navy transition-transform duration-300 group-hover:rotate-45">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid border-b border-white/15 py-14 sm:py-20 lg:grid-cols-[1.05fr_1.95fr]">
          <div className="border-white/15 pb-12 lg:border-r lg:pb-0 lg:pr-12">
            <a href="#top" className="inline-flex items-center gap-3" aria-label={`${brand.name} home`}>
              <span className="grid size-11 place-items-center overflow-hidden rounded-xl bg-cream"><img src={logo} alt="" className="size-8 object-contain" /></span>
              <span className="font-display text-xl tracking-[-.03em]">{brand.name}</span>
            </a>
            <p className="mt-6 max-w-[330px] text-sm leading-6 text-white/50">{footer.blurb}</p>
            <div className="mt-9 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.14em] text-white/40"><span className="size-2 rounded-full bg-emerald-400" /> All systems operational</div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-12 sm:grid-cols-4 lg:pl-14 lg:pt-0">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-white/35">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => <li key={link}><a href="#" className="text-sm text-white/68 transition-colors hover:text-white">{link}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 py-7 text-[11px] text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="mailto:newbusiness@hinstantt.com" className="transition-colors hover:text-white">newbusiness@hinstantt.com</a>
            {footer.legal.map((item) => <a key={item} href="#" className="transition-colors hover:text-white">{item}</a>)}
          </div>
          <a href="#top" className="inline-flex items-center gap-2 uppercase tracking-[.12em] transition-colors hover:text-white">Back to top <span>↑</span></a>
        </div>
      </Container>
    </footer>
  )
}
