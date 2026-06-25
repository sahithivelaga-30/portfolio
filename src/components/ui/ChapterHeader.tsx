import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface ChapterHeaderProps {
  chapter: string; // e.g. "CHAPTER 01"
  kicker?: string; // e.g. "THE DATA STORM"
  title: string;
  intro?: ReactNode;
  className?: string;
}

export function ChapterHeader({ chapter, kicker, title, intro, className }: ChapterHeaderProps) {
  return (
    <Reveal className={`mb-10 max-w-2xl ${className ?? ""}`}>
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-sky/40 bg-white/70 px-3 py-1 font-mono text-xs font-medium tracking-[0.18em] text-sky">
          {chapter}
        </span>
        {kicker && (
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-lo">{kicker}</span>
        )}
      </div>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-navy sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-text-lo">{intro}</p>}
    </Reveal>
  );
}

/** Recruiter takeaway pill that closes most chapters. */
export function Takeaway({ children }: { children: ReactNode }) {
  return (
    <Reveal className="mt-8">
      <div className="glass flex items-start gap-3 p-5">
        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky/15 font-mono text-xs font-semibold text-sky">
          HR
        </span>
        <p className="text-sm leading-relaxed text-text-hi">{children}</p>
      </div>
    </Reveal>
  );
}
