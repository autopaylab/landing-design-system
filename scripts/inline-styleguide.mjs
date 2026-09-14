import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(dirname, "../styleguide-dist");
const outFile = path.resolve(dirname, "../landing-design-system-styleguide.html");

/**
 * Splices the multi-file Vite build in styleguide-dist/ into one
 * standalone .html file: inlines every referenced <script type="module"
 * src="...">, <link rel="stylesheet" href="...">, and crossorigin/modulepreload
 * tag so the result opens directly via file:// with no server and no
 * external requests. Fonts are already embedded as base64 inside the CSS
 * (vite.config.ts sets assetsInlineLimit to Infinity), so this is the only
 * remaining splice needed.
 */
let html = fs.readFileSync(path.join(distDir, "index.html"), "utf8");

html = html.replace(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g, (_match, href) => {
  let css = fs.readFileSync(path.join(distDir, href.replace(/^\//, "")), "utf8");
  // tokens.css's own `@import "@fontsource/..."` chain gets flattened by
  // @tailwindcss/postcss before Vite's asset pipeline can rebase its font
  // url()s, leaving dead `./files/...`-relative @font-face rules alongside
  // the real, working ones from entry.tsx's direct @fontsource imports
  // (which Vite does inline correctly, as data: URIs). Strip the dead set.
  const before = (css.match(/@font-face/g) ?? []).length;
  css = css.replace(/@font-face\{[^}]*url\(\.\/files\/[^}]*\}/g, "");
  const after = (css.match(/@font-face/g) ?? []).length;
  console.log(`Stripped ${before - after} dead @font-face rule(s) with unresolved relative font paths`);

  const remainingCssUrls = css.match(/url\((?!["']?data:)[^)]+\)/g);
  if (remainingCssUrls) {
    throw new Error(`Styleguide export's CSS still references external files, not fully self-contained: ${remainingCssUrls.join(", ")}`);
  }

  return `<style>\n${css}\n</style>`;
});

html = html.replace(/<link rel="modulepreload"[^>]*>/g, "");

html = html.replace(/<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/g, (_match, src) => {
  const js = fs.readFileSync(path.join(distDir, src.replace(/^\//, "")), "utf8");
  return `<script type="module">\n${js}\n</script>`;
});

const remainingTags = html.match(/<(script|link)\b[^>]*\b(?:src|href)="(?!data:)[^"]*"[^>]*>/g);
if (remainingTags) {
  throw new Error(`Styleguide export still references external files, not fully self-contained: ${remainingTags.join(", ")}`);
}

fs.writeFileSync(outFile, html, "utf8");
const sizeKb = (fs.statSync(outFile).size / 1024).toFixed(0);
console.log(`Wrote ${outFile} (${sizeKb} KB)`);
