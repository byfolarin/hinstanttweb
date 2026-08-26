import { Container } from "../ui/Container"
import { brand, footer } from "../../content/site"
import logo from "../../assets/hinstanttlogo.png"
import logoType from "../../assets/logo-mark.svg"

export function Footer() {
  return (
    <footer className="overflow-hidden bg-navy text-white">
      <Container>
        <div className="grid py-14 sm:py-20 lg:grid-cols-[1.05fr_1.95fr]">
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

        <a href="#top" aria-label={`${brand.name} home`} className="group flex overflow-hidden border-y border-white/15 py-8 sm:py-12">
          <img src={logoType} alt={brand.name} className="h-auto w-full brightness-0 invert transition-transform duration-500 group-hover:scale-[1.01]" />
        </a>

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
