import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  AiBrain02Icon,
  BankIcon,
  CalculatorIcon,
  Chart01Icon,
  CheckListIcon,
  Clock01Icon,
  CreditCardIcon,
  Globe02Icon,
  Invoice01Icon,
  MoneyReceiveCircleIcon,
  Payment01Icon,
  ReceiptIcon,
  Shield01Icon,
  ShoppingCart02Icon,
  Wallet02Icon,
  WorkflowCircle01Icon,
} from "@hugeicons/core-free-icons"
import { Section } from "../ui/Section"
import { Reveal } from "../ui/Reveal"
import { Tabs } from "../ui/Tabs"
import { DitherIcon } from "../ui/DitherIcon"
import { platform } from "../../content/site"

const pointIcons = {
  "Virtual and physical": CreditCardIcon,
  "Controls at authorization": Shield01Icon,
  "Receipt capture": ReceiptIcon,
  "Fast reimbursement": MoneyReceiveCircleIcon,
  "Pay-in and pay-out": Payment01Icon,
  "Accounts payable": Invoice01Icon,
  "Multi-currency": Wallet02Icon,
  "6+ payment rails": Globe02Icon,
  "AI-classified ledger": CalculatorIcon,
  "Real-time ERP sync": WorkflowCircle01Icon,
  "Requests and approvals": CheckListIcon,
  "Three-way match": ShoppingCart02Icon,
  "Spend reporting": Chart01Icon,
  "Revenue intelligence": BankIcon,
  "Agents in every module": AiBrain02Icon,
  "Always on": Clock01Icon,
} as const

export function Platform() {
  const [activeWorkflow, setActiveWorkflow] = useState(0)
  return (
    <Section tone="navy" id="platform">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0">
          <Reveal>
            <h2 className="max-w-3xl text-h2 text-balance">
              {platform.heading[0]}{" "}
              <span className="text-white/45">{platform.heading[1]}</span>
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-12 block">
            <Tabs
              tone="dark"
              onChange={setActiveWorkflow}
              tabs={platform.tabs.map((tab) => ({
                label: tab.label,
                panel: (
                  <div className="flex max-w-2xl flex-col gap-10">
                    <h3 className="text-h3 text-balance">{tab.title}</h3>
                    <ul className="grid gap-y-7">
                      {tab.points.map((point) => (
                        <li key={point.title} className="flex gap-4 border-t border-line-dark pt-4">
                          <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[.045] text-[#8290a9]">
                            <HugeiconsIcon
                              icon={pointIcons[point.title as keyof typeof pointIcons] ?? WorkflowCircle01Icon}
                              size={20}
                              color="currentColor"
                              strokeWidth={1.8}
                              aria-hidden="true"
                            />
                          </span>
                          <div className="min-w-0 pt-0.5">
                            <p className="font-medium">{point.title}</p>
                            <p className="mt-1 text-[0.925rem] text-white/60">{point.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
              }))}
            />
          </Reveal>
        </div>

        <Reveal delay={160} className="mx-auto flex w-full max-w-[860px] self-center items-center justify-center">
          <div className="relative flex w-full items-center justify-center overflow-hidden py-8">
            <div className="pointer-events-none absolute inset-0 opacity-55 [background-image:radial-gradient(circle,rgba(122,77,164,.42)_1.2px,transparent_1.4px)] [background-size:14px_14px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_76%)]" />
            <div className="relative z-10 w-full max-w-[800px]">
              <DitherIcon active={(["card", "bank", "operate", "intelligence"] as const)[activeWorkflow]} />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
