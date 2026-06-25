import { Binary, Boxes, Cpu, PackageCheck } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { FlipCard } from "../ui/FlipCard";
import { Pill } from "../ui/AchievementBadge";
import { Reveal } from "../ui/Reveal";

const MODULES = [
  {
    icon: Binary,
    name: "Python UDFs",
    detail: "Filters, attributes and Python UDFs.",
    tag: "input",
    def: "User-defined functions running filters and attributes — the baseline Python logic Sahithi migrated.",
  },
  {
    icon: Boxes,
    name: "PySpark",
    detail: "Migrated for optimized, distributed processing.",
    tag: "scale",
    def: "A distributed processing framework — Python logic re-written to run in parallel at scale.",
  },
  {
    icon: Cpu,
    name: "Java",
    detail: "Comparative performance testing.",
    tag: "benchmark",
    def: "A JVM language used to re-implement logic and benchmark performance for production.",
  },
  {
    icon: PackageCheck,
    name: "Production-ready stack",
    detail: "Most efficient stack selected.",
    tag: "output",
    def: "The fastest, most efficient option chosen after comparing Python UDFs, PySpark and Java.",
  },
];

export function EngineeringLab() {
  return (
    <section id="lab" className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeader
        index="03"
        kicker="PySpark + Java Engineering Lab"
        title="Migrating logic to the fastest production-ready stack."
        intro="Sahithi migrated Python processing logic into PySpark and Java to improve performance and identify efficient, production-ready workflows. Hover a card to flip it."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {MODULES.map((m, i) => (
          <Reveal key={m.name} index={i} className="h-full">
            <FlipCard
              front={
                <>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-sky/12 text-sky">
                      <m.icon size={18} />
                    </span>
                    <Pill tone="mono">{m.tag}</Pill>
                  </div>
                  <p className="font-display text-base font-semibold text-text-hi">{m.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-lo">{m.detail}</p>
                  <span className="mt-auto pt-3 font-mono text-[11px] text-purple">flip ↻ definition</span>
                </>
              }
              back={
                <>
                  <Pill tone="purple">{m.name}</Pill>
                  <p className="mt-3 text-sm leading-relaxed text-text-hi">{m.def}</p>
                </>
              }
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
