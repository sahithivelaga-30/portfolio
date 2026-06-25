import { Download, Mail, Play, Zap } from "lucide-react";
import { ActionButton, Button } from "./ui/Button";
import { HUDFrame } from "./ui/HUDFrame";
import { MonoLabel } from "./ui/MonoLabel";
import { MissionCard } from "./ui/MissionCard";
import { Reveal } from "./ui/Reveal";
import { ProfileCard } from "./ProfileCard";
import { HeroCore } from "./realm/HeroCore";
import { Engine } from "./realm/Engine";
import { Boss } from "./realm/Boss";
import { DevHubCenter } from "./realm/DevHubCenter";
import { Foundry } from "./realm/Foundry";
import { Research } from "./realm/Research";
import { SkillTree } from "./realm/SkillTree";
import { Archives } from "./realm/Archives";
import { Victory } from "./realm/Victory";
import type { View } from "../App";
import { missions, profile } from "../content";

/**
 * The realm. Act I (Mission Briefing + Quest Map) is built; the deeper acts
 * (Engine, EMR Boss, DevHub, Foundry, Research, Skill Tree, Archives, Victory)
 * are scaffolded as quest nodes and arrive in later phases.
 */
export function Realm({ onNavigate }: { onNavigate: (v: View) => void }) {
  return (
    <main className="bg-realm">
      {/* ACT I — Mission Briefing */}
      <section
        id="hero"
        className="mx-auto flex min-h-[92vh] max-w-content scroll-mt-20 flex-col justify-center px-5 pb-16 pt-24 sm:px-8"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <MonoLabel tone="accent">ACT I · THE CALL</MonoLabel>
            <h1 className="mt-3 text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 font-mono text-sm uppercase tracking-[0.25em] text-accent">
              {profile.role} · {profile.location}
            </p>
            <p className="mt-6 max-w-xl text-xl text-text-hi">{profile.tagline}</p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-panel border border-gold/30 bg-gold/[0.06] px-4 py-2.5">
              <span className="font-mono text-sm font-semibold text-gold">★ −40% EMR</span>
              <span className="text-sm text-text-lo">achievement: cluster resource cut</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ActionButton onClick={() => scrollToId("map")} icon={<Play size={16} />}>
                Start Mission
              </ActionButton>
              <ActionButton variant="ghost" onClick={() => onNavigate("quick")} icon={<Zap size={16} />}>
                Quick View
              </ActionButton>
              <Button href={profile.resumeUrl} download variant="ghost" icon={<Download size={16} />}>
                Resume
              </Button>
              <Button href={`mailto:${profile.email}`} variant="ghost" icon={<Mail size={16} />}>
                Contact
              </Button>
            </div>
          </Reveal>

          <Reveal index={2} className="flex flex-col items-center gap-6 lg:items-end">
            {/* the signature 3D data-core (WebGL, lazy; SVG fallback on mobile/reduced-motion) */}
            <HUDFrame className="aspect-square w-full max-w-sm overflow-hidden rounded-panel border border-glass-edge bg-surface/60 backdrop-blur-[16px]">
              <HeroCore />
            </HUDFrame>
            <ProfileCard />
          </Reveal>
        </div>
      </section>

      {/* ACT I — Quest Map */}
      <section id="map" className="mx-auto max-w-content scroll-mt-20 px-5 py-20 sm:px-8">
        <Reveal className="mb-10 max-w-2xl">
          <MonoLabel tone="accent">QUEST MAP</MonoLabel>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Choose your path</h2>
          <p className="mt-3 text-text-lo">
            Ten missions across three acts. Jump anywhere — nothing is gated.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {missions.map((m, i) => (
            <Reveal key={m.id} index={i % 3}>
              <MissionCard act={m.act} title={m.label} tag={m.tag} href={`#${m.id}`}>
                {m.id === "boss" && (
                  <span className="text-gold">★ Set-piece — the EMR Boss Fight</span>
                )}
              </MissionCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="rounded-panel border border-glass-edge bg-glass p-6 text-center backdrop-blur-[16px]">
            <p className="text-sm text-text-lo">
              Want the facts without playing?{" "}
              <button
                type="button"
                onClick={() => onNavigate("quick")}
                className="font-medium text-energy underline-offset-4 hover:underline"
              >
                Open Recruiter Quick View
              </button>
              .
            </p>
          </div>
        </Reveal>
      </section>

      {/* ACT II — The Trials */}
      <Engine />
      <Boss />
      <DevHubCenter />
      <Foundry />
      <Research />

      {/* ACT III — Mastery & the Offer */}
      <SkillTree />
      <Archives />
      <Victory />
    </main>
  );
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
