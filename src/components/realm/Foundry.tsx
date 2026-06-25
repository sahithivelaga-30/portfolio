import { ArrowRight } from "lucide-react";
import { RealmSection } from "../ui/RealmSection";
import { GlassPanel } from "../ui/GlassPanel";
import { MonoLabel } from "../ui/MonoLabel";
import { Reveal } from "../ui/Reveal";

const STAGES = [
  { label: "Raw data", tone: "raw" },
  { label: "Oracle", tone: "tool" },
  { label: "IDQ", tone: "tool" },
  { label: "Talend", tone: "tool" },
  { label: "Golden records", tone: "gold" },
  { label: "BI reporting", tone: "energy" },
] as const;

/** The Foundry: messy cubes → ETL → golden records → BI. (TCS / Ecolab) */
export function Foundry() {
  return (
    <RealmSection
      id="foundry"
      act="II"
      eyebrow="The Trials"
      title="The Foundry"
      intro="At TCS for client Ecolab: dark, messy source data enters the forge — Oracle, IDQ, and Talend refine it into clean golden records that flow downstream to BI reporting."
      badge={{ label: "Golden Records Forged", mission: "The Foundry" }}
    >
      <Reveal>
        <GlassPanel className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            {STAGES.map((s, i) => (
              <div key={s.label} className="flex items-center gap-3">
                <div
                  className={[
                    "rounded-lg border px-4 py-3 text-sm font-medium",
                    s.tone === "raw"
                      ? "border-glass-edge bg-white/[0.03] text-text-lo"
                      : s.tone === "gold"
                        ? "border-gold/40 bg-gold/10 text-gold shadow-[0_0_18px_rgba(245,197,66,0.2)]"
                        : s.tone === "energy"
                          ? "border-energy/40 bg-energy/[0.06] text-energy"
                          : "border-accent/30 bg-accent/[0.06] text-text-hi",
                  ].join(" ")}
                >
                  {s.label}
                </div>
                {i < STAGES.length - 1 && (
                  <ArrowRight size={16} className="shrink-0 text-text-lo" />
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 border-t border-glass-edge pt-4">
            <MonoLabel>ETL · Oracle · IDQ · Talend → golden records → BI</MonoLabel>
          </p>
        </GlassPanel>
      </Reveal>
    </RealmSection>
  );
}
