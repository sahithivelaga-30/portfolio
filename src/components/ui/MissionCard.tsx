import type { ReactNode } from "react";
import { HUDFrame } from "./HUDFrame";
import { MonoLabel } from "./MonoLabel";

interface MissionCardProps {
  act?: string;
  title: string;
  tag?: string;
  children?: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

/** A quest/mission node card with HUD corner brackets. */
export function MissionCard({ act, title, tag, children, onClick, href, className }: MissionCardProps) {
  const inner = (
    <HUDFrame className="h-full rounded-panel border border-glass-edge bg-glass p-5 backdrop-blur-[16px] transition duration-300 group-hover:-translate-y-1 group-hover:border-accent/40 group-hover:shadow-glass-lift">
      <div className="flex items-center justify-between">
        {act && <MonoLabel tone="accent">ACT {act}</MonoLabel>}
        {tag && <MonoLabel>{tag}</MonoLabel>}
      </div>
      <h3 className="mt-3 text-base font-semibold text-text-hi">{title}</h3>
      {children && <div className="mt-2 text-sm leading-relaxed text-text-lo">{children}</div>}
    </HUDFrame>
  );

  const cls = `group block text-left ${className ?? ""}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={`w-full ${cls}`}>
      {inner}
    </button>
  );
}
