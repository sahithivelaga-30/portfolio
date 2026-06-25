import {
  Boxes,
  FileText,
  GitBranch,
  Plug,
  Radio,
  Rocket,
  Users,
  type LucideIcon,
} from "lucide-react";
import { RealmSection } from "../ui/RealmSection";
import { HUDFrame } from "../ui/HUDFrame";
import { MonoLabel } from "../ui/MonoLabel";
import { Reveal } from "../ui/Reveal";
import { devhub } from "../../content";

const ICONS: LucideIcon[] = [Boxes, FileText, Plug, Rocket, Users, GitBranch];

export function DevHubCenter() {
  return (
    <RealmSection
      id="devhub"
      act="II"
      eyebrow="The Trials"
      title="DevHub Command Center"
      intro={devhub.blurb}
      badge={{ label: "Developer Platform Built", mission: "DevHub Command Center" }}
    >
      <Reveal>
        <HUDFrame className="rounded-panel border border-glass-edge bg-glass p-1 backdrop-blur-[16px]">
          {/* command-center chrome */}
          <div className="flex items-center justify-between border-b border-glass-edge px-5 py-3">
            <div className="flex items-center gap-2">
              <Radio size={14} className="text-energy" />
              <MonoLabel>devhub · internal.experian</MonoLabel>
            </div>
            <MonoLabel tone="energy">● 6 MODULES ONLINE</MonoLabel>
          </div>

          <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
            {devhub.modules.map((m, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <div
                  key={m.name}
                  className="group rounded-lg border border-glass-edge bg-white/[0.02] p-4 transition hover:border-accent/40 hover:bg-white/[0.04]"
                >
                  <div className="mb-2 inline-flex rounded-lg border border-glass-edge bg-glass p-2 text-accent">
                    <Icon size={16} />
                  </div>
                  <p className="text-sm font-medium text-text-hi">{m.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-text-lo">{m.detail}</p>
                </div>
              );
            })}
          </div>
        </HUDFrame>
      </Reveal>
    </RealmSection>
  );
}
