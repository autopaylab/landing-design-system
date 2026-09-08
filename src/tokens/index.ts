/**
 * Programmatic access to the raw tokens observed in landing-page-kit.
 * See ./tokens.css for the CSS custom properties, and AUDIT.md section 4
 * for provenance. Not Autopay Design System 2.0 tokens.
 */
export const colorTokens = {
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
  /** Raw hex — inconsistent with the rest of the palette (OKLCH). See AUDIT.md #6. */
  lime: "#e6ffa0",
  limeForeground: "oklch(0.18 0.02 260)",
  banking: "oklch(0.85 0.12 235)",
  automotive: "oklch(0.92 0.18 100)",
  insurance: "oklch(0.82 0.1 295)",
  healthcare: "oklch(0.88 0.1 155)",
  retail: "oklch(0.88 0.08 20)",
  energy: "oklch(0.78 0.14 35)",
  telecom: "oklch(0.93 0.15 110)",
} as const;

export const fontTokens = {
  display: '"Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif',
  sans: '"Open Sans", ui-sans-serif, system-ui, sans-serif',
} as const;

export const radiusTokens = {
  base: "0.625rem",
  sm: "calc(0.625rem - 4px)",
  md: "calc(0.625rem - 2px)",
  lg: "0.625rem",
  xl: "calc(0.625rem + 6px)",
  "2xl": "calc(0.625rem + 14px)",
  "3xl": "calc(0.625rem + 22px)",
} as const;
