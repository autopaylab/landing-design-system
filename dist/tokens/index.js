// src/tokens/index.ts
var colorTokens = {
  background: "oklch(0.985 0.003 60)",
  foreground: "oklch(0.18 0.02 260)",
  ink: "oklch(0.18 0.02 260)",
  surface: "oklch(0.97 0.005 60)",
  surfaceMuted: "oklch(0.94 0.006 250)",
  card: "oklch(1 0 0)",
  primary: "oklch(0.22 0.03 260)",
  primaryForeground: "oklch(0.985 0.003 60)",
  secondary: "oklch(0.94 0.006 250)",
  muted: "oklch(0.94 0.006 250)",
  mutedForeground: "oklch(0.45 0.015 260)",
  accent: "oklch(0.93 0.012 240)",
  destructive: "oklch(0.58 0.22 27)",
  border: "oklch(0.9 0.008 250)",
  input: "oklch(0.92 0.008 250)",
  ring: "oklch(0.7 0.04 250)",
  /** Raw hex — inconsistent in representation with the rest of the palette
   * (OKLCH), but the value is correct: an exact match for Autopay DS2's
   * real "Pistachio 500". See AUDIT.md #6 and DS2-HARMONIZATION.md. */
  lime: "#e6ffa0",
  limeForeground: "oklch(0.18 0.02 260)",
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
export {
  colorTokens,
  fontTokens,
  headingScale,
  radiusTokens
};
//# sourceMappingURL=index.js.map