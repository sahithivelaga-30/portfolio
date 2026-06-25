import { Briefcase, Download, FolderGit2, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { HolographicCard } from "../HolographicCard";
import { Reveal } from "../ui/Reveal";
import { floatingBadges, profile } from "../../content";

const CTAS = [
  { label: "View Experience", href: "#experience", icon: Briefcase, primary: false },
  { label: "View Projects", href: "#projects", icon: FolderGit2, primary: false },
];

export function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-content px-5 pb-20 pt-32 sm:px-8">
      {/* neon grid floor */}
      <div aria-hidden className="grid-floor pointer-events-none absolute inset-x-0 bottom-0 -z-[1] h-72 animate-grid-pan opacity-60" />

      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left — copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-edge bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-sky">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-sky" />
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
          </Reveal>

          <Reveal index={3}>
            <p className="mt-4 max-w-xl leading-relaxed text-text-lo">
              Specialized in PySpark, Java, SQL, ETL, AWS EMR optimization, developer platforms, and
              analytics-driven engineering — turning complex raw data into efficient, scalable systems.
            </p>
          </Reveal>

          <Reveal index={4}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky to-cyan px-5 py-3 text-sm font-semibold text-bg shadow-glow transition hover:brightness-110"
              >
                <Download size={16} /> Download Resume
              </a>
              {CTAS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-edge bg-card px-5 py-3 text-sm font-semibold text-text-hi backdrop-blur-[16px] transition hover:-translate-y-0.5 hover:border-sky/40"
                >
                  <c.icon size={16} /> {c.label}
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-edge bg-card px-5 py-3 text-sm font-semibold text-text-hi backdrop-blur-[16px] transition hover:-translate-y-0.5 hover:border-sky/40"
              >
                <Mail size={16} /> Contact
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right — photo card + floating badges */}
        <div className="relative flex justify-center lg:justify-end">
          <HolographicCard />
          <div className="pointer-events-none absolute -left-3 top-4 hidden flex-col gap-2 sm:flex lg:-left-10">
            {floatingBadges.slice(0, 2).map((b, i) => (
              <Badge key={b} label={b} delay={0.7 + i * 0.15} />
            ))}
          </div>
          <div className="pointer-events-none absolute -right-3 bottom-8 hidden flex-col items-end gap-2 sm:flex lg:-right-6">
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
      className="inline-flex items-center gap-1.5 rounded-full border border-edge bg-darknavy/90 px-3 py-1.5 text-xs font-medium text-text-hi shadow-glass backdrop-blur-[16px]"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-soft" />
      {label}
    </motion.span>
  );
}
