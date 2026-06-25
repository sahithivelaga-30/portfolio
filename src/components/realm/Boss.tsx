import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Cpu, HardDrive, Swords, Zap } from "lucide-react";
import { MonoLabel } from "../ui/MonoLabel";
import { AchievementBadge } from "../ui/AchievementBadge";

const WEAPONS = [
  { at: 0.2, icon: Cpu, name: "PySpark Migration", detail: "Python UDFs → distributed PySpark" },
  { at: 0.45, icon: Swords, name: "Java Perf Testing", detail: "Benchmarked the production stack" },
  { at: 0.7, icon: HardDrive, name: "EMR Tuning", detail: "Right-sized clusters, cut spill" },
];

/**
 * ★ The set-piece. Scroll-linked: the Cluster Load Beast's HP drains 100% → 60%
 * as three weapons land, ending on the −40% victory. Professional/abstract,
 * never a cartoon monster. Reduced-motion gets a clean before/after instead.
 */
export function Boss() {
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
  // node-grid jitter while overloaded (hoisted above the early return)
  const nodeShake = useTransform(scrollYProgress, (v) => (won ? 0 : Math.sin(v * 40) * 1.5));

  if (reduce) return <BossReducedMotion />;

  return (
    <section id="boss" ref={ref} className="relative h-[280vh]">
      {/* sticky stage */}
      <div className="sticky top-0 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-content px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <MonoLabel tone="accent">ACT II</MonoLabel>
            <span className="h-px w-8 bg-glass-edge" />
            <MonoLabel>★ Boss Fight</MonoLabel>
          </div>
          <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Cluster Load Beast</h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* The beast: overloaded cluster nodes */}
            <div
              className={`relative overflow-hidden rounded-panel border p-6 transition-colors duration-500 ${
                won ? "border-energy/40 bg-energy/[0.04]" : "border-red-500/30 bg-red-500/[0.05]"
              }`}
            >
              <div className="flex items-center justify-between">
                <MonoLabel tone={won ? "energy" : "accent"}>
                  {won ? "STATUS · STABILIZED" : "STATUS · OVERLOADED"}
                </MonoLabel>
                <span
                  className={`font-mono text-xs ${won ? "text-energy" : "animate-pulse text-red-400"}`}
                >
                  {won ? "● NOMINAL" : "● ALERT"}
                </span>
              </div>

              {/* HP bar */}
              <div className="mt-4">
                <div className="mb-1.5 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.15em]">
                  <span className="text-text-lo">Cluster HP</span>
                  <span className="text-text-hi">{hpNum}%</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    className={`h-full rounded-full ${won ? "bg-energy" : "bg-gradient-to-r from-red-500 to-accent"}`}
                    style={{ width: hpWidth }}
                  />
                </div>
              </div>

              {/* cluster node grid with CPU/mem spikes */}
              <motion.div
                className="mt-6 grid grid-cols-6 gap-2"
                style={{ x: nodeShake }}
              >
                {Array.from({ length: 18 }).map((_, i) => {
                  const hot = !won && (i * 7) % 5 < 2.2;
                  return (
                    <div
                      key={i}
                      className={`h-8 rounded border ${
                        won
                          ? "border-energy/30 bg-energy/10"
                          : hot
                            ? "border-red-500/50 bg-red-500/20"
                            : "border-glass-edge bg-white/[0.03]"
                      }`}
                    />
                  );
                })}
              </motion.div>
              <div className="mt-3 flex gap-4 font-mono text-[11px] text-text-lo">
                <span className="flex items-center gap-1">
                  <Cpu size={12} /> CPU {won ? "normal" : "spiking"}
                </span>
                <span className="flex items-center gap-1">
                  <Zap size={12} /> Mem {won ? "stable" : "saturated"}
                </span>
              </div>
            </div>

            {/* Weapons */}
            <div className="space-y-3">
              {WEAPONS.map((w) => {
                const active = progress >= w.at;
                const Icon = w.icon;
                return (
                  <div
                    key={w.name}
                    className={`flex items-center gap-3 rounded-panel border p-4 transition-all duration-500 ${
                      active
                        ? "border-accent/40 bg-accent/[0.06] opacity-100"
                        : "border-glass-edge bg-glass opacity-50"
                    }`}
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border ${
                        active ? "border-accent/50 bg-accent/15 text-accent" : "border-glass-edge text-text-lo"
                      }`}
                    >
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-text-hi">{w.name}</p>
                      <p className="truncate font-mono text-[11px] text-text-lo">{w.detail}</p>
                    </div>
                    <span className="ml-auto font-mono text-[11px] text-text-lo">
                      {active ? "HIT" : "—"}
                    </span>
                  </div>
                );
              })}

              <motion.div
                initial={false}
                animate={{ opacity: won ? 1 : 0.4, scale: won ? 1 : 0.98 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <AchievementBadge
                  label="Optimization Victory — −40% EMR resources"
                  mission="EMR Boss Fight"
                  unlocked={won}
                />
              </motion.div>
            </div>
          </div>

          <p className="mt-8 text-center font-mono text-xs text-text-lo">
            scroll to land each weapon · HP drains 100% → 60% · victory: −40% cluster resources
          </p>
        </div>
      </div>
    </section>
  );
}

/** Static, clean before/after for reduced-motion users. */
function BossReducedMotion() {
  return (
    <section id="boss" className="mx-auto w-full max-w-content scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="flex items-center gap-3">
        <MonoLabel tone="accent">ACT II</MonoLabel>
        <span className="h-px w-8 bg-glass-edge" />
        <MonoLabel>★ Boss Fight</MonoLabel>
      </div>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Cluster Load Beast</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-panel border border-red-500/30 bg-red-500/[0.05] p-6">
          <MonoLabel>BEFORE · 100% HP</MonoLabel>
          <p className="mt-3 text-sm text-text-lo">
            Overloaded EMR clusters, CPU/memory spikes, Python UDF bottlenecks.
          </p>
        </div>
        <div className="rounded-panel border border-energy/40 bg-energy/[0.05] p-6">
          <MonoLabel tone="energy">AFTER · 60% HP</MonoLabel>
          <p className="mt-3 text-sm text-text-lo">
            PySpark migration + Java perf testing + EMR tuning → −40% cluster resources.
          </p>
        </div>
      </div>
      <div className="mt-6 max-w-sm">
        <AchievementBadge label="Optimization Victory — −40% EMR resources" mission="EMR Boss Fight" />
      </div>
    </section>
  );
}
