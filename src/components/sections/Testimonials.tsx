import { Section } from "../ui/Section"
import { Reveal } from "../ui/Reveal"
import { testimonials } from "../../content/site"

export function Testimonials() {
  return (
    <Section tone="cream" id="customers">
      <Reveal>
        <div className="grid gap-7 border-b border-navy/15 pb-10 lg:grid-cols-[.55fr_1fr] lg:items-end">
          <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-navy/40">Embedded operations</p>
          <h2 className="max-w-[820px] text-h2 text-balance">{testimonials.heading}</h2>
        </div>
      </Reveal>

      <ul className="grid lg:grid-cols-3">
        {testimonials.items.map((item, i) => (
          <Reveal as="li" key={item.name} delay={i * 90}>
            <article className={`flex h-full min-h-[390px] flex-col border-b border-navy/15 py-9 lg:border-b-0 lg:py-12 ${i === 0 ? "lg:border-r lg:pr-10" : i === testimonials.items.length - 1 ? "lg:pl-10" : "lg:border-r lg:px-10"}`}>
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.14em] text-navy/35">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>{item.company}</span>
              </div>
              <p className="mt-14 font-display text-[clamp(1.3rem,1.8vw,1.7rem)] leading-[1.25] tracking-[-.025em] text-navy">{item.quote}</p>
              <div className="mt-auto pt-12">
                <p className="font-semibold text-navy">{item.name}</p>
                <p className="mt-1 text-sm text-mute">{item.role}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
