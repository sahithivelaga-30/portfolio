import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile, profileTags } from "../content";

/**
 * Premium vertical glass profile card: sky holographic border, soft 3D tilt,
 * animated scan line, status tags. Renders a premium placeholder if the photo
 * is missing — never a broken <img>.
 */
export function HolographicProfileCard() {
  const reduce = useReducedMotion();
  const [imgOk, setImgOk] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const showImg = profile.photo && imgOk;

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -8, y: px * 8 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={reduce ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      className="relative w-full max-w-[19rem]"
    >
      {/* holographic gradient border */}
      <div className="rounded-[1.4rem] bg-gradient-to-br from-sky/60 via-cyan/40 to-purpleaccent/40 p-[1.5px] shadow-glow">
        <div className="glass overflow-hidden rounded-[1.3rem] p-4">
          {/* photo / placeholder */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-sky/25 bg-gradient-to-br from-softsky to-white">
            {showImg ? (
              <img
                src={profile.photo!}
                alt={`${profile.name}, ${profile.role}`}
                className="h-full w-full object-cover"
                onError={() => setImgOk(false)}
              />
            ) : (
              <div className="grid h-full w-full place-items-center">
                <span className="font-display text-6xl font-semibold text-sky/80">
                  {profile.name.split(" ").map((p) => p[0]).join("")}
                </span>
              </div>
            )}
            {/* scan line */}
            <span
              aria-hidden
              className={`pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cyan/35 to-transparent ${
                reduce ? "" : "animate-scan-line"
              }`}
            />
            {/* HUD corner ticks */}
            <span className="absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-sky/60" />
            <span className="absolute right-2 top-2 h-3 w-3 border-r-2 border-t-2 border-sky/60" />
            <span className="absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-sky/60" />
            <span className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-sky/60" />
          </div>

          {/* identity */}
          <div className="mt-4 text-center">
            <p className="font-display text-lg font-semibold text-navy">{profile.name}</p>
            <p className="text-sm text-text-lo">{profile.role}</p>
            <p className="font-mono text-xs text-sky">{profile.location}</p>
          </div>

          {/* status tags */}
          <div className="mt-3 flex flex-wrap justify-center gap-1.5">
            {profileTags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-sky/25 bg-white/70 px-2 py-0.5 font-mono text-[10px] text-luxnavy"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
