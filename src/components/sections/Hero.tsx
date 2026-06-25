import { Download, Mail } from "lucide-react";
import { Button } from "../ui/Button";
import { MetricChip } from "../ui/MetricChip";
import { Reveal } from "../ui/Reveal";
import { DataFlow } from "../DataFlow";
import { profile } from "../../content";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[92vh] w-full max-w-content scroll-mt-20 flex-col justify-center px-6 pb-20 pt-28 sm:px-8"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <MetricChip accent className="mb-6">
              40% EMR cost reduction
            </MetricChip>
          </Reveal>

          <Reveal index={1}>
            <h1 className="text-balance text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal index={2}>
            <p className="mt-4 font-mono text-sm uppercase tracking-[0.25em] text-accent">
              {profile.role} · {profile.location}
            </p>
          </Reveal>

          <Reveal index={3}>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-text-hi">
              {profile.valueProp}
            </p>
          </Reveal>

          <Reveal index={4}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={profile.resumeUrl} download icon={<Download size={16} />}>
                Download Resume
              </Button>
              <Button
                href={`mailto:${profile.email}`}
                variant="ghost"
                icon={<Mail size={16} />}
              >
                Contact
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Signature animation */}
        <Reveal index={3} className="hidden justify-center sm:flex lg:justify-end">
          <div className="w-full max-w-md rounded-2xl border border-glass-edge bg-glass p-6 shadow-glass backdrop-blur-glass">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-lo">
              Pipeline
            </p>
            <DataFlow />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
