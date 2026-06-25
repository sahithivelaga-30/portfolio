import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type World = "intelligence" | "raw";

interface WorldCtx {
  world: World;
  toggle: () => void;
}

const Ctx = createContext<WorldCtx>({ world: "intelligence", toggle: () => {} });

export function WorldProvider({ children }: { children: ReactNode }) {
  // Default = Intelligence (clean). Raw is a clearly-labeled stylized overlay.
  const [world, setWorld] = useState<World>("intelligence");

  useEffect(() => {
    document.documentElement.setAttribute("data-world", world);
  }, [world]);

  const toggle = () => setWorld((w) => (w === "intelligence" ? "raw" : "intelligence"));

  return <Ctx.Provider value={{ world, toggle }}>{children}</Ctx.Provider>;
}

export const useWorld = () => useContext(Ctx);
