import { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

const STEPS = [
  { n: "01", label: "Raw Data", detail: "Messy, scattered, slow-to-use source data." },
  { n: "02", label: "Python Processing", detail: "Initial logic — filters, attributes, UDFs." },
  { n: "03", label: "PySpark Optimization", detail: "Distributed, parallel processing at scale." },
  { n: "04", label: "Java Performance Testing", detail: "Benchmarked the production-ready stack." },
  { n: "05", label: "EMR Efficiency", detail: "Tuned clusters — 40% fewer resources." },
  { n: "06", label: "Developer Platform", detail: "DevHub frontend for faster teams." },
  { n: "07", label: "BI / Analytics", detail: "Reliable insights and forecasting." },
];

export function StoryPath() {
  const [active, setActive] = useState(0);

  return (
    <section id="story" className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeader
        index="01"
        kicker="The Engineering Story"
        title="From raw data to reliable insights."
        intro="A professional progression — each node is a real step Sahithi takes to turn complex data into efficient, usable systems. Hover a node to see what happens there."
      />

      <Reveal>
        <div className="glass p-6 sm:p-10">
          {/* path */}
          <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-0">
            {STEPS.map((s, i) => (
              <div key={s.n} className="flex items-center lg:flex-1 lg:flex-col">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group flex items-center gap-3 lg:flex-col lg:gap-2"
                  aria-pressed={active === i}
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border font-mono text-xs transition-all duration-300 ${
                      active === i
                        ? "border-sky bg-sky/15 text-sky shadow-glow"
                        : "border-edge bg-card text-text-lo group-hover:border-sky/50"
                    }`}
                  >
                    {s.n}
                  </span>
                  <span
                    className={`text-left text-sm font-medium transition-colors lg:text-center ${
                      active === i ? "text-text-hi" : "text-text-lo"
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
                {/* connector */}
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="ml-5 h-6 w-px bg-gradient-to-b from-sky/40 to-transparent lg:ml-0 lg:mt-0 lg:h-px lg:w-full lg:flex-1 lg:bg-gradient-to-r"
                  />
                )}
              </div>
            ))}
          </div>

          {/* detail panel */}
          <div className="mt-8 rounded-xl border border-edge bg-darknavy/60 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-sky">
              {STEPS[active].n} · {STEPS[active].label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-text-hi">{STEPS[active].detail}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
