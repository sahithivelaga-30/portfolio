import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChapterHeader, Takeaway } from "../ui/ChapterHeader";
import { GlassCard } from "../ui/GlassCard";

const CHAOS = ["CSV", "JSON", "SQL table", "Python UDF", "log.txt", "cluster: slow", "ETL: broken", "null,,null"];

export function DataStorm() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const order = useTransform(scrollYProgress, [0.2, 0.65], [0, 1]);
  const chaosOpacity = useTransform(order, [0, 1], [1, 0.15]);

  return (
    <section id="storm" className="mx-auto max-w-content scroll-mt-24 px-5 py-20 sm:px-8">
      <ChapterHeader
        chapter="CHAPTER 01"
        kicker="The Data Storm"
        title="Before intelligence, there is chaos."
        intro="Every organization collects data, but without strong engineering it becomes slow, expensive, and hard to use. Sahithi's work begins where data needs structure, speed, and scale."
      />

      <div ref={ref}>
        <GlassCard className="relative overflow-hidden p-6 sm:p-10">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
            {/* chaotic side */}
            <div className="relative h-48">
              <span className="absolute left-0 top-0 font-mono text-xs uppercase tracking-[0.18em] text-danger/70">
                Raw storm
              </span>
              {CHAOS.map((c, i) => (
                <motion.span
                  key={c}
                  style={{
                    position: "absolute",
                    left: `${(i * 41) % 70}%`,
                    top: `${28 + ((i * 53) % 56)}%`,
                    ...(reduce ? {} : { opacity: chaosOpacity }),
                  }}
                  animate={reduce ? undefined : { x: [0, (i % 3) * 9 - 9, 0], y: [0, (i % 2) * 10 - 5, 0] }}
                  transition={{ duration: 5 + (i % 4), repeat: Infinity, ease: "easeInOut" }}
                  className="rounded border border-danger/25 bg-white/70 px-2 py-0.5 font-mono text-[11px] text-danger/80"
                >
                  {c}
                </motion.span>
              ))}
            </div>

            <div className="flex justify-center text-sky">
              <motion.div style={reduce ? undefined : { opacity: order }} className="font-mono text-2xl">
                →
              </motion.div>
            </div>

            {/* ordered streams */}
            <motion.div style={reduce ? undefined : { opacity: order }} className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-sky">Structured streams</span>
              {["partitioned", "validated", "distributed", "scalable"].map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-sky/60" />
                  <span className="rounded border border-sky/30 bg-sky/10 px-2 py-0.5 font-mono text-[11px] text-sky">
                    {s}
                  </span>
                  <span className="font-mono text-[10px] text-text-lo">0{i + 1}</span>
                </div>
              ))}
            </motion.div>
          </div>
          <p className="mt-6 border-t border-sky/15 pt-4 text-center font-mono text-xs text-text-lo">
            scroll: scattered fragments align into clean blue streams
          </p>
        </GlassCard>
      </div>

      <Takeaway>Sahithi turns messy data problems into structured engineering systems.</Takeaway>
    </section>
  );
}
