import { motion } from "framer-motion";
import { Download, Gamepad2, Mail, Zap } from "lucide-react";
import { ActionButton, Button } from "./ui/Button";
import { HUDFrame } from "./ui/HUDFrame";
import { MonoLabel } from "./ui/MonoLabel";
import type { View } from "../App";
import { profile } from "../content";

const doorVariants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

/** The prime directive: two doors, nothing gated. */
export function EntryDoors({ onChoose }: { onChoose: (v: View) => void }) {
  return (
    <main className="relative grid min-h-screen place-items-center bg-realm px-6 py-20">
      <div className="w-full max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MonoLabel tone="accent">DATA REALM</MonoLabel>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{profile.name}</h1>
          <p className="mt-2 text-text-lo">
            {profile.role} · {profile.tagline}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {/* Door 1 — Realm */}
          <motion.button
            type="button"
            custom={0}
            variants={doorVariants}
            initial="hidden"
            animate="show"
            onClick={() => onChoose("realm")}
            className="group text-left"
          >
            <HUDFrame className="h-full rounded-panel border border-glass-edge bg-glass p-7 backdrop-blur-[16px] transition duration-300 group-hover:-translate-y-1 group-hover:border-accent/50 group-hover:shadow-glass-lift">
              <Gamepad2 className="mb-4 text-accent" size={26} />
              <h2 className="text-xl font-semibold text-text-hi">Enter the Realm</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-lo">
                The full cinematic, scroll-driven game world. Boss fights, skill trees, the works.
              </p>
              <MonoLabel className="mt-4 inline-block group-hover:text-accent">Start mission ▸</MonoLabel>
            </HUDFrame>
          </motion.button>

          {/* Door 2 — Quick View */}
          <motion.button
            type="button"
            custom={1}
            variants={doorVariants}
            initial="hidden"
            animate="show"
            onClick={() => onChoose("quick")}
            className="group text-left"
          >
            <HUDFrame className="h-full rounded-panel border border-glass-edge bg-glass p-7 backdrop-blur-[16px] transition duration-300 group-hover:-translate-y-1 group-hover:border-energy/50 group-hover:shadow-glass-lift">
              <Zap className="mb-4 text-energy" size={26} />
              <h2 className="text-xl font-semibold text-text-hi">Quick View</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-lo">
                Recruiter mode. Everything that matters on one fast, scannable page. No playing required.
              </p>
              <MonoLabel tone="energy" className="mt-4 inline-block">Open résumé view ▸</MonoLabel>
            </HUDFrame>
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <Button href={profile.resumeUrl} download variant="ghost" icon={<Download size={16} />}>
            Download Resume
          </Button>
          <Button href={`mailto:${profile.email}`} variant="ghost" icon={<Mail size={16} />}>
            Contact
          </Button>
        </motion.div>
        <ActionButton
          variant="ghost"
          className="sr-only focus:not-sr-only focus:mx-auto focus:mt-4"
          onClick={() => onChoose("quick")}
        >
          Skip to recruiter view
        </ActionButton>
      </div>
    </main>
  );
}
