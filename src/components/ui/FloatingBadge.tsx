import { motion, useReducedMotion } from "framer-motion";

/** A small glassy stat badge that orbits/floats near the hero card. */
export function FloatingBadge({ label, delay = 0 }: { label: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center gap-1.5 rounded-full border border-sky/35 bg-white/85 px-3 py-1.5 text-xs font-medium text-luxnavy shadow-glass backdrop-blur-[16px]"
    >
      <span className={`h-1.5 w-1.5 rounded-full bg-sky ${reduce ? "" : "animate-pulse-soft"}`} />
      {label}
    </motion.span>
  );
}
