import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { DataCorePlaceholder } from "./DataCorePlaceholder";

// Code-split: WebGL + three.js only ship when the realm hero actually needs them.
const DataCore3D = lazy(() =>
  import("./DataCore3D").then((m) => ({ default: m.DataCore3D }))
);

function webglAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * Decides between the WebGL data-core and the static SVG. 3D only on desktop
 * (fine pointer + width) with WebGL and no reduced-motion preference. Pauses
 * the render loop when scrolled off-screen.
 */
export function HeroCore() {
  const reduce = useReducedMotion();
  const [eligible, setEligible] = useState(false);
  const [active, setActive] = useState(true);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) {
      setEligible(false);
      return;
    }
    const mq = window.matchMedia("(min-width: 768px) and (hover: hover) and (pointer: fine)");
    const update = () => setEligible(mq.matches && webglAvailable());
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduce]);

  // Pause the loop when off-screen.
  useEffect(() => {
    if (!eligible || !wrapRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "120px" }
    );
    obs.observe(wrapRef.current);
    return () => obs.disconnect();
  }, [eligible]);

  return (
    <div ref={wrapRef} className="grid h-full w-full place-items-center">
      {eligible ? (
        <Suspense fallback={<DataCorePlaceholder />}>
          <DataCore3D active={active} />
        </Suspense>
      ) : (
        <DataCorePlaceholder />
      )}
    </div>
  );
}
