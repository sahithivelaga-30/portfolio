import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, ChevronDown } from "lucide-react";
import { Section } from "../ui/Section";
import { GlassCard } from "../ui/GlassCard";
import { MetricChip } from "../ui/MetricChip";
import { Reveal } from "../ui/Reveal";
import { ChartMotif } from "./ChartMotif";
import { projects, type Project } from "../../content";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="The Gallery"
      title="Projects"
      intro="Selected analysis and forecasting work — three of them published."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} index={i} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const panelId = `proj-${project.title.replace(/\W+/g, "-").toLowerCase()}`;

  return (
    <GlassCard interactive className="flex h-full flex-col p-5">
      <div className="mb-4 rounded-lg border border-glass-edge bg-white/[0.02] p-3">
        <ChartMotif kind={project.motif} />
      </div>

      <h3 className="text-base font-semibold leading-snug text-text-hi">{project.title}</h3>

      {project.published && (
        <span className="mt-2 inline-flex items-center gap-1.5 text-xs text-accent-2">
          <BadgeCheck size={14} />
          Published
        </span>
      )}

      <p className="mt-3 text-sm leading-relaxed text-text-lo">{project.blurb}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <MetricChip key={s}>{s}</MetricChip>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-4 inline-flex items-center gap-1 self-start text-xs font-medium text-text-hi hover:text-accent"
      >
        Details
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-sm leading-relaxed text-text-lo">{project.outcome}</p>
            {project.published && (
              <p className="mt-2 font-mono text-xs text-text-lo/80">{project.published}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}
