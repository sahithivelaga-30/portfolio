import type { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

/**
 * The ONE glass spec for the whole site: single blur, single border opacity,
 * single corner radius (rounded-panel). Consistency is the luxury signal.
 */
export function GlassPanel({ children, className, interactive = false }: GlassPanelProps) {
  return (
    <div
      className={[
        "rounded-panel border border-glass-edge bg-glass shadow-glass backdrop-blur-[16px]",
        interactive
          ? "transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glass-lift"
          : "",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
