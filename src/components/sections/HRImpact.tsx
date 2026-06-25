import { BrainCircuit, Download, Github, Layers, Linkedin, Mail, Phone, Rocket, Sparkles } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { HolographicCard } from "../HolographicCard";
import { Reveal } from "../ui/Reveal";
import { profile } from "../../content";

const REASONS = [
  { icon: Rocket, title: "Performance-focused engineer", detail: "Optimizes real production systems for speed and cost." },
  { icon: Layers, title: "Strong data processing foundation", detail: "PySpark, Java, SQL, ETL across the pipeline." },
  { icon: Sparkles, title: "Developer experience mindset", detail: "Built DevHub frontend with Backstage + Wayfarer." },
  { icon: BrainCircuit, title: "Analytics & ML background", detail: "Forecasting, segmentation, and BI projects." },
];

const LINK_ICONS: Record<string, typeof Mail> = { LinkedIn: Linkedin, GitHub: Github };

export function HRImpact() {
  return (
    <section id="contact" className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeader index="09" kicker="Why Sahithi Stands Out" title="Built to ship efficient, scalable data systems." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {REASONS.map((r, i) => (
          <Reveal key={r.title} index={i} className="h-full">
            <GlassCard hud interactive className="h-full p-5">
              <span
                className={`mb-3 inline-flex rounded-lg p-2 ${
                  i % 2 === 0 ? "bg-sky/12 text-sky" : "bg-purple/12 text-purple"
                }`}
              >
                <r.icon size={18} />
              </span>
              <p className="font-display text-sm font-semibold text-text-hi">{r.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-lo">{r.detail}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <GlassCard className="bg-world p-8 sm:p-10">
            <h3 className="font-display text-2xl font-bold text-text-hi sm:text-3xl">
              Ready to discuss Data Engineering opportunities?
            </h3>
            <p className="mt-3 max-w-xl leading-relaxed text-text-lo">{profile.openTo}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky to-cyan px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-edge bg-card px-5 py-3 text-sm font-semibold text-text-hi transition hover:-translate-y-0.5 hover:border-sky/40"
              >
                <Mail size={16} /> Email Sahithi
              </a>
              {profile.links
                .filter((l) => l.href && l.href !== "#")
                .map((l) => {
                  const Icon = LINK_ICONS[l.label] ?? Mail;
                  return (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-xl border border-edge bg-card px-5 py-3 text-sm font-semibold text-text-hi transition hover:-translate-y-0.5 hover:border-sky/40"
                    >
                      <Icon size={16} /> {l.label}
                    </a>
                  );
                })}
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-edge/60 pt-6 font-mono text-sm text-text-lo">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-text-hi">
                <Mail size={14} className="text-sky" /> {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\D/g, "")}`} className="flex items-center gap-2 hover:text-text-hi">
                <Phone size={14} className="text-sky" /> {profile.phone}
              </a>
            </div>
          </GlassCard>
        </Reveal>

        <Reveal index={1} className="flex justify-center">
          <HolographicCard />
        </Reveal>
      </div>
    </section>
  );
}
