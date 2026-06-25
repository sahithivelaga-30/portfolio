# DATA REALM — Creative Brief (reference)

Cinematic, gaming-style storytelling portfolio for **Sahithi Velaga**, Data Engineer.
Bar: Awwwards Site of the Day — cinematic, but fast, accessible, recruiter-effective.
**Premium comes from restraint and craft, not from more effects.** When in doubt, remove
an effect and improve the easing.

## Prime directive: two doors, nothing gated
After a <1.5s skippable boot, present two paths:
1. **Enter the Realm** — full cinematic, scroll-driven game world.
2. **Quick View (Recruiter Mode)** — instant, scannable: photo + name + role + tagline +
   40% metric + grouped skills + experience + projects + education + Download Resume + contact.
Every fact in the realm is also reachable without playing. Game = delight, not a gate.
Resume + Quick View are always one click away in the HUD.

## Candidate (exact — never inflate titles)
- **Sahithi Velaga** — Data Engineer — Arlington, TX · sahithivelaga@gmail.com · (469) 653-5291
- Tagline: **"From raw data chaos to cloud intelligence."**
- Signature proof: **40% reduction in AWS EMR cluster resource consumption.**
- Photo: `public/sahithi-profile.jpg` (placeholder character card if missing — never a broken img).

## History (accurate titles)
1. **Software Engineering Intern — Experian** (Aug 2024–Nov 2025): Python→PySpark (filters,
   attributes, UDFs, India); Python→Java (Italy bureau) + comparative perf testing to pick the
   production stack; built **DevHub** frontend from Figma w/ **Backstage**+**Wayfarer**; tuned
   **AWS EMR** → **−40%** cluster resources; Git/Bitbucket.
2. **Assistant System Engineer — TCS** (Nov 2021–Sep 2022): client **Ecolab**; ETL
   (**Oracle, IDQ, Talend**) → **golden records** for BI.
3. **Data Science Intern — Exposys Data Labs** (Aug–Sep 2020): K-Means + elbow (WCSS) segmentation.

## Projects
- **COVID-19 Outbreak Analysis & Prediction (India)** — Kaggle/JHU/WHO; FB Prophet. *Published, ICICI-21, ISSN 00250422.*
- **Electronics Sales Analysis** — 2019 Kaggle, Python.
- **Web App for Ayurvedic Medication Seekers** — *Published, IJRAR Vol 7 Issue 3, Sep 2020.*

## Education / creds
M.S. CS — UT Arlington (2024) · B.Tech CSE — VR Siddhartha (2021) · **Azure AI-900**.

## Visual system (craft rules)
Palette: `--void #050510`, `--surface #0C0C1A`, one glass fill + one glass border
`rgba(140,120,255,0.18)`, `--accent #8B5CF6` (world color), `--energy #38BDF8` (sparingly),
`--gold #F5C542` (achievement stars ONLY), `--text-hi #F4F4FA`, `--text-lo #9090A8`.
**One** blur value, **one** border opacity, **one** corner radius for every glass panel.

3D craft (Phase 5+): LOW bloom; one soft key + rim light; fog; shallow DoF on hero; low-poly
geometry; few large slow blurred low-opacity particles (not a swarm); recurring "data node"
crystal/octahedron motif. Motion: custom easing ~0.6–0.9s `cubic-bezier(0.22,1,0.36,1)`,
never linear/bouncy. HUD grammar: corner brackets, mono labels, hairline rules, XP scroll bar,
film grain + vignette. Sound optional, **muted by default**, visible toggle, never autoplay.

## Story flow — 3 acts, 10 beats
- **I — The Call:** Mission Briefing (hero + character card + 3D data-core) · Quest Map.
- **II — The Trials:** Storm→Engine (PySpark/Java migration) · ★ EMR Boss Fight (HP 100%→60%,
  −40% victory) · DevHub Command Center · The Foundry (golden records) · Research Wing
  (COVID / sales / segmentation exhibits).
- **III — Mastery & the Offer:** Skill Tree · Archives (education + AI-900 + publications) ·
  Victory Room (Open to Data/Software/Analytics Engineering roles; Email · Resume · LinkedIn · GitHub).

## Non-negotiables
Lighthouse Perf ≥90 desktop; defer/code-split 3D; no layout shift. Semantic landmarks, keyboard
nav, visible focus, AA contrast, alt text, full `prefers-reduced-motion` collapse to a clean
vertical story. Mobile-first, no 3D on mobile (static fallback). SEO + OG + favicon. All content
in typed `src/content.ts`. Never alter a title or invent a metric.
