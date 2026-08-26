import { useState } from "react"
import { Section } from "../ui/Section"
import { Reveal } from "../ui/Reveal"
import { Button } from "../ui/Button"
import { cn } from "../../lib/cn"
import { demo } from "../../content/site"

function Choice({
  label,
  selected,
  onSelect,
}: {
  label: string
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={cn(
        "rounded-2xl border p-5 text-left text-[0.95rem] transition-colors duration-200",
        selected
          ? "border-blue bg-blue/[0.06] text-navy"
          : "border-line bg-white hover:border-ink/25",
      )}
    >
      {label}
    </button>
  )
}

export function DemoForm() {
  const [step, setStep] = useState(0)
  const [need, setNeed] = useState<string | null>(null)
  const [size, setSize] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const canAdvance = need !== null && size !== null

  return (
    <Section tone="creamDeep" id="demo">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <h2 className="text-h2 text-balance">{demo.heading}</h2>
            <ol className="mt-10 space-y-4">
              {demo.steps.map((label, i) => (
                <li key={label} className="flex items-center gap-3.5">
                  <span
                    className={cn(
                      "grid size-8 place-items-center rounded-full text-[0.8rem] font-medium transition-colors",
                      i <= step ? "bg-navy text-white" : "bg-ink/8 text-mute",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={cn(i <= step ? "font-medium" : "text-mute")}>{label}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
            className="rounded-3xl border border-line bg-white p-7 sm:p-10"
          >
            {submitted ? (
              <div className="py-10 text-center">
                <p className="text-h3">Thanks — we'll be in touch.</p>
                <p className="mt-3 text-mute">
                  A specialist will reach out to schedule your 30 minute call.
                </p>
              </div>
            ) : step === 0 ? (
              <>
                <fieldset>
                  <legend className="text-h3">{demo.needsQuestion}</legend>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {demo.needs.map((option) => (
                      <Choice
                        key={option}
                        label={option}
                        selected={need === option}
                        onSelect={() => setNeed(option)}
                      />
                    ))}
                  </div>
                </fieldset>

                <fieldset className="mt-10">
                  <legend className="text-h3">{demo.sizeQuestion}</legend>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {demo.sizes.map((option) => (
                      <Choice
                        key={option}
                        label={option}
                        selected={size === option}
                        onSelect={() => setSize(option)}
                      />
                    ))}
                  </div>
                </fieldset>

                <Button
                  type="button"
                  size="lg"
                  className="mt-10 w-full sm:w-auto"
                  disabled={!canAdvance}
                  onClick={() => setStep(1)}
                >
                  Continue
                </Button>
              </>
            ) : (
              <>
                <p className="text-h3">Your details</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { id: "name", label: "Full name", type: "text", autoComplete: "name" },
                    { id: "email", label: "Work email", type: "email", autoComplete: "email" },
                    { id: "company", label: "Company", type: "text", autoComplete: "organization" },
                    { id: "country", label: "Country", type: "text", autoComplete: "country-name" },
                  ].map((field) => (
                    <div key={field.id} className="grid gap-2">
                      <label htmlFor={field.id} className="text-[0.85rem] font-medium">
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        required
                        className="h-12 rounded-xl border border-line bg-cream px-4 transition-colors focus:border-blue"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Button type="submit" size="lg">
                    {demo.submit}
                  </Button>
                  <Button type="button" variant="outline" size="lg" onClick={() => setStep(0)}>
                    Back
                  </Button>
                </div>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
