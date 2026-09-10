---
"@autopaylab/landing-design-system": minor
---

Wave 1 of the flexibility/benchmark roadmap: `Link` gains `asChild` support
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
