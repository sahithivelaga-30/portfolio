import { Trophy } from "lucide-react";

/** Gold achievement unlock — reserved for chapter victories. */
export function AchievementBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-gold/45 bg-gradient-to-r from-gold/15 to-gold/5 px-4 py-2 text-sm font-semibold text-[#9a7b18] shadow-[0_0_22px_rgba(212,175,55,0.22)]">
      <Trophy size={15} className="text-gold" />
      {label}
    </span>
  );
}
