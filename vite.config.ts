import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// Deployed to GitHub Pages at https://sahithivelaga-30.github.io/portfolio/
// so production assets must be served from the /portfolio/ base. Dev stays at root.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/portfolio/" : "/",
  plugins: [react()],
}));
