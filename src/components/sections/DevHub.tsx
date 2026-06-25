import {
  Boxes,
  FileText,
  GitBranch,
  LayoutGrid,
  Radio,
  Rocket,
  Search,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader, Takeaway } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { Reveal } from "../ui/Reveal";

const MODULES: { name: string; detail: string; icon: LucideIcon }[] = [
  { name: "Service Catalog", detail: "Every service, owned & documented", icon: Boxes },
  { name: "API Docs", detail: "TechDocs rendered inline", icon: FileText },
  { name: "Developer Search", detail: "Find anything, instantly", icon: Search },
  { name: "Team Ownership", detail: "Teams mapped to systems", icon: Users },
  { name: "Monitoring", detail: "Signals & health at a glance", icon: Radio },
  { name: "Deployment Status", detail: "Pipelines, live", icon: Rocket },
  { name: "Tools", detail: "Scaffolds & templates", icon: GitBranch },
  { name: "Resource Center", detail: "Guides & onboarding", icon: LayoutGrid },
];

export function DevHub() {
  return (
    <section id="devhub" className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeader
        index="04"
        kicker="DevHub Product Experience"
        title="A premium internal developer platform."
        intro="Sahithi designed and developed DevHub frontend experiences from Figma, integrating Backstage and Wayfarer components to make developers faster."
      />

      <Reveal>
        <GlassCard className="overflow-hidden p-0">
          {/* product chrome */}
          <div className="flex items-center justify-between border-b border-edge/60 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-danger/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
              <span className="ml-3 font-mono text-xs text-text-lo">devhub · developer platform</span>
            </div>
            <span className="font-mono text-xs text-success">● live</span>
          </div>

          <div className="grid gap-px bg-edge/40 sm:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((m) => (
              <div
                key={m.name}
                className="group bg-darknavy p-5 transition hover:bg-white/[0.03]"
              >
                <div className="mb-2 inline-flex rounded-lg bg-sky/12 p-2 text-sky transition group-hover:bg-sky/20">
                  <m.icon size={16} />
                </div>
                <p className="text-sm font-semibold text-text-hi">{m.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-text-lo">{m.detail}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </Reveal>

      <Takeaway>
        She understands not only backend data work, but also product-quality developer experience.
      </Takeaway>
    </section>
  );
}
