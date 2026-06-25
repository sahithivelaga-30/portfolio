# Data Realm

An interactive, game-style portfolio for **Sahithi Velaga**, Data Engineer —
built to look like a AAA production *and* convert recruiters.

**Prime directive: two doors, nothing gated.** After a sub-1.5s skippable boot,
visitors choose **Enter the Realm** (cinematic scroll-driven game world) or
**Quick View** (instant recruiter mode — every fact on one fast page). The game is
delight, never a gate; Resume + Quick View are always one click away in the HUD.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS** — DATA REALM tokens (one base, one accent, one energy; gold = achievements only)
- **Framer Motion** — reveals, scroll-progress, weighty easing
- **lucide-react** icons
- Charts/motifs: inline SVG
- *(Later phases)* React Three Fiber + drei + @react-three/postprocessing for the hero data-core only

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
  content.ts              # SINGLE SOURCE OF TRUTH — all resume data, typed
  App.tsx                 # boot → two-door entry → Quick View | Realm (state machine)
  index.css               # tokens, grain+vignette overlay, reduced-motion
  components/
    Boot.tsx              # <1.5s skippable boot
    EntryDoors.tsx        # the two doors
    HUD.tsx               # persistent command bar + XP scroll progress
    GrainVignette.tsx     # film-grain + vignette overlay
    ProfileCard.tsx       # holographic character card (placeholder-safe)
    QuickView.tsx         # recruiter mode — the hiring-critical path
    Realm.tsx             # game world (Act I done; deeper acts in progress)
    ui/                   # GlassPanel, HUDFrame, MonoLabel, AchievementBadge,
                          # MissionCard, XPBar, Button, Reveal, Counter
```

## Status

Phases 0–3 complete (shell, tokens, HUD, content, two-door entry, full Quick View)
plus Realm Act I (Mission Briefing + Quest Map). Remaining beats — Engine, EMR Boss,
DevHub, Foundry, Research Wing, Skill Tree, Archives, Victory Room — and the 3D core
land in later phases. See [`PLAN.md`](PLAN.md).

## Before you ship

1. **Resume** — `public/resume.pdf` is wired to the Download buttons (base-aware).
2. **Photo** — drop `public/sahithi-profile.jpg` and set `profile.photo` in
   [`src/content.ts`](src/content.ts) to `"/portfolio/sahithi-profile.jpg"`.
   Until then a labeled placeholder card renders (never a broken image).
3. **Social links** — add real LinkedIn / GitHub URLs in `profile.links`
   (placeholder `#` buttons hide automatically).

## Deploy (GitHub Pages)

Already wired: pushing to `main` runs `.github/workflows/deploy.yml`, which builds
and publishes to Pages. The Vite `base` is `/portfolio/`, so the site serves at
**https://sahithivelaga-30.github.io/portfolio/**. Enable once under
**Settings → Pages → Source → GitHub Actions**.

## Design principles

- **Premium = restraint + craft.** When in doubt, remove an effect, improve the easing.
- **Consistency is the luxury signal:** one glass spec, weighty `cubic-bezier(0.22,1,0.36,1)` motion.
- **Recruiter-first.** Quick View loads instantly; nothing in the realm is gated.
- **Accessible.** Semantic landmarks, keyboard nav, focus states, AA contrast,
  `prefers-reduced-motion` collapses the world to a clean vertical story.
- **Honest.** Titles and metrics are exactly as provided.
