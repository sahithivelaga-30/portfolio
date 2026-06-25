import { Trophy } from "lucide-react";

export function AchievementBadge({ label }: { label: string }) {
  return (
    <span className="gold-frame inline-flex !rounded-full shadow-[0_0_22px_rgba(245,197,66,0.22)]">
      <span className="inline-flex items-center gap-2.5 rounded-full bg-darknavy px-4 py-2 text-sm font-semibold text-goldhi">
        <Trophy size={15} />
        {label}
      </span>
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
