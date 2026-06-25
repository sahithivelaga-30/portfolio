import { Award, GraduationCap, ScrollText } from "lucide-react";
import { RealmSection } from "../ui/RealmSection";
import { GlassPanel } from "../ui/GlassPanel";
import { HUDFrame } from "../ui/HUDFrame";
import { MonoLabel } from "../ui/MonoLabel";
import { Reveal } from "../ui/Reveal";
import { certifications, coursework, education, projects } from "../../content";

/** Education + AI-900 + publications as "unlocked artifacts". */
export function Archives() {
  const publications = projects.filter((p) => p.published);

  return (
    <RealmSection
      id="archives"
      act="III"
      eyebrow="Credentials"
      title="Archives"
      intro="Unlocked artifacts — degrees, certification, and published research, stamped complete."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {education.map((e, i) => (
          <Reveal key={e.degree} index={i}>
            <HUDFrame className="h-full rounded-panel border border-glass-edge bg-glass p-5 backdrop-blur-[16px]">
              <GraduationCap size={20} className="mb-3 text-accent" />
              <MonoLabel tone="energy">● UNLOCKED</MonoLabel>
              <h3 className="mt-2 text-base font-semibold text-text-hi">{e.degree}</h3>
              <p className="mt-1 text-sm text-text-lo">{e.school}</p>
              <p className="mt-2 font-mono text-xs text-text-lo">{e.year}</p>
            </HUDFrame>
          </Reveal>
        ))}

        <Reveal index={2}>
          <HUDFrame className="h-full rounded-panel border border-glass-edge bg-glass p-5 backdrop-blur-[16px]">
            <Award size={20} className="mb-3 text-gold" />
            <MonoLabel tone="energy">● UNLOCKED</MonoLabel>
            {certifications.map((c) => (
              <h3 key={c.name} className="mt-2 text-base font-semibold text-text-hi">
                {c.name}
              </h3>
            ))}
            <p className="mt-1 text-sm text-text-lo">{certifications[0]?.issuer}</p>
          </HUDFrame>
        </Reveal>
      </div>

      <Reveal className="mt-4">
        <GlassPanel className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <ScrollText size={16} className="text-accent" />
            <MonoLabel>Publications</MonoLabel>
          </div>
          <ul className="space-y-2">
            {publications.map((p) => (
              <li key={p.title} className="text-sm text-text-lo">
                <span className="text-text-hi">{p.title}</span> — {p.published}
              </li>
            ))}
          </ul>
        </GlassPanel>
      </Reveal>

      <Reveal className="mt-4">
        <GlassPanel className="p-6">
          <MonoLabel>Graduate coursework</MonoLabel>
          <div className="mt-3 flex flex-wrap gap-2">
            {coursework.map((c) => (
              <span
                key={c}
                className="rounded border border-glass-edge bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-text-lo"
              >
                {c}
              </span>
            ))}
          </div>
        </GlassPanel>
      </Reveal>
    </RealmSection>
  );
}
