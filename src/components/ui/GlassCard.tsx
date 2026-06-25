import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

/** The one glass spec: white translucent, sky border, soft shadow. */
export function GlassCard({ children, className, interactive = false }: GlassCardProps) {
  return (
    <div
      className={[
        "glass",
        interactive ? "transition duration-300 hover:-translate-y-1 hover:shadow-glass-lift" : "",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
