import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/** Soft sky glow that follows the cursor (desktop only, motion-aware). */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.left = `${e.clientX}px`;
        el.style.top = `${e.clientY}px`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);
  return <div ref={ref} className="cursor-glow" aria-hidden />;
}

const FRAGMENTS = [
  "{ \"raw\": true }",
  "CSV,,null,,",
  "UDF bottleneck",
  "EMR: OVERLOAD",
  "SELECT * FROM logs",
  "pipeline: BROKEN",
  "skew detected",
  "OOM retry",
  "cluster: 100%",
  "JSON } } }",
];

/** Raw-world only: scattered, intentional data-chaos fragments. Never literal broken UI. */
export function RawFragments() {
  return (
    <div className="raw-fragments" aria-hidden>
      {FRAGMENTS.map((f, i) => (
        <span
          key={f}
          className="absolute rounded border border-danger/30 bg-white/70 px-2 py-0.5 font-mono text-[10px] text-danger/80 shadow-sm animate-drift"
          style={{
            left: `${(i * 53) % 90}%`,
            top: `${(i * 37 + 8) % 88}%`,
            animationDelay: `${i * 0.6}s`,
          }}
        >
          {f}
        </span>
      ))}
    </div>
  );
}
