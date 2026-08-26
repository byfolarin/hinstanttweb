/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF COPY
 *
 * Every user-facing string on the site lives here. The section components are
 * pure layout — they read from this file and nothing else. To rebrand or
 * repoint the site at a different product, edit this file only.
 *
 * SOURCE: pulled from the live hinstantt.com product (homepage, /about,
 * /contact, product pages, and the public Terms/Privacy pages). Four sections
 * — LogoWall, Testimonials, Security, Ratings — have no real customer-logo,
 * review, or certification-badge equivalent on the live site, so their data
 * has been repurposed with adjacent real copy (real task list, real AI-agent
 * lines, real regulatory/security disclosures, real company stats) rather
 * than inventing customers, quotes, or badges that don't exist.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  name: "Hinstantt",
  domain: "hinstantt.com",
}

export const nav = {
  links: [
    {
      label: "Product",
      items: [
        { label: "Corporate Cards", desc: "Virtual and physical issuance" },
        { label: "Expense", desc: "Submit to reimbursement" },
        { label: "Travel", desc: "Book and track travel" },
        { label: "Accounts", desc: "Multi-currency business accounts" },
        { label: "Payments", desc: "Pay in and out, 60+ markets" },
        { label: "Treasury", desc: "Cash management and yield" },
        { label: "Stablecoin Ramp", desc: "Fiat and stablecoin, on and off" },
        { label: "Accounting", desc: "AI ledger, auto statements" },
        { label: "Procurement", desc: "Request to three-way match" },
        { label: "Invoicing & Billing", desc: "Invoices, billing, collection" },
        { label: "Reporting", desc: "Spend and revenue insights" },
        { label: "AI Financial Management", desc: "AI cockpit across modules" },
      ],
    },
    {
      label: "Company",
      items: [
        { label: "About Us", desc: "Our mission and team" },
        { label: "Contact", desc: "Talk to our team" },
      ],
    },
  ],
  login: "Sign in",
  cta: "Get started",
}

export const hero = {
  eyebrow: "The Finance OS for global operators",
  headline: ["The operating system", "for global money"],
  body:
    "Run cards, payments, treasury, and accounting in one place across 60+ markets, with AI agents handling the work in the background.",
  primaryCta: "Get started",
  metrics: [
    { value: "$12B+", label: "Annual volume" },
    { value: "60+", label: "Markets" },
    { value: "10+", label: "Global licenses" },
    { value: "10k+", label: "Businesses" },
  ],
}

export const logoWall = {
  heading: "Tasks businesses run on Hinstantt",
  introLead: "Automate the work. Keep control. AI agents handle spend, payments, and reconciliation — you keep the approvals, limits, and full visibility.",
  introHeading: "One platform for your entire back office.",
  introBody: "Run accounting, payments, treasury, and a dozen more modules together. An AI agent works inside each one.",
  logos: [
    "Move money to 60+ markets",
    "Issue corporate cards",
    "Pay global contractors",
    "Convert and hold currencies",
    "Fund stablecoin wallets",
    "Set card limits and controls",
    "Capture and code receipts",
    "Approve expenses in policy",
    "Reconcile to the ledger",
    "Close the books",
    "Flag duplicate invoices",
    "Track budgets in real time",
    "Raise and send invoices",
    "Collect customer payments",
    "Onboard and pay vendors",
    "Forecast cash position",
    "File board-ready reports",
  ],
}

export const manifesto = {
  body:
    "Automate the work. Keep control. AI agents handle spend, payments, and reconciliation — you keep the approvals, limits, and full visibility.",
}

export const pillars = {
  heading: "One platform for your entire back office.",
  lead:
    "Run accounting, payments, treasury, and a dozen more modules together. An AI agent works inside each one.",
  items: [
    { title: "Payments", desc: "Pay in and out, 60+ markets", tone: "navy" },
    { title: "Corporate Cards", desc: "Virtual and physical issuance", tone: "cream" },
    { title: "Accounting", desc: "AI ledger, auto statements", tone: "cream" },
    { title: "Reporting", desc: "Spend and revenue insights", tone: "orange" },
  ],
}

export const trust = {
  heading: "What we believe.",
  items: [
    {
      title: "Money should move as fast as the decision to move it.",
      body:
        "Settlement in seconds across rails and markets, so finance is never the thing your team is waiting on. A vendor approved at 2pm is paid by 2:01, not next week.",
    },
    {
      title: "Automate the work, keep the judgment.",
      body:
        "Agents run the busywork end to end. The approvals, the limits, and the final call stay with people. Agents draft, match, and reconcile; people approve and decide.",
    },
    {
      title: "One platform, one source of truth.",
      body:
        "Every card, payment, and entry lands in the same ledger and reconciles as it happens, not at month end. Cards, payments, and accounting agree in real time, not at close.",
    },
    {
      title: "Global is the default, not an add-on.",
      body:
        "Multi-entity, multi-currency, and multi-market from the first day, because the operators we build for already are. Open a local account and pay into a new market the same day.",
    },
  ],
}

