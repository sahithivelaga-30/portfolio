import type { Project } from "../../content";

/** Small, restrained SVG chart motifs — one per project card. */
export function ChartMotif({ kind }: { kind: Project["motif"] }) {
  if (kind === "forecast") {
    return (
      <svg viewBox="0 0 200 60" className="h-14 w-full" aria-hidden>
        {/* historical solid + forecast dashed (Prophet-style) */}
        <path
          d="M2 50 C 30 44, 45 30, 70 34 S 110 18, 130 24"
          fill="none"
          stroke="#67E8F9"
          strokeWidth="2"
        />
        <path
          d="M130 24 C 150 28, 165 14, 198 8"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <circle cx="130" cy="24" r="2.5" fill="#8B5CF6" />
      </svg>
    );
  }

  if (kind === "bars") {
    const heights = [22, 38, 30, 50, 18, 44, 34];
    return (
      <svg viewBox="0 0 200 60" className="h-14 w-full" aria-hidden>
        {heights.map((h, i) => (
          <rect
            key={i}
            x={6 + i * 28}
            y={56 - h}
            width="16"
            height={h}
            rx="2"
            fill={i === 3 ? "#8B5CF6" : "rgba(255,255,255,0.14)"}
          />
        ))}
      </svg>
    );
  }

  // web
  return (
    <svg viewBox="0 0 200 60" className="h-14 w-full" aria-hidden>
      <rect x="2" y="6" width="196" height="48" rx="6" fill="none" stroke="rgba(255,255,255,0.14)" />
      <line x1="2" y1="18" x2="198" y2="18" stroke="rgba(255,255,255,0.14)" />
      <circle cx="10" cy="12" r="2" fill="#8B5CF6" />
      <rect x="14" y="28" width="60" height="6" rx="3" fill="#8B5CF6" />
      <rect x="14" y="40" width="120" height="5" rx="2.5" fill="rgba(255,255,255,0.14)" />
    </svg>
  );
}
