"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/tokens/index.ts
var tokens_exports = {};
__export(tokens_exports, {
  colorTokens: () => colorTokens,
  fontTokens: () => fontTokens,
  headingScale: () => headingScale,
  radiusTokens: () => radiusTokens
});
module.exports = __toCommonJS(tokens_exports);
var colorTokens = {
  /** Neutral scale harmonized with Autopay DS2's real gray swatches — see
   * AUDIT.md #9 and DS2-HARMONIZATION.md #7. Mirrors tokens.css. */
  background: "#fafafa",
  // Digital Gray 1
  foreground: "#0f0f0f",
  // Dark mode Black
  ink: "#0f0f0f",
  // Dark mode Black
  surface: "#f5f5f5",
  // Digital Gray 2
  surfaceMuted: "#ebebeb",
  // Digital Gray 4
  card: "oklch(1 0 0)",
  primary: "#282828",
  // Mineral Black
  primaryForeground: "#fafafa",
  // Digital Gray 1, matches background
  secondary: "#ebebeb",
  // Digital Gray 4
  muted: "#ebebeb",
  // Digital Gray 4
  mutedForeground: "#4c4c4c",
  // Digital Gray 11
  accent: "#ebebeb",
  // Digital Gray 4
  destructive: "oklch(0.58 0.22 27)",
  border: "#e5e5e5",
  // Digital Gray 5
  input: "#e5e5e5",
  // Digital Gray 5
  /** Not remapped — no DS2 neutral gray is a close match; this token
   * carries real blue chroma the neutral scale doesn't cover. */
  ring: "oklch(0.7 0.04 250)",
  /** Raw hex — inconsistent in representation with the rest of the palette
   * (OKLCH), but the value is correct: an exact match for Autopay DS2's
   * real "Pistachio 500". See AUDIT.md #6 and DS2-HARMONIZATION.md. */
  lime: "#e6ffa0",
  limeForeground: "#0f0f0f",
  // Dark mode Black, matches ink
  banking: "oklch(0.85 0.12 235)",
  automotive: "oklch(0.92 0.18 100)",
  insurance: "oklch(0.82 0.1 295)",
  healthcare: "oklch(0.88 0.1 155)",
  retail: "oklch(0.88 0.08 20)",
  energy: "oklch(0.78 0.14 35)",
  telecom: "oklch(0.93 0.15 110)"
};
var fontTokens = {
  display: '"Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif',
  sans: '"Open Sans", ui-sans-serif, system-ui, sans-serif'
};
var radiusTokens = {
  base: "0.625rem",
  sm: "calc(0.625rem - 4px)",
  md: "calc(0.625rem - 2px)",
  lg: "0.625rem",
  xl: "calc(0.625rem + 6px)",
  "2xl": "calc(0.625rem + 14px)",
  "3xl": "calc(0.625rem + 22px)"
};
var headingScale = {
  h1: { mobile: { size: 48, lineHeight: 1, letterSpacing: "-0.02em" }, desktop: { size: 64, lineHeight: 1.15, letterSpacing: "-0.02em" } },
  h2: { mobile: { size: 40, lineHeight: 1, letterSpacing: "-0.02em" }, desktop: { size: 56, lineHeight: 1.15, letterSpacing: "-0.02em" } },
  h3: { mobile: { size: 32, lineHeight: 1, letterSpacing: "-0.02em" }, desktop: { size: 48, lineHeight: 1.15, letterSpacing: "-0.02em" } },
  h4: { mobile: { size: 24, lineHeight: 1, letterSpacing: "-0.02em" }, desktop: { size: 32, lineHeight: 1.15, letterSpacing: "-0.02em" } },
  h5: { mobile: { size: 20, lineHeight: 1, letterSpacing: "-0.02em" }, desktop: { size: 24, lineHeight: 1.15, letterSpacing: "-0.01em" } },
  h6: { mobile: { size: 18, lineHeight: 1, letterSpacing: "-0.02em" }, desktop: { size: 20, lineHeight: 1.15, letterSpacing: "-0.01em" } }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colorTokens,
  fontTokens,
  headingScale,
  radiusTokens
});
//# sourceMappingURL=index.cjs.map