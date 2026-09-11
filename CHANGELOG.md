# Changelog

## 0.5.0

### Minor Changes

- 462f07b: Add `CookieConsentScript` (organisms) — Autopay's production ConsentManager cookie-consent loader, ported byte-for-byte from autopaylab.com as a deliberate exception (not redesigned or restyled). Every new landing page should include it as the first child of `<body>`. Raises the `organisms` and root `size-limit` budgets (13→15KB, 14→16KB) to reflect the vendor script's real, non-optimizable weight.
- 72dbb36: Add `OverlapCard` (molecule) and `OverlappingCardsSection` (organism) — a new, generic sticky-stack promo pattern with two independent CTAs per card, matching Autopay DS2's "Overlapping cards" base section. `IndustriesStackedSection` and `IndustriesGridSection` are unchanged and both remain supported (see `AUDIT.md` §5 item 7).

## 0.4.0

### Minor Changes

- c87157d: Replace ad hoc per-component heading sizes with a shared, responsive `text-h1`-`text-h6` scale sourced from Autopay Design System 2.0's typescale. Fixes real drift where the same heading level rendered at different sizes across organisms; see `DS2-HARMONIZATION.md` for the full before/after mapping.
- c4c562c: Remap the neutral/semantic color tokens (background, foreground, ink, surface, primary, muted, accent, border, input) to their nearest real Autopay Design System 2.0 swatch, replacing OKLCH values that were never checked against DS2. WCAG contrast was re-verified for every real text/background pairing — no regression. `--ring` and `--destructive` were intentionally left unchanged; see `DS2-HARMONIZATION.md` for details.

## 0.3.0

### Minor Changes

- 2e8f92a: Wave 1 of the flexibility/benchmark roadmap: `Link` gains `asChild` support
  (mirrors `Button`'s existing Radix `Slot` pattern) for composing with a
  router's own link component; a new Storybook "Theme" toolbar toggle proves
  every component reads its colors from CSS custom properties, not hardcoded
  values, by swapping the whole palette with zero component changes; `Navbar`,
  `PlatformFeatureShowcase`, `ContactSection`, and `IndustryCard` (and, as a
  result, the `molecules`, `organisms`, `templates`, and root bundles that
  inline them) are now marked `"use client"` so they work correctly when
  imported into a real Next.js App Router Server Component tree, instead of
  throwing at runtime; and a new `PartnerCountBadge` molecule (from
  MARKET-SCAN.md #6) fills a small, previously-missing pattern. No breaking
  changes -- see AUDIT.md section 8 for the full RSC audit and its one
  documented limitation (bundle-level, not component-level, directive
  granularity).

## 0.2.0

### Minor Changes

- Add a working mobile menu drawer to `Navbar` (previously nav was completely
  inert below the `md` breakpoint), self-host `Bricolage Grotesque` and
  `Open Sans` via `@fontsource` instead of relying on bare font-family names
  with no bytes shipped, and migrate the package's own tooling (Storybook,
  lint, CI) forward: Tailwind CSS v4, Storybook 10 with Chromatic visual
  publishing, ESLint flat config with `jsx-a11y`, and an automated axe
  accessibility test across every story. No breaking changes to the public
  component API -- `tailwind.config.ts` and every exported component's props
  are unchanged or additive (new optional props default to prior behavior).

## 0.1.0 — 2026-09-08

Initial extraction from `autopaylab/landing-page-kit` into a standalone Atomic Design package.

- 8 atoms, 9 molecules, 17 organisms, 1 template — see `AUDIT.md` for the full inventory and every dedup/classification decision.
- First pass only: raw tokens carried over as-is, not mapped to Autopay Design System 2.0 — see README "Known limitations".
