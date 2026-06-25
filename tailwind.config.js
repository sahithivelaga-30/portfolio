/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Sky-blue theme (richer, less washed-out), dark fonts, gold glass edges
        bg: "#CFE7FB",
        darknavy: "#FFFFFF", // light panel fill (legacy name)
        card: "rgba(255,255,255,0.66)",
        edge: "rgba(176,134,40,0.5)", // dark-golden glass edge
        sky: "#1E78C2",
        cyan: "#0E97B8",
        purple: "#6D4FCB",
        gold: "#8A6D14", // deep gold
        goldhi: "#A87E0E", // rich gold (readable on sky blue)
        success: "#0C8A5E",
        danger: "#CA2A2A",
        text: {
          hi: "#0A2238", // deep navy headings
          lo: "#33506E", // slate-blue body (readable on sky)
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "Sora", "system-ui", "sans-serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: { content: "78rem" },
      borderRadius: { panel: "1.1rem" },
      boxShadow: {
        glass: "0 12px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(125,211,252,0.05)",
        "glass-lift": "0 22px 60px rgba(0,0,0,0.55), 0 0 24px rgba(56,189,248,0.12)",
        glow: "0 0 28px rgba(56,189,248,0.30)",
        "glow-purple": "0 0 28px rgba(139,92,246,0.30)",
      },
      keyframes: {
        "scan-line": {
          "0%": { transform: "translateY(-120%)" },
          "100%": { transform: "translateY(420%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        drift: {
          "0%": { transform: "translate(0,0) rotate(0deg)" },
          "50%": { transform: "translate(16px,-22px) rotate(8deg)" },
          "100%": { transform: "translate(0,0) rotate(0deg)" },
        },
        "flow-dash": { to: { strokeDashoffset: "-200" } },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        beam: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.4" },
        },
        "grid-pan": { "0%": { backgroundPosition: "0 0" }, "100%": { backgroundPosition: "0 40px" } },
        shimmer: { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "200% 50%" } },
        "stream-down": { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(400%)" } },
        "sweep": { "0%": { transform: "translateY(-10vh)", opacity: "0" }, "10%,90%": { opacity: "0.5" }, "100%": { transform: "translateY(100vh)", opacity: "0" } },
        "ring-spin": { to: { transform: "rotate(360deg)" } },
        "cloud-drift": {
          "0%": { transform: "translateX(-12vw)" },
          "100%": { transform: "translateX(112vw)" },
        },
        "block-bob": {
          "0%, 100%": { transform: "translateY(0) rotate(var(--r, 0deg))" },
          "50%": { transform: "translateY(-16px) rotate(var(--r, 0deg))" },
        },
        "window-blink": { "0%, 100%": { opacity: "0.85" }, "50%": { opacity: "0.25" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: {
        "scan-line": "scan-line 3.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite",
        "flow-dash": "flow-dash 3s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        beam: "beam 7s ease-in-out infinite",
        "grid-pan": "grid-pan 8s linear infinite",
        shimmer: "shimmer 5s linear infinite",
        "stream-down": "stream-down 4s linear infinite",
        sweep: "sweep 9s ease-in-out infinite",
        "ring-spin": "ring-spin 14s linear infinite",
        "cloud-drift": "cloud-drift 60s linear infinite",
        "block-bob": "block-bob 7s ease-in-out infinite",
        "window-blink": "window-blink 4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
