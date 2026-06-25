import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { Reveal } from "../ui/Reveal";
import { skillTree } from "../../content";

export function SkillsConstellation() {
  return (
    <section id="skills" className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeader
        index="07"
        kicker="Tech Constellation"
        title="The toolset, mapped as a constellation."
        intro="Hover a branch to light its connections. It degrades to a clean, readable grid on touch and under reduced-motion."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillTree.map((b, i) => (
          <Reveal key={b.branch} index={i % 3} className="h-full">
            <BranchPanel branch={b.branch} skills={b.skills} xp={b.xp} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

interface Point {
  x: number;
  y: number;
}

function BranchPanel({ branch, skills, xp }: { branch: string; skills: string[]; xp: number }) {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [points, setPoints] = useState<Point[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduce]);

  useLayoutEffect(() => {
    if (!enabled) return;
    const measure = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const base = wrap.getBoundingClientRect();
      setPoints(
        chipRefs.current.map((el) => {
          if (!el) return { x: 0, y: 0 };
          const r = el.getBoundingClientRect();
          return { x: r.left - base.left + r.width / 2, y: r.top - base.top + r.height / 2 };
        })
      );
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [enabled, skills.length]);

  return (
    <GlassCard hud interactive className="h-full p-5">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-sm font-semibold text-text-hi">{branch}</p>
        <span className="font-mono text-xs text-sky">{xp} XP</span>
      </div>
      <div className="mb-4 h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <div className="h-full rounded-full bg-gradient-to-r from-sky to-purple" style={{ width: `${xp}%` }} />
      </div>

      <div ref={wrapRef} className="relative">
        {enabled && points.length === skills.length && (
          <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden style={{ overflow: "visible" }}>
            {points.map((a, i) =>
              points.slice(i + 1).map((b, j) => {
                const k = i + 1 + j;
                const act = hovered === i || hovered === k;
                return (
                  <line
                    key={`${i}-${k}`}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke={(i + k) % 2 === 0 ? "#1E78C2" : "#6D4FCB"}
                    strokeWidth={act ? 1 : 0.5}
                    strokeOpacity={hovered === null ? 0.1 : act ? 0.55 : 0.05}
                    className="transition-all duration-200"
                  />
                );
              })
            )}
          </svg>
        )}

        <ul className="relative flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <li key={s}>
              <span
                ref={(el) => (chipRefs.current[i] = el)}
                onMouseEnter={() => enabled && setHovered(i)}
                onMouseLeave={() => enabled && setHovered(null)}
                className={`inline-flex rounded-lg border px-2.5 py-1 text-sm transition-colors duration-200 ${
                  hovered === i
                    ? "border-sky/50 bg-sky/12 text-text-hi"
                    : "border-edge bg-white/[0.03] text-text-lo"
                }`}
              >
                {s}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </GlassCard>
  );
}
