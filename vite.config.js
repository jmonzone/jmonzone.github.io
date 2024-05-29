import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const aliasPath = (p) => path.resolve(path.join(__dirname, "src", p));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/jmonzone.github.io/", // This is necessary for GitHub Pages
  server: {
    host: "localhost",
    port: 8080,
  },
});
