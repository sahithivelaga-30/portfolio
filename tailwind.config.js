/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#07070C",
          800: "#0E0E16",
          700: "#15151F",
        },
        glass: {
          DEFAULT: "rgba(255,255,255,0.05)",
          edge: "rgba(255,255,255,0.10)",
        },
        accent: {
          DEFAULT: "#8B5CF6",
          2: "#67E8F9",
        },
        text: {
          hi: "#F4F4F7",
          lo: "#A1A1B5",
        },
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
        display: ["Geist", "Satoshi", "Inter", "system-ui", "sans-serif"],
        mono: ['"Geist Mono"', '"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        glass: "0 8px 30px rgba(0,0,0,0.35)",
        "glass-lift": "0 16px 50px rgba(0,0,0,0.45)",
      },
      backdropBlur: {
        glass: "16px",
      },
      keyframes: {
        "flow-dash": {
          to: { strokeDashoffset: "-200" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
      },
      animation: {
        "flow-dash": "flow-dash 3s linear infinite",
        "pulse-node": "pulse-node 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