export const platform = {
  heading: ["Every financial workflow,", "connected."],
  tabs: [
    {
      label: "Spend",
      title: "Cards, expense, and travel — spend controlled before it happens",
      points: [
        { title: "Virtual and physical", desc: "Issue either in seconds and freeze any card instantly." },
        { title: "Controls at authorization", desc: "Per-card limits, categories and policies enforced at the swipe." },
        { title: "Receipt capture", desc: "Snap or forward a receipt and let AI handle the rest." },
        { title: "Fast reimbursement", desc: "Approved expenses are reimbursed without the back-and-forth." },
      ],
    },
    {
      label: "Move money",
      title: "Move money to 60+ markets in one click",
      points: [
        { title: "Pay-in and pay-out", desc: "Collect and disburse from one platform, on the rail that fits each market." },
        { title: "Accounts payable", desc: "Bills parsed, approvals routed and pay runs scheduled for you." },
        { title: "Multi-currency", desc: "Hold USD, EUR, GBP and more in a single place." },
        { title: "6+ payment rails", desc: "Send and receive on the rail that fits each market." },
      ],
    },
    {
      label: "Operate",
      title: "Close the books while the team sleeps",
      points: [
        { title: "AI-classified ledger", desc: "Every transaction categorized and coded to the right account." },
        { title: "Real-time ERP sync", desc: "Two-way sync with NetSuite, QuickBooks, Xero and Sage." },
        { title: "Requests and approvals", desc: "Route every request through the right approvers by policy." },
        { title: "Three-way match", desc: "PO, receipt and invoice matched before anything is paid." },
      ],
    },
    {
      label: "Intelligence",
      title: "See the whole business in real time",
      points: [
        { title: "Spend reporting", desc: "Slice spend by team, vendor, category or entity." },
        { title: "Revenue intelligence", desc: "Track revenue, MRR and what is moving the numbers." },
        { title: "Agents in every module", desc: "AI working inside cards, payments, close and more." },
        { title: "Always on", desc: "Reconciles, flags and forecasts around the clock." },
      ],
    },
  ],
}

export const testimonials = {
  heading: "Operational intelligence, embedded across Hinstantt.",
  items: [
    {
      quote: "Monitors liquidity across accounts, maintains a rolling cash forecast, and surfaces funding risks before they become constraints.",
      name: "Treasury operations",
      role: "Liquidity and forecasting",
      company: "Continuous oversight",
    },
    {
      quote: "Classifies receipts, validates each transaction against policy, and routes exceptions to the appropriate reviewer with full context.",
      name: "Expense operations",
      role: "Policy and controls",
      company: "Approval aware",
    },
    {
      quote: "Matches purchase orders, receipts, and invoices continuously, escalating discrepancies before a payment is released.",
      name: "Procurement operations",
      role: "Matching and exceptions",
      company: "Audit ready",
    },
  ],
}

export const personas = {
  heading: ["From early teams", "to multi-entity global operators."],
  tabs: [
    {
      label: "Spend",
      points: [
        "Policy-checked before booking",
        "Flights and stays in one itinerary view",
        "Connected to Expense and Payments end to end",
      ],
      cta: "Get started",
    },
    {
      label: "Move money",
      points: [
        "One position across every bank and currency",
        "AI forecasts your runway and shortfalls",
        "Yield on balances you are not using",
      ],
      cta: "Get started",
    },
    {
      label: "Operate",
      points: [
        "Invoices and shareable payment links",
        "Recurring and scheduled billing",
        "Payments auto-matched to invoices",
      ],
      cta: "Get started",
    },
    {
      label: "Intelligence",
      points: [
        "One dashboard across every module",
        "Agents reconcile, flag and forecast 24/7",
        "Ask a question, get an answer from your own data",
      ],
      cta: "See how the agents work",
    },
  ],
}

export const security = {
  heading: "Regulated coverage to operate compliantly in every market.",
  cta: "Talk to our team",
  badges: [
    {
      code: "Not a bank",
      desc: "Hinstantt provides technology and program-management services. Customer funds are held and safeguarded by licensed banking and payment partners, never as principal.",
    },
    {
      code: "Data protection",
      desc: "Encryption in transit and at rest, access controls, monitoring, and staff training protect every record.",
    },
    {
      code: "AML & KYC",
      desc: "Know-your-business and know-your-customer verification on every account, with records retained as required by law.",
    },
    {
      code: "10+ licenses",
      desc: "Regulated coverage across 60+ markets keeps every transfer compliant where it happens.",
    },
  ],
}

export const ratings = {
  heading: "Hinstantt, by the numbers",
  items: [
    { score: "60+", source: "Markets — live across Africa, Europe, the Americas, and the Middle East." },
    { score: "$12B+", source: "Annual volume — settled across cards, payments, and treasury every year." },
    { score: "10k+", source: "Businesses — from early teams to multi-entity global operators." },
  ],
  award: {
    title: "Backed by leading investors.",
    body: "We are building the infrastructure for global money, with investors who back category-defining companies.",
  },
}

export const demo = {
  heading: "Talk to our team",
  steps: ["What you need", "Your details"],
  needsQuestion: "What are you interested in?",
  needs: ["Cards", "Payments", "Treasury", "Accounting", "The full platform", "Something else"],
  sizeQuestion: "Company size",
  sizes: ["1–10", "11–50", "51–200", "201–1,000", "1,000+"],
  submit: "Get started",
}

export const footer = {
  blurb: "The operating system for finance teams, everywhere.",
  columns: [
    { title: "Spend", links: ["Corporate Cards", "Expense", "Travel"] },
    { title: "Move money", links: ["Payments", "Accounts", "Treasury", "Stablecoin Ramp"] },
    { title: "Operate & Intelligence", links: ["Accounting", "Procurement", "Invoicing & Billing", "Reporting", "AI Financial Management"] },
    { title: "Company", links: ["About", "Contact"] },
  ],
  legal: ["Privacy Policy", "Terms of Service"],
}
