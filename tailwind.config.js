/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#07111F",
        darknavy: "#0B1220",
        card: "rgba(255,255,255,0.06)",
        edge: "rgba(125,211,252,0.22)",
        sky: "#38BDF8",
        cyan: "#22D3EE",
        purple: "#8B5CF6",
        gold: "#F5C542",
        success: "#10B981",
        danger: "#EF4444",
        text: {
          hi: "#F8FAFC",
          lo: "#94A3B8",
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
      },
      animation: {
        "scan-line": "scan-line 3.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite",
        "flow-dash": "flow-dash 3s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        beam: "beam 7s ease-in-out infinite",
        "grid-pan": "grid-pan 8s linear infinite",
      },
    },
  },
  plugins: [],
};
