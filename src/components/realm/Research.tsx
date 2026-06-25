import { useState } from "react";
import { BadgeCheck } from "lucide-react";
import { RealmSection } from "../ui/RealmSection";
import { GlassPanel } from "../ui/GlassPanel";
import { MonoLabel } from "../ui/MonoLabel";
import { Reveal } from "../ui/Reveal";
import { projects } from "../../content";

const EXHIBITS = [
  { tab: "Pandemic Observatory", motif: "forecast" as const },
  { tab: "Revenue Arena", motif: "bars" as const },
  { tab: "Segmentation Lab", motif: "clusters" as const },
];

export function Research() {
  const [active, setActive] = useState(0);
  const project = projects[active];
  const exhibit = EXHIBITS[active];

  return (
    <RealmSection
      id="research"
      act="II"
      eyebrow="The Trials"
      title="The Research Wing"
      intro="Three exhibits, one room. Switch between the published forecasting work, the sales arena, and the segmentation lab."
      badge={{ label: "Research Artifacts Unlocked", mission: "The Research Wing" }}
    >
      <Reveal>
        {/* exhibit tabs */}
        <div role="tablist" aria-label="Research exhibits" className="mb-5 flex flex-wrap gap-2">
          {EXHIBITS.map((e, i) => (
            <button
              key={e.tab}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                active === i
                  ? "border-accent/50 bg-accent/10 text-text-hi"
                  : "border-glass-edge bg-glass text-text-lo hover:text-text-hi"
              }`}
            >
              {e.tab}
            </button>
          ))}
        </div>

        <GlassPanel className="grid gap-6 p-6 sm:p-8 md:grid-cols-2">
          <div className="grid place-items-center rounded-lg border border-glass-edge bg-surface/60 p-6">
            <Motif kind={exhibit.motif} />
          </div>
          <div>
            <MonoLabel tone="accent">{exhibit.tab}</MonoLabel>
            <h3 className="mt-2 text-lg font-semibold text-text-hi">{project.title}</h3>
            {project.published && (
              <span className="mt-2 inline-flex items-center gap-1.5 text-xs text-energy">
                <BadgeCheck size={14} /> Published
              </span>
            )}
            <p className="mt-3 text-sm leading-relaxed text-text-lo">{project.blurb}</p>
            <p className="mt-2 text-sm leading-relaxed text-text-lo">{project.outcome}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded border border-glass-edge bg-white/[0.02] px-2 py-0.5 font-mono text-[11px] text-text-lo"
                >
                  {s}
                </span>
              ))}
            </div>
            {project.published && (
              <p className="mt-3 font-mono text-[11px] text-text-lo/80">{project.published}</p>
            )}
          </div>
        </GlassPanel>
      </Reveal>
    </RealmSection>
  );
}

function Motif({ kind }: { kind: "forecast" | "bars" | "clusters" }) {
  if (kind === "forecast") {
    return (
      <svg viewBox="0 0 200 90" className="w-full max-w-xs" aria-hidden>
        <path d="M4 76 C 34 66, 50 42, 78 48 S 120 24, 132 32" fill="none" stroke="#38BDF8" strokeWidth="2" />
        <path d="M132 32 C 152 38, 168 16, 196 8" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="132" cy="32" r="3" fill="#8B5CF6" />
      </svg>
    );
  }
  if (kind === "bars") {
    const h = [28, 48, 38, 64, 22, 56, 44];
    return (
      <svg viewBox="0 0 200 90" className="w-full max-w-xs" aria-hidden>
        {h.map((v, i) => (
          <rect key={i} x={8 + i * 27} y={80 - v} width="16" height={v} rx="2" fill={i === 3 ? "#8B5CF6" : "rgba(255,255,255,0.14)"} />
        ))}
      </svg>
    );
  }
  // clusters
  const pts = [
    [40, 30, "#8B5CF6"], [55, 42, "#8B5CF6"], [48, 55, "#8B5CF6"],
    [140, 35, "#38BDF8"], [155, 50, "#38BDF8"], [148, 25, "#38BDF8"],
    [95, 70, "#F5C542"], [110, 62, "#F5C542"], [88, 58, "#F5C542"],
  ] as const;
  return (
    <svg viewBox="0 0 200 90" className="w-full max-w-xs" aria-hidden>
      {pts.map(([x, y, c], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill={c as string} fillOpacity="0.7" />
      ))}
    </svg>
  );
}
