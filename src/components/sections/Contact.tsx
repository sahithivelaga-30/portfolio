import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Section } from "../ui/Section";
import { GlassCard } from "../ui/GlassCard";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { profile } from "../../content";

const LINK_ICONS: Record<string, typeof Mail> = {
  LinkedIn: Linkedin,
  GitHub: Github,
};

export function Contact() {
  return (
    <Section id="contact" eyebrow="The Concierge" title="Let's build something.">
      <Reveal>
        <GlassCard accentLine className="bg-aurora p-8 sm:p-12">
          <p className="max-w-xl text-lg leading-relaxed text-text-hi">{profile.openTo}</p>

          <div className="mt-8 flex flex-wrap gap-3">
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
                  <Button
                    key={l.label}
                    href={l.href}
                    variant="ghost"
                    external
                    icon={<Icon size={16} />}
                  >
                    {l.label}
                  </Button>
                );
              })}
          </div>

          <div className="mt-10 grid gap-4 border-t border-glass-edge pt-8 font-mono text-sm text-text-lo sm:grid-cols-3">
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
        </GlassCard>
      </Reveal>
    </Section>
  );
}
