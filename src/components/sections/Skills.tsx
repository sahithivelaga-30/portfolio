import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Section } from "../ui/Section";
import { GlassCard } from "../ui/GlassCard";
import { Reveal } from "../ui/Reveal";
import { skillGroups, type SkillGroup } from "../../content";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="The Armory"
      title="Skills"
      intro="Hover a skill on desktop to trace its neighbors. On touch and reduced-motion it stays a plain, readable grid."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} index={i} className="h-full">
            <SkillPanel group={group} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

interface Point {
  x: number;
  y: number;
}

function SkillPanel({ group }: { group: SkillGroup }) {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [points, setPoints] = useState<Point[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [enabled, setEnabled] = useState(false);

  // Only enable the constellation on devices with a fine pointer + hover.
  useEffect(() => {
    if (reduce) return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduce]);

  // Measure chip centers relative to the panel.
  useLayoutEffect(() => {
    if (!enabled) return;
    const measure = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const base = wrap.getBoundingClientRect();
      const pts = chipRefs.current.map((el) => {
        if (!el) return { x: 0, y: 0 };
        const r = el.getBoundingClientRect();
        return { x: r.left - base.left + r.width / 2, y: r.top - base.top + r.height / 2 };
      });
      setPoints(pts);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [enabled, group.skills.length]);

  return (
    <GlassCard className="h-full p-6" interactive>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {group.label}
      </p>

      <div ref={wrapRef} className="relative">
        {/* constellation overlay */}
        {enabled && points.length === group.skills.length && (
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden
            style={{ overflow: "visible" }}
          >
            {points.map((a, i) =>
              points.slice(i + 1).map((b, j) => {
                const k = i + 1 + j;
                const active = hovered === i || hovered === k;
                return (
                  <line
                    key={`${i}-${k}`}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke="#8B5CF6"
                    strokeWidth={active ? 1 : 0.5}
                    strokeOpacity={hovered === null ? 0.08 : active ? 0.5 : 0.04}
                    className="transition-all duration-200"
                  />
                );
              })
            )}
          </svg>
        )}

        <ul className="relative flex flex-wrap gap-2">
          {group.skills.map((skill, i) => (
            <li key={skill}>
              <span
                ref={(el) => (chipRefs.current[i] = el)}
                onMouseEnter={() => enabled && setHovered(i)}
                onMouseLeave={() => enabled && setHovered(null)}
                className={`inline-flex rounded-lg border px-3 py-1.5 text-sm transition-colors duration-200 ${
                  hovered === i
                    ? "border-accent/50 bg-accent/10 text-text-hi"
                    : "border-glass-edge bg-white/[0.02] text-text-lo"
                }`}
              >
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </GlassCard>
  );
}
