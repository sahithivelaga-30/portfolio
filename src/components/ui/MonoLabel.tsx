import type { ReactNode } from "react";

interface MonoLabelProps {
  children: ReactNode;
  tone?: "lo" | "accent" | "energy";
  className?: string;
}

/** Monospace HUD label for stats / section tags / coordinates. */
export function MonoLabel({ children, tone = "lo", className }: MonoLabelProps) {
  const color =
    tone === "accent" ? "text-accent" : tone === "energy" ? "text-energy" : "text-text-lo";
  return (
    <span
      className={`font-mono text-xs uppercase tracking-[0.2em] ${color} ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
