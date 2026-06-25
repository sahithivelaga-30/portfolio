import { useState } from "react";
import { HUDFrame } from "./ui/HUDFrame";
import { MonoLabel } from "./ui/MonoLabel";
import { profile } from "../content";

const STATUS_TAGS = ["PySpark", "AWS EMR", "DevHub"];

/**
 * Holographic character card: photo (or labeled placeholder), glass border,
 * slow scan line, mono status tags. Never renders a broken <img>.
 */
export function ProfileCard() {
  const [imgOk, setImgOk] = useState(true);
  const showImg = profile.photo && imgOk;

  return (
    <HUDFrame className="w-full max-w-xs rounded-panel border border-glass-edge bg-glass p-4 backdrop-blur-[16px] shadow-glow">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-glass-edge bg-surface">
        {showImg ? (
          <img
            src={profile.photo!}
            alt={`${profile.name}, ${profile.role}`}
            className="h-full w-full object-cover"
            onError={() => setImgOk(false)}
            loading="lazy"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-gradient-to-br from-accent/15 to-energy/10">
            <span className="font-display text-5xl font-semibold text-text-hi/80">
              {profile.name
                .split(" ")
                .map((p) => p[0])
                .join("")}
            </span>
          </div>
        )}
        {/* scan line */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-12 animate-scan-line bg-gradient-to-b from-energy/25 to-transparent"
        />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <MonoLabel tone="energy">● ONLINE</MonoLabel>
        <MonoLabel>LV.3 ENGINEER</MonoLabel>
      </div>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {STATUS_TAGS.map((t) => (
          <span
            key={t}
            className="rounded border border-glass-edge bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-text-lo"
          >
            {t}
          </span>
        ))}
      </div>
    </HUDFrame>
  );
}
