import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { sections } from "../content";

export function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Scroll progress bar */}
      <motion.div
        className="h-0.5 origin-left bg-accent"
        style={{ scaleX: progress }}
        aria-hidden
      />

      <nav
        className={`transition-colors duration-300 ${
          scrolled ? "border-b border-glass-edge bg-ink-900/70 backdrop-blur-glass" : ""
        }`}
        aria-label="Primary"
      >
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3 sm:px-8">
          <a href="#hero" className="font-display text-sm font-semibold tracking-tight text-text-hi">
            Sahithi Velaga
            <span className="ml-2 font-mono text-xs font-normal text-text-lo">/ Data Engineer</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                    active === s.id
                      ? "text-text-hi"
                      : "text-text-lo hover:text-text-hi"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-glass-edge bg-glass p-2 text-text-hi md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <ul className="border-t border-glass-edge bg-ink-900/95 px-6 py-3 md:hidden">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2.5 text-sm text-text-lo hover:text-text-hi"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
