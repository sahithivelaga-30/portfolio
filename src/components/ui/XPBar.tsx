import { useReducedMotion } from "framer-motion";

interface XPBarProps {
  /** 0–100 */
  value: number;
  label?: string;
  /** Show numeric percentage on the right. */
  showValue?: boolean;
  tone?: "accent" | "energy" | "gold";
  className?: string;
}

/** A thin command-center progress meter. Used for skill XP + boss HP. */
export function XPBar({ value, label, showValue = true, tone = "accent", className }: XPBarProps) {
  const reduce = useReducedMotion();
  const fill =
    tone === "energy" ? "bg-energy" : tone === "gold" ? "bg-gold" : "bg-accent";
  const v = Math.max(0, Math.min(100, value));

  return (
    <div className={className}>
      {(label || showValue) && (
        <div className="mb-1.5 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.15em] text-text-lo">
          {label && <span>{label}</span>}
          {showValue && <span className="text-text-hi">{Math.round(v)}%</span>}
        </div>
      )}
      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]"
        role="progressbar"
        aria-valuenow={Math.round(v)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className={`h-full rounded-full ${fill}`}
          style={{ width: `${v}%`, transition: reduce ? "none" : "width 0.8s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </div>
    </div>
  );
}
