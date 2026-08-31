import { Nav } from "../layout/Nav"
import { Footer } from "../layout/Footer"
import { Container } from "../ui/Container"
import { Reveal } from "../ui/Reveal"
import { GradientBridge } from "../sections/GradientBridge"
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
        <section className="overflow-hidden pb-0 pt-36 sm:pt-44">
          <Container>
            <Reveal className="mx-auto block max-w-[790px] text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-navy/45">{product.eyebrow} · {product.name}</p>
              <h1 className="mt-6 text-h2 text-balance">{product.headline}</h1>
              <p className="mx-auto mt-6 max-w-[650px] text-lead text-navy/62">{product.sub}</p>
              <div className="mx-auto mt-8 flex max-w-[510px] justify-center"><EmailCapture /></div>
              <a href="mailto:newbusiness@hinstantt.com" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">Talk to sales <span>↗</span></a>
            </Reveal>
            <Reveal delay={120} className="mx-auto mt-16 block max-w-[1080px] sm:mt-20"><ProductVisual product={product} /></Reveal>
          </Container>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <Container>
            <Reveal className="mx-auto block max-w-[760px] text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-navy/40">{product.short}</p>
              <h2 className="mt-5 text-h2 text-balance">{product.spotlight.headline}</h2>
              <p className="mx-auto mt-5 max-w-[600px] text-lead text-navy/58">{product.spotlight.body}</p>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {product.spotlight.bullets.map((bullet, index) => (
                <Reveal key={bullet} delay={index * 80} className="block min-h-[220px] rounded-[22px] bg-[#e9edf2] p-7">
                  <span className="text-xs text-navy/35">0{index + 1}</span>
                  <p className="mt-20 text-h3 text-balance">{bullet}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-navy/10 bg-cream py-20 sm:py-28">
          <Container>
            <Reveal className="mx-auto block max-w-[760px] text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-navy/40">One platform. Every step connected.</p>
              <h2 className="mt-5 text-h2 text-balance">Everything {product.name.toLowerCase()} needs, in one flow.</h2>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {product.capabilities.map((capability, index) => (
                <Reveal key={capability.t} delay={index * 80} className="block min-h-[300px] rounded-[22px] border border-navy/10 bg-white p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-navy/35">{product.eyebrow}</p>
                  <h3 className="mt-16 text-h3">{capability.t}</h3>
                  <p className="mt-4 leading-6 text-navy/58">{capability.d}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <Container>
            <Reveal>
              <div className="relative flex min-h-[620px] items-end overflow-hidden rounded-[28px] bg-navy p-7 text-white sm:min-h-[760px] sm:p-12">
                <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle,rgba(255,255,255,.14)_1px,transparent_1.2px)] [background-size:16px_16px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
                <div className="relative max-w-[620px]">
                  <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-white/40">{product.agent.name} · 24/7</p>
                  <blockquote className="mt-5 text-h2 text-balance">“{product.agent.line}”</blockquote>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <Container>
            <Reveal className="mx-auto block max-w-[760px] text-center"><h2 className="text-h2 text-balance">Keep your finance stack simple.</h2></Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {related.map(([key, item]) => <a key={key} href={`/products/${key}`} className="group min-h-[260px] rounded-[22px] bg-cream p-8 transition-colors hover:bg-navy hover:text-white"><p className="text-xs uppercase tracking-[.16em] opacity-45">{item.eyebrow}</p><h3 className="mt-16 text-h3">{item.name}</h3><p className="mt-3 text-sm opacity-55">{item.short}</p><span className="mt-8 inline-block transition-transform group-hover:translate-x-1">→</span></a>)}
            </div>
          </Container>
        </section>

        <GradientBridge />
      </main>
      <Footer />
    </>
  )
}
