import { CursorGlow } from "./components/Ambient";
import { SkyWorld } from "./components/SkyWorld";
import { Nav } from "./components/Nav";
import { TechTicker } from "./components/TechTicker";
import { Hero } from "./components/sections/Hero";
import { StoryPath } from "./components/sections/StoryPath";
import { CaseStudy } from "./components/sections/CaseStudy";
import { EngineeringLab } from "./components/sections/EngineeringLab";
import { DevHub } from "./components/sections/DevHub";
import { GoldenRecord } from "./components/sections/GoldenRecord";
import { Projects } from "./components/sections/Projects";
import { SkillsConstellation } from "./components/sections/SkillsConstellation";
import { Credentials } from "./components/sections/Credentials";
import { HRImpact } from "./components/sections/HRImpact";
import { profile } from "./content";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-world">
      <SkyWorld />
      <CursorGlow />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-sky focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main" className="relative z-10">
        <Hero />
        <TechTicker />
        <StoryPath />
        <CaseStudy />
        <EngineeringLab />
        <DevHub />
        <GoldenRecord />
        <Projects />
        <SkillsConstellation />
        <Credentials />
        <HRImpact />
      </main>

      <footer className="relative z-10 border-t border-edge/60 bg-darknavy/60">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-6 py-8 text-xs text-text-lo sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name} · Data Engineer / Software Engineer</p>
          <p className="font-mono text-sky">SAHITHI.EXE</p>
        </div>
      </footer>
    </div>
  );
}
