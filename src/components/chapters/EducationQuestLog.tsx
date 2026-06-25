import { Award, CheckCircle2, GraduationCap } from "lucide-react";
import { ChapterHeader } from "../ui/ChapterHeader";
import { GlassCard } from "../ui/GlassCard";
import { Reveal } from "../ui/Reveal";
import { certifications, coursework, education } from "../../content";

export function EducationQuestLog() {
  return (
    <section id="education" className="mx-auto max-w-content scroll-mt-24 px-5 py-20 sm:px-8">
      <ChapterHeader
        chapter="CHAPTER 10"
        kicker="Education Quest Log"
        title="Completed quests & credentials."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {education.map((e, i) => (
          <Reveal key={e.degree} index={i}>
            <GlassCard interactive className="relative h-full p-6">
              <span className="absolute right-4 top-4 inline-flex items-center gap-1 font-mono text-[10px] text-success">
                <CheckCircle2 size={12} /> COMPLETE
              </span>
              <GraduationCap size={20} className="mb-3 text-sky" />
              <h3 className="text-base font-semibold leading-snug text-navy">{e.degree}</h3>
              <p className="mt-2 text-sm text-text-lo">{e.school}</p>
              <p className="mt-2 font-mono text-xs text-sky">{e.year}</p>
            </GlassCard>
          </Reveal>
        ))}

        <Reveal index={2}>
          <GlassCard interactive className="relative h-full p-6">
            <span className="absolute right-4 top-4 inline-flex items-center gap-1 font-mono text-[10px] text-success">
              <CheckCircle2 size={12} /> COMPLETE
            </span>
            <Award size={20} className="mb-3 text-gold" />
            {certifications.map((c) => (
              <h3 key={c.name} className="text-base font-semibold leading-snug text-navy">
                {c.name}
              </h3>
            ))}
            <p className="mt-2 text-sm text-text-lo">{certifications[0]?.issuer}</p>
          </GlassCard>
        </Reveal>
      </div>

      <Reveal className="mt-4">
        <GlassCard className="p-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-sky">Coursework badges</p>
          <div className="flex flex-wrap gap-2">
            {coursework.map((c) => (
              <span
                key={c}
                className="rounded-lg border border-sky/20 bg-white/65 px-3 py-1 font-mono text-xs text-luxnavy"
              >
                {c}
              </span>
            ))}
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
