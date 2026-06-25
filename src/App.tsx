import { Suspense, lazy, useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Boot } from "./components/Boot";
import { EntryDoors } from "./components/EntryDoors";
import { GrainVignette } from "./components/GrainVignette";
import { HUD } from "./components/HUD";
import { QuickView } from "./components/QuickView";

export type View = "entry" | "quick" | "realm";

// Realm is the heaviest view (and gets the 3D core later) — code-split it.
const Realm = lazy(() =>
  import("./components/Realm").then((m) => ({ default: m.Realm }))
);

export default function App() {
  // Boot plays once per tab session; skip on internal navigations.
  const [booted, setBooted] = useState(() => sessionStorage.getItem("dr-booted") === "1");
  const [view, setView] = useState<View>("entry");

  const finishBoot = useCallback(() => {
    sessionStorage.setItem("dr-booted", "1");
    setBooted(true);
  }, []);

  // Reset scroll when switching top-level views.
  const navigate = useCallback((v: View) => {
    setView(v);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    document.title =
      view === "quick"
        ? "Sahithi Velaga — Data Engineer (Resume)"
        : "Sahithi Velaga — Data Realm";
  }, [view]);

  return (
    <div className="min-h-screen bg-void">
      <GrainVignette />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <AnimatePresence mode="wait">
        {!booted && <Boot key="boot" onDone={finishBoot} />}
      </AnimatePresence>

      {booted && view === "entry" && <EntryDoors onChoose={navigate} />}

      {booted && view !== "entry" && (
        <>
          <HUD view={view} onNavigate={navigate} />
          <div id="main">
            {view === "quick" ? (
              <QuickView />
            ) : (
              <Suspense fallback={<div className="min-h-screen" aria-hidden />}>
                <Realm onNavigate={navigate} />
              </Suspense>
            )}
          </div>
        </>
      )}
    </div>
  );
}
