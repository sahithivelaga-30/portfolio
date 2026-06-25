import { MapPin, TrendingUp, Trophy } from "lucide-react";
import { ChapterHeader } from "../ui/ChapterHeader";
import { GlassCard } from "../ui/GlassCard";
import { AchievementBadge } from "../ui/AchievementBadge";
import { Reveal } from "../ui/Reveal";

const HEIGHTS = [30, 52, 40, 68, 24, 60, 46, 72, 38];

export function BusinessIntelligenceGallery() {
  return (
    <section id="bi" className="mx-auto max-w-content scroll-mt-24 px-5 py-20 sm:px-8">
      <ChapterHeader
        chapter="CHAPTER 07"
        kicker="Business Intelligence Gallery"
        title="Turning sales data into business decisions."
        intro="Electronics Sales Data Analysis — Sahithi used Python to analyze 2019 electronics sales data, identifying highest-sales locations, peak periods, and best-selling products."
      />

      <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <GlassCard className="p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-2 font-mono text-xs text-sky">
              <TrendingUp size={14} /> Revenue by month (2019)
            </div>
            <svg viewBox="0 0 320 120" className="w-full" aria-label="Monthly revenue chart">
              {HEIGHTS.map((h, i) => (
                <rect
                  key={i}
                  x={10 + i * 34}
                  y={110 - h}
                  width="22"
                  height={h}
                  rx="3"
                  fill={i === 7 ? "#38BDF8" : "rgba(56,189,248,0.25)"}
                />
              ))}
              <line x1="0" y1="110" x2="320" y2="110" stroke="rgba(15,23,42,0.1)" />
            </svg>
          </GlassCard>
        </Reveal>

        <div className="grid gap-4">
          {[
            { icon: Trophy, k: "Best-selling product", v: "Spotlight identified" },
            { icon: MapPin, k: "Top location", v: "Highest-sales region" },
            { icon: TrendingUp, k: "Peak period", v: "Seasonal demand surfaced" },
          ].map((c, i) => (
            <Reveal key={c.k} index={i}>
              <GlassCard interactive className="flex items-center gap-3 p-5">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-sky/12 text-sky">
                  <c.icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">{c.k}</p>
                  <p className="text-sm text-text-lo">{c.v}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
          <Reveal index={3}>
            <AchievementBadge label="Business Insight Mission Completed" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
