/** Static SVG stand-in for the WebGL data-core (mobile / reduced-motion / no-WebGL). */
export function DataCorePlaceholder() {
  return (
    <svg viewBox="0 0 200 200" className="h-48 w-48" aria-label="Data core: raw data refined into insight">
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="70" fill="url(#coreGlow)" className="animate-core-pulse" />
      <g>
        <polygon points="100,30 160,100 100,170 40,100" fill="none" stroke="#8B5CF6" strokeWidth="1.5" />
        <polygon points="100,55 140,100 100,145 60,100" fill="rgba(139,92,246,0.12)" stroke="#38BDF8" strokeWidth="1" />
      </g>
      <ellipse cx="100" cy="100" rx="85" ry="32" fill="none" stroke="rgba(140,120,255,0.25)" />
      <circle cx="100" cy="100" r="5" fill="#38BDF8" />
      <text x="100" y="192" textAnchor="middle" className="fill-text-lo font-mono" fontSize="9">
        RAW → PYSPARK / JAVA → EMR → INSIGHT
      </text>
    </svg>
  );
}
