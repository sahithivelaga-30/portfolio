import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  /** Small eyebrow / room label, e.g. "Entrance". */
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Consistent vertical rhythm + scroll anchor for every page section.
 */
export function Section({ id, eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-content scroll-mt-20 px-6 py-24 sm:px-8 md:py-32 ${className ?? ""}`}
    >
      {(eyebrow || title) && (
        <Reveal className="mb-12 max-w-2xl">
          {eyebrow && (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
          )}
          {intro && <p className="mt-4 text-base leading-relaxed text-text-lo">{intro}</p>}
        </Reveal>
      )}
      {children}
    </section>
  );
}
