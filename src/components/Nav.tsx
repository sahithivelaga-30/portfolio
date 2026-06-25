import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navItems, profile } from "../content";

export function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const [active, setActive] = useState(navItems[0].id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div className="h-0.5 origin-left bg-gradient-to-r from-sky to-purple" style={{ scaleX: progress }} aria-hidden />
      <nav className="border-b border-edge/60 bg-bg/70 backdrop-blur-[16px]" aria-label="Primary">
        <div className="mx-auto flex max-w-content items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
          <a href="#home" className="font-display text-sm font-bold tracking-tight text-text-hi">
            SAHITHI<span className="text-sky">.EXE</span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={`rounded-lg px-2.5 py-1.5 text-sm transition-colors ${
                    active === n.id ? "font-medium text-sky" : "text-text-lo hover:text-text-hi"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="hidden items-center gap-1.5 rounded-lg bg-gradient-to-r from-sky to-cyan px-3 py-1.5 text-xs font-semibold text-bg shadow-glow transition hover:brightness-110 sm:inline-flex"
            >
              <Download size={14} /> Resume
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="rounded-lg border border-edge bg-card p-1.5 text-text-hi lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <ul className="border-t border-edge/60 bg-bg/95 px-4 py-2 lg:hidden">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2.5 text-sm text-text-lo hover:text-text-hi"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
