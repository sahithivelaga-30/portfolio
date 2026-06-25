import { Sparkles, TriangleAlert } from "lucide-react";
import { useWorld } from "../context/WorldContext";

/** RAW WORLD / INTELLIGENCE WORLD switch — visualizes chaos → intelligence. */
export function WorldSwitchToggle() {
  const { world, toggle } = useWorld();
  const intel = world === "intelligence";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={!intel}
      title="Toggle Raw vs Intelligence world"
      className="group inline-flex items-center gap-1.5 rounded-full border border-sky/35 bg-white/80 p-1 text-xs font-medium shadow-glass backdrop-blur-[16px]"
    >
      <span
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 transition ${
          !intel ? "bg-danger/15 text-danger" : "text-text-lo"
        }`}
      >
        <TriangleAlert size={13} />
        <span className="hidden sm:inline">Raw</span>
      </span>
      <span
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 transition ${
          intel ? "bg-sky/15 text-sky" : "text-text-lo"
        }`}
      >
        <Sparkles size={13} />
        <span className="hidden sm:inline">Intelligence</span>
      </span>
    </button>
  );
}
