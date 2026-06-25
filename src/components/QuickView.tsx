import { BadgeCheck, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/Button";
import { GlassPanel } from "./ui/GlassPanel";
import { MonoLabel } from "./ui/MonoLabel";
import { Counter } from "./ui/Counter";
import { Reveal } from "./ui/Reveal";
import { ProfileCard } from "./ProfileCard";
import {
  certifications,
  coursework,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "../content";

const LINK_ICONS: Record<string, typeof Mail> = { LinkedIn: Linkedin, GitHub: Github };

/** Recruiter Mode — the hiring-critical path. Fast, scannable, low motion. */
export function QuickView() {
  return (
    <main className="mx-auto max-w-content px-5 pb-24 pt-20 sm:px-8">
      {/* Header */}
      <Reveal className="grid items-center gap-8 py-10 sm:grid-cols-[1fr_auto]">
        <div>
          <MonoLabel tone="accent">RECRUITER MODE</MonoLabel>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{profile.name}</h1>
          <p className="mt-2 font-mono text-sm uppercase tracking-[0.2em] text-accent">
            {profile.role} · {profile.location}
          </p>
          <p className="mt-5 max-w-xl text-lg text-text-hi">{profile.tagline}</p>

          <div className="mt-5 inline-flex items-center gap-3 rounded-panel border border-glass-edge bg-glass px-4 py-2.5 backdrop-blur-[16px]">
            <span className="font-display text-2xl font-semibold text-accent">
              <Counter value={40} prefix="−" suffix="%" />
            </span>
            <span className="text-sm text-text-lo">AWS EMR cluster resource consumption</span>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={profile.resumeUrl} download icon={<Download size={16} />}>
              Download Resume
            </Button>
            <Button href={`mailto:${profile.email}`} variant="ghost" icon={<Mail size={16} />}>
              Email me
            </Button>
          </div>
        </div>

        <div className="justify-self-center sm:justify-self-end">
          <ProfileCard />
        </div>
      </Reveal>

      {/* Skills */}
      <Block title="Skills">
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal key={g.label} index={i}>
              <GlassPanel className="h-full p-5">
                <MonoLabel tone="accent">{g.label}</MonoLabel>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-glass-edge bg-white/[0.02] px-2.5 py-1 text-sm text-text-lo"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </Block>

      {/* Experience */}
      <Block title="Experience">
        <div className="space-y-4">
          {experience.map((e, i) => (
            <Reveal key={e.company} index={i}>
              <GlassPanel className="p-6">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold text-text-hi">{e.title}</h3>
                  <span className="text-accent">·</span>
                  <span className="text-base text-text-hi">{e.company}</span>
                  {e.client && (
                    <span className="font-mono text-xs text-text-lo">client: {e.client}</span>
                  )}
                  <span className="ml-auto font-mono text-xs text-text-lo">{e.period}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {e.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-text-lo">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </Block>

      {/* Projects */}
      <Block title="Projects & Publications">
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} index={i} className="h-full">
              <GlassPanel className="flex h-full flex-col p-5">
                <h3 className="text-base font-semibold leading-snug text-text-hi">{p.title}</h3>
                {p.published && (
                  <span className="mt-2 inline-flex items-center gap-1.5 text-xs text-energy">
                    <BadgeCheck size={14} />
                    Published
                  </span>
                )}
                <p className="mt-3 text-sm leading-relaxed text-text-lo">{p.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-glass-edge bg-white/[0.02] px-2 py-0.5 font-mono text-[11px] text-text-lo"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </Block>

      {/* Education */}
      <Block title="Education & Credentials">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.degree} index={i}>
              <GlassPanel className="h-full p-5">
                <h3 className="text-base font-semibold leading-snug text-text-hi">{e.degree}</h3>
                <p className="mt-2 text-sm text-text-lo">{e.school}</p>
                <p className="mt-3 font-mono text-xs text-text-lo">{e.year}</p>
              </GlassPanel>
            </Reveal>
          ))}
          <Reveal index={2}>
            <GlassPanel className="h-full p-5">
              <MonoLabel tone="accent">Certification</MonoLabel>
              {certifications.map((c) => (
                <p key={c.name} className="mt-3 text-sm text-text-hi">
                  {c.name}
                </p>
              ))}
            </GlassPanel>
          </Reveal>
        </div>
        <Reveal className="mt-4">
          <GlassPanel className="p-5">
            <MonoLabel>Graduate coursework</MonoLabel>
            <div className="mt-3 flex flex-wrap gap-2">
              {coursework.map((c) => (
                <span
                  key={c}
                  className="rounded border border-glass-edge bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-text-lo"
                >
                  {c}
                </span>
              ))}
            </div>
          </GlassPanel>
        </Reveal>
      </Block>

      {/* Contact */}
      <Block title="Contact">
        <Reveal>
          <GlassPanel className="bg-realm p-7">
            <p className="max-w-xl text-base text-text-hi">{profile.openTo}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={`mailto:${profile.email}`} icon={<Mail size={16} />}>
                Email me
              </Button>
              <Button href={profile.resumeUrl} download variant="ghost" icon={<Download size={16} />}>
                Download Resume
              </Button>
              {profile.links
                .filter((l) => l.href && l.href !== "#")
                .map((l) => {
                  const Icon = LINK_ICONS[l.label] ?? Mail;
                  return (
                    <Button key={l.label} href={l.href} variant="ghost" external icon={<Icon size={16} />}>
                      {l.label}
                    </Button>
                  );
                })}
            </div>
            <div className="mt-7 grid gap-3 border-t border-glass-edge pt-6 font-mono text-sm text-text-lo sm:grid-cols-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-text-hi">
                <Mail size={15} className="text-accent" />
                {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\D/g, "")}`} className="flex items-center gap-2 hover:text-text-hi">
                <Phone size={15} className="text-accent" />
                {profile.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={15} className="text-accent" />
                {profile.location}
              </span>
            </div>
          </GlassPanel>
        </Reveal>
      </Block>
    </main>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-10">
      <Reveal className="mb-6 flex items-center gap-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span className="h-px flex-1 bg-glass-edge" />
      </Reveal>
      {children}
    </section>
  );
}
