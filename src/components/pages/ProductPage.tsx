import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons"
import { Nav } from "../layout/Nav"
import { Footer } from "../layout/Footer"
import { Container } from "../ui/Container"
import { Reveal } from "../ui/Reveal"
import { productPages, type ProductPageData } from "../../content/products"

function EmailCapture() {
  return (
    <form className="flex w-full max-w-[510px] gap-2 rounded-full border border-navy/15 bg-white p-1.5 shadow-sm" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="product-email" className="sr-only">Work email</label>
      <input id="product-email" type="email" required placeholder="Enter your work email" className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-navy/40" />
      <button className="h-11 shrink-0 rounded-full bg-navy px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-px">Get started</button>
    </form>
  )
}

function ProductVisual({ product }: { product: ProductPageData }) {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-[28px] bg-navy shadow-[0_28px_70px_rgba(17,25,39,.18)] sm:min-h-[520px]">
      <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(circle,rgba(255,255,255,.15)_1px,transparent_1.2px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_62%_42%,black_8%,transparent_70%)]" />
      <div className="absolute -right-[18%] -top-[24%] size-[78%] rounded-full border border-white/10 bg-[#253248]/60 blur-[1px]" />
      <div className="absolute -bottom-[38%] -left-[24%] size-[82%] rounded-full border border-white/10 bg-[#1b2639]" />
      <div className="absolute inset-y-0 left-[18%] w-px bg-white/8" />
      <div className="absolute inset-y-0 left-[52%] w-px bg-white/8" />
      <div className="absolute inset-x-0 top-[28%] h-px bg-white/8" />
      <div className="absolute inset-x-0 top-[68%] h-px bg-white/8" />
      <div className="absolute bottom-5 right-5 size-16 border-b border-r border-white/18 sm:bottom-8 sm:right-8 sm:size-24" />
      <span className="sr-only">Reserved area for the {product.name} product mockup</span>
    </div>
  )
}

export function ProductPage({ slug }: { slug: string }) {
  const product = productPages[slug] ?? productPages.payments
  const related = product.related.map((key) => [key, productPages[key]] as const).filter((item) => item[1])

  return (
    <>
      <Nav />
      <main className="bg-white text-navy">
        <section className="overflow-hidden pb-16 pt-36 sm:pb-24 sm:pt-44">
          <Container>
            <div className="grid items-center gap-14 lg:grid-cols-[5fr_7fr] lg:gap-14">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-navy/45">{product.eyebrow} · {product.name}</p>
                <h1 className="mt-6 max-w-[620px] text-h2 text-balance">{product.headline}</h1>
                <p className="mt-6 max-w-[580px] text-lead text-navy/62">{product.sub}</p>
                <div className="mt-9"><EmailCapture /></div>
                <a href="mailto:newbusiness@hinstantt.com" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">Talk to sales <span>↗</span></a>
              </Reveal>
              <Reveal delay={120}><ProductVisual product={product} /></Reveal>
            </div>
          </Container>
        </section>

        <section className="border-y border-navy/10 bg-cream py-16 sm:py-24">
          <Container>
            <Reveal><p className="text-[11px] font-semibold uppercase tracking-[.18em] text-navy/40">One platform. Every step connected.</p></Reveal>
            <div className="mt-10 grid border-t border-navy/15 md:grid-cols-3">
              {product.capabilities.map((capability, index) => (
                <Reveal key={capability.t} delay={index * 80} className={`block py-8 md:min-h-[260px] md:px-8 md:py-10 ${index ? "border-t border-navy/15 md:border-l md:border-t-0" : ""}`}>
                  <span className="text-xs text-navy/35">0{index + 1}</span>
                  <h2 className="mt-12 text-h3">{capability.t}</h2>
                  <p className="mt-4 max-w-[340px] leading-6 text-navy/58">{capability.d}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-20 sm:py-32">
          <Container>
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-navy/40">{product.short}</p>
                <h2 className="mt-5 max-w-[620px] text-h2 text-balance">{product.spotlight.headline}</h2>
                <p className="mt-6 max-w-[540px] text-lead text-navy/58">{product.spotlight.body}</p>
                <ul className="mt-9 space-y-4">
                  {product.spotlight.bullets.map((bullet) => <li key={bullet} className="flex items-center gap-3 border-t border-navy/12 pt-4"><HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} color="currentColor" strokeWidth={1.6} /><span>{bullet}</span></li>)}
                </ul>
              </Reveal>
              <Reveal delay={100}>
                <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[#e9edf2] sm:min-h-[540px]" aria-label={`${product.name} product mockup area`}>
                  <div className="absolute inset-0 [background-image:linear-gradient(rgba(17,25,39,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(17,25,39,.055)_1px,transparent_1px)] [background-size:72px_72px]" />
                  <div className="absolute inset-x-[8%] bottom-0 top-[12%] rounded-t-[24px] border border-b-0 border-navy/10 bg-white/35 shadow-[0_-20px_60px_rgba(17,25,39,.05)]" />
                  <div className="absolute left-[8%] top-[12%] h-12 w-px -translate-y-full bg-navy/18" />
                  <div className="absolute right-[8%] top-[12%] h-12 w-px -translate-y-full bg-navy/18" />
                  <div className="absolute bottom-6 left-6 flex gap-2"><span className="size-1.5 rounded-full bg-navy/25" /><span className="size-1.5 rounded-full bg-navy/15" /><span className="size-1.5 rounded-full bg-navy/10" /></div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="bg-navy py-20 text-white sm:py-32">
          <Container>
            <Reveal>
              <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
                <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-white/40">{product.agent.name} · 24/7</p>
                <blockquote className="text-h2 text-balance">“{product.agent.line}”</blockquote>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-cream py-20 sm:py-28">
          <Container>
            <Reveal><h2 className="text-h2">Keep your finance stack simple.</h2></Reveal>
            <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-navy/12 md:grid-cols-3">
              {related.map(([key, item]) => <a key={key} href={`/products/${key}`} className="group min-h-[250px] bg-white p-8 transition-colors hover:bg-navy hover:text-white"><p className="text-xs uppercase tracking-[.16em] opacity-45">{item.eyebrow}</p><h3 className="mt-16 text-h3">{item.name}</h3><p className="mt-3 text-sm opacity-55">{item.short}</p><span className="mt-8 inline-block transition-transform group-hover:translate-x-1">→</span></a>)}
            </div>
          </Container>
        </section>

        <section className="bg-white py-20 sm:py-32">
          <Container>
            <div className="overflow-hidden rounded-[36px] bg-navy px-6 py-16 text-center text-white sm:px-12 sm:py-24">
              <h2 className="mx-auto max-w-[760px] text-h2 text-balance">Run global finance on one platform.</h2>
              <p className="mx-auto mt-6 max-w-[620px] text-white/58">Open an account in minutes. Move your spend, payments and accounting onto Hinstantt this quarter.</p>
              <div className="mx-auto mt-9 flex max-w-[500px] justify-center"><EmailCapture /></div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
