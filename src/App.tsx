import { WorldProvider } from "./context/WorldContext";
import { CursorGlow, RawFragments } from "./components/Ambient";
import { SkyGameNav } from "./components/SkyGameNav";
import { HeroProfileIntro } from "./components/HeroProfileIntro";
import { DataStorm } from "./components/chapters/DataStorm";
import { CodeTransformationGate } from "./components/chapters/CodeTransformationGate";
import { EMROptimizationBattle } from "./components/chapters/EMROptimizationBattle";
import { DevHubCommandCenter } from "./components/chapters/DevHubCommandCenter";
import { GoldenRecordFactory } from "./components/chapters/GoldenRecordFactory";
import { AIPredictionObservatory } from "./components/chapters/AIPredictionObservatory";
import { BusinessIntelligenceGallery } from "./components/chapters/BusinessIntelligenceGallery";
import { CustomerSegmentationLab } from "./components/chapters/CustomerSegmentationLab";
import { SkillTreeOfIntelligence } from "./components/chapters/SkillTreeOfIntelligence";
import { EducationQuestLog } from "./components/chapters/EducationQuestLog";
import { RecruiterVictoryRoom } from "./components/chapters/RecruiterVictoryRoom";
import { profile } from "./content";

export default function App() {
  return (
    <WorldProvider>
      <div className="relative min-h-screen overflow-x-clip bg-sky-world">
        <CursorGlow />
        <RawFragments />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-sky focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>

        <SkyGameNav />

        <main id="main" className="relative z-10">
          <HeroProfileIntro />
          <DataStorm />
          <CodeTransformationGate />
          <EMROptimizationBattle />
          <DevHubCommandCenter />
          <GoldenRecordFactory />
          <AIPredictionObservatory />
          <BusinessIntelligenceGallery />
          <CustomerSegmentationLab />
          <SkillTreeOfIntelligence />
          <EducationQuestLog />
          <RecruiterVictoryRoom />
        </main>

        <footer className="relative z-10 border-t border-sky/15 bg-white/50">
          <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-6 py-8 text-xs text-text-lo sm:flex-row">
            <p>
              © {new Date().getFullYear()} {profile.name} · {profile.role}
            </p>
            <p className="font-mono text-sky">Data Ascension — From Raw Data Chaos to Cloud Intelligence</p>
          </div>
        </footer>
      </div>
    </WorldProvider>
  );
}
