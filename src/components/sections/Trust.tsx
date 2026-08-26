import { Section } from "../ui/Section"
import { Reveal } from "../ui/Reveal"
import { Accordion } from "../ui/Accordion"
import { trust } from "../../content/site"

export function Trust() {
  return (
    <Section tone="cream" id="why-us">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <h2 className="text-h2 text-balance lg:sticky lg:top-28 lg:pt-5">{trust.heading}</h2>
        </Reveal>
        <Reveal delay={100}>
          <Accordion
            items={trust.items.map((item) => ({
              title: item.title,
              body: <p className="max-w-lg">{item.body}</p>,
            }))}
          />
        </Reveal>
      </div>
    </Section>
  )
}
