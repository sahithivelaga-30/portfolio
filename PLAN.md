# DATA REALM — Build Plan

Cinematic, game-style portfolio for **Sahithi Velaga**, Data Engineer.
Prime directive: **two doors, nothing gated.** Premium = restraint + craft, not effects.
Full creative brief in [`BRIEF.md`](BRIEF.md). Content single source of truth: [`src/content.ts`](src/content.ts).

## Phases
- [x] **0** — Scaffold, DATA REALM palette tokens, film-grain + vignette, XP scroll bar, boot screen (<1.5s, skippable), two-door entry
- [x] **1** — Typed `content.ts` (profile, experience, projects, skills, education, certifications, badges, missions) — titles/metrics exact
- [x] **2** — HUD primitives: GlassPanel, HUDFrame, MonoLabel, AchievementBadge, MissionCard, XPBar, Button/ActionButton, Reveal, Counter
- [x] **3** — Recruiter **Quick View** (fast, scannable, all facts + resume + contact) + wire both entry doors + persistent HUD
- [~] **4** — Realm beats (2D first). Done: Mission Briefing + Quest Map. Pending: Engine, DevHub, Foundry, Research, Skill Tree (grid), Archives, Victory
- [ ] **5** — Signature 3D data-core (R3F + drei + postprocessing, LOW bloom; lazy, mobile/reduced-motion SVG fallback)
- [ ] **6** — EMR Boss Fight set-piece (scroll-linked HP 100%→60%)
- [ ] **7** — Skill-tree interactivity + motion/sound polish (sound muted by default)
- [ ] **8** — Reduced-motion / mobile collapse to clean vertical story
- [ ] **9** — Performance, a11y, SEO, Lighthouse ≥90, deploy

## 10 story beats (3 acts)
- **I — The Call:** 1) Mission Briefing · 2) Quest Map
- **II — The Trials:** 3) Storm → Engine · 4) ★ EMR Boss Fight · 5) DevHub Command Center · 6) The Foundry · 7) Research Wing
- **III — Mastery & the Offer:** 8) Skill Tree · 9) Archives · 10) Victory Room

## Quality bar
- [x] One base + one accent + one energy; gold = achievement stars only
- [x] ONE glass spec (single blur / border / radius)
- [x] `prefers-reduced-motion` honored globally + per component
- [x] Code-split Realm; Quick View is the instant hiring path
- [ ] Drop `public/sahithi-profile.jpg` (placeholder character card renders until then)
- [ ] Real LinkedIn / GitHub URLs in `content.ts`

## Stack
Vite · React · TypeScript · Tailwind · Framer Motion · lucide-react
(R3F + drei + @react-three/postprocessing added in Phase 5, for the hero core only)
