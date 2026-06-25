import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  hud?: boolean;
}

export function GlassCard({ children, className, interactive = false, hud = false }: GlassCardProps) {
  return (
    <div
      className={[
        "glass",
        hud ? "hud" : "",
        interactive ? "transition duration-300 hover:-translate-y-1 hover:shadow-glass-lift hover:border-sky/40" : "",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
