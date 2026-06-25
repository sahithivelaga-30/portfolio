import { Award, CheckCircle2, GraduationCap } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { Reveal } from "../ui/Reveal";
import { certifications, coursework, education } from "../../content";

export function Credentials() {
  return (
    <section id="credentials" className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeader index="08" kicker="Credentials" title="Education & certification." />

      <div className="grid gap-4 lg:grid-cols-3">
        {education.map((e, i) => (
          <Reveal key={e.degree} index={i}>
            <GlassCard hud interactive className="relative h-full p-6">
              <span className="absolute right-4 top-4 inline-flex items-center gap-1 font-mono text-[10px] text-success">
                <CheckCircle2 size={12} /> COMPLETE
              </span>
              <GraduationCap size={20} className="mb-3 text-sky" />
              <h3 className="font-display text-base font-semibold leading-snug text-text-hi">{e.degree}</h3>
              <p className="mt-2 text-sm text-text-lo">{e.school}</p>
              <p className="mt-2 font-mono text-xs text-sky">{e.year}</p>
            </GlassCard>
          </Reveal>
        ))}

        <Reveal index={2}>
          <GlassCard hud interactive className="relative h-full p-6">
            <span className="absolute right-4 top-4 inline-flex items-center gap-1 font-mono text-[10px] text-success">
              <CheckCircle2 size={12} /> COMPLETE
            </span>
            <Award size={20} className="mb-3 text-gold" />
            {certifications.map((c) => (
              <h3 key={c.name} className="font-display text-base font-semibold leading-snug text-text-hi">
                {c.name}
              </h3>
            ))}
            <p className="mt-2 text-sm text-text-lo">{certifications[0]?.issuer}</p>
          </GlassCard>
        </Reveal>
      </div>

      <Reveal className="mt-4">
        <GlassCard className="p-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-sky">Coursework</p>
          <div className="flex flex-wrap gap-2">
            {coursework.map((c) => (
              <span key={c} className="rounded-lg border border-edge bg-white/[0.03] px-3 py-1 font-mono text-xs text-text-lo">
                {c}
              </span>
            ))}
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
