import { ArrowRight, TrendingDown, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader, Takeaway } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { Counter } from "../ui/Counter";
import { Reveal } from "../ui/Reveal";

const BEFORE = ["Python UDF bottlenecks", "Slower processing", "Heavy EMR cluster load", "Higher resource consumption"];
const ACTION = ["Python → PySpark migration", "Python → Java migration", "Performance benchmarking", "AWS EMR optimization"];
const AFTER = ["Faster execution", "Better scalability", "Cleaner production workflow", "40% EMR resource reduction"];

export function CaseStudy() {
  return (
    <section id="experience" className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeader
        index="02"
        kicker="Experian Performance Case Study"
        title="Reducing resource usage through better data engineering."
        intro="At Experian, Sahithi re-engineered production data-processing logic — migrating across PySpark and Java, benchmarking for the right stack, and tuning AWS EMR."
      />

      {/* Before → Action → After */}
      <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
        <Reveal>
          <Panel tone="danger" label="Before" items={BEFORE} />
        </Reveal>
        <Connector />
        <Reveal index={1}>
          <Panel tone="sky" label="Engineering Action" items={ACTION} />
        </Reveal>
        <Connector />
        <Reveal index={2}>
          <Panel tone="success" label="After" items={AFTER} />
        </Reveal>
      </div>

      {/* Big metric + before/after chart */}
      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <GlassCard hud className="flex flex-col items-center justify-center p-8 text-center">
            <span className="font-display text-7xl font-bold text-grad sm:text-8xl">
              <Counter value={40} suffix="%" />
            </span>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-text-lo">
              EMR resource consumption reduced
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-medium text-success">
              <TrendingDown size={13} /> lighter, faster, more scalable
            </span>
          </GlassCard>
        </Reveal>

        <Reveal index={1}>
          <GlassCard className="p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-text-lo">
              <Zap size={14} className="text-sky" /> Cluster resource load · before vs after
            </div>
            <div className="space-y-5">
              <Bar label="Before" value={100} tone="danger" caption="High resource load" />
              <Bar label="After" value={60} tone="success" caption="−40% resources" />
            </div>
          </GlassCard>
        </Reveal>
      </div>

      <Takeaway>
        Sahithi improves real production data systems by optimizing processing logic and reducing
        infrastructure load — faster execution with measurably fewer resources.
      </Takeaway>
    </section>
  );
}

function Panel({
  tone,
  label,
  items,
}: {
  tone: "danger" | "sky" | "success";
  label: string;
  items: string[];
}) {
  const accent =
    tone === "danger" ? "text-danger" : tone === "success" ? "text-success" : "text-sky";
  const dot = tone === "danger" ? "bg-danger" : tone === "success" ? "bg-success" : "bg-sky";
  return (
    <GlassCard className="h-full p-6">
      <p className={`font-mono text-xs uppercase tracking-[0.18em] ${accent}`}>{label}</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2.5 text-sm leading-relaxed text-text-hi">
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
            {it}
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}

function Connector() {
  return (
    <div className="hidden items-center justify-center lg:flex">
      <ArrowRight size={20} className="text-sky" />
    </div>
  );
}

function Bar({
  label,
  value,
  tone,
  caption,
}: {
  label: string;
  value: number;
  tone: "danger" | "success";
  caption: string;
}) {
  const reduce = useReducedMotion();
  const fill = tone === "danger" ? "from-danger to-danger/60" : "from-success to-cyan";
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-text-lo">{label}</span>
        <span className="font-mono text-xs text-text-hi">{caption}</span>
      </div>
      <div className="h-4 w-full overflow-hidden rounded-full bg-white/[0.05]">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${fill}`}
          initial={{ width: reduce ? `${value}%` : 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
