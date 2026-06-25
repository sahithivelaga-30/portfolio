import { ArrowRight } from "lucide-react";
import { ChapterHeader } from "../ui/ChapterHeader";
import { GlassCard } from "../ui/GlassCard";
import { AchievementBadge } from "../ui/AchievementBadge";
import { Reveal } from "../ui/Reveal";

const FLOW = [
  { label: "Python Logic", tone: "raw" },
  { label: "PySpark Distributed Engine", tone: "sky" },
  { label: "Java Performance Module", tone: "purple" },
  { label: "Production-Ready Output", tone: "success" },
] as const;

export function CodeTransformationGate() {
  return (
    <section id="gate" className="mx-auto max-w-content scroll-mt-24 px-5 py-20 sm:px-8">
      <ChapterHeader
        chapter="CHAPTER 02"
        kicker="Code Transformation Gate"
        title="Turning Python bottlenecks into scalable processing."
        intro="At Experian, Sahithi migrated Python code into PySpark for optimized processing of filters, attributes, and UDFs, then migrated logic into Java — comparing Python UDFs, PySpark, and Java to identify the efficient, production-ready workflow."
      />

      <Reveal>
        <GlassCard className="p-6 sm:p-10">
          <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            {FLOW.map((f, i) => (
              <div key={f.label} className="flex flex-1 items-center gap-3">
                <div
                  className={[
                    "flex-1 rounded-xl border px-4 py-5 text-center text-sm font-medium",
                    f.tone === "raw"
                      ? "border-danger/25 bg-danger/5 text-danger"
                      : f.tone === "sky"
                        ? "border-sky/35 bg-sky/10 text-sky"
                        : f.tone === "purple"
                          ? "border-purpleaccent/30 bg-purpleaccent/10 text-purpleaccent"
                          : "border-success/35 bg-success/10 text-success",
                  ].join(" ")}
                >
                  {f.label}
                </div>
                {i < FLOW.length - 1 && (
                  <ArrowRight size={18} className="hidden shrink-0 text-sky md:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["Python UDFs", "Baseline — bottlenecked"],
              ["PySpark", "Distributed, parallel streams"],
              ["Java", "Perf-tested for production"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg border border-sky/15 bg-white/60 p-4">
                <p className="font-mono text-xs text-sky">{k}</p>
                <p className="mt-1 text-sm text-text-lo">{v}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </Reveal>

      <Reveal className="mt-8">
        <AchievementBadge label="Distributed Processing Unlocked" />
      </Reveal>
    </section>
  );
}
