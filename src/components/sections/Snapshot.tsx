import { Counter } from "../ui/Counter";
import { MetricChip } from "../ui/MetricChip";
import { Reveal } from "../ui/Reveal";
import { snapshot, snapshotTags } from "../../content";

export function Snapshot() {
  return (
    <section
      id="snapshot"
      aria-label="Snapshot"
      className="mx-auto w-full max-w-content scroll-mt-20 px-6 py-12 sm:px-8"
    >
      <div className="rounded-2xl border border-glass-edge bg-glass px-6 py-8 shadow-glass backdrop-blur-glass sm:px-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {snapshot.map((m, i) => (
            <Reveal key={m.label} index={i} className="text-center sm:text-left">
              <div
                className={`font-display text-4xl font-semibold ${
                  m.accent ? "text-accent" : "text-text-hi"
                }`}
              >
                <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
              </div>
              <p className="mt-1 text-sm text-text-lo">{m.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal index={4} className="mt-8 flex flex-wrap justify-center gap-2 border-t border-glass-edge pt-6 sm:justify-start">
          {snapshotTags.map((t) => (
            <MetricChip key={t}>{t}</MetricChip>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
