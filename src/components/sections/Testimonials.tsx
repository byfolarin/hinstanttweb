import { Section } from "../ui/Section"
import { Reveal } from "../ui/Reveal"
import { testimonials } from "../../content/site"

export function Testimonials() {
  return (
    <Section tone="cream" id="customers">
      <Reveal>
        <h2 className="text-h2 text-balance">{testimonials.heading}</h2>
      </Reveal>

      <ul className="mt-14 grid gap-4 lg:grid-cols-3">
        {testimonials.items.map((item, i) => (
          <Reveal as="li" key={item.name} delay={i * 90}>
            <figure className="flex h-full flex-col justify-between rounded-3xl border border-line bg-white p-8">
              <blockquote className="text-[1.05rem] leading-[1.55]">
                <span aria-hidden="true" className="mb-4 block font-display text-[2.5rem] leading-none text-orange">
                  &ldquo;
                </span>
                {item.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-line pt-5">
                <p className="font-medium">{item.name}</p>
                <p className="text-[0.9rem] text-mute">
                  {item.role} · {item.company}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
