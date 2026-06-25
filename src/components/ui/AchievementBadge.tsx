import { Trophy } from "lucide-react";

export function AchievementBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold shadow-[0_0_22px_rgba(245,197,66,0.18)]">
      <Trophy size={15} />
      {label}
    </span>
  );
}

export function Pill({ children, tone = "sky" }: { children: React.ReactNode; tone?: "sky" | "purple" | "mono" }) {
  const cls =
    tone === "purple"
      ? "border-purple/30 bg-purple/10 text-purple"
      : tone === "mono"
        ? "border-edge bg-white/[0.04] text-text-lo"
        : "border-sky/30 bg-sky/10 text-sky";
  return (
    <span className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[11px] ${cls}`}>
      {children}
    </span>
  );
}
