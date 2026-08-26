import { Section } from "../ui/Section"
import { Reveal } from "../ui/Reveal"
import { Tabs } from "../ui/Tabs"
import { Button } from "../ui/Button"
import { personas } from "../../content/site"

export function Personas() {
  return (
    <Section tone="creamDeep" id="teams">
      <Reveal>
        <h2 className="max-w-2xl text-h2 text-balance">
          {personas.heading[0]} <span className="text-mute">{personas.heading[1]}</span>
        </h2>
      </Reveal>

      <Reveal delay={100} className="mt-12 block">
        <Tabs
          tabs={personas.tabs.map((tab) => ({
            label: tab.label,
            panel: (
              <div className="rounded-3xl border border-line bg-white p-8 sm:p-12">
                <ul className="grid gap-x-12 gap-y-5 sm:grid-cols-2">
                  {tab.points.map((point) => (
                    <li key={point} className="flex gap-3.5">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 grid size-5 shrink-0 place-items-center rounded-full bg-blue/10 text-blue"
                      >
                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                          <path
                            d="M1 4.6L4 7.5 10 1"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-[1rem]">{point}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-10" size="lg">
                  {tab.cta}
                </Button>
              </div>
            ),
          }))}
        />
      </Reveal>
    </Section>
  )
}
