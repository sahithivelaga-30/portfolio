import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { RealmSection } from "../ui/RealmSection";
import { GlassPanel } from "../ui/GlassPanel";
import { MonoLabel } from "../ui/MonoLabel";

const RAW = ["nulls", "skew", "Python UDF", "bottleneck", "retry", "spill", "OOM", "lag"];
const ORDERED = ["partitioned", "PySpark", "vectorized", "Java-tested", "cached", "scaled"];

/** Storm → Engine: scroll turns chaotic raw data into ordered glowing streams. */
export function Engine() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // 0 = storm, 1 = ordered engine
  const order = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);
  const chaosOpacity = useTransform(order, [0, 1], [1, 0]);
  const streamOpacity = useTransform(order, [0, 1], [0, 1]);

  return (
    <RealmSection
      id="engine"
      act="II"
      eyebrow="The Trials"
      title="The Storm → The Engine"
      intro="At Experian, Python UDF bottlenecks and skewed loads were the storm. Migrating the India region to distributed PySpark — and perf-testing Python UDFs vs PySpark vs Java for the Italy bureau — turned chaos into an ordered, production-ready engine."
      badge={{ label: "Distributed Processing Unlocked", mission: "The Storm → The Engine" }}
    >
      <div ref={ref}>
        <GlassPanel className="relative overflow-hidden p-6 sm:p-8">
          <div className="grid items-center gap-6 md:grid-cols-2">
            {/* Storm side */}
            <div className="relative h-44">
              <MonoLabel className="absolute left-0 top-0 z-10">RAW STORM</MonoLabel>
              {RAW.map((t, i) => (
                <motion.span
                  key={t}
                  style={{
                    position: "absolute",
                    left: `${(i * 37) % 72}%`,
                    top: `${22 + ((i * 53) % 58)}%`,
                    ...(reduce ? {} : { opacity: chaosOpacity }),
                  }}
                  className="rounded border border-glass-edge bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-text-lo"
                  animate={
                    reduce ? undefined : { x: [0, (i % 3) * 8 - 8, 0], y: [0, (i % 2) * 10 - 5, 0] }
                  }
                  transition={{ duration: 5 + (i % 4), repeat: Infinity, ease: "easeInOut" }}
                >
                  {t}
                </motion.span>
              ))}
            </div>

            {/* Engine side */}
            <div className="relative h-44">
              <MonoLabel tone="energy" className="absolute right-0 top-0">
                ORDERED ENGINE
              </MonoLabel>
              <motion.div
                style={reduce ? undefined : { opacity: streamOpacity }}
                className="flex h-full flex-col justify-center gap-2"
              >
                {ORDERED.map((t, i) => (
                  <div key={t} className="flex items-center gap-2">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-energy/60" />
                    <span className="rounded border border-energy/30 bg-energy/[0.06] px-2 py-0.5 font-mono text-[11px] text-energy">
                      {t}
                    </span>
                    <span className="font-mono text-[10px] text-text-lo">0{i + 1}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <p className="mt-6 border-t border-glass-edge pt-4 text-center font-mono text-xs text-text-lo">
            scroll: chaos resolves into distributed streams
          </p>
        </GlassPanel>
      </div>
    </RealmSection>
  );
}
