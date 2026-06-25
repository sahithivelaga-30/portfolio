import { Award, GraduationCap } from "lucide-react";
import { Section } from "../ui/Section";
import { GlassCard } from "../ui/GlassCard";
import { MetricChip } from "../ui/MetricChip";
import { Reveal } from "../ui/Reveal";
import { certifications, coursework, education } from "../../content";

export function Education() {
  return (
    <Section id="education" eyebrow="The Foundation" title="Education & Credentials">
      <div className="grid gap-5 lg:grid-cols-3">
        {education.map((e, i) => (
          <Reveal key={e.degree} index={i}>
            <GlassCard interactive className="h-full p-6">
              <GraduationCap size={20} className="mb-4 text-accent" />
              <h3 className="text-base font-semibold leading-snug text-text-hi">{e.degree}</h3>
              <p className="mt-2 text-sm text-text-lo">{e.school}</p>
              <p className="mt-3 font-mono text-xs text-text-lo">{e.year}</p>
            </GlassCard>
          </Reveal>
        ))}

        <Reveal index={2}>
          <GlassCard interactive accentLine className="h-full p-6">
            <Award size={20} className="mb-4 text-accent" />
            <h3 className="text-base font-semibold leading-snug text-text-hi">Certification</h3>
            {certifications.map((c) => (
              <p key={c.name} className="mt-2 text-sm text-text-lo">
                {c.name}
                <span className="block font-mono text-xs text-text-lo/70">{c.issuer}</span>
              </p>
            ))}
          </GlassCard>
        </Reveal>
      </div>

      <Reveal index={1} className="mt-6">
        <GlassCard className="p-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-lo">
            Graduate coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {coursework.map((c) => (
              <MetricChip key={c}>{c}</MetricChip>
            ))}
          </div>
        </GlassCard>
      </Reveal>
    </Section>
  );
}
