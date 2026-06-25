import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const LINES = ["Initializing Data Realm…", "Loading mission parameters…", "Mission ready."];

/** Sub-1.5s skippable boot. Mono lines type out over a forming node. */
export function Boot({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (reduce) {
      onDone();
      return;
    }
    const timers = LINES.map((_, i) => setTimeout(() => setShown(i + 1), 250 + i * 400));
    const done = setTimeout(onDone, 1450);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(done);
    };
  }, [onDone, reduce]);

  return (
    <motion.div
      className="fixed inset-0 z-[90] grid place-items-center bg-void"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* forming low-poly node */}
        <svg viewBox="0 0 80 80" className="h-16 w-16 animate-core-pulse" aria-hidden>
          <polygon
            points="40,8 70,40 40,72 10,40"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="1.5"
          />
          <polygon points="40,22 58,40 40,58 22,40" fill="rgba(139,92,246,0.15)" stroke="#38BDF8" strokeWidth="1" />
          <circle cx="40" cy="40" r="3" fill="#38BDF8" />
        </svg>

        <div className="h-16 text-center font-mono text-sm text-text-lo">
          {LINES.slice(0, shown).map((l, i) => (
            <p key={l} className={i === LINES.length - 1 ? "text-accent" : ""}>
              {l}
              {i === shown - 1 && <span className="ml-0.5 animate-caret-blink">▋</span>}
            </p>
          ))}
        </div>

        <button
          type="button"
          onClick={onDone}
          className="font-mono text-xs uppercase tracking-[0.2em] text-text-lo underline-offset-4 hover:text-text-hi hover:underline"
        >
          Skip ▸
        </button>
      </div>
    </motion.div>
  );
}
