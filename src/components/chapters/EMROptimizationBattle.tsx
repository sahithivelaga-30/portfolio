import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Cpu, GitBranch, HardDrive, ShieldCheck, Swords } from "lucide-react";
import { AchievementBadge } from "../ui/AchievementBadge";
import { Takeaway } from "../ui/ChapterHeader";

const WEAPONS = [
  { at: 0.25, icon: Swords, name: "PySpark Migration", detail: "UDFs → distributed processing" },
  { at: 0.5, icon: Cpu, name: "Java Performance Testing", detail: "Benchmarked the production stack" },
  { at: 0.75, icon: HardDrive, name: "AWS EMR Optimization", detail: "Right-sized clusters, cut spill" },
];

const PROBLEMS = [
  "Python UDF bottlenecks",
  "High AWS EMR resource usage",
  "Slow processing",
  "Cluster load pressure",
  "Scalability issues",
];

export function EMROptimizationBattle() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const hp = useTransform(scrollYProgress, [0.1, 0.85], [100, 60]);
  const hpWidth = useTransform(hp, (v) => `${v}%`);
  const [hpNum, setHpNum] = useState(100);
  const [progress, setProgress] = useState(0);
  useMotionValueEvent(hp, "change", (v) => setHpNum(Math.round(v)));
  useMotionValueEvent(scrollYProgress, "change", (v) => setProgress(v));
  const won = progress > 0.85;
  const nodeShake = useTransform(scrollYProgress, (v) => (won ? 0 : Math.sin(v * 40) * 1.5));

  if (reduce) return <BattleReduced />;

  return (
    <section id="battle" ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-content px-5 sm:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-sky/40 bg-white/70 px-3 py-1 font-mono text-xs font-medium tracking-[0.18em] text-sky">
              CHAPTER 03
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-lo">
              EMR Optimization Battle
            </span>
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-5xl">
            Boss: <span className="text-danger">Cluster Load Beast</span>
          </h2>

          <div className="mt-7 grid gap-6 lg:grid-cols-2">
            {/* Left — the overloaded system */}
            <div
              className={`glass overflow-hidden p-6 transition-colors duration-500 ${
                won ? "ring-1 ring-success/40" : "ring-1 ring-danger/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-lo">
                  {won ? "EMR · STABILIZED" : "EMR · OVERLOADED"}
                </span>
                <span className={`font-mono text-xs ${won ? "text-success" : "animate-pulse text-danger"}`}>
                  {won ? "● NOMINAL" : "● ALERT"}
                </span>
              </div>

              <div className="mt-4">
                <div className="mb-1.5 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.15em]">
                  <span className="text-text-lo">Cluster HP</span>
                  <span className="text-navy">{hpNum}%</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-softsky">
                  <motion.div
                    className={`h-full rounded-full ${won ? "bg-success" : "bg-gradient-to-r from-danger to-sky"}`}
                    style={{ width: hpWidth }}
                  />
                </div>
              </div>

              <motion.div className="mt-6 grid grid-cols-6 gap-2" style={{ x: nodeShake }}>
                {Array.from({ length: 18 }).map((_, i) => {
                  const hot = !won && (i * 7) % 5 < 2.2;
                  return (
                    <div
                      key={i}
                      className={`h-8 rounded border ${
                        won
                          ? "border-success/40 bg-success/10"
                          : hot
                            ? "border-danger/50 bg-danger/15"
                            : "border-sky/20 bg-white/60"
                      }`}
                    />
                  );
                })}
              </motion.div>

              <ul className="mt-5 space-y-1.5">
                {PROBLEMS.map((p) => (
                  <li key={p} className="flex items-center gap-2 font-mono text-[11px] text-text-lo">
                    <span className={`h-1.5 w-1.5 rounded-full ${won ? "bg-success" : "bg-danger"}`} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Sahithi's optimization dashboard */}
            <div className="space-y-3">
              {WEAPONS.map((w) => {
                const active = progress >= w.at;
                const Icon = w.icon;
                return (
                  <div
                    key={w.name}
                    className={`glass flex items-center gap-3 p-4 transition-all duration-500 ${
                      active ? "ring-1 ring-sky/40" : "opacity-60"
                    }`}
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${
                        active ? "bg-sky/15 text-sky" : "bg-softsky text-text-lo"
                      }`}
                    >
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-navy">{w.name}</p>
                      <p className="truncate font-mono text-[11px] text-text-lo">{w.detail}</p>
                    </div>
                    <span className={`ml-auto font-mono text-[11px] ${active ? "text-sky" : "text-text-lo"}`}>
                      {active ? "HIT" : "—"}
                    </span>
                  </div>
                );
              })}

              <div className="glass flex items-center gap-2 p-4">
                <GitBranch size={16} className="text-text-lo" />
                <span className="font-mono text-[11px] text-text-lo">Git / Bitbucket collaboration</span>
              </div>

              <motion.div
                animate={{ opacity: won ? 1 : 0.45, scale: won ? 1 : 0.98 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 rounded-panel border border-success/40 bg-success/10 p-4"
              >
                <ShieldCheck size={20} className="shrink-0 text-success" />
                <div>
                  <p className="text-sm font-semibold text-navy">Optimization Victory</p>
                  <p className="font-mono text-[11px] text-success">40% reduction in AWS EMR resources</p>
                </div>
              </motion.div>
            </div>
          </div>

          <p className="mt-7 text-center font-mono text-xs text-text-lo">
            scroll to land each tool · HP drains 100% → 60% · victory: −40% cluster resources
          </p>
        </div>
      </div>
    </section>
  );
}

function BattleReduced() {
  return (
    <section id="battle" className="mx-auto max-w-content scroll-mt-24 px-5 py-20 sm:px-8">
      <h2 className="text-3xl font-semibold text-navy sm:text-4xl">
        EMR Optimization Battle — <span className="text-danger">Cluster Load Beast</span>
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="glass p-6">
          <p className="font-mono text-xs text-danger">BEFORE · 100% HP</p>
          <p className="mt-3 text-sm text-text-lo">
            Python UDF bottlenecks, high AWS EMR resource usage, cluster load pressure.
          </p>
        </div>
        <div className="glass p-6">
          <p className="font-mono text-xs text-success">AFTER · 60% HP</p>
          <p className="mt-3 text-sm text-text-lo">
            PySpark migration + Java performance testing + EMR optimization → −40% resources.
          </p>
        </div>
      </div>
      <div className="mt-6">
        <AchievementBadge label="Optimization Victory — −40% EMR resources" />
      </div>
      <Takeaway>
        Sahithi improves performance, reduces resource usage, and makes cloud data systems more
        scalable.
      </Takeaway>
    </section>
  );
}
