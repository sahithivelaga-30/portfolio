import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { MonoLabel } from "./MonoLabel";
import { AchievementBadge } from "./AchievementBadge";

interface RealmSectionProps {
  id: string;
  act: string;
  eyebrow: string;
  title: string;
  intro?: string;
  /** Badge unlocked by completing this mission. */
  badge?: { label: string; mission: string };
  children: ReactNode;
  className?: string;
}

/** Consistent rhythm + anchor for every realm mission, with an unlock badge. */
export function RealmSection({
  id,
  act,
  eyebrow,
  title,
  intro,
  badge,
  children,
  className,
}: RealmSectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-content scroll-mt-20 px-5 py-24 sm:px-8 ${className ?? ""}`}
    >
      <Reveal className="mb-10 max-w-2xl">
        <div className="flex items-center gap-3">
          <MonoLabel tone="accent">ACT {act}</MonoLabel>
          <span className="h-px w-8 bg-glass-edge" />
          <MonoLabel>{eyebrow}</MonoLabel>
        </div>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
        {intro && <p className="mt-3 leading-relaxed text-text-lo">{intro}</p>}
      </Reveal>

      {children}

      {badge && (
        <Reveal className="mt-8 max-w-sm">
          <AchievementBadge label={badge.label} mission={badge.mission} />
        </Reveal>
      )}
    </section>
  );
}
