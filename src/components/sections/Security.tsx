import { Section } from "../ui/Section"
import { Reveal } from "../ui/Reveal"
import { ButtonLink } from "../ui/Button"
import { security } from "../../content/site"

export function Security() {
  return (
    <Section tone="navy" id="security">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <h2 className="text-h2 text-balance">{security.heading}</h2>
        </Reveal>
        <Reveal delay={80}>
          <ButtonLink href="#" variant="onNavy">
            {security.cta}
          </ButtonLink>
        </Reveal>
      </div>

      <ul className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {security.badges.map((badge, i) => (
          <Reveal as="li" key={badge.code} delay={i * 70}>
            <div className="flex h-full flex-col gap-6">
              <span className="text-white" aria-hidden="true">
                <svg width="28" height="34" viewBox="0 0 20 24" fill="none">
                  <path
                    d="M10 1l8 3.2v7.4c0 5-3.4 9.5-8 11.4-4.6-1.9-8-6.4-8-11.4V4.2L10 1Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path d="M6.4 12l2.6 2.6 4.8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="font-display text-[1.25rem] font-semibold tracking-[-0.02em]">
                  {badge.code}
                </p>
                <p className="mt-2 text-[0.925rem] text-white/60">{badge.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
