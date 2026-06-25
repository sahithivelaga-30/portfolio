# The Data Palace

A premium, recruiter-first portfolio for **Sahithi Velaga**, Data Engineer.

Dark glass design system, one signature data-flow animation, fast load. Built for a
hiring manager to understand who she is, what she does, her strongest proof point
(−40% AWS EMR resources), and how to reach her — within the first screen.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS** (design tokens as CSS variables + theme extension)
- **Framer Motion** (reveals, counters, expand/collapse)
- **lucide-react** icons
- Charts: inline SVG — no heavy chart libs
- Hero animation: lightweight inline SVG (no WebGL) so first paint stays fast

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  content.ts                # SINGLE SOURCE OF TRUTH — all resume data, typed
  App.tsx                   # shell; below-fold sections are lazy-loaded
  index.css                 # tokens + base + reduced-motion handling
  components/
    Nav.tsx                 # sticky nav + scroll-progress bar + active section
    DataFlow.tsx            # the one signature animation (SVG)
    Footer.tsx
    ui/                     # Section, GlassCard, Button, MetricChip, Reveal, Counter
    sections/               # Hero, Snapshot, Experience, DevHub, Projects, Skills, Education, Contact
```

## Before you ship

1. **Resume:** drop your latest `resume.pdf` into [`public/`](public/) — the
   Download Resume buttons point to `/resume.pdf`.
2. **Social links:** add real LinkedIn / GitHub URLs in
   [`src/content.ts`](src/content.ts) (`profile.links`). Buttons with a `#`
   placeholder are hidden automatically in Contact.
3. **OG image:** add `public/og-image.png` (1200×630) for rich link previews.

## Deploy (Vercel)

```bash
npm i -g vercel
vercel            # follow prompts; framework auto-detected as Vite
vercel --prod
```

Or import the repo at [vercel.com/new](https://vercel.com/new) — build command
`npm run build`, output dir `dist`. Any static host (Netlify, Cloudflare Pages,
GitHub Pages) works the same way.

## Design principles

- **Premium = restraint.** One violet accent on ~10% of the surface. No gold.
- **One looping element** (the hero data-flow). Everything else reveals once.
- **Recruiter-first.** Role, proof point, and resume are above the fold.
- **Accessible.** Semantic landmarks, keyboard nav, visible focus, AA contrast,
  `prefers-reduced-motion` honored everywhere.
- **Honest.** Titles and metrics are exactly as provided.
