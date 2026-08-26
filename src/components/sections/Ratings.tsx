import { Section } from "../ui/Section"
import { Reveal } from "../ui/Reveal"
import { ratings } from "../../content/site"

export function Ratings() {
  return (
    <Section tone="cream" id="reviews">
      <Reveal>
        <h2 className="max-w-2xl text-h2 text-balance">{ratings.heading}</h2>
      </Reveal>

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {ratings.items.map((item, i) => (
          <Reveal key={item.score} delay={i * 80}>
            <div className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-line bg-white p-8">
              <div>
                <p className="font-display text-[2.6rem] leading-none font-semibold tracking-[-0.035em]">
                  {item.score}
                </p>
                <p className="mt-2 text-mute">{item.source}</p>
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal delay={160}>
          <div className="flex h-full flex-col justify-between gap-6 rounded-3xl bg-navy p-8 text-white">
            <p className="font-display text-h3 text-balance">{ratings.award.title}</p>
            <p className="text-white/60">{ratings.award.body}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
