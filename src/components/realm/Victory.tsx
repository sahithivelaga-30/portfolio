import { Download, Github, Linkedin, Mail } from "lucide-react";
import { RealmSection } from "../ui/RealmSection";
import { GlassPanel } from "../ui/GlassPanel";
import { Button } from "../ui/Button";
import { MonoLabel } from "../ui/MonoLabel";
import { AchievementBadge } from "../ui/AchievementBadge";
import { Reveal } from "../ui/Reveal";
import { ProfileCard } from "../ProfileCard";
import { badges, profile } from "../../content";

const LINK_ICONS: Record<string, typeof Mail> = { LinkedIn: Linkedin, GitHub: Github };

/** Mission Complete — the recruiter victory room. */
export function Victory() {
  return (
    <RealmSection id="victory" act="III" eyebrow="The Offer" title="Mission Complete">
      <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="justify-self-center lg:justify-self-start">
          <ProfileCard />
        </Reveal>

        <Reveal index={1}>
          <GlassPanel className="bg-realm p-7 sm:p-8">
            <MonoLabel tone="energy">★ RECRUITER MATCH READY</MonoLabel>
            <p className="mt-4 max-w-xl text-lg text-text-hi">{profile.openTo}</p>

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

            <p className="mt-6 font-mono text-xs text-text-lo">
              {profile.email} · {profile.phone} · {profile.location}
            </p>
          </GlassPanel>
        </Reveal>
      </div>

      {/* Achievements earned */}
      <Reveal className="mt-10">
        <MonoLabel tone="accent">ACHIEVEMENTS EARNED</MonoLabel>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {badges.map((b) => (
            <AchievementBadge key={b.id} label={b.label} mission={b.mission} />
          ))}
        </div>
      </Reveal>
    </RealmSection>
  );
}
