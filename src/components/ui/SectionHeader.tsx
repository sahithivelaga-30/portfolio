import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  index?: string; // e.g. "03"
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
}

export function SectionHeader({ index, kicker, title, intro, className }: SectionHeaderProps) {
  return (
    <Reveal className={`mb-12 max-w-3xl ${className ?? ""}`}>
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-sky">
        {index && <span className="text-text-lo">{index}</span>}
        <span className="h-px w-8 bg-edge" />
        <span>{kicker}</span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] text-text-hi sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-text-lo">{intro}</p>}
    </Reveal>
  );
}

/** Recruiter takeaway pill. */
export function Takeaway({ children }: { children: ReactNode }) {
  return (
    <Reveal className="mt-8">
      <div className="glass flex items-start gap-3 p-5">
        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky/15 font-mono text-[10px] font-semibold text-sky">
          HR
        </span>
        <p className="text-sm leading-relaxed text-text-hi">{children}</p>
      </div>
    </Reveal>
  );
}
