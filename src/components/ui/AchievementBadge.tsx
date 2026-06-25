import { Star } from "lucide-react";

interface AchievementBadgeProps {
  label: string;
  mission?: string;
  /** Locked badges render dim with no gold. */
  unlocked?: boolean;
}

/** Gold star is reserved for achievements — nowhere else in the palette. */
export function AchievementBadge({ label, mission, unlocked = true }: AchievementBadgeProps) {
  return (
    <div className="flex items-center gap-3 rounded-panel border border-glass-edge bg-glass px-4 py-3 backdrop-blur-[16px]">
      <span
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg border ${
          unlocked
            ? "border-gold/40 bg-gold/10 text-gold shadow-[0_0_18px_rgba(245,197,66,0.25)]"
            : "border-glass-edge bg-white/[0.02] text-text-lo"
        }`}
      >
        <Star size={16} fill={unlocked ? "currentColor" : "none"} />
      </span>
      <div>
        <p className="text-sm font-medium text-text-hi">{label}</p>
        {mission && (
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-lo">
            {mission}
          </p>
        )}
      </div>
    </div>
  );
}
