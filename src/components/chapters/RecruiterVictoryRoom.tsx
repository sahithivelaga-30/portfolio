import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { HolographicProfileCard } from "../HolographicProfileCard";
import { AchievementBadge } from "../ui/AchievementBadge";
import { Reveal } from "../ui/Reveal";
import { profile } from "../../content";

const ROLES = [
  "Data Engineering",
  "Software Engineering",
  "Cloud Data Platform",
  "Analytics Engineering",
  "Developer Platform",
];

const LINK_ICONS: Record<string, typeof Mail> = { LinkedIn: Linkedin, GitHub: Github };

export function RecruiterVictoryRoom() {
  return (
    <section id="contact" className="relative scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-content">
        <Reveal className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-sky">Mission Complete</p>
          <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Ready to Build Scalable Data Systems</h2>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="flex justify-center">
            <HolographicProfileCard />
          </Reveal>

          <Reveal index={1}>
            <div className="glass bg-sky-world p-7 sm:p-9">
              <AchievementBadge label="Recruiter Match Ready" />
              <p className="mt-5 text-lg leading-relaxed text-text-hi">
                Sahithi is ready for{" "}
                {ROLES.map((r, i) => (
                  <span key={r}>
                    <span className="font-medium text-navy">{r}</span>
                    {i < ROLES.length - 1 ? ", " : ""}
                  </span>
                ))}{" "}
                roles.
              </p>

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
                  className="inline-flex items-center gap-2 rounded-xl border border-sky/35 bg-white/80 px-5 py-3 text-sm font-semibold text-navy transition hover:-translate-y-0.5"
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
                        className="inline-flex items-center gap-2 rounded-xl border border-sky/35 bg-white/80 px-5 py-3 text-sm font-semibold text-navy transition hover:-translate-y-0.5"
                      >
                        <Icon size={16} /> {l.label}
                      </a>
                    );
                  })}
              </div>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-sky/15 pt-6 font-mono text-sm text-text-lo">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-navy">
                  <Mail size={14} className="text-sky" /> {profile.email}
                </a>
                <a href={`tel:${profile.phone.replace(/\D/g, "")}`} className="flex items-center gap-2 hover:text-navy">
                  <Phone size={14} className="text-sky" /> {profile.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
