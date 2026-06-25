/**
 * Cinematic sky-blue world backdrop:
 *  - soft drifting clouds
 *  - a neon city skyline with blinking windows (gaming "buildings")
 *  - floating isometric voxel blocks (gaming art)
 * Fixed behind all content; fully decorative.
 */

const CLOUDS = [
  { top: 8, w: 240, h: 64, dur: 70, delay: 0, op: 0.92 },
  { top: 18, w: 320, h: 86, dur: 95, delay: -30, op: 0.7 },
  { top: 30, w: 190, h: 54, dur: 60, delay: -12, op: 0.85 },
  { top: 6, w: 280, h: 74, dur: 110, delay: -55, op: 0.6 },
  { top: 44, w: 210, h: 58, dur: 80, delay: -20, op: 0.65 },
];

const BLOCKS = [
  { left: 10, top: 24, size: 64, r: -8, delay: 0 },
  { left: 82, top: 18, size: 86, r: 10, delay: -2 },
  { left: 70, top: 52, size: 52, r: -4, delay: -4 },
  { left: 24, top: 60, size: 44, r: 6, delay: -1 },
  { left: 90, top: 64, size: 60, r: -10, delay: -3 },
];

export function SkyWorld() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* clouds */}
      {CLOUDS.map((c, i) => (
        <span
          key={`c-${i}`}
          className="absolute animate-cloud-drift rounded-full bg-white blur-2xl"
          style={{
            top: `${c.top}%`,
            width: c.w,
            height: c.h,
            opacity: c.op,
            animationDuration: `${c.dur}s`,
            animationDelay: `${c.delay}s`,
          }}
        />
      ))}

      {/* floating voxel blocks */}
      {BLOCKS.map((b, i) => (
        <div
          key={`b-${i}`}
          className="absolute animate-block-bob"
          style={{ left: `${b.left}%`, top: `${b.top}%`, ["--r" as string]: `${b.r}deg`, animationDelay: `${b.delay}s` }}
        >
          <IsoCube size={b.size} />
        </div>
      ))}

      {/* neon city skyline */}
      <Skyline />
    </div>
  );
}

function IsoCube({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 112" style={{ filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.35))" }}>
      {/* top */}
      <polygon points="50,6 92,30 50,54 8,30" fill="#3DA9E8" stroke="rgba(212,175,55,0.7)" strokeWidth="1.5" opacity="0.85" />
      {/* left */}
      <polygon points="8,30 50,54 50,104 8,80" fill="#15507F" stroke="rgba(212,175,55,0.5)" strokeWidth="1.5" opacity="0.8" />
      {/* right */}
      <polygon points="92,30 50,54 50,104 92,80" fill="#0C3357" stroke="rgba(212,175,55,0.5)" strokeWidth="1.5" opacity="0.8" />
      <circle cx="50" cy="30" r="3" fill="#22D3EE" />
    </svg>
  );
}

function Skyline() {
  // Buildings as rects with blinking windows. preserveAspectRatio none → stretches full width.
  const buildings = [
    { x: 20, w: 70, h: 150 },
    { x: 95, w: 54, h: 230 },
    { x: 155, w: 80, h: 120 },
    { x: 240, w: 60, h: 270 },
    { x: 305, w: 90, h: 175 },
    { x: 400, w: 64, h: 300 },
    { x: 470, w: 76, h: 140 },
    { x: 552, w: 58, h: 250 },
    { x: 615, w: 96, h: 190 },
    { x: 716, w: 60, h: 320 },
    { x: 782, w: 84, h: 150 },
    { x: 872, w: 56, h: 240 },
    { x: 933, w: 92, h: 175 },
    { x: 1030, w: 64, h: 290 },
    { x: 1100, w: 90, h: 160 },
  ];
  return (
    <svg
      className="absolute inset-x-0 bottom-0 h-[42vh] w-full"
      viewBox="0 0 1200 340"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="bld" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7FB2DC" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#A9CDE9" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      {buildings.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={340 - b.h} width={b.w} height={b.h} fill="url(#bld)" stroke="rgba(46,143,214,0.30)" />
          {/* windows */}
          {Array.from({ length: Math.floor(b.h / 26) }).map((_, row) =>
            Array.from({ length: Math.max(1, Math.floor(b.w / 22)) }).map((_, col) => {
              const lit = (i * 7 + row * 3 + col * 5) % 4 === 0;
              return (
                <rect
                  key={`${row}-${col}`}
                  x={b.x + 7 + col * 22}
                  y={340 - b.h + 12 + row * 26}
                  width="9"
                  height="12"
                  rx="1"
                  fill={lit ? ((i + col) % 2 === 0 ? "#D4AF37" : "#0EA5C4") : "rgba(46,143,214,0.18)"}
                  className={lit ? "animate-window-blink" : undefined}
                  style={lit ? { animationDelay: `${(row + col) * 0.4}s` } : undefined}
                />
              );
            })
          )}
        </g>
      ))}
      {/* ground glow */}
      <rect x="0" y="334" width="1200" height="6" fill="rgba(46,143,214,0.3)" />
    </svg>
  );
}
