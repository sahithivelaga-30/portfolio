# DATA ASCENSION — Build Plan

Cinematic, recruiter-ready story portfolio for **Sahithi Velaga**, Data Engineer.
Subtitle: *From Raw Data Chaos to Cloud Intelligence.*
Bright sky-blue glass world · single direct page · 11 chapters · gaming-inspired HUD.
Content single source of truth: [`src/content.ts`](src/content.ts).

## Structure
- [x] Sky-blue light theme tokens (one base + sky/cyan + gold for achievements)
- [x] SkyGameNav (sticky glass, scroll-progress, active chapter, world switch, resume)
- [x] Hero — "The Data Ascension Begins": HolographicProfileCard + floating badges + 6 stat cards
- [x] Ch 01 — The Data Storm (scroll: chaos → ordered streams)
- [x] Ch 02 — Code Transformation Gate (Python → PySpark → Java → production)
- [x] Ch 03 — EMR Optimization Battle ★ (scroll-linked HP 100%→60%, −40% victory)
- [x] Ch 04 — DevHub Command Center (8 modules)
- [x] Ch 05 — Golden Record Factory (Raw → Oracle/ETL/IDQ/Talend → golden → BI)
- [x] Ch 06 — AI Prediction Observatory (COVID forecasting, FB Prophet)
- [x] Ch 07 — Business Intelligence Gallery (electronics sales analysis)
- [x] Ch 08 — Customer Segmentation Lab (K-Means, WCSS, elbow)
- [x] Ch 09 — Skill Tree of Intelligence (7 branches, XP)
- [x] Ch 10 — Education Quest Log (degrees + AI-900 + coursework)
- [x] Ch 11 — Recruiter Victory Room (Match Ready + all CTAs)
- [x] World Switch (Raw / Intelligence) — labeled, intentional, default Intelligence
- [x] Cursor glow, reveals, counters, hologram scan, boss HP — all reduced-motion aware

## Quality bar
- [x] One glass spec, sky-blue world, gold = achievements only
- [x] `prefers-reduced-motion` honored (boss → static before/after, etc.)
- [x] Semantic landmarks, skip link, keyboard nav, AA-minded contrast
- [x] SEO meta + OG + favicon
- [ ] Drop `public/sahithi-profile.jpg` and set `profile.photo` (placeholder card until then)
- [ ] Real LinkedIn / GitHub URLs in `content.ts`
- [ ] Optional: re-introduce subtle R3F 3D accent (deps installed, currently unused)

## Stack
Vite · React · TypeScript · Tailwind · Framer Motion · lucide-react
(R3F/three installed for optional subtle 3D; not currently imported.)

> Previous iterations (Data Palace, Data Realm) remain in git history.
