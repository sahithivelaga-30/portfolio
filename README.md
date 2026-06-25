# SAHITHI.EXE

A semi-dark, gaming-inspired storytelling portfolio for **Sahithi Velaga** —
**Data Engineer / Software Engineer**. *Engineering faster data systems from complex raw data.*

A premium game-interface feel (HUD panels, holographic photo card, neon grid, floating data
shards, cursor glow) kept fully professional for recruiters. Single page, art-directed.

## Sections

Hero → Story Path → **Experian Performance Case Study** (Before / Action / After, 40% metric) →
PySpark + Java Engineering Lab → DevHub Product Experience → Golden Record Pipeline →
Analytics Missions → Tech Constellation (interactive skills) → Credentials → Why Sahithi Stands Out.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS** — semi-dark palette (sky/cyan/purple; gold = achievements)
- **Framer Motion** — scroll reveals, animated metrics, before/after bars, tilt cards
- **lucide-react** icons; visuals are inline SVG
- Fonts: **Space Grotesk** (display) · **Manrope** (body) · **JetBrains Mono** (labels)
- React Three Fiber + three are installed for an optional subtle 3D accent (not currently imported)

## Develop / build

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to /dist
npm run preview
```

## Structure

```
src/
  content.ts                 # SINGLE SOURCE OF TRUTH — typed resume data
  App.tsx                    # single page: nav + 10 sections + footer
  index.css                  # semi-dark tokens, glass + HUD spec, grid floor, reduced-motion
  components/
    Nav.tsx                  # sticky glass nav + scroll progress
    Ambient.tsx              # cursor glow + floating data shards + light beams
    HolographicCard.tsx      # photo card (placeholder-safe, 3D tilt, scan line, HUD brackets)
    ui/                      # GlassCard, SectionHeader/Takeaway, Counter, Reveal, AchievementBadge/Pill
    sections/                # Hero, StoryPath, CaseStudy, EngineeringLab, DevHub, GoldenRecord,
                             # Projects, SkillsConstellation, Credentials, HRImpact
```

## Before you ship

1. **Resume** — `public/resume.pdf` wired to Download buttons (base-aware).
2. **Photo** — `public/sahithi-profile.jpg` is in place and rendered in the hero + final cards.
3. **Social links** — add real LinkedIn / GitHub URLs in `profile.links` (`src/content.ts`).

## Deploy (GitHub Pages)

Pushing to `main` runs `.github/workflows/deploy.yml` (build → Pages). Vite `base` is
`/portfolio/`, so the site serves at **https://sahithivelaga-30.github.io/portfolio/**.
Enable once under **Settings → Pages → Source → GitHub Actions**.

## Principles

- **Premium = restraint + craft.** One glass spec; weighty `cubic-bezier(0.22,1,0.36,1)` motion.
- **Recruiter-first, data-engineering focused.** Every section: problem → action → result → why HR cares.
- **Accessible.** Semantic landmarks, keyboard nav, focus states, `prefers-reduced-motion`.
- **Honest.** Titles and metrics are exactly as provided.

> Earlier iterations (Data Palace, Data Realm, Data Ascension) remain in git history.
