/**
 * A New York City skyline silhouette with recognizable landmarks
 * (Empire State Building, Chrysler Building, One World Trade Center) plus
 * generic towers and softly blinking windows. Hazy daytime blue to match the sky.
 */
type Top = "flat" | "empire" | "chrysler" | "wtc";
interface B {
  x: number;
  w: number;
  h: number;
  top?: Top;
}

const BUILDINGS: B[] = [
  { x: 6, w: 52, h: 140 },
  { x: 64, w: 44, h: 200 },
  { x: 116, w: 64, h: 250, top: "empire" }, // Empire State
  { x: 188, w: 58, h: 160 },
  { x: 252, w: 80, h: 120 },
  { x: 344, w: 50, h: 220, top: "chrysler" }, // Chrysler
  { x: 404, w: 74, h: 150 },
  { x: 488, w: 56, h: 300, top: "wtc" }, // One World Trade Center
  { x: 556, w: 80, h: 150 },
  { x: 648, w: 54, h: 215 },
  { x: 712, w: 88, h: 165 },
  { x: 812, w: 58, h: 255 },
  { x: 882, w: 82, h: 150 },
  { x: 974, w: 60, h: 270 },
  { x: 1046, w: 92, h: 165 },
  { x: 1150, w: 56, h: 210 },
];

const BASE = 360;

export function NYCSkyline() {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 h-[40vh] w-full"
      viewBox="0 0 1200 360"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="nyc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#83B5DF" stopOpacity="0.62" />
          <stop offset="100%" stopColor="#AFD2EC" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {BUILDINGS.map((b, i) => (
        <Building key={i} b={b} idx={i} />
      ))}

      <rect x="0" y={BASE - 4} width="1200" height="4" fill="rgba(30,120,194,0.32)" />
    </svg>
  );
}

function Building({ b, idx }: { b: B; idx: number }) {
  const bodyTop = BASE - b.h;
  const cx = b.x + b.w / 2;
  const stroke = "rgba(30,120,194,0.3)";

  return (
    <g>
      {b.top === "wtc" ? (
        <>
          {/* tapered tower */}
          <polygon
            points={`${b.x},${BASE} ${b.x + b.w},${BASE} ${cx + b.w * 0.32},${bodyTop} ${cx - b.w * 0.32},${bodyTop}`}
            fill="url(#nyc)"
            stroke={stroke}
          />
          {/* spire */}
          <rect x={cx - 1.5} y={bodyTop - 70} width="3" height="70" fill="url(#nyc)" />
          <circle cx={cx} cy={bodyTop - 70} r="2.5" fill="#A87E0E" />
          <Windows x={b.x + 8} w={b.w - 16} top={bodyTop + 14} bottom={BASE} idx={idx} />
        </>
      ) : b.top === "empire" ? (
        <>
          <rect x={b.x} y={bodyTop} width={b.w} height={b.h} fill="url(#nyc)" stroke={stroke} />
          {/* setbacks */}
          <rect x={b.x + b.w * 0.18} y={bodyTop - 34} width={b.w * 0.64} height="34" fill="url(#nyc)" stroke={stroke} />
          <rect x={b.x + b.w * 0.34} y={bodyTop - 58} width={b.w * 0.32} height="24" fill="url(#nyc)" stroke={stroke} />
          {/* antenna mast */}
          <rect x={cx - 1.5} y={bodyTop - 104} width="3" height="46" fill="url(#nyc)" />
          <circle cx={cx} cy={bodyTop - 104} r="2.5" fill="#0E97B8" />
          <Windows x={b.x + 7} w={b.w - 14} top={bodyTop + 12} bottom={BASE} idx={idx} />
        </>
      ) : b.top === "chrysler" ? (
        <>
          <rect x={b.x} y={bodyTop} width={b.w} height={b.h} fill="url(#nyc)" stroke={stroke} />
          {/* tiered crown */}
          <polygon points={`${b.x},${bodyTop} ${b.x + b.w},${bodyTop} ${cx + b.w * 0.28},${bodyTop - 22} ${cx - b.w * 0.28},${bodyTop - 22}`} fill="url(#nyc)" />
          <polygon points={`${cx - b.w * 0.28},${bodyTop - 22} ${cx + b.w * 0.28},${bodyTop - 22} ${cx + b.w * 0.14},${bodyTop - 40} ${cx - b.w * 0.14},${bodyTop - 40}`} fill="url(#nyc)" />
          <rect x={cx - 1.5} y={bodyTop - 78} width="3" height="38" fill="url(#nyc)" />
          <circle cx={cx} cy={bodyTop - 78} r="2.5" fill="#6D4FCB" />
          <Windows x={b.x + 6} w={b.w - 12} top={bodyTop + 12} bottom={BASE} idx={idx} />
        </>
      ) : (
        <>
          <rect x={b.x} y={bodyTop} width={b.w} height={b.h} fill="url(#nyc)" stroke={stroke} />
          <Windows x={b.x + 7} w={b.w - 14} top={bodyTop + 12} bottom={BASE} idx={idx} />
        </>
      )}
    </g>
  );
}

function Windows({ x, w, top, bottom, idx }: { x: number; w: number; top: number; bottom: number; idx: number }) {
  const cols = Math.max(1, Math.floor(w / 16));
  const rows = Math.max(1, Math.floor((bottom - top) / 22));
  const cw = w / cols;
  const cells: JSX.Element[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const lit = (idx * 7 + r * 3 + c * 5) % 4 === 0;
      const color = (idx + c) % 3 === 0 ? "#A87E0E" : (idx + r) % 3 === 0 ? "#6D4FCB" : "#0E97B8";
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={x + c * cw + cw / 2 - 3}
          y={top + r * 22}
          width="6"
          height="9"
          rx="1"
          fill={lit ? color : "rgba(30,120,194,0.16)"}
          className={lit ? "animate-window-blink" : undefined}
          style={lit ? { animationDelay: `${(r + c) * 0.35}s` } : undefined}
        />
      );
    }
  }
  return <>{cells}</>;
}
