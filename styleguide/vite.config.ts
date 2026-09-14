import path from "node:path";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Build-only Vite config for `npm run build:styleguide` -- produces a
 * multi-file bundle (JS + CSS + inlined font data) in styleguide-dist/,
 * which scripts/inline-styleguide.mjs then splices into one standalone
 * .html file. Not used for dev/test/Storybook; see .storybook/main.ts for
 * that config instead.
 */
export default defineConfig({
  root: dirname,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(dirname, "../src"),
    },
  },
  build: {
    outDir: path.resolve(dirname, "../styleguide-dist"),
    emptyOutDir: true,
    cssCodeSplit: false,
    assetsInlineLimit: Number.MAX_SAFE_INTEGER,
    rollupOptions: {
      input: path.resolve(dirname, "index.html"),
    },
  },
});
