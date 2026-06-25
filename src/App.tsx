import { Suspense, lazy } from "react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Hero } from "./components/sections/Hero";
import { Snapshot } from "./components/sections/Snapshot";

// Below-the-fold sections are code-split to keep the initial bundle lean.
const Experience = lazy(() =>
  import("./components/sections/Experience").then((m) => ({ default: m.Experience }))
);
const DevHub = lazy(() =>
  import("./components/sections/DevHub").then((m) => ({ default: m.DevHub }))
);
const Projects = lazy(() =>
  import("./components/sections/Projects").then((m) => ({ default: m.Projects }))
);
const Skills = lazy(() =>
  import("./components/sections/Skills").then((m) => ({ default: m.Skills }))
);
const Education = lazy(() =>
  import("./components/sections/Education").then((m) => ({ default: m.Education }))
);
const Contact = lazy(() =>
  import("./components/sections/Contact").then((m) => ({ default: m.Contact }))
);

function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-aurora">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <Nav />

      <main>
        <Hero />
        <Snapshot />
        <Suspense fallback={<SectionFallback />}>
          <Experience />
          <DevHub />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
