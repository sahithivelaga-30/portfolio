import { ArrowRight, Database, Sparkles } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { Reveal } from "../ui/Reveal";

const STAGES = [
  { label: "Raw Enterprise Data", tone: "raw" },
  { label: "Oracle", tone: "tool" },
  { label: "ETL", tone: "tool" },
  { label: "IDQ", tone: "tool" },
  { label: "Talend", tone: "tool" },
  { label: "Golden Record", tone: "gold" },
  { label: "BI Reporting", tone: "success" },
] as const;

export function GoldenRecord() {
  return (
    <section id="golden" className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeader
        index="05"
        kicker="Golden Record Pipeline"
        title="Turning raw enterprise data into trusted records."
        intro="At TCS for client Ecolab, Sahithi built data workflows that transformed raw enterprise data into reliable golden records for downstream BI reporting."
      />

      <Reveal>
        <GlassCard className="p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            {STAGES.map((s, i) => (
              <div key={s.label} className="flex items-center gap-3">
                <div
                  className={[
                    "flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium",
                    s.tone === "raw"
                      ? "border-danger/25 bg-danger/[0.06] text-danger"
                      : s.tone === "gold"
                        ? "border-gold/45 bg-gold/10 text-gold shadow-[0_0_20px_rgba(245,197,66,0.2)]"
                        : s.tone === "success"
                          ? "border-success/35 bg-success/10 text-success"
                          : "border-sky/30 bg-sky/[0.08] text-sky",
                  ].join(" ")}
                >
                  {s.tone === "gold" && <Sparkles size={14} />}
                  {s.tone === "tool" && <Database size={14} className="opacity-70" />}
                  {s.label}
                </div>
                {i < STAGES.length - 1 && <ArrowRight size={16} className="shrink-0 text-text-lo" />}
              </div>
            ))}
          </div>
          <p className="mt-6 border-t border-edge/60 pt-4 font-mono text-xs text-text-lo">
            raw particles → cleansing & filtering → glowing golden record → BI dashboards light up
          </p>
        </GlassCard>
      </Reveal>
    </section>
  );
}
