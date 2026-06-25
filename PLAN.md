# THE DATA PALACE — Build Plan

Portfolio for **Sahithi Velaga**, Data Engineer.
Premium = restraint. One accent (violet), dark canvas, one signature animation, lots of whitespace.

## Single source of truth
- All resume content lives in [`src/content.ts`](src/content.ts). Components only render it.
- Titles & metrics kept exactly as provided — never inflated.

## Sections (single page, anchor nav)
- [x] 1. Hero — "Entrance" (name, role, value prop, 40% chip, 2 CTAs, data-flow animation)
- [x] 2. Snapshot bar (animated counters + scannable tags)
- [x] 3. Experience timeline (Experian → TCS → Exposys, before/after slider on Experian)
- [x] 4. DevHub showcase (glass dashboard mock)
- [x] 5. Projects (3 case cards, published badges, restrained SVG chart motifs)
- [x] 6. Skills (grouped grid + desktop constellation that degrades safely)
- [x] 7. Education & credentials (degrees + AI-900 + coursework)
- [x] 8. Contact — "Concierge" (email, resume, social, contact details)

## Global chrome
- [x] Sticky translucent nav + active-section highlight
- [x] Top scroll-progress bar
- [x] Smooth anchor scrolling + skip link

## Quality bar
- [x] One accent, no gold, dark glass system
- [x] One looping animation only (hero data-flow, SVG — no WebGL blocking paint)
- [x] `prefers-reduced-motion` honored globally + per component
- [x] Lazy-loaded below-fold sections (code-split)
- [x] Semantic HTML, focus states, keyboard nav, AA contrast
- [x] SEO meta + Open Graph + favicon
- [ ] Drop real `public/resume.pdf`
- [ ] Add real LinkedIn / GitHub URLs in `content.ts`

## Stack
Vite · React · TypeScript · Tailwind CSS · Framer Motion · lucide-react
