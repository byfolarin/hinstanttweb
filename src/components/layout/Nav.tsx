import { useEffect, useState, type CSSProperties } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  AiBrain02Icon,
  AirplaneTakeOff02Icon,
  BankIcon,
  BitcoinCircleIcon,
  CalculatorIcon,
  Chart01Icon,
  CreditCardIcon,
  Invoice01Icon,
  Mail02Icon,
  Payment01Icon,
  ReceiptIcon,
  ShoppingCart02Icon,
  UserGroupIcon,
  Wallet02Icon,
} from "@hugeicons/core-free-icons"
import logoDesign from "../../assets/logo-mark.svg"
import { brand, nav } from "../../content/site"
import { productSlugByName } from "../../content/products"

const navIcons = {
  "Corporate Cards": CreditCardIcon,
  Expense: ReceiptIcon,
  Travel: AirplaneTakeOff02Icon,
  Accounts: BankIcon,
  Payments: Payment01Icon,
  Treasury: Wallet02Icon,
  "Stablecoin Ramp": BitcoinCircleIcon,
  Accounting: CalculatorIcon,
  Procurement: ShoppingCart02Icon,
  "Invoicing & Billing": Invoice01Icon,
  Reporting: Chart01Icon,
  "AI Financial Management": AiBrain02Icon,
  "About Us": UserGroupIcon,
  Contact: Mail02Icon,
}

function NavItemIcon({ label }: { label: string }) {
  const icon = navIcons[label as keyof typeof navIcons] ?? CreditCardIcon
  return (
    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-navy text-white sm:size-11 sm:rounded-xl">
      <HugeiconsIcon icon={icon} size={19} color="currentColor" fill="none" strokeWidth={1.75} aria-hidden="true" />
    </span>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)
  const [detached, setDetached] = useState(false)
  const isInnerPage = window.location.pathname !== "/"

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  useEffect(() => {
    const updateNavShape = () => setDetached(window.scrollY > 72)
    updateNavShape()
    window.addEventListener("scroll", updateNavShape, { passive: true })
    return () => window.removeEventListener("scroll", updateNavShape)
  }, [])

  return (
    <>
      <header className={`fixed inset-x-0 z-[60] flex justify-center px-0 transition-[top] duration-500 ease-[var(--ease-out-soft)] sm:px-10 ${detached ? "top-3 sm:top-4" : "top-2 sm:top-3"}`}>
        <div className={`relative grid h-[58px] w-full max-w-[230px] grid-cols-[1fr_48px] items-center bg-white text-ink transition-[border-radius,box-shadow] duration-500 ease-[var(--ease-out-soft)] sm:h-[68px] sm:max-w-[420px] sm:grid-cols-[1fr_auto_56px] ${isInnerPage || detached ? "rounded-full shadow-[0_12px_40px_rgba(0,0,0,.16)]" : "rounded-b-[18px] shadow-[0_8px_24px_rgba(0,0,0,.08)] sm:rounded-b-[22px]"}`}>
          {!isInnerPage && <span aria-hidden="true" className={`nav-notch-left absolute -left-8 top-0 size-8 transition-opacity duration-300 ${detached ? "opacity-0" : "opacity-100"}`} />}
          {!isInnerPage && <span aria-hidden="true" className={`nav-notch-right absolute -right-8 top-0 size-8 transition-opacity duration-300 ${detached ? "opacity-0" : "opacity-100"}`} />}
          <a href={window.location.pathname === "/" ? "#top" : "/"} onClick={() => setOpen(false)} className="flex h-full items-center pl-5 sm:pl-6" aria-label={`${brand.name} home`}>
            <img src={logoDesign} alt={brand.name} className="h-3.5 w-auto brightness-0 sm:h-4" />
          </a>
          <a href="#demo" onClick={() => setOpen(false)} className="hidden h-10 items-center justify-center rounded-full bg-navy px-5 text-[13px] font-semibold text-white transition-transform hover:-translate-y-px sm:inline-flex">Get started</a>
          <button type="button" className="grid h-full place-items-center" aria-expanded={open} aria-controls="site-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
            <span className="relative block size-5">
              <span className={`absolute left-1 top-[7px] h-px w-3 bg-current transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`absolute left-1 top-[13px] h-px w-3 bg-current transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </header>

      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-navy/65 backdrop-blur-[2px] transition-opacity duration-500 ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      />

      <div id="site-menu" className={`site-menu fixed inset-x-0 top-0 z-50 h-full overflow-y-auto px-4 pb-5 pt-20 text-ink sm:h-[58vh] sm:min-h-[540px] sm:max-h-[680px] sm:px-10 sm:pb-6 sm:pt-24 ${open ? "site-menu-open" : ""}`} aria-hidden={!open}>
        <div aria-hidden="true" className="site-menu-columns fixed inset-x-0 top-0 grid h-full grid-cols-12 sm:h-[58vh] sm:min-h-[540px] sm:max-h-[680px]">
          {Array.from({ length: 12 }).map((_, index) => <span key={index} className="site-menu-column bg-white" style={{ "--menu-column-index": 11 - index } as CSSProperties} />)}
        </div>
        <div className="site-menu-content relative mx-auto flex min-h-full max-w-[1240px] flex-col">
          <nav aria-label="Main navigation" className="grid border-t border-black/15 sm:grid-cols-[3fr_1fr]">
            {nav.links.map((link) => (
              <section key={link.label} className="border-b border-black/15 py-5 sm:px-6 sm:py-6 sm:first:pl-0 sm:last:border-l sm:last:pr-0">
                <h2 className="font-display text-[1.25rem] leading-none tracking-[-.04em] sm:text-[clamp(1.55rem,2.2vw,2.25rem)]">{link.label}</h2>
                <div className={`mt-4 grid gap-x-8 gap-y-1 sm:mt-5 sm:gap-y-5 ${link.label === "Product" ? "grid-cols-1 sm:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"}`}>
                  {link.items.map((item) => (
                    <a key={item.label} href={item.label === "About Us" ? "/about" : item.label === "Contact" ? "/contact" : `/products/${productSlugByName[item.label]}`} onClick={() => setOpen(false)} className="group flex items-center gap-3 border-b border-black/8 px-1 py-2.5 transition-colors last:border-b-0 hover:bg-cream/45 sm:rounded-xl sm:border-b-0 sm:p-2">
                      <NavItemIcon label={item.label} />
                      <span className="min-w-0"><span className="flex items-center gap-1.5 text-[12px] font-semibold leading-tight sm:text-[13px]"><span>{item.label}</span><span className="opacity-0 transition-[opacity,transform] group-hover:translate-x-1 group-hover:opacity-100">↗</span></span><span className="mt-0.5 hidden text-[11px] leading-snug text-black/45 lg:block">{item.desc}</span></span>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 pt-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-sm text-sm leading-relaxed text-black/55">Cards, payments, treasury and accounting, run by AI agents.</p>
            <div className="flex gap-2">
              <a href="https://app.hinstantt.com/login" className="inline-flex h-12 items-center rounded-full border border-black/20 px-6 text-sm font-semibold hover:bg-white">{nav.login}</a>
              <a href="https://app.hinstantt.com/signup" className="inline-flex h-12 items-center gap-2 rounded-full bg-navy px-6 text-sm font-semibold text-white hover:bg-navy-700">{nav.cta}<span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
