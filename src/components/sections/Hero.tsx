import { Briefcase, Download, FolderGit2, Mail, MapPin, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { HolographicCard } from "../HolographicCard";
import { GlassCard } from "../ui/GlassCard";
import { TypingLine } from "../ui/TypingLine";
import { Reveal } from "../ui/Reveal";
import { floatingBadges, profile } from "../../content";

const FACTS = [
  { icon: Briefcase, k: "Role", v: "Data / Software Engineer" },
  { icon: MapPin, k: "Based in", v: profile.location },
  { icon: Zap, k: "Focus", v: "PySpark · Java · ETL" },
  { icon: Sparkles, k: "Signature win", v: "−40% AWS EMR resources" },
];

export function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-content px-5 pb-24 pt-32 sm:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left — identity + about */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-edge bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-goldhi backdrop-blur-[16px]">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-goldhi" />
              Data Engineer / Software Engineer
            </span>
          </Reveal>

          <Reveal index={1}>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Sahithi <span className="text-grad">Velaga</span>
            </h1>
          </Reveal>

          <Reveal index={2}>
            <p className="mt-5 max-w-xl font-display text-xl font-medium text-text-hi sm:text-2xl">
              I build faster, cleaner, production-ready data systems.
            </p>
            <div className="mt-4">
              <TypingLine />
            </div>
          </Reveal>

          {/* About Sahithi */}
          <Reveal index={3}>
            <div className="mt-6 max-w-xl space-y-3 text-[15px] leading-relaxed text-text-lo">
              <p>
                I'm a <span className="text-text-hi">Data Engineer &amp; Software Engineer</span> based in
                Arlington, TX. I turn complex, messy raw data into efficient, scalable systems people can
                actually use.
              </p>
              <p>
                At <span className="text-text-hi">Experian</span>, I re-engineered production pipelines —
                migrating Python logic to <span className="text-sky">PySpark</span> and{" "}
                <span className="text-sky">Java</span>, benchmarking for the right stack, and tuning AWS EMR
                to cut cluster resources by <span className="font-semibold text-goldhi">40%</span>. I also
                built the <span className="text-text-hi">DevHub</span> developer portal and shipped analytics
                &amp; ML projects from forecasting to customer segmentation.
              </p>
            </div>
          </Reveal>

          {/* quick facts */}
          <Reveal index={4}>
            <div className="mt-6 grid max-w-xl grid-cols-2 gap-3">
              {FACTS.map((f) => (
                <GlassCard key={f.k} className="flex items-center gap-3 p-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-sky/12 text-sky">
                    <f.icon size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-goldhi">{f.k}</p>
                    <p className="truncate text-sm text-text-hi">{f.v}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </Reveal>

          <Reveal index={5}>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky to-cyan px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-xl border border-edge bg-card px-5 py-3 text-sm font-semibold text-text-hi backdrop-blur-[16px] transition hover:-translate-y-0.5 hover:border-goldhi/40"
              >
                <Briefcase size={16} /> View Experience
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-edge bg-card px-5 py-3 text-sm font-semibold text-text-hi backdrop-blur-[16px] transition hover:-translate-y-0.5 hover:border-goldhi/40"
              >
                <FolderGit2 size={16} /> View Projects
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-edge bg-card px-5 py-3 text-sm font-semibold text-text-hi backdrop-blur-[16px] transition hover:-translate-y-0.5 hover:border-goldhi/40"
              >
                <Mail size={16} /> Contact
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right — big photo card + floating badges */}
        <div className="relative flex justify-center lg:justify-end">
          <HolographicCard size="lg" />
          <div className="pointer-events-none absolute -left-3 top-6 hidden flex-col gap-2 sm:flex lg:-left-12">
            {floatingBadges.slice(0, 2).map((b, i) => (
              <Badge key={b} label={b} delay={0.7 + i * 0.15} />
            ))}
          </div>
          <div className="pointer-events-none absolute -right-3 bottom-10 hidden flex-col items-end gap-2 sm:flex lg:-right-6">
            {floatingBadges.slice(2).map((b, i) => (
              <Badge key={b} label={b} delay={1.1 + i * 0.15} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ label, delay }: { label: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center gap-1.5 rounded-full border border-goldhi/35 bg-darknavy/90 px-3 py-1.5 text-xs font-medium text-text-hi shadow-glass backdrop-blur-[16px]"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-goldhi animate-pulse-soft" />
      {label}
    </motion.span>
  );
}
