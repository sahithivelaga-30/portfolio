/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#050510",
        surface: "#0C0C1A",
        glass: {
          DEFAULT: "rgba(255,255,255,0.05)",
          edge: "rgba(140,120,255,0.18)",
        },
        accent: "#8B5CF6", // the world color (brand violet)
        energy: "#38BDF8", // data/energy highlight — sparingly
        gold: "#F5C542", // ACHIEVEMENT STARS ONLY
        text: {
          hi: "#F4F4FA",
          lo: "#9090A8",
        },
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
        display: ["Geist", "Satoshi", "Inter", "system-ui", "sans-serif"],
        mono: ['"Geist Mono"', '"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "75rem",
      },
      borderRadius: {
        // ONE corner radius for every glass panel — the consistency = luxury rule
        panel: "1rem",
      },
      boxShadow: {
        glass: "0 8px 30px rgba(0,0,0,0.45)",
        "glass-lift": "0 16px 50px rgba(0,0,0,0.55)",
        glow: "0 0 24px rgba(139,92,246,0.25)",
      },
      keyframes: {
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "core-pulse": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "flow-dash": { to: { strokeDashoffset: "-200" } },
        drift: {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(12px, -16px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        "caret-blink": { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0" } },
      },
      animation: {
        "scan-line": "scan-line 4s linear infinite",
        "core-pulse": "core-pulse 3s ease-in-out infinite",
        "flow-dash": "flow-dash 3s linear infinite",
        drift: "drift 14s ease-in-out infinite",
        "caret-blink": "caret-blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
