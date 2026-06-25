import { useState } from "react";
import { ChevronDown, Gauge } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "../ui/Section";
import { GlassCard } from "../ui/GlassCard";
import { MetricChip } from "../ui/MetricChip";
import { Reveal } from "../ui/Reveal";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { experience, type ExperienceEntry } from "../../content";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="The Record"
      title="Experience"
      intro="Three years moving across data engineering and cloud — migrating, benchmarking, and tuning real production systems."
    >
      <ol className="relative space-y-6 border-l border-glass-edge pl-6 sm:pl-8">
        {experience.map((entry, i) => (
          <Reveal as="li" key={entry.company} index={i} className="relative">
            <span
              aria-hidden
              className="absolute -left-[31px] top-6 h-3 w-3 rounded-full border-2 border-accent bg-ink-900 sm:-left-[39px]"
            />
            <TimelineCard entry={entry} defaultOpen={i === 0} />
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

function TimelineCard({
  entry,
  defaultOpen,
}: {
  entry: ExperienceEntry;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `exp-${entry.company.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <GlassCard interactive accentLine={!!entry.performance}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-start justify-between gap-4 p-6 text-left"
      >
        <div>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-lg font-semibold text-text-hi">{entry.title}</h3>
            <span className="text-accent">·</span>
            <span className="text-base text-text-hi">{entry.company}</span>
            {entry.client && (
              <span className="font-mono text-xs text-text-lo">client: {entry.client}</span>
            )}
          </div>
          <p className="mt-1 font-mono text-xs text-text-lo">{entry.period}</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-lo">{entry.summary}</p>
        </div>
        <ChevronDown
          size={20}
          className={`mt-1 shrink-0 text-text-lo transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-5 px-6 pb-6">
              <ul className="space-y-2">
                {entry.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed text-text-lo">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {entry.stack.map((s) => (
                  <MetricChip key={s}>{s}</MetricChip>
                ))}
              </div>

              {entry.performance && (
                <div className="rounded-xl border border-accent/20 bg-accent/[0.04] p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Gauge size={16} className="text-accent" />
                    <span className="text-sm font-medium text-text-hi">Performance</span>
                    <MetricChip accent className="ml-auto">
                      {entry.performance.metric}
                    </MetricChip>
                  </div>
                  <BeforeAfterSlider perf={entry.performance} />
                  <p className="mt-3 text-center font-mono text-xs text-text-lo">
                    Drag the handle — raw bottlenecks → tuned pipeline.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}
