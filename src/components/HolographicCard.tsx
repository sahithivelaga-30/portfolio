import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile, profileTags } from "../content";

/**
 * Premium semi-dark holographic photo card: cyan glow border, purple shadow,
 * scan line, gaming HUD corner brackets, 3D tilt. Placeholder-safe.
 */
export function HolographicCard({ size = "default" }: { size?: "default" | "lg" }) {
  const reduce = useReducedMotion();
  const [imgOk, setImgOk] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const showImg = profile.photo && imgOk;

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setTilt({ x: ((e.clientY - r.top) / r.height - 0.5) * -8, y: ((e.clientX - r.left) / r.width - 0.5) * 8 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={reduce ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      className={`relative w-full ${size === "lg" ? "max-w-[24rem]" : "max-w-[20rem]"}`}
    >
      <div className="gold-frame shadow-glow">
        <div className="relative overflow-hidden rounded-[1.1rem] bg-darknavy p-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-edge bg-bg">
            {showImg ? (
              <img
                src={profile.photo!}
                alt={`${profile.name}, ${profile.role}`}
                className="h-full w-full object-cover"
                onError={() => setImgOk(false)}
              />
            ) : (
              <div className="grid h-full w-full place-items-center bg-gradient-to-br from-sky/10 to-purple/10">
                <span className="font-display text-6xl font-bold text-text-hi/80">
                  {profile.name.split(" ").map((p) => p[0]).join("")}
                </span>
              </div>
            )}
            <span
              aria-hidden
              className={`pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cyan/30 to-transparent ${
                reduce ? "" : "animate-scan-line"
              }`}
            />
            <span className="absolute left-2 top-2 h-3.5 w-3.5 border-l-2 border-t-2 border-cyan/70" />
            <span className="absolute right-2 top-2 h-3.5 w-3.5 border-r-2 border-t-2 border-cyan/70" />
            <span className="absolute bottom-2 left-2 h-3.5 w-3.5 border-b-2 border-l-2 border-cyan/70" />
            <span className="absolute bottom-2 right-2 h-3.5 w-3.5 border-b-2 border-r-2 border-cyan/70" />
          </div>

          <div className="mt-3 flex items-center justify-between px-1">
            <div>
              <p className="font-display text-base font-semibold text-text-hi">{profile.name}</p>
              <p className="font-mono text-[11px] text-sky">{profile.role}</p>
            </div>
            <span className="font-mono text-[10px] text-success">● ONLINE</span>
          </div>

          <div className="mt-2 flex flex-wrap gap-1.5 px-1 pb-1">
            {profileTags.map((t) => (
              <span key={t} className="rounded border border-edge bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-text-lo">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
