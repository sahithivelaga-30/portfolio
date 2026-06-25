import {
  Boxes,
  FileText,
  GitBranch,
  Plug,
  Rocket,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Section } from "../ui/Section";
import { GlassCard } from "../ui/GlassCard";
import { Reveal } from "../ui/Reveal";
import { devhub } from "../../content";

const ICONS: LucideIcon[] = [Boxes, FileText, Plug, Rocket, Users, GitBranch];

export function DevHub() {
  return (
    <Section
      id="devhub"
      eyebrow="The Workshop"
      title="DevHub Developer Portal"
      intro={devhub.blurb}
    >
      <Reveal>
        <GlassCard className="overflow-hidden" accentLine>
          {/* Mock window chrome */}
          <div className="flex items-center gap-2 border-b border-glass-edge px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="ml-3 font-mono text-xs text-text-lo">devhub · internal.experian</span>
          </div>

          <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-3">
            {devhub.modules.map((m, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <div
                  key={m.name}
                  className="group rounded-xl border border-glass-edge bg-white/[0.02] p-4 transition hover:border-white/20 hover:bg-white/[0.04]"
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
        </GlassCard>
      </Reveal>
    </Section>
  );
}
