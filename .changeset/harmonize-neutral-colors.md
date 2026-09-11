---
"@autopaylab/landing-design-system": minor
---

Remap the neutral/semantic color tokens (background, foreground, ink, surface, primary, muted, accent, border, input) to their nearest real Autopay Design System 2.0 swatch, replacing OKLCH values that were never checked against DS2. WCAG contrast was re-verified for every real text/background pairing — no regression. `--ring` and `--destructive` were intentionally left unchanged; see `DS2-HARMONIZATION.md` for details.
