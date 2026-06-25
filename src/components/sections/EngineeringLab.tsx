import { ArrowRight, Binary, Boxes, Cpu, PackageCheck } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { Pill } from "../ui/AchievementBadge";
import { Reveal } from "../ui/Reveal";

const MODULES = [
  { icon: Binary, name: "Python UDF Module", detail: "Filters, attributes & UDFs enter the lab.", tag: "input" },
  { icon: Boxes, name: "PySpark Distributed Engine", detail: "Logic splits into parallel streams at scale.", tag: "scale" },
  { icon: Cpu, name: "Java Benchmark Module", detail: "Comparative performance testing for production.", tag: "benchmark" },
  { icon: PackageCheck, name: "Production-Ready Output", detail: "Clean, structured, efficient data.", tag: "output" },
];

export function EngineeringLab() {
  return (
    <section id="lab" className="mx-auto max-w-content scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeader
        index="03"
        kicker="PySpark + Java Engineering Lab"
        title="Migrating logic to the fastest production-ready stack."
        intro="Sahithi migrated Python processing logic into PySpark and Java to improve performance and identify efficient, production-ready workflows."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {MODULES.map((m, i) => (
          <Reveal key={m.name} index={i} className="h-full">
            <GlassCard hud interactive className="flex h-full flex-col p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-sky/12 text-sky">
                  <m.icon size={18} />
                </span>
                <Pill tone="mono">{m.tag}</Pill>
              </div>
              <p className="font-display text-sm font-semibold text-text-hi">{m.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-lo">{m.detail}</p>
              {i < MODULES.length - 1 && (
                <ArrowRight size={16} className="mt-3 hidden text-sky/60 lg:block" />
              )}
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
