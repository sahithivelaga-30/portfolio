import { useReducedMotion } from "framer-motion";

const NODES = [
  { label: "Raw Data", x: 60 },
  { label: "PySpark / Java", x: 230 },
  { label: "AWS EMR", x: 400 },
  { label: "Insight", x: 540 },
];

const CY = 70;

/**
 * The single signature animation: a slow horizontal data-flow.
 * Raw Data → PySpark / Java → AWS EMR → Insight.
 *
 * Lightweight inline SVG (no WebGL) — keeps first paint fast and Lighthouse high.
 * The flowing dash + node pulse pause automatically under prefers-reduced-motion
 * (handled globally in index.css; we also drop the className here for safety).
 */
export function DataFlow() {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 600 140"
      className="h-auto w-full max-w-xl"
      role="img"
      aria-label="Pipeline: raw data flows through PySpark and Java into AWS EMR and out as insight."
    >
      <defs>
        <linearGradient id="flowLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#67E8F9" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
        </linearGradient>
        <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* base track */}
      <line
        x1={NODES[0].x}
        y1={CY}
        x2={NODES[NODES.length - 1].x}
        y2={CY}
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="2"
      />

      {/* animated flowing line */}
      <line
        x1={NODES[0].x}
        y1={CY}
        x2={NODES[NODES.length - 1].x}
        y2={CY}
        stroke="url(#flowLine)"
        strokeWidth="2"
        strokeDasharray="14 18"
        strokeLinecap="round"
        className={reduce ? undefined : "animate-flow-dash"}
        filter="url(#soft)"
      />

      {NODES.map((n, i) => (
        <g key={n.label}>
          <circle
            cx={n.x}
            cy={CY}
            r="7"
            fill="#0E0E16"
            stroke="#8B5CF6"
            strokeWidth="2"
            className={reduce ? undefined : "animate-pulse-node"}
            style={{ animationDelay: `${i * 0.4}s`, transformOrigin: `${n.x}px ${CY}px` }}
          />
          <circle cx={n.x} cy={CY} r="2.5" fill="#67E8F9" />
          <text
            x={n.x}
            y={i % 2 === 0 ? CY - 22 : CY + 32}
            textAnchor="middle"
            className="fill-text-lo font-mono"
            fontSize="11"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
