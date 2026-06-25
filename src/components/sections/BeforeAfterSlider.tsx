import { useCallback, useRef, useState } from "react";
import { Check, GripVertical } from "lucide-react";
import type { ExperienceEntry } from "../../content";

type Perf = NonNullable<ExperienceEntry["performance"]>;

/**
 * Scoped "Raw → Intelligence" moment: a before/after reveal slider.
 * Drag (or arrow-key) the handle to wipe between the untuned "before"
 * pipeline and the optimized "after". Fully keyboard operable.
 */
export function BeforeAfterSlider({ perf }: { perf: Perf }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) setFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
  };

  return (
    <div
      ref={containerRef}
      className="relative h-56 w-full select-none overflow-hidden rounded-xl border border-glass-edge bg-ink-800"
    >
      {/* AFTER layer (full width, underneath) */}
      <Panel
        tone="after"
        title={perf.after.title}
        points={perf.after.points}
        align="right"
      />

      {/* BEFORE layer (clipped to slider position, on top) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Panel tone="before" title={perf.before.title} points={perf.before.points} align="left" />
      </div>

      {/* Handle */}
      <div
        role="slider"
        tabIndex={0}
        aria-label="Reveal pipeline before vs after optimization"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-valuetext={`${Math.round(pos)}% before, ${100 - Math.round(pos)}% after`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onKeyDown={onKeyDown}
        className="absolute top-0 z-10 flex h-full w-8 -translate-x-1/2 cursor-ew-resize items-center justify-center"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-accent/70" />
        <span className="grid h-8 w-8 place-items-center rounded-full border border-accent/50 bg-ink-900 text-accent shadow-glass">
          <GripVertical size={14} />
        </span>
      </div>
    </div>
  );
}

function Panel({
  tone,
  title,
  points,
  align,
}: {
  tone: "before" | "after";
  title: string;
  points: string[];
  align: "left" | "right";
}) {
  const after = tone === "after";
  return (
    <div
      className={`absolute inset-0 flex flex-col justify-center gap-2 p-6 ${
        align === "right" ? "items-end text-right" : "items-start text-left"
      } ${after ? "bg-accent/[0.07]" : "bg-white/[0.02]"}`}
    >
      <span
        className={`font-mono text-xs uppercase tracking-[0.2em] ${
          after ? "text-accent" : "text-text-lo"
        }`}
      >
        {title}
      </span>
      <ul className={`space-y-1.5 ${align === "right" ? "items-end" : ""}`}>
        {points.map((p) => (
          <li
            key={p}
            className={`flex items-center gap-2 text-sm text-text-hi ${
              align === "right" ? "flex-row-reverse" : ""
            }`}
          >
            {after ? (
              <Check size={14} className="shrink-0 text-accent" />
            ) : (
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-text-lo/60" />
            )}
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
