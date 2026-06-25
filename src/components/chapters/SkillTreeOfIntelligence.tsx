import { ChapterHeader } from "../ui/ChapterHeader";
import { GlassCard } from "../ui/GlassCard";
import { Reveal } from "../ui/Reveal";
import { skillTree } from "../../content";

export function SkillTreeOfIntelligence() {
  return (
    <section id="skills" className="mx-auto max-w-content scroll-mt-24 px-5 py-20 sm:px-8">
      <ChapterHeader
        chapter="CHAPTER 09"
        kicker="Skill Tree of Intelligence"
        title="Seven branches, earned through the journey."
        intro="Each node is a tool Sahithi has shipped with. Hover to highlight a branch; it stays a clean, readable grid on mobile and under reduced-motion."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillTree.map((b, i) => (
          <Reveal key={b.branch} index={i % 3} className="h-full">
            <GlassCard interactive className="group h-full p-5">
              <div className="mb-3 flex items-center justify-between">
                <p className="font-semibold text-navy">{b.branch}</p>
                <span className="font-mono text-xs text-sky">{b.xp} XP</span>
              </div>
              <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-softsky">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky to-cyan transition-[width] duration-700"
                  style={{ width: `${b.xp}%` }}
                />
              </div>
              {/* node chain */}
              <ul className="space-y-1.5 border-l border-sky/20 pl-3">
                {b.skills.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="-ml-[19px] h-2 w-2 rounded-full border border-sky/50 bg-white transition group-hover:bg-sky" />
                    <span className="text-sm text-text-lo transition-colors group-hover:text-navy">{s}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
