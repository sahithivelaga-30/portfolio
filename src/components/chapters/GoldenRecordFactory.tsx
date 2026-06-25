import { ArrowRight } from "lucide-react";
import { ChapterHeader } from "../ui/ChapterHeader";
import { GlassCard } from "../ui/GlassCard";
import { AchievementBadge } from "../ui/AchievementBadge";
import { Reveal } from "../ui/Reveal";

const STAGES = [
  { label: "Raw Enterprise Data", tone: "raw" },
  { label: "Oracle", tone: "tool" },
  { label: "ETL", tone: "tool" },
  { label: "IDQ", tone: "tool" },
  { label: "Talend", tone: "tool" },
  { label: "Golden Records", tone: "gold" },
  { label: "BI Dashboards", tone: "success" },
] as const;

const BADGES = ["Enterprise Data Cleansed", "Golden Records Generated", "BI Reporting Enabled"];

export function GoldenRecordFactory() {
  return (
    <section id="foundry" className="mx-auto max-w-content scroll-mt-24 px-5 py-20 sm:px-8">
      <ChapterHeader
        chapter="CHAPTER 05"
        kicker="Golden Record Factory"
        title="Turning messy enterprise data into trusted records."
        intro="At TCS for client Ecolab, Sahithi worked on enterprise data workflows that transformed raw data into reliable golden records for downstream BI reporting teams."
      />

      <Reveal>
        <GlassCard className="p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            {STAGES.map((s, i) => (
              <div key={s.label} className="flex items-center gap-3">
                <div
                  className={[
                    "rounded-xl border px-4 py-3 text-sm font-medium",
                    s.tone === "raw"
                      ? "border-danger/25 bg-danger/5 text-danger"
                      : s.tone === "gold"
                        ? "border-gold/45 bg-gold/10 text-[#9a7b18] shadow-[0_0_18px_rgba(212,175,55,0.18)]"
                        : s.tone === "success"
                          ? "border-success/35 bg-success/10 text-success"
                          : "border-sky/30 bg-sky/8 text-sky",
                  ].join(" ")}
                >
                  {s.label}
                </div>
                {i < STAGES.length - 1 && <ArrowRight size={16} className="shrink-0 text-text-lo" />}
              </div>
            ))}
          </div>
          <p className="mt-6 border-t border-sky/15 pt-4 font-mono text-xs text-text-lo">
            messy cubes → Oracle · ETL · IDQ · Talend → glowing golden records → BI
          </p>
        </GlassCard>
      </Reveal>

      <Reveal className="mt-8 flex flex-wrap gap-2.5">
        {BADGES.map((b) => (
          <AchievementBadge key={b} label={b} />
        ))}
      </Reveal>
    </section>
  );
}
