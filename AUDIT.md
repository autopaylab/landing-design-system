# AUDIT — landing-page-kit → landing-design-system

Source: `autopaylab/landing-page-kit` @ commit at time of audit (2026-09-08).
Stack found in source (verified against `package.json` / `components.json`, not assumed): React 19, TanStack Start/Router, Tailwind CSS v4, Radix UI primitives vendored via shadcn CLI (`components.json` present), `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`. Bundler: Vite 7. This is **not** a Vite+CRA app as the task brief guessed — router/stack details below were verified, not assumed.

## 0. Top-level finding: two products are mixed in one page

`src/components/site/HomeContent.tsx` renders an English-language "Autopay — global payments platform" narrative (Hero → Single Integration → Security → Global Coverage → Data Leverage → Stats → Industries → Contact) but has **a handful of Lovable-generated sections spliced in** that read as belonging to a second, unrelated product line — different tone, different language, a different kind of customer-facing flow entirely. Specifically: an alternate hero pair, a numbered-onboarding-steps panel, and a footer CTA variant, none of which reference the payments narrative at all.

Several sections are also visibly marked as scratch/debug content: on-page labels like `"HERO — WARIANT A"`, `"HERO — WARIANT B"`, `"HERO — WARIANT C"` and `"Industries — Variant A"` render literally in the DOM — these are Lovable authoring labels, not real product copy, and are never meant to ship.

