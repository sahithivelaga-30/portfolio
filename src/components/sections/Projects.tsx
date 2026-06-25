import { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { Pill } from "../ui/AchievementBadge";
import { Reveal } from "../ui/Reveal";

type Motif = "covid" | "sales" | "clusters";

interface Mission {
  title: string;
  motif: Motif;
  problem: string;
  method: string;
  output: string;
  value: string;
  tools: string[];
}

const MISSIONS: Mission[] = [
  {
    title: "COVID-19 Outbreak Analysis & Prediction",
    motif: "covid",
    problem: "Outbreak data was scattered and hard to interpret.",
    method: "Bar/scatter/interactive plots + FB Prophet forecasting.",
    output: "Forecasted outbreak trajectories for India.",
    value: "Published — ICICI-21 (ISSN 00250422).",
    tools: ["Kaggle", "JHU", "WHO", "FB Prophet"],
  },
  {
    title: "Electronics Sales Data Analysis",
    motif: "sales",
    problem: "2019 sales data held hidden commercial patterns.",
    method: "Python data cleaning + visual analysis.",
    output: "Best-selling products, top location, peak periods.",
    value: "Sharper inventory & timing decisions.",
    tools: ["Python", "Pandas", "Matplotlib"],
  },
  {
    title: "Customer Segmentation",
    motif: "clusters",
    problem: "Customers needed meaningful grouping.",
    method: "K-Means + WCSS + elbow method.",
    output: "Distinct income/spending segments.",
    value: "Targetable customer groups.",
    tools: ["K-Means", "WCSS", "Elbow"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeader
        index="06"
        kicker="Analytics Missions"
        title="Data put to work — analysis, forecasting, segmentation."
        intro="Three project missions, each framed the way a recruiter reads value: problem, method, output, and business impact."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {MISSIONS.map((m, i) => (
          <Reveal key={m.title} index={i} className="h-full">
            <MissionCard mission={m} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function MissionCard({ mission }: { mission: Mission }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setTilt({ x: ((e.clientY - r.top) / r.height - 0.5) * -5, y: ((e.clientX - r.left) / r.width - 0.5) * 5 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      className="glass hud h-full p-5 transition-shadow duration-300 hover:shadow-glass-lift"
    >
      <div className="mb-4 grid place-items-center rounded-xl border border-edge bg-darknavy/60 p-4">
        <Motif kind={mission.motif} />
      </div>
      <h3 className="font-display text-base font-semibold leading-snug text-text-hi">{mission.title}</h3>

      <dl className="mt-3 space-y-2 text-sm">
        {([
          ["Problem", mission.problem],
          ["Method", mission.method],
          ["Output", mission.output],
          ["Value", mission.value],
        ] as const).map(([k, v]) => (
          <div key={k} className="flex gap-2">
            <dt className="shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] text-sky">{k}</dt>
            <dd className="text-text-lo">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {mission.tools.map((t) => (
          <Pill key={t} tone="mono">{t}</Pill>
        ))}
      </div>
    </div>
  );
}

function Motif({ kind }: { kind: Motif }) {
  if (kind === "covid") {
    return (
      <svg viewBox="0 0 200 90" className="w-full max-w-[14rem]" aria-hidden>
        <path d="M70 12 L112 20 L128 48 L110 74 L88 86 L72 66 L56 56 L52 34 Z" fill="rgba(56,189,248,0.1)" stroke="#38BDF8" strokeWidth="1.3" />
        {[[84, 40], [98, 52], [76, 60]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.6" fill="#8B5CF6" />
        ))}
        <path d="M140 78 C 158 62, 168 40, 184 30" fill="none" stroke="#22D3EE" strokeWidth="2" />
        <path d="M184 30 C 190 24, 194 18, 198 12" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    );
  }
  if (kind === "sales") {
    const h = [26, 44, 34, 58, 22, 50, 40];
    return (
      <svg viewBox="0 0 200 90" className="w-full max-w-[14rem]" aria-hidden>
        {h.map((v, i) => (
          <rect key={i} x={10 + i * 27} y={78 - v} width="16" height={v} rx="2" fill={i === 3 ? "#38BDF8" : "rgba(56,189,248,0.25)"} />
        ))}
      </svg>
    );
  }
  const groups = [
    { c: "#38BDF8", pts: [[40, 34], [54, 46], [46, 58]] },
    { c: "#22D3EE", pts: [[140, 38], [154, 52], [146, 28]] },
    { c: "#8B5CF6", pts: [[92, 70], [106, 62], [86, 56]] },
  ];
  return (
    <svg viewBox="0 0 200 90" className="w-full max-w-[14rem]" aria-hidden>
      {groups.map((g) =>
        g.pts.map(([x, y], i) => <circle key={`${g.c}-${i}`} cx={x} cy={y} r="5" fill={g.c} fillOpacity="0.75" />)
      )}
    </svg>
  );
}
