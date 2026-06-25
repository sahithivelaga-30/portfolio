import type { ReactNode } from "react";

interface MetricChipProps {
  children: ReactNode;
  accent?: boolean;
  className?: string;
}

export function MetricChip({ children, accent = false, className }: MetricChipProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs",
        accent
          ? "border-accent/40 bg-accent/10 text-text-hi"
          : "border-glass-edge bg-glass text-text-lo",
        className ?? "",
      ].join(" ")}
    >
      {accent && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />}
      {children}
    </span>
  );
}