**Decision:** the layout/structure of these sections was extracted as real, working organisms (the code and Tailwind are legitimate and reusable), but every string of actual copy from the second product line was treated as confidential and was **not** carried into this package — story/demo content for those organisms uses fictional placeholder copy instead (see each organism's file header). The content-mixing itself is flagged as "not yet harmonized" in the README. The debug/variant-label strings are dropped entirely from the extracted components — they are not props, not content, just Lovable scratch markers left in the DOM.

## 1. Full inventory

| # | Element | Source location | Notes |
|---|---|---|---|
| 1 | Primary hero (video, 2-col) | `HomeContent.tsx:142-165` | inline, not a separate component |
| 2 | Hero image-overlay, stacked | second product line, hero A | full-bleed bg image, gradient overlay, single column |
| 3 | Hero image-overlay, split | second product line, hero B | full-bleed bg image, flat overlay, 2-col heading/CTA |
| 4 | `Eyebrow` pill label | `HomeContent.tsx:126-132` | local fn, re-declared |
| 5 | `VariantLabel` pill label | second product line's hero file | byte-for-byte same classes as `Eyebrow`, different name |
| 6 | Industries eyebrow pill (inline) | `IndustriesGridA.tsx:10-12` | same classes again, inlined, 3rd copy |
| 7 | Navbar | `SiteHeader.tsx` | sticky pill bar, logo, nav links, Login/Sign In buttons, language switcher |
| 8 | Footer | `SiteFooter.tsx` | CTA banner (bg photo) + lime footer body + legal row |
| 9 | Trusted-by logo strip | `TrustedBySection.tsx` | 6 grayscale client logos |
| 10 | Four-steps panel | second product line | gradient card, numbered step list |
| 11 | Single Integration section | `HomeContent.tsx:179-227` | heading + 3 icon/feature rows + video |
| 12 | Platform feature showcase | `HomeContent.tsx:11-85` (`PlatformFeatureShowcase`) | stateful tablist + video, mobile/desktop variants |
| 13 | Security section | `HomeContent.tsx:237-267` | heading + card-scheme logo row + 4 icon cards |
| 14 | Global coverage section | `HomeContent.tsx:270-316` | heading + 3 icon/feature rows + decorative floating-badge graphic |
| 15 | Data leverage section | `HomeContent.tsx:319-366` | heading + divided list + decorative dashboard-mock graphic |
| 16 | Stats panel | `HomeContent.tsx:369-387` | gradient panel, 4 stat blocks |
| 17 | Industries, sticky full-bleed | `HomeContent.tsx:390-427` | 7 industry cards, sticky-stack layout, `industries-data.ts` |
| 18 | Industries, 3-up grid | `IndustriesGridA.tsx` | same data (first 3), grid-card layout — different from #17 |
| 19 | Contact section + form | `HomeContent.tsx:433-473` | heading + inline uncontrolled form (raw `<input>`s) |
| 20 | FAQ accordion | `FaqSection.tsx` | wraps `ui/accordion.tsx` (Radix) — the **only** `ui/*` primitive actually imported by page code |
| 21 | Image-bg CTA + banner | second product line | image-bg CTA + nested lime promo card |
| 22 | 35 shadcn/ui primitives | `src/components/ui/*.tsx` | vendored via shadcn CLI; **only `accordion.tsx` is imported anywhere in `site/`** (verified via grep) — the rest (`button`, `badge`, `card`, `input`, `label`, `avatar`, `separator`, `carousel`, `sidebar`, `chart`, …) are Lovable scaffolding never rendered on the page |

## 2. Duplicated / inconsistent markup found

### Buttons — 6 independently hand-rolled variants, plus an unused 7th system
| Occurrence | Classes (abridged) | 
|---|---|
| Hero primary CTA (`HomeContent`) | `bg-lime px-8 py-3.5 text-base font-semibold text-lime-foreground hover:scale-[1.02]` |
| Hero-overlay primary CTA ×2 (second product's stacked/split hero variants) | identical to above |
| Header "Sign In" | `bg-lime px-6 py-2.5 text-[17px] font-semibold text-lime-foreground hover:scale-[1.02]` — same family, different size/font-size scale |
| Header "Login" (outline) | `border border-border px-6 py-2.5 text-[17px] font-medium text-foreground hover:bg-muted` |
| Hero-overlay secondary CTA ×2 | `border border-background/40 px-8 py-3.5 text-base font-semibold text-background hover:bg-background/10` |
| Industry card "Learn more" ×2 (`HomeContent`, `IndustriesGridA`) | `border border-foreground/80 px-5 py-2.5 text-xs font-semibold hover:bg-foreground hover:text-background` |
| Contact form submit | `bg-foreground py-4 text-sm font-semibold text-background hover:opacity-90`, full width |
| Second product line's footer CTAs ×2 | `h-12 ... bg-lime ... hover:bg-lime/90` — **same "lime primary" family but fixed `h-12` instead of `py-3.5`, and `hover:bg-lime/90` instead of `hover:scale-[1.02]`** — a real inconsistency, not just a naming difference |
| `ui/button.tsx` (shadcn) | full `cva` variant/size system: `default/destructive/outline/secondary/ghost/link` × `default/sm/lg/icon` — **never imported by any page component** |

**Dedup decision:** merge all of the above into one `Button` atom (`atoms/Button`), built on the existing (unused) `ui/button.tsx` `cva` structure since it's the only one with real variant plumbing, extended with the two brand variants actually observed on the page: `lime` (brand CTA) and `outline-inverse` (light outline for dark hero overlays). Rationale: same visual role (call-to-action) recurring 11+ times with only size/color deltas — a single variant-driven component is Atomic Design 101, and reusing the existing `cva` scaffold avoids inventing a second system. Flagged: the `h-12`/`hover:bg-lime/90` vs `py-3.5`/`hover:scale-[1.02]` divergence on the "same" lime CTA is **not** silently resolved — both exist as an inconsistency called out in "Not yet harmonized" below; the extracted atom defaults to the more common `hover:scale` treatment and exposes size via the `size` prop rather than a hardcoded height.

### Eyebrow / pill badge — 3 byte-identical copies
`Eyebrow` (`HomeContent.tsx`), `VariantLabel` (the source's second hero-variant file), and an inline `<span>` (`IndustriesGridA.tsx`) all render `inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/70`.
**Dedup decision:** one `Badge` atom, `variant="eyebrow"`. The existing unused `ui/badge.tsx` shadcn variants (`default/secondary/destructive/outline`) are a visually different, smaller, bordered style — kept as additional variants on the same atom (they're real, declared code, just unused on this page) rather than discarded, so nothing that exists in source is dropped silently.

### Input — 2 competing visual systems
Page-rendered contact-form inputs: `rounded-xl bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring` (no border, filled style). Unused `ui/input.tsx`: `rounded-md border border-input bg-transparent shadow-sm` (outlined style).
**Dedup decision:** canonical `Input` atom matches what's actually rendered (filled/`bg-muted` style), since that's the real, live design. The outlined shadcn style is documented in AUDIT as an unused alternate, not merged in as a variant (no observed usage to justify a prop for it — adding one would be inventing a variant that doesn't exist in the source).

### Label — 2 competing systems
Page-rendered: plain `<span className="text-xs text-muted-foreground">`. Unused `ui/label.tsx`: Radix `Label` primitive, `text-sm font-medium`.
**Dedup decision:** `Label` atom matches the rendered `<span>` style. Radix dependency not pulled in for this atom since the page never used it — avoids an unnecessary peer/runtime dependency the brief asks us to minimize.

### Icon + text feature row — 6 identical structures
`<li className="flex gap-4"><Icon/><div><h4/><p/></div></li>` appears 3× in "Single Integration" and 3× in "Global Coverage" (`HomeContent.tsx`), same structure, different icon/copy.
**Dedup decision:** `IconFeatureItem` molecule (icon + title + description).

### Icon card — 4 identical structures
Security section's 4 cards: icon-in-gradient-tile + title + bullet list, same structure (`HomeContent.tsx:250-266`).
**Dedup decision:** `IconCard` molecule, `bullets` as string array.

### Industries — same data, two different layouts, both left in
`HomeContent.tsx` renders all 7 industries as a sticky full-bleed stack; `IndustriesGridA.tsx` renders the first 3 as a 3-up grid, with its own literal "Variant A" label. Same `industries-data.ts`, same card content (image/name/desc/"Learn more"), different container layout.
**Dedup decision:** the individual card is one `IndustryCard` molecule reused by two distinct organisms (`IndustriesStackedSection`, `IndustriesGridSection`) — the two *sections* are kept separate because their layouts are genuinely different, not just styling noise, but flagged below as a likely leftover A/B exploration that should be resolved to one in the harmonization pass rather than shipped as two competing "real" sections.

## 3. Classification (Atomic Design)

**Atoms:** `Button`, `Badge` (incl. `eyebrow` variant), `Input`, `Label`, `Checkbox`, `Link`, `Logo`, `StepNumber`.
- `Checkbox`: page uses a bare unstyled native `<input type="checkbox">` (`HomeContent.tsx:463`) — extracted as a minimal atom that only adds sizing/alignment, since no real visual design exists to preserve. Flagged as needing actual design in the harmonization pass, not invented here.
- `Divider`/`Separator`: considered and **rejected** as a standalone atom. Every "divider" in the source (`divide-y divide-border`, `border-t border-border/40`) is a Tailwind modifier on a container, never a standalone rendered element — there is no distinct component to extract. The vendored `ui/separator.tsx` is unused. Not fabricating a component for a pattern that isn't actually instantiated on its own.
- `Avatar`: **excluded**. `ui/avatar.tsx` exists in source but the audited page never renders an avatar (no testimonials/author blocks on this page). Porting it would mean inventing a component with no observed usage — out of scope per the "no hallucinated props/variants" constraint.

**Molecules:** `FormField` (label+input, contact form), `ConsentCheckboxField` (checkbox+legal text+link), `StatBlock` (eyebrow+value+label), `IconFeatureItem`, `IconCard`, `StepCard` (number+title+body), `IndustryCard` (image+name+desc+CTA), `FaqItem` (wraps `Accordion` primitives), `BulletItem` (dot+text row inside `IconCard`).

**Organisms:** `Navbar`, `Footer`, `HeroVideoSplit` (primary hero), `HeroImageOverlay` (`layout="stacked"|"split"` — merges the source's two hero variants), `TrustedByLogos`, `FourStepsSection`, `SingleIntegrationSection`, `PlatformFeatureShowcase`, `SecuritySection`, `GlobalCoverageSection`, `DataLeverageSection`, `StatsSection`, `IndustriesStackedSection`, `IndustriesGridSection`, `ContactSection`, `FaqAccordionSection`, `PromoCtaSection`.

**Templates:** `LandingPageTemplate` — arranges `Navbar` + a hero slot + section slots + `Footer`, every section passed as a `ReactNode`/prop, no hardcoded copy (see `templates/LandingPageTemplate`).

**Ambiguous calls, made explicitly rather than silently:**
- `IconCard` vs. organism: it's visually "section-like" (icon, heading, list) but holds no layout/data-fetching responsibility of its own and is instantiated 4× with only data changing — classified as a molecule, matching `IconFeatureItem`'s role, not an organism.
- `PlatformFeatureShowcase`: has real interactive state (active/hover tab index) and composes multiple molecules — classified as an organism despite being visually a single "panel", because of its self-contained behavior.
- `FourStepsSection`, `PromoCtaSection`: content is specific to the second, unrelated product line rather than generic marketing chrome — kept as organisms (they're real, working layouts) but flagged in "not yet harmonized" as likely wrong-product content that shouldn't ship on the payments-platform page as-is. No copy from that product line is reused anywhere in this package; the shipped stories use fictional placeholder content.

## 4. Tokens observed (raw, not Autopay DS 2.0 — see `src/tokens`)

Extracted verbatim from `src/styles.css` in the source: `--background`, `--foreground`, `--primary`, `--muted`, `--border`, `--ring`, etc. as OKLCH values; brand accent `--lime: #E6FFA0` (hex, inconsistent in *representation* with every other token being OKLCH — flagged below; but the value itself is correct: confirmed 2026-09-11 as an exact match for Autopay DS2's real "Pistachio 500", see `DS2-HARMONIZATION.md`); 7 industry-tile hues (`--banking`, `--automotive`, `--insurance`, `--healthcare`, `--retail`, `--energy`, `--telecom`); two font families (`Bricolage Grotesque` display / `Open Sans` body) via `@fontsource`, same as the source. These are carried into `src/tokens` as literal values with a comment noting their source — **not** renamed or remapped to any Autopay Design System 2.0 token names. Unlike the source's font handling, this package's own `@fontsource/*` packages are declared as real dependencies and imported directly in `src/tokens/tokens.css` (2026-09-09) — self-hosted, no request to Google's font CDN at build or runtime. See "Fonts" in `README.md`.

## 5. Not yet harmonized with Autopay Design System 2.0 (flagged, not fixed)

1. **Two products mixed on one page** — a second, unrelated product line's content (different language, different tone) spliced into the payments-platform page (`HeroImageOverlay`, `FourStepsSection`, `PromoCtaSection`). Needs a product decision, not a design fix.
2. **Lovable debug labels left in DOM** — "HERO — WARIANT A/B/C", "Industries — Variant A" — stripped during extraction, but flags that the source was mid-experiment, not final content.
3. **35 shadcn/ui primitives vendored but 34 unused** — real dead code/bundle weight in the source; only `Accordion` was worth porting.
4. **Two independent button systems** — the real one (ad hoc inline classes, 6+ variants) vs. the unused `cva`-based one in `ui/button.tsx`. Now merged into one atom, but the color/typography scale itself (`text-[17px]` header buttons vs `text-base` hero buttons vs `text-xs` card buttons) was never rationalized in the source and isn't rationalized here either — sizes map to whatever was actually observed.
5. **Two independent input/label systems** (filled vs. outlined) — same story as buttons, unresolved in source.
6. **`--lime` is a raw hex value** while every other color token in the source is OKLCH — a real *representation* inconsistency, carried through as-is into `tokens/`. Its *value*, however, is correct: confirmed 2026-09-11 against the real Autopay Design System 2.0 (`#E6FFA0` = "Pistachio 500" exactly) — see `DS2-HARMONIZATION.md`. Converting it to OKLCH for consistency is optional polish, not a correctness fix.
7. ~~Two competing "Industries" section layouts over identical data — likely an unresolved A/B exploration; both extracted, needs a product/design decision on which one ships.~~ **Resolved 2026-09-11:** maintainer decision is to keep both — `IndustriesGridSection` and `IndustriesStackedSection` are two intentional, supported alternate treatments of the same data (grid vs. sticky-stack), not a leftover duplicate. Whoever builds a page picks whichever fits that page's pacing. No consolidation planned.
8. **Contact form is uncontrolled and non-functional** (`onSubmit={(e) => e.preventDefault()}`, no real field state, no validation) — extracted as-is (matches source), not wired to real submission logic since none existed to extract.
9. **No pricing table, no testimonials, no stat-carousel** exist anywhere in the source despite being common landing-page patterns — not invented here; if a future page needs them they'll need genuinely new design work, not extraction.
10. **Ad hoc color literals throughout** (`text-[oklch(0.6_0.22_255)]`, `bg-[oklch(0.97_0.02_240)]`, etc.) used directly in JSX instead of semantic tokens — extracted verbatim into organism styles for this first pass; a token-mapping pass is needed before these can be called "on brand".

## 6. WCAG audit (2026-09-08)

Ran against a consuming site (autopaylab-landing) with axe-core plus manual review, since automated tools only catch a fraction of real issues (no error-association or focus-management checks, for example). Findings and fixes:

**Fixed:**
- `Navbar`: the language-switcher button had no accessible name (just a flag/region-code visual label) — added a `languageButtonAriaLabel` prop, defaulted to `"Change language"`. Its `<nav>` had no `aria-label` either, meaning a page using both this organism's nav and a footer nav would expose two identically-named "navigation" landmarks to screen-reader users — added `navAriaLabel`, defaulted to `"Primary"`.
- `Footer`: same missing-label gap on its `<nav>` — added `navAriaLabel`, defaulted to `"Footer"`.
- `PlatformFeatureShowcase`: two real bugs, not just missing polish. (1) The tab buttons (`role="tab"`) had no `aria-controls` and the video panels had no `role="tabpanel"`/`id`/`aria-labelledby` at all — added the full linkage, matching the ARIA APG tabs pattern. (2) Arrow-key navigation moved the `active` state (so the visual selection and `tabIndex` roving updated correctly) but never moved actual DOM focus — a keyboard user pressing an arrow key ended up with focus stranded on a button that had just become `tabIndex={-1}` and was no longer in the tab order. Fixed by focusing the newly active tab's button ref after moving selection.

**Verified clean, no changes needed:** color contrast (checked every rendered text/background pairing programmatically against the WCAG 4.5:1 / 3:1-for-large-text thresholds — the token palette passes everywhere it's actually used), heading hierarchy in every organism, label association on every form molecule (`FormField`/native `<label>` wrapping is a valid, working technique here, confirmed with axe and manual DOM inspection), `Accordion`'s Radix-derived ARIA semantics.

**Flagged, not fixed (scope call, not an oversight):**
- **Autoplay looping video with no pause control** (`HeroVideoSplit`, `PlatformFeatureShowcase`, `SingleIntegrationSection`, `DataLeverageSection`'s decorative elements) — WCAG 2.2.2 (Pause, Stop, Hide) requires a way to pause moving content that auto-plays for more than 5 seconds. Adding a play/pause affordance is a real UI feature addition, not a small a11y patch, so it's flagged here rather than bolted on. Whoever builds the next page consuming these organisms should design that control rather than have it default-added silently.
- Reduced-motion preferences (`prefers-reduced-motion`) aren't respected anywhere (hover scales, translates, transitions) — this is WCAG 2.3.3, which is AAA, not AA; noted as a nice-to-have, not treated as a compliance gap.

## 7. Dependency bump notes (2026-09-10)

- **`lucide-react` 0.575 → 1.41**: this major dropped the library's bundled brand/logo icons, including `Facebook` and `Linkedin`, both used in `Footer.stories.tsx`'s demo data. `Facebook` was replaced with a hand-embedded SVG copied verbatim from `simple-icons@16.30.0`'s `facebook.svg` (a real, verified path, not hand-drawn), marked `aria-hidden` to match the existing pattern where the accessible name comes from the wrapping `<a aria-label>`. `Linkedin` has **no verified replacement** — `simple-icons@16.30.0` has no LinkedIn entry at all (checked directly against its data file, zero matches) — so the story falls back to lucide's generic `Link` icon rather than an invented/approximated brand mark. This is a story-data fix only; `Footer`'s own `icon` prop type (`React.ComponentType<{ className?: string }>`) is unaffected and consumers can supply any icon they have a real license/source for.
- **`tailwindcss` 3.4 → 4.3**: only affects this package's own Storybook pipeline — `.storybook/preview.css` now uses `@import "tailwindcss";` instead of the three `@tailwind` directives, plus a `@config "./tailwind.config.ts";` directive; `postcss.config.cjs` now uses the separate `@tailwindcss/postcss` plugin package instead of `tailwindcss` directly (required in v4 — verified via the installed package's own dependency tree that `@tailwindcss/node` still bundles `jiti`, so `.ts` config files keep working through `@config` exactly as they did in v3). **The package's own exported `tailwind.config.ts` needed zero changes** — its `content`/`theme.extend` shape is the v3-compat format `@config` is specifically designed to keep working, so `autopaylab-landing`'s `import base from "@autopaylab/landing-design-system/tailwind.config"` pattern is unaffected regardless of which Tailwind major the consumer itself is on. Verified visually in Storybook: OKLCH colors, `--lime` hex token, border-radius tokens, and both self-hosted fonts all render identically to the pre-migration build.

## 8. React Server Components (RSC) safety audit (2026-09-10)

Checked every component for real client-only usage (hooks, or a JSX element with an inline DOM event handler) rather than assuming — grepped for `useState|useEffect|useRef|useId|useCallback|useMemo`, then separately for the literal JSX event-attribute patterns (`onClick=`, `onChange=`, `onSubmit=`, `onKeyDown=`, etc., not just prop *names* like `onCtaClick` that only forward to a child).

**Need `"use client"`:**
- `Navbar` — `useState`/`useId` (mobile menu drawer state).
- `PlatformFeatureShowcase` — `useState`/`useRef`/`useId` (tab state, keyboard nav).
- `ContactSection` — writes `<form onSubmit={...}>` directly.
- `IndustryCard` — writes `<Button onClick={onCtaClick}>` directly.

**Don't need it, confirmed not just assumed:** `IndustriesGridSection`/`IndustriesStackedSection` only forward an `onCtaClick` *prop* into `IndustryCard` (a child component) — they never attach a DOM event handler themselves, so they can stay Server Components; only `IndustryCard` itself needs the boundary. Every atom is safe too, including `Button`/`Link` despite their `asChild` support — they never hardcode an event handler in their own body, only spread whatever a caller passes in (matches how e.g. shadcn/ui's own `Button` works in an RSC tree).

**A real build-output complication, not just a source-level fix:** `tsup` bundles each export layer (`atoms`, `molecules`, `organisms`, `templates`, and the root barrel) into one physical file per format (`splitting: false`) — there's no per-component chunk for a directive to attach to. Adding `"use client"` to the four source files above alone did **nothing** to the shipped `dist/` output (verified — the directive was silently absent from every built file). The fix that actually works, `scripts/prepend-use-client.mjs` (run as part of `npm run build`), prepends the directive to the whole `molecules`, `organisms`, `templates`, and root-index bundles, since each of those inlines at least one of the four components above. `atoms` and `tokens` bundles are correctly left unmarked.

This is coarser than true per-component RSC boundaries — importing anything from `@autopaylab/landing-design-system/organisms`, even a fully static organism like `TrustedByLogos`, pulls in a bundle marked `"use client"`, forcing it onto the client too. Getting genuine per-component granularity would require restructuring the build to emit one file per component (a much bigger change than this audit's scope) — flagged here as a known limitation, not silently left unfixed. The alternative — not marking these bundles at all — is strictly worse: it doesn't just under-optimize, it makes `Navbar`/`ContactSection`/etc. throw at runtime the moment a real Next.js App Router consumer renders them inside a Server Component tree.

Tried first: `esbuild-plugin-preserve-directives` (per-component chunk-level directive preservation via `splitting: true`). Confirmed working in isolation against raw `esbuild.build()`, but never took effect under tsup's actual invocation — tsup's `bundle: true` esbuild call doesn't return `outputFiles` the way the plugin's `onEnd` hook expects, so it silently no-ops. Not worth the added dependency (and its peer-range mismatch against this project's newer `esbuild`, which itself needed a package.json `overrides` entry, then broke `npm install` in a different way requiring `--legacy-peer-deps` that silently deleted `vite` from `node_modules` on first attempt) for a fix that didn't actually work. The plain post-build script is simpler, has zero new dependencies, and was verified against the real `dist/` output, not assumed.

## 9. Typography sizes harmonized with DS2 (2026-09-11)

Every heading (`<h1>`-`<h6>` carrying `font-display`) across `src/organisms` and `src/molecules` used ad hoc, per-component `text-[Npx] md:text-[Mpx]` literals or bare Tailwind scale classes (`text-2xl`, `text-3xl`, etc.), never a shared scale. Grepping them side by side surfaced real drift: the same heading level (h2) shipped with three different size pairs (44/56, 30-36 via `text-3xl md:text-4xl`, and 44/64), and `HeroVideoSplit`'s h1 had a 48→72px step with no match anywhere else.

Replaced with a token-based heading scale sourced from Autopay DS2's real typescale (see `DS2-HARMONIZATION.md` §6 for the full numbers and the caveat that they come from the same Figma page whose *font-family* label is stale — sizes and typefaces are independent properties of that frame and were confirmed separately): CSS variables in `src/tokens/tokens.css` (`--text-hN`/`--leading-hN`/`--tracking-hN`, flipped at the existing 768px breakpoint), a `fontSize.h1`-`h6` extension in `tailwind.config.ts` referencing those variables, and a `headingScale` export in `src/tokens/index.ts` for non-Tailwind consumers. Every heading now uses one of `text-h1`..`text-h6` — a single class that's responsive by itself, no `md:` variant needed at the call site.

Every mapping decision (including the deliberate ones — e.g. `SecuritySection`/`SingleIntegrationSection`'s h2 normalized *down* from 64px to the standard 56px H2, `Footer`/`PromoCtaSection`'s closing-CTA heading mapped to H2 by visual role rather than tag, `HeroImageOverlay`'s stacked variant losing its intermediate `sm`/`lg` steps) is disclosed in `DS2-HARMONIZATION.md` §6, not silently applied.

**Verified, not assumed:** `npm run typecheck`, `npm run lint`, `npm test` (69 tests, including the automated axe a11y suite run against every story — no new heading-order or contrast violations), `npm run build`, `npx size-limit` (all packages still under budget), and `npm run build-storybook` all pass; spot-checked visually in a real browser (Storybook) at mobile and desktop widths for `HeroVideoSplit`, `SecuritySection`, and `TrustedByLogos`.

## 10. Neutral/semantic colors harmonized with DS2 (2026-09-11)

Closes item 5.6/§4's remaining open half — the `--lime` *value* was already confirmed correct; the neutral scale (`--background`, `--foreground`/`--ink`, `--surface`, `--surface-muted`/`--secondary`/`--muted`/`--accent`, `--primary`, `--muted-foreground`, `--border`/`--input`) had never been checked against real DS2 swatches at all.

Converted each token's OKLCH value to sRGB via a canvas 2D context (not hand-rolled OKLab math, and not `getComputedStyle` alone — modern browsers serialize that back as `oklch()`, not `rgb()`), then matched each to the nearest real DS2 Digital Gray/Mineral Black/Dark-mode-Black swatch by sRGB distance. Stored as raw hex (matching the existing `--lime` precedent: value correctness over OKLCH-representation consistency). Full before/after table, the two disclosed collapses (`--surface-muted`/`--secondary`/`--muted`/`--accent` → one swatch; `--border`/`--input` → one swatch), and what was deliberately left unmapped (`--ring`'s real blue chroma has no neutral-gray equivalent; `--destructive` is a separate semantic-red scale, out of scope) are in `DS2-HARMONIZATION.md` §7.

**Verified, not assumed:** WCAG contrast recomputed (WCAG relative-luminance/contrast-ratio formula) for every real text/background pairing the original §6 audit covered, before and after — no regression, everything stayed at 14:1+ (well above the 4.5:1 AA floor). `npm run typecheck`, `npm run lint`, `npm test` (69 tests, axe a11y suite included), `npm run build`, and `npx size-limit` all pass; spot-checked visually in Storybook (`SecuritySection`).

## 11. New organism: `OverlappingCardsSection` (2026-09-11)

Closes the gap identified while mapping Figma DS2's "BASE SECTIONS" examples page against this package: DS2 has an "Overlapping cards" pattern (a sticky, scroll-activated card stack, generic content, two CTAs per card — e.g. "Buy now" / "See more") that this package didn't have a clean equivalent for. The closest existing thing, `IndustriesStackedSection`, matches the *mechanism* (the same sticky-stack CSS approach) but not the *shape*: it's industry-specific (`name`/`description`/`image` tied to an "industry" concept) and gives each card exactly one CTA.

Added, as new, additive components — no existing organism changed:
- `OverlapCard` (molecule) — a generic, content-agnostic promo card: `title`/`description`/`image`/`backgroundColor` plus two independent CTAs (`primaryCta`/`secondaryCta`), rendered with the `solid`/`outline` `Button` variants (both real, already-declared variants — see the Buttons section — not invented for this).
- `OverlappingCardsSection` (organism) — the sticky-stack container, structurally identical to `IndustriesStackedSection`'s `top`/`zIndex`/`marginBottom` sticky mechanism, over the generic `OverlapCard` data shape instead of `IndustryEntry`.

`IndustriesStackedSection` itself is untouched — this is a new, parallel option for pages that need a generic two-CTA promo stack, not a replacement.

**Verified, not assumed:** `npm run typecheck`, `npm run lint`, `npm test` (71 tests — 69 plus the 2 new story fixtures, axe a11y suite included, no violations), `npm run build`, `npx size-limit` (all packages still under budget) all pass; visually verified the sticky-overlap effect and both CTA buttons in a real browser (Storybook) at a tall viewport.

## 12. `CookieConsentScript` — a deliberate non-standard exception (2026-09-11)

Per the maintainer, Autopay's production cookie-consent banner (ConsentManager, consentmanager.net, `cmp_cdid` `"136af463a10ba"`) should be "on the shelf" in this package, ready to reuse on future landing pages, in exactly the form running on autopaylab.com today — explicitly *not* redesigned, restyled, or reimplemented. This is a real, different category of component from everything else here:

- **It's not a component we style.** The visible banner/modal is rendered by ConsentManager's own remote-hosted script and iframe (configured on their dashboard), not by any JSX/CSS in this codebase. Every other organism in this package is built and owned by us; this one is a legal obligation we're only responsible for loading correctly.
- **The port is byte-for-byte, verified programmatically, not retyped by hand.** The ~11.7KB minified vendor blob was extracted from `autopaylab-landing/src/lib/consent-manager-script.ts` and diffed against the new file after generation — confirmed identical except one intentional identifier rename (see below). Retyping a script this size by hand for a legal-compliance component would be an unacceptable transcription-error risk.
- **One necessary adaptation for portability, not a behavior change:** the original imports `LOCALE_STORAGE_KEY` from an app-local i18n module (`@/lib/i18n/storage-key`) that doesn't exist in this package. Renamed to a `localeStorageKey` prop defaulting to `"autopaylab-locale"` — the exact literal value that module exports today — so default behavior is unchanged; only the plumbing (a cross-package import that couldn't be copied) was adapted.
- **Placed under `organisms`** (not a new package entry) since it's a once-per-page, page-level concern like `Navbar`/`Footer`, even though it renders no visible markup of its own.
- **No meaningful Storybook preview is possible or attempted** — see the component's own doc comment for the real mechanism: server-rendered (real usage), the script executes normally as part of parsed page HTML; client-rendered (this package's Storybook story, and the axe test suite that mounts every story), the same JSX takes React's `dangerouslySetInnerHTML` → `Element.innerHTML` path, which the HTML spec marks "already started" and never executes. Verified empirically in a real browser: mounting the story fires zero network requests to consentmanager.net. A benign React console warning ("Encountered a script tag while rendering React component...") is expected when client-rendered — not a bug.
- **Bundle size:** the vendor blob is already-minified JS with high entropy (short single-letter identifiers), so it doesn't compress as well under brotli as this package's own repetitive Tailwind-class-heavy JSX (~11.7KB raw → ~3.6KB brotli marginal cost). This pushed `organisms` and the root bundle over their existing `size-limit` budgets; both were raised (13→15KB, 14→16KB) to reflect this real, necessary cost — not loosened carelessly, and not something that can be optimized away since the payload is vendor-controlled.
- **`cmp_cdid` is domain/account-scoped.** Documented prominently (component doc comment + README) that reusing this only makes sense for other autopaylab.com pages under the same ConsentManager account — not for an unrelated property, which needs its own CMP setup.

**Not done in this pass:** `autopaylab-landing`'s own `src/app/layout.tsx` was **not** changed to import this from the package instead of its local copy — the ask was to add it to the design system's shelf, not to migrate the live production site's cookie banner, which is a separate, higher-stakes change (a live legal-compliance component) that should be its own deliberate, reviewed step if wanted later.

**Verified, not assumed:** the vendor blob was diffed programmatically against the source file (identical except the one disclosed rename); `npm run typecheck`, `npm run lint`, `npm test` (72 tests — 71 plus the 1 new story, axe a11y suite included, no violations), `npm run build`, `npx size-limit` (green against the revised budgets) all pass; confirmed in a real browser (Storybook) that the story mounts without error and triggers zero network requests.

## 13. Mobile inter-section spacing (2026-09-11)

The maintainer flagged, after v0.5.0 shipped to production, that section-to-section spacing "seems too large" on mobile. Confirmed on the live site (autopaylab.com, 375×812 viewport): a flat `mt-32` (128px) between every major section, unchanged across breakpoints, produced roughly 300px of dead whitespace between a CTA button and the next section's card — not a subjective call, directly observed and screenshotted before touching any code.

Root cause: 10 organisms (`ContactSection`, `DataLeverageSection`, `GlobalCoverageSection`, `IndustriesGridSection`, `IndustriesStackedSection`, `OverlappingCardsSection`, `SecuritySection`, `SingleIntegrationSection`, `StatsSection`, `TrustedByLogos`) hardcode `mt-32` with no responsive variant — a real, pre-existing gap in the "no DS2 spacing source" situation already logged in `DS2-HARMONIZATION.md` §5 (spacing was never given a mobile/desktop split at all, unlike typography which got one in §6). Other organisms (`FaqAccordionSection`, `FourStepsSection`, `HeroVideoSplit`) already followed a responsive convention (`py-14 md:py-20`, `pt-16 md:pt-24`) — this fix brings the flat-`mt-32` group in line with that existing precedent rather than inventing a new pattern.

**Fix:** `mt-32` → `mt-16 md:mt-32` on all 10 organisms — halves the mobile gap (128px → 64px) while leaving desktop completely untouched (matches the maintainer's report, which was mobile-specific; no desktop complaint was raised, so desktop wasn't touched). Scope was deliberately narrow: spacing only, no color/typography token touched.

**Verified, not assumed:** `npm run typecheck`, `npm run lint`, `npm test` (72 tests, axe a11y suite included, no violations), `npm run build`, `npx size-limit` (unaffected, pure Tailwind class change, no bundle-size impact) all pass; visually confirmed in Storybook (`LandingPageTemplate` "Full Page" story, 375px viewport) that the gap between `TrustedByLogos` and `SingleIntegrationSection` is now visibly tighter and proportionate to the viewport.

Also applied to `autopaylab-landing`'s own section components (`ApplicationForm`, `AudienceCards`, `CredibilityStrip`, `MissionSection`, `SiteFooter`, `UseCasesGrid`) — same `mt-32` pattern, same fix, own atomic commit in that repo, since that app doesn't yet consume these organisms directly and the maintainer's original complaint was observed on that live site specifically.
