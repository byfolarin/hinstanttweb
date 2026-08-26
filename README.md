# Hinstantt — marketing site

Single-page marketing site. Vite + React + TypeScript + Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production bundle into dist/
npm run preview  # serve the production build
```

## How it's put together

**All copy lives in one file: [`src/content/site.ts`](src/content/site.ts).**
The section components are pure layout — they read from that file and nothing
else. Rebranding or repointing the site is a single-file edit.

```
src/
  content/site.ts        every user-facing string
  index.css              design tokens (@theme) + base styles
  components/
    ui/                  primitives: Button, Section, Container, Tabs,
                         Accordion, Marquee, Odometer, Reveal
    layout/              Nav (inverts over the dark hero), Footer
    sections/            one file per band of the page
  App.tsx                composes the sections in order
```

### Design tokens

Defined as CSS custom properties in `@theme` in `src/index.css`, so they are
available both as Tailwind utilities (`bg-navy`, `text-mute`) and as raw CSS
variables.

| Token | Value | Role |
| --- | --- | --- |
| `navy` | `#001c63` | dark surfaces (hero, platform, security, footer) |
| `blue` / `blue-bright` | `#2240cd` / `#2a4eef` | primary action, hover |
| `orange` | `#f76918` | accent, used sparingly |
| `cream` / `cream-deep` | `#fbf6ee` / `#f6efe1` | alternating light surfaces |
| `ink` / `mute` | `#0e0500` / `#696563` | body and secondary text |

Type is a two-family system: `Instrument Sans` for display (tight tracking,
weight 500) and `Inter` for body copy. The display scale is fluid via `clamp()`,
so headings shrink smoothly rather than at breakpoints.

### Notes

- `Reveal` fades sections in on scroll via `IntersectionObserver`, with a 2.5s
  failsafe — observers are suspended while a tab is hidden, and a missed
  callback would otherwise leave a section permanently invisible.
- All animation is gated behind `prefers-reduced-motion`.
- `Tabs` and `Accordion` follow the WAI-ARIA patterns (roving tabindex,
  `aria-expanded`/`aria-controls`).
- Section anchors: `#top`, `#product`, `#why-us`, `#platform`, `#customers`,
  `#teams`, `#security`, `#reviews`, `#demo`.

### Not wired up yet

The hero email capture and the demo form are client-side only — they validate
and show a success state but do not post anywhere. Point them at your CRM or
form endpoint when you have one.
