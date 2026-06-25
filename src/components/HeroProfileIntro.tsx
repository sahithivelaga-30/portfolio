import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { HolographicProfileCard } from "./HolographicProfileCard";
import { FloatingBadge } from "./ui/FloatingBadge";
import { GlassCard } from "./ui/GlassCard";
import { Reveal } from "./ui/Reveal";
import { Counter } from "./ui/Counter";
import { floatingBadges, profile, statCards } from "../content";

/** First screen — "THE DATA ASCENSION BEGINS". Must wow. */
export function HeroProfileIntro() {
  return (
    <section id="intro" className="relative mx-auto max-w-content px-5 pb-16 pt-28 sm:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Profile card + orbiting badges */}
        <div className="relative flex justify-center lg:justify-start">
          <HolographicProfileCard />
          <div className="pointer-events-none absolute -right-2 top-2 hidden flex-col items-end gap-2 sm:flex lg:-right-6">
            {floatingBadges.slice(0, 3).map((b, i) => (
              <FloatingBadge key={b} label={b} delay={0.6 + i * 0.15} />
            ))}
          </div>
          <div className="pointer-events-none absolute -left-2 bottom-6 hidden flex-col items-start gap-2 sm:flex lg:-left-6">
            {floatingBadges.slice(3).map((b, i) => (
              <FloatingBadge key={b} label={b} delay={1.0 + i * 0.15} />
            ))}
          </div>
        </div>

        {/* Intro copy */}
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-sky">
              The Engineer Behind Cloud Intelligence
            </p>
          </Reveal>
          <Reveal index={1}>
            <h1 className="mt-3 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Hello, I'm <span className="text-sky-gradient">Sahithi Velaga</span>
            </h1>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-3 font-display text-lg text-luxnavy">
              From Raw Data Chaos to Cloud Intelligence
            </p>
          </Reveal>
          <Reveal index={3}>
            <p className="mt-5 max-w-xl leading-relaxed text-text-lo">
              I'm a Data Engineer and Software Engineer who transforms raw data into scalable cloud
              intelligence. My work focuses on PySpark optimization, Java performance testing, AWS
              EMR efficiency, ETL workflows, developer platforms, and analytics systems that help
              teams move faster and make better decisions.
            </p>
          </Reveal>
          <Reveal index={4}>
            <p className="mt-4 max-w-xl leading-relaxed text-text-lo">
              At Experian, I migrated Python processing logic into PySpark and Java, optimized AWS
              EMR clusters, and helped reduce cluster resource consumption by{" "}
              <span className="font-semibold text-sky">40%</span>. I also built DevHub frontend
              experiences using Figma, Backstage, and Wayfarer components to improve developer
              productivity.
            </p>
          </Reveal>

          <Reveal index={5}>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky to-cyan px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-105"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-sky/35 bg-white/80 px-5 py-3 text-sm font-semibold text-navy backdrop-blur-[16px] transition hover:-translate-y-0.5"
              >
                <Mail size={16} /> Email Sahithi
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Six stat cards unlocking */}
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {statCards.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard interactive className="h-full p-5">
              <p
                className={`font-display text-2xl font-semibold ${
                  s.accent ? "text-sky" : "text-navy"
                }`}
              >
                {s.value === "40%" ? <Counter value={40} suffix="%" /> : s.value}
              </p>
              <p className="mt-1 text-sm text-text-lo">{s.label}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
