import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/** Cyan glow that trails the cursor (desktop + motion only). */
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

const SHARDS = Array.from({ length: 14 }).map((_, i) => ({
  left: (i * 67) % 96,
  top: (i * 41 + 6) % 92,
  size: 8 + (i % 4) * 6,
  delay: (i % 6) * 1.4,
  cyan: i % 2 === 0,
}));

const STREAMS = [12, 30, 52, 68, 84];

/** Slow floating data shards + flowing data streams + light beams. */
export function FloatingShards() {
  const reduce = useReducedMotion();
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* flowing vertical data streams (gaming "matrix"-lite, very subtle) */}
      {!reduce &&
        STREAMS.map((left, i) => (
          <span
            key={`st-${i}`}
            className="absolute top-0 h-24 w-px animate-stream-down bg-gradient-to-b from-transparent via-sky/40 to-transparent"
            style={{ left: `${left}%`, animationDelay: `${i * 0.8}s`, animationDuration: `${4 + (i % 3)}s` }}
          />
        ))}

      {SHARDS.map((s, i) => (
        <span
          key={i}
          className={`absolute rounded-[3px] border ${
            s.cyan ? "border-cyan/25 bg-cyan/[0.04]" : "border-gold/30 bg-gold/[0.04]"
          } ${reduce ? "" : "animate-drift"}`}
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            transform: "rotate(12deg)",
          }}
        />
      ))}

      {/* light beams */}
      <span className={`absolute -top-1/4 left-1/4 h-[150%] w-px bg-gradient-to-b from-transparent via-sky/20 to-transparent ${reduce ? "" : "animate-beam"}`} />
      <span className={`absolute -top-1/4 right-1/3 h-[150%] w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent ${reduce ? "" : "animate-beam"}`} style={{ animationDelay: "2s" }} />
    </div>
  );
}

/** Fixed CRT/HUD scanline overlay + a slow golden sweep band. */
export function Scanlines() {
  const reduce = useReducedMotion();
  return (
    <>
      <div className="scanlines" aria-hidden />
      {!reduce && (
        <div className="pointer-events-none fixed inset-0 z-[41] overflow-hidden" aria-hidden>
          <span className="absolute inset-x-0 top-0 h-24 animate-sweep bg-gradient-to-b from-transparent via-gold/[0.07] to-transparent" />
        </div>
      )}
    </>
  );
}
