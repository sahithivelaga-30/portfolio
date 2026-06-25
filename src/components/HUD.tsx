import { motion, useScroll, useSpring } from "framer-motion";
import { Download, Gamepad2, Home, Zap } from "lucide-react";
import type { View } from "../App";
import { profile } from "../content";

interface HUDProps {
  view: View;
  onNavigate: (v: View) => void;
}

/** Persistent command bar: XP scroll progress + always-visible Resume & view switch. */
export function HUD({ view, onNavigate }: HUDProps) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* XP-style scroll progress */}
      <motion.div className="h-0.5 origin-left bg-accent" style={{ scaleX: progress }} aria-hidden />

      <nav
        className="border-b border-glass-edge bg-void/70 backdrop-blur-[16px]"
        aria-label="Primary"
      >
        <div className="mx-auto flex max-w-content items-center justify-between px-4 py-2.5 sm:px-6">
          <button
            type="button"
            onClick={() => onNavigate("entry")}
            className="flex items-center gap-2 font-display text-sm font-semibold text-text-hi"
          >
            <Home size={15} className="text-accent" />
            <span className="hidden sm:inline">{profile.name}</span>
            <span className="font-mono text-xs font-normal text-text-lo">/ Data Realm</span>
          </button>

          <div className="flex items-center gap-1.5">
            <ViewToggle
              active={view === "quick"}
              onClick={() => onNavigate("quick")}
              icon={<Zap size={14} />}
              label="Quick View"
            />
            <ViewToggle
              active={view === "realm"}
              onClick={() => onNavigate("realm")}
              icon={<Gamepad2 size={14} />}
              label="Realm"
            />
            <a
              href={profile.resumeUrl}
              download
              className="ml-1 inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-medium text-white transition hover:bg-accent/90"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

function ViewToggle({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition ${
        active
          ? "border border-glass-edge bg-glass text-text-hi"
          : "text-text-lo hover:text-text-hi"
      }`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
