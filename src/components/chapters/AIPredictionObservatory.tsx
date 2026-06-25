import { ChapterHeader } from "../ui/ChapterHeader";
import { GlassCard } from "../ui/GlassCard";
import { AchievementBadge } from "../ui/AchievementBadge";
import { Reveal } from "../ui/Reveal";

export function AIPredictionObservatory() {
  return (
    <section id="observatory" className="mx-auto max-w-content scroll-mt-24 px-5 py-20 sm:px-8">
      <ChapterHeader
        chapter="CHAPTER 06"
        kicker="AI Prediction Observatory"
        title="Using data to understand and predict real-world patterns."
        intro="COVID-19 Outbreak Analysis & Prediction in India — Sahithi analyzed outbreak data with bar graphs, scatter plots, and interactive plots, then used FB Prophet to forecast future trends."
      />

      <Reveal>
        <GlassCard className="grid gap-6 p-6 sm:p-8 md:grid-cols-2">
          {/* Observatory visual: India-ish map + forecast */}
          <div className="grid place-items-center rounded-xl border border-sky/15 bg-gradient-to-br from-softsky to-white p-6">
            <svg viewBox="0 0 220 140" className="w-full max-w-sm" aria-label="Outbreak map with forecast curve">
              <path
                d="M70 18 L120 26 L138 60 L120 92 L96 120 L84 96 L60 80 L52 50 Z"
                fill="rgba(56,189,248,0.12)"
                stroke="#38BDF8"
                strokeWidth="1.5"
              />
              {[[88, 52], [104, 64], [78, 74], [110, 86], [94, 96]].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="3" fill="#8B5CF6">
                  <animate attributeName="r" values="2;4;2" dur="2.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                </circle>
              ))}
              <path d="M150 110 C 170 96, 180 70, 196 56" fill="none" stroke="#22D3EE" strokeWidth="2" />
              <path d="M196 56 C 204 48, 210 40, 216 30" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4 4" />
              <text x="150" y="128" className="fill-[#475569] font-mono" fontSize="8">FB Prophet forecast →</text>
            </svg>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-sky">Data sources</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Kaggle", "JHU", "WHO"].map((s) => (
                <span key={s} className="rounded-lg border border-sky/25 bg-white/70 px-3 py-1 text-sm text-luxnavy">
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-sky">Model</p>
            <p className="mt-1 text-sm text-text-lo">FB Prophet time-series forecasting.</p>
            <p className="mt-5 text-sm leading-relaxed text-text-lo">
              Published — ICICI-21, M.S. University of Baroda (ISSN 00250422).
            </p>
            <div className="mt-5">
              <AchievementBadge label="Forecasting Mission Completed" />
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
