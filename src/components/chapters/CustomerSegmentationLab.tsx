import { ChapterHeader } from "../ui/ChapterHeader";
import { GlassCard } from "../ui/GlassCard";
import { AchievementBadge } from "../ui/AchievementBadge";
import { Reveal } from "../ui/Reveal";

const CLUSTERS = [
  { cx: 55, color: "#38BDF8", pts: [[40, 40], [55, 52], [48, 64], [62, 46]] },
  { cx: 150, color: "#22D3EE", pts: [[140, 44], [156, 58], [148, 34], [162, 50]] },
  { cx: 100, color: "#8B5CF6", pts: [[92, 86], [108, 78], [86, 72], [102, 94]] },
];

export function CustomerSegmentationLab() {
  return (
    <section id="segmentation" className="mx-auto max-w-content scroll-mt-24 px-5 py-20 sm:px-8">
      <ChapterHeader
        chapter="CHAPTER 08"
        kicker="Customer Segmentation Lab"
        title="Finding hidden customer patterns."
        intro="During her Data Science internship, Sahithi built customer segmentation with K-Means clustering, WCSS, and the elbow method — visualizing gender, age, annual income, and spending score."
      />

      <Reveal>
        <GlassCard className="grid gap-6 p-6 sm:p-8 md:grid-cols-2">
          <div className="grid place-items-center rounded-xl border border-sky/15 bg-gradient-to-br from-softsky to-white p-6">
            <svg viewBox="0 0 200 120" className="w-full max-w-sm" aria-label="K-Means clusters">
              {CLUSTERS.map((c) =>
                c.pts.map(([x, y], i) => (
                  <circle key={`${c.cx}-${i}`} cx={x} cy={y} r="5" fill={c.color} fillOpacity="0.7" />
                ))
              )}
              {CLUSTERS.map((c) => (
                <circle key={`h-${c.cx}`} cx={c.cx} cy={60} r="22" fill="none" stroke={c.color} strokeOpacity="0.3" strokeDasharray="3 3" />
              ))}
            </svg>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-sky">Elbow method (WCSS)</p>
            <svg viewBox="0 0 200 90" className="mt-2 w-full max-w-xs" aria-label="WCSS elbow curve">
              <path d="M10 14 C 30 50, 50 70, 80 76 S 150 82, 192 84" fill="none" stroke="#22D3EE" strokeWidth="2" />
              <circle cx="80" cy="76" r="3.5" fill="#8B5CF6" />
              <text x="84" y="70" className="fill-[#475569] font-mono" fontSize="8">optimal k</text>
            </svg>
            <p className="mt-4 text-sm leading-relaxed text-text-lo">
              Income vs spending-score clusters revealed distinct customer segments for targeting.
            </p>
            <div className="mt-5">
              <AchievementBadge label="ML Clustering Skill Unlocked" />
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
