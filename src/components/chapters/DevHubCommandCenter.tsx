import {
  Boxes,
  Cloud,
  FileText,
  GitBranch,
  Radio,
  Rocket,
  Search,
  Users,
  type LucideIcon,
} from "lucide-react";
import { ChapterHeader, Takeaway } from "../ui/ChapterHeader";
import { GlassCard } from "../ui/GlassCard";
import { AchievementBadge } from "../ui/AchievementBadge";
import { Reveal } from "../ui/Reveal";

const MODULES: { name: string; detail: string; icon: LucideIcon }[] = [
  { name: "Service Catalog", detail: "Ownership & metadata per service", icon: Boxes },
  { name: "API Documentation", detail: "TechDocs rendered inline", icon: FileText },
  { name: "Cloud Resources", detail: "Provisioned infra at a glance", icon: Cloud },
  { name: "Deployment Status", detail: "Pipeline health, live", icon: Rocket },
  { name: "Team Ownership", detail: "Teams mapped to systems", icon: Users },
  { name: "Monitoring", detail: "Signals & alerts", icon: Radio },
  { name: "Developer Tools", detail: "Scaffolds & templates", icon: GitBranch },
  { name: "Search Portal", detail: "Find anything fast", icon: Search },
];

export function DevHubCommandCenter() {
  return (
    <section id="devhub" className="mx-auto max-w-content scroll-mt-24 px-5 py-20 sm:px-8">
      <ChapterHeader
        chapter="CHAPTER 04"
        kicker="DevHub Command Center"
        title="Building better experiences for developers."
        intro="Sahithi designed and developed the DevHub portal frontend from Figma, integrating Backstage and Wayfarer components to deliver a modern, intuitive developer experience."
      />

      <Reveal>
        <GlassCard className="overflow-hidden p-1.5">
          <div className="flex items-center justify-between border-b border-sky/15 px-5 py-3">
            <div className="flex items-center gap-2">
              <Radio size={14} className="text-cyan" />
              <span className="font-mono text-xs text-text-lo">devhub · internal.experian</span>
            </div>
            <span className="font-mono text-xs text-success">● 8 MODULES ONLINE</span>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((m) => (
              <div
                key={m.name}
                className="group rounded-xl border border-sky/15 bg-white/60 p-4 transition hover:-translate-y-1 hover:border-sky/40 hover:shadow-glass"
              >
                <div className="mb-2 inline-flex rounded-lg bg-sky/12 p-2 text-sky transition group-hover:bg-sky/20">
                  <m.icon size={16} />
                </div>
                <p className="text-sm font-semibold text-navy">{m.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-text-lo">{m.detail}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </Reveal>

      <Reveal className="mt-8">
        <AchievementBadge label="Developer Platform Built" />
      </Reveal>
      <Takeaway>Sahithi understands both data systems and developer productivity.</Takeaway>
    </section>
  );
}
