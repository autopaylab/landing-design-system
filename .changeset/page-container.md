---
"@autopaylab/landing-design-system": minor
---

One shared content width for every section and the Navbar, matching autopay.pl: full width with growing side padding (24 → 32 → 40 px) below 1200 px, then a 1140 px column (1200–1399 px) and a 1320 px column (from 1400 px), each with a 12 px gutter. Sections used to set `max-w-[1280px] px-6` each, which left only 24 px of side margin at 1280 px (59 px at 1366 px) where autopay.pl keeps about 80 px; the three grey-band sections (IndustriesGrid, IndustriesStacked, OverlappingCards) used a 1600 px column. The class string lives in `src/lib/page-container.ts` (internal, not exported); a test keeps organisms from setting their own width again. HeroImageOverlay, PromoCtaSection and Footer keep their wider cards by design. Visual change on every page that upgrades: content sits narrower and further from the edge on screens under 1400 px.
