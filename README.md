# Data Ascension

A cinematic, recruiter-ready story portfolio for **Sahithi Velaga**, Data Engineer —
*From Raw Data Chaos to Cloud Intelligence.*

A bright **sky-blue glass world** with a gaming-inspired HUD that walks a recruiter
through 11 chapters: the data storm, the PySpark/Java code gate, the **EMR optimization
boss battle** (−40% resources), the DevHub command center, the golden-record factory,
the AI prediction observatory, the BI gallery, the segmentation lab, the skill tree,
the education quest log, and the recruiter victory room.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS** — sky-blue tokens (one glass spec; gold reserved for achievements)
- **Framer Motion** — scroll reveals, scroll-linked boss HP, counters, hologram scan
- **lucide-react** icons; charts/visuals are inline SVG
- React Three Fiber + three are installed for an optional subtle 3D accent (not currently imported)

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build & preview

```bash
npm run build    # type-check + production build to /dist
npm run preview
```

## Structure

```
src/
  content.ts                 # SINGLE SOURCE OF TRUTH — all resume data, typed
  App.tsx                    # single-page; nav + hero + 11 chapters + footer
  index.css                  # sky-blue tokens, glass spec, raw-world overlay, reduced-motion
  context/WorldContext.tsx   # Raw / Intelligence world switch
  components/
    SkyGameNav.tsx           # sticky glass nav + scroll progress + world switch
    WorldSwitchToggle.tsx
    Ambient.tsx              # cursor glow + raw-world fragments
    HeroProfileIntro.tsx     # "The Data Ascension Begins"
    HolographicProfileCard.tsx
    ui/                      # GlassCard, ChapterHeader/Takeaway, AchievementBadge,
                             # FloatingBadge, Reveal, Counter
    chapters/                # the 11 chapters, Data Storm → Recruiter Victory Room
```

## Special features

- **World Switch (Raw / Intelligence)** in the nav — flips the world between intentional
  data-chaos fragments and the clean intelligence view. Default is Intelligence; Raw is a
  clearly-labeled stylized overlay, never literally broken UI.
- **EMR Boss Battle** — scroll-linked: the Cluster Load Beast's HP drains 100% → 60% as
  three tools land, ending on the −40% victory. Reduced-motion gets a static before/after.

## Before you ship

1. **Resume** — `public/resume.pdf` is wired to the Download buttons (base-aware).
2. **Photo** — drop `public/sahithi-profile.jpg` and set `profile.photo` in
   [`src/content.ts`](src/content.ts) to `"/portfolio/sahithi-profile.jpg"`. Until then a
   premium placeholder card renders (never a broken image).
3. **Social links** — add real LinkedIn / GitHub URLs in `profile.links`.

## Deploy (GitHub Pages)

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes to Pages.
Vite `base` is `/portfolio/`, so the site serves at
**https://sahithivelaga-30.github.io/portfolio/**. Enable once under
**Settings → Pages → Source → GitHub Actions**.

## Principles

- **Premium = restraint + craft.** One glass spec, weighty `cubic-bezier(0.22,1,0.36,1)` motion.
- **Recruiter-first.** Every chapter answers: what problem, what Sahithi did, what tool, what
  changed, why HR should care.
- **Accessible.** Semantic landmarks, keyboard nav, focus states, `prefers-reduced-motion`.
- **Honest.** Titles and metrics are exactly as provided.

> Earlier iterations (Data Palace, Data Realm) remain in git history.
