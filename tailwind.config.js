/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F3F9FF", // page background
        softsky: "#E0F2FE", // raised soft sky
        sky: "#38BDF8", // primary sky blue
        cyan: "#22D3EE", // electric cyan
        navy: "#0F172A", // deep navy text
        luxnavy: "#1E293B", // luxury navy
        purpleaccent: "#8B5CF6", // soft purple accent
        gold: "#D4AF37", // premium gold
        danger: "#EF4444", // before-optimization only
        success: "#10B981", // after-optimization only
        text: {
          hi: "#0F172A",
          lo: "#475569",
        },
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
        display: ["Geist", "Satoshi", "Inter", "system-ui", "sans-serif"],
        mono: ['"Geist Mono"', '"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: { content: "78rem" },
      borderRadius: { panel: "1.25rem" },
      boxShadow: {
        glass: "0 10px 40px rgba(56,189,248,0.10), 0 2px 8px rgba(15,23,42,0.04)",
        "glass-lift": "0 20px 60px rgba(56,189,248,0.18), 0 4px 12px rgba(15,23,42,0.06)",
        glow: "0 0 30px rgba(56,189,248,0.30)",
      },
      keyframes: {
        "scan-line": {
          "0%": { transform: "translateY(-120%)" },
          "100%": { transform: "translateY(420%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drift: {
          "0%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(14px,-18px)" },
          "100%": { transform: "translate(0,0)" },
        },
        "flow-dash": { to: { strokeDashoffset: "-200" } },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        "caret-blink": { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0" } },
      },
      animation: {
        "scan-line": "scan-line 3.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        drift: "drift 16s ease-in-out infinite",
        "flow-dash": "flow-dash 3s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "caret-blink": "caret-blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
