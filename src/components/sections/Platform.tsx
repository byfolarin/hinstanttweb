import { Section } from "../ui/Section"
import { Reveal } from "../ui/Reveal"
import { Tabs } from "../ui/Tabs"
import { platform } from "../../content/site"

export function Platform() {
  return (
    <Section tone="navy" id="platform">
      <Reveal>
        <h2 className="max-w-3xl text-h2 text-balance">
          {platform.heading[0]}{" "}
          <span className="text-white/45">{platform.heading[1]}</span>
        </h2>
      </Reveal>

      <Reveal delay={100} className="mt-12 block">
        <Tabs
          tone="dark"
          tabs={platform.tabs.map((tab) => ({
            label: tab.label,
            panel: (
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <h3 className="text-h3 text-balance">{tab.title}</h3>
                <ul className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
                  {tab.points.map((point) => (
                    <li key={point.title} className="border-t border-line-dark pt-4">
                      <p className="font-medium">{point.title}</p>
                      <p className="mt-1 text-[0.925rem] text-white/60">{point.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          }))}
        />
      </Reveal>
    </Section>
  )
}
