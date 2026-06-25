import { useReducedMotion } from "framer-motion";

/**
 * Sky-blue world backdrop:
 *  - soft drifting clouds
 *  - floating career keywords & code symbols (from the résumé)
 *  - a flowing data-network (DAG) at the bottom — packets travel the edges,
 *    matching what a data engineer actually builds.
 */

const CLOUDS = [
  { top: 8, w: 240, h: 64, dur: 70, delay: 0, op: 0.92 },
  { top: 18, w: 320, h: 86, dur: 95, delay: -30, op: 0.7 },
  { top: 30, w: 190, h: 54, dur: 60, delay: -12, op: 0.85 },
  { top: 6, w: 280, h: 74, dur: 110, delay: -55, op: 0.6 },
  { top: 44, w: 210, h: 58, dur: 80, delay: -20, op: 0.65 },
];

type Tone = "sky" | "gold" | "purple";
const KEYWORDS: { t: string; left: number; top: number; size: number; tone: Tone; delay: number }[] = [
  { t: "PySpark", left: 7, top: 20, size: 18, tone: "gold", delay: 0 },
  { t: "Java", left: 87, top: 14, size: 17, tone: "sky", delay: -2 },
  { t: "AWS EMR", left: 71, top: 30, size: 15, tone: "purple", delay: -4 },
  { t: "ETL", left: 19, top: 40, size: 17, tone: "sky", delay: -1 },
  { t: "SQL", left: 92, top: 44, size: 16, tone: "gold", delay: -3 },
  { t: "Scala", left: 10, top: 58, size: 15, tone: "purple", delay: -5 },
  { t: "K-Means", left: 60, top: 18, size: 14, tone: "sky", delay: -2.5 },
  { t: "FB Prophet", left: 34, top: 24, size: 14, tone: "gold", delay: -1.5 },
  { t: "Talend", left: 82, top: 60, size: 14, tone: "purple", delay: -3.5 },
  { t: "Tableau", left: 47, top: 12, size: 14, tone: "sky", delay: -0.8 },
  { t: "Pandas", left: 26, top: 70, size: 14, tone: "purple", delay: -2.1 },
  { t: "PyTorch", left: 67, top: 48, size: 14, tone: "gold", delay: -4.2 },
  { t: "{ }", left: 4, top: 32, size: 24, tone: "sky", delay: -2.2 },
  { t: "</>", left: 63, top: 8, size: 22, tone: "gold", delay: -4.4 },
  { t: "λ", left: 40, top: 52, size: 26, tone: "purple", delay: -1.1 },
  { t: "Σ", left: 52, top: 40, size: 26, tone: "sky", delay: -2.8 },
  { t: "df.groupBy()", left: 14, top: 80, size: 13, tone: "sky", delay: -1.2 },
  { t: "SELECT *", left: 74, top: 78, size: 13, tone: "gold", delay: -3.2 },
  { t: "spark.read", left: 88, top: 70, size: 13, tone: "purple", delay: -0.6 },
  { t: ".parquet", left: 33, top: 84, size: 13, tone: "sky", delay: -3.8 },
  { t: "()=>", left: 96, top: 26, size: 18, tone: "purple", delay: -2.6 },
  { t: "RDD", left: 2, top: 68, size: 15, tone: "gold", delay: -1.9 },
];

const toneClass: Record<Tone, string> = {
  sky: "text-sky/40",
  gold: "text-goldhi/40",
  purple: "text-purple/45",
};

export function SkyWorld() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* clouds */}
      {CLOUDS.map((c, i) => (
        <span
          key={`c-${i}`}
          className="absolute animate-cloud-drift rounded-full bg-white blur-2xl"
          style={{ top: `${c.top}%`, width: c.w, height: c.h, opacity: c.op, animationDuration: `${c.dur}s`, animationDelay: `${c.delay}s` }}
        />
      ))}

      {/* floating career keywords / symbols */}
      {KEYWORDS.map((k, i) => (
        <span
          key={`k-${i}`}
          className={`absolute animate-block-bob select-none font-mono font-medium ${toneClass[k.tone]}`}
          style={{ left: `${k.left}%`, top: `${k.top}%`, fontSize: k.size, ["--r" as string]: "0deg", animationDelay: `${k.delay}s` }}
        >
          {k.t}
        </span>
      ))}

      {/* flowing data-network */}
      <DataNetwork />
    </div>
  );
}

const NODES = [
  { x: 50, y: 230 }, // 0 raw
  { x: 230, y: 120 }, // 1
  { x: 430, y: 235 }, // 2
  { x: 620, y: 135 }, // 3
  { x: 820, y: 240 }, // 4
  { x: 1010, y: 125 }, // 5
  { x: 1170, y: 215 }, // 6
];
const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [0, 2], [3, 5],
];

function edgePath(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2;
  return `M ${a.x} ${a.y} C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`;
}

function DataNetwork() {
  const reduce = useReducedMotion();
  const packetColors = ["#0E97B8", "#6D4FCB", "#A87E0E"];
  return (
    <svg
      className="absolute inset-x-0 bottom-0 h-[34vh] w-full"
      viewBox="0 0 1200 300"
      preserveAspectRatio="none"
    >
      {/* faint grid floor */}
      {Array.from({ length: 14 }).map((_, i) => (
        <line key={`g-${i}`} x1={i * 92} y1="0" x2={i * 92} y2="300" stroke="rgba(30,120,194,0.06)" />
      ))}

      {/* edges */}
      {EDGES.map(([a, b], i) => (
        <path
          key={`e-${i}`}
          id={`edge-${i}`}
          d={edgePath(NODES[a], NODES[b])}
          fill="none"
          stroke="rgba(30,120,194,0.22)"
          strokeWidth="1.5"
        />
      ))}

      {/* traveling data packets */}
      {!reduce &&
        EDGES.map(([, ], i) => (
          <circle key={`p-${i}`} r="3.5" fill={packetColors[i % packetColors.length]} opacity="0.85">
            <animateMotion dur={`${3 + (i % 3)}s`} repeatCount="indefinite" begin={`${i * 0.5}s`}>
              <mpath href={`#edge-${i}`} />
            </animateMotion>
          </circle>
        ))}

      {/* nodes */}
      {NODES.map((n, i) => (
        <g key={`n-${i}`}>
          <circle cx={n.x} cy={n.y} r="9" fill="rgba(255,255,255,0.6)" stroke="rgba(176,134,40,0.55)" strokeWidth="1.5" />
          <circle cx={n.x} cy={n.y} r="3.5" fill={i % 3 === 1 ? "#6D4FCB" : "#1E78C2"} />
        </g>
      ))}
    </svg>
  );
}
