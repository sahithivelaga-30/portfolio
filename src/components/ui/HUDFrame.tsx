import type { ReactNode } from "react";

/** Thin corner brackets — the command-center grammar. Wraps any block. */
export function HUDFrame({ children, className }: { children: ReactNode; className?: string }) {
  const corner =
    "pointer-events-none absolute h-3 w-3 border-accent/50";
  return (
    <div className={`relative ${className ?? ""}`}>
      <span aria-hidden className={`${corner} left-0 top-0 border-l border-t`} />
      <span aria-hidden className={`${corner} right-0 top-0 border-r border-t`} />
      <span aria-hidden className={`${corner} bottom-0 left-0 border-b border-l`} />
      <span aria-hidden className={`${corner} bottom-0 right-0 border-b border-r`} />
      {children}
    </div>
  );
}
