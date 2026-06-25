import { RealmSection } from "../ui/RealmSection";
import { GlassPanel } from "../ui/GlassPanel";
import { MonoLabel } from "../ui/MonoLabel";
import { XPBar } from "../ui/XPBar";
import { Reveal } from "../ui/Reveal";
import { skillGroups } from "../../content";

// XP per branch — proficiency signal, not invented metrics about the role.
const XP: Record<string, number> = {
  Languages: 92,
  "Python stack": 88,
  "Cloud & DevOps": 85,
  Databases: 80,
  "Data & Platforms": 78,
};

export function SkillTree() {
  return (
    <RealmSection
      id="skills"
      act="III"
      eyebrow="Mastery"
      title="Skill Tree"
      intro="Five branches of mastery. Each node is a tool she has shipped with. Degrades to this clean, readable grid on mobile and under reduced-motion."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.label} index={i} className="h-full">
            <GlassPanel className="h-full p-6" interactive>
              <div className="mb-4 flex items-center justify-between">
                <MonoLabel tone="accent">{g.label}</MonoLabel>
                <MonoLabel>{g.skills.length} nodes</MonoLabel>
              </div>
              <XPBar value={XP[g.label] ?? 80} label="Branch XP" className="mb-4" />
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-glass-edge bg-white/[0.02] px-2.5 py-1 text-sm text-text-lo transition-colors hover:border-accent/40 hover:text-text-hi"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </GlassPanel>
          </Reveal>
        ))}
      </div>
    </RealmSection>
  );
}
