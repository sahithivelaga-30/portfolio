import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  /** Adds a subtle hover lift + border brighten. */
  interactive?: boolean;
  /** One hairline accent line at the top edge. */
  accentLine?: boolean;
}

export function GlassCard({
  children,
  className,
  interactive = false,
  accentLine = false,
}: GlassCardProps) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl border border-glass-edge bg-glass shadow-glass",
        "backdrop-blur-glass",
        interactive
          ? "transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-glass-lift"
          : "",
        className ?? "",
      ].join(" ")}
    >
      {accentLine && (
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
        />
      )}
      {children}
    </div>
  );
}
