# DS2-HARMONIZATION — comparison against Autopay Web Design System 2.0

Date: 2026-09-11. Source of truth for this comparison: a Figma file owned by the repo maintainer, **"MW_Autopay_ Web Design System 2.0"** (fileKey `QaEHvc39aHEP022AZJtpb6`), *not* the file initially offered (`Ht6CUB3TC1mIVJHmhrlmcB`, inaccessible — outside any Figma org this session's connected account belongs to, and the account is not an admin there so it can't self-add). This document is the first real comparison between this package's tokens (extracted from `landing-page-kit`, a draft — see `AUDIT.md` §4) and the actual, current Autopay Design System 2.0.

## Method and a real tooling limitation

The Figma MCP tools split into two groups, discovered by testing, not assumed:
- **Work by file key + node ID alone, no live session needed:** `get_metadata` (structure: node IDs, names, positions/sizes — no color/font values) and `get_screenshot` (rendered PNG).
- **Require an actual live selection in an open Figma session** (desktop app or a logged-in browser tab) to return anything: `get_design_context` and `get_variable_defs`. Neither could be used here — the connected account's Figma desktop app had no way to click/select inside this session (no OS-level desktop screenshot/interaction capability, only browser tabs), and an anonymous browser tab doesn't share selection state with the account's desktop bridge (`figma_agent.exe`).

Consequence: actual color values were read from a **rendered screenshot** of the "Main Colors" frame (node `10765:2780`), not extracted as structured data. Values below are transcribed directly from the labels visible in that screenshot (hex + RGB triplets), not computed or guessed.

## 1. Typography — already aligned, no action needed

The Figma file's own **Typography** page (node `134:2902`) is **stale** — the maintainer confirmed it still shows deprecated typefaces (Whyte Inktrap, ABC Whyte) that Autopay has since dropped. It was *not* used as a source of truth here.

Per the maintainer directly: **the current, correct typefaces are Bricolage Grotesque (display) and Open Sans (body)** — which is exactly what this package already uses (self-hosted via `@fontsource`, see `AUDIT.md` §7). No harmonization work needed on typography; this was independently arrived at from two unrelated sources (this package's extraction from `landing-page-kit`, and the real DS2 spec) and they already agree.

## 2. Brand accent colors — already aligned, just unlabeled

Two colors already in this package's tokens turn out to be **exact matches** for real Autopay DS2 brand colors, previously flagged as unexplained inconsistencies rather than recognized as correct:

| This package's token | Value | DS2 real name | DS2 value | Match |
|---|---|---|---|---|
| `--lime` (`src/tokens/tokens.css`) | `#E6FFA0` | Pistachio 500 | `#E6FFA0` | **Exact** |
| `icon.svg` / favicon path fill (`autopaylab-landing`) | `#199BFA` | Blue 500 | `#199BFA` | **Exact** |

`AUDIT.md` §5/§6 previously flagged `--lime` as "a raw hex value while every other color token is OKLCH — an authoring inconsistency." That characterization should be softened: it's an inconsistency in *representation* (hex vs. OKLCH), not in the *value itself* — the value is the real, correct brand color. No change needed to the value; converting it to OKLCH for consistency's sake is optional polish, not a correctness fix.

## 3. Full real palette (Main Colors, DS2)

Transcribed from the rendered "Main Colors" frame. This is the reference to harmonize *against* for any future token-mapping pass — not yet applied to this package's tokens.

**Neutrals:**
| Name | Hex | RGB |
|---|---|---|
| Digital White | `#FFFFFF` | 255,255,255 |
| Digital Gray 1 | `#FAFAFA` | 250,250,250 |
| Digital Gray 2 | `#F5F5F5` | 245,245,245 |
| Digital Gray 3 | `#F0F0F0` | 240,240,240 |
| Digital Gray 4 | `#EBEBEB` | 235,235,235 |
| Digital Gray 5 | `#E5E5E5` | 229,229,229 |
| Digital Gray 6 | `#CCCCCC` | 204,204,204 |
| Digital Gray 7 | `#B2B2B2` | 178,178,178 |
| Digital Gray 8 | `#999999` | 153,153,153 |
| Digital Gray 9 | `#808080` | 128,128,128 |
| Digital Gray 10 | `#666666` | 102,102,102 |
| Digital Gray 11 | `#4C4C4C` | 76,76,76 |
| Mineral Black | `#282828` | 40,40,40 |
| Dark mode Black | `#0F0F0F` | 15,15,15 |

**Brand (Blue):**
| Name | Hex |
|---|---|
| Blue 50 | `#D1EBFE` |
| Blue 100 | `#A3D7FD` |
| Blue 300 | `#75C3FC` |
| Blue 500 | `#199BFA` |
| Blue 700 | `#0C73BD` |
| Blue 900 | `#0D4E7D` |
| Blue 1000 | `#082F4B` |

**Additional:**
| Name | Hex |
|---|---|
| Pistachio 500 / 700 / 900 | `#E6FFA0` / `#ADBF78` / `#738050` |
| Violet 300 / 500 / 700 | `#ABABF5` / `#8282F0` / `#4949B0` |
| Yellow 300 / 500 / 700 | `#FFE879` / `#FFDC37` / `#EBB400` |
| Red 100 / 300 / 500 / 700 | `#FFC4B5` / `#FC9E86` / `#FA6E4B` / `#B24E35` |
| Buoy Orange | `#FFAA37` |
| Watermelon Red | `#FF8282` |
| Bubble Gum Pink | `#F56EAF` |

The file also has "Solution Palette" (Payments/Authorization/Verification/Insights/Reach/Recurring-transactions categories), "Connectors", and "Elevation" color groups (nodes `10769:2089`, `10769:3633`, `10769:3313`) — not transcribed here as they didn't come up as directly relevant to this package's current token set; revisit if a future component needs them.

## 4. Neutral/semantic tokens — the real, unresolved gap

This package's `--background`/`--foreground`/`--ink`/`--surface`/`--muted`/`--border`/etc. (`src/tokens/tokens.css`) are OKLCH values extracted verbatim from `landing-page-kit`'s draft CSS — they were never checked against DS2's actual Digital Gray scale above, because DS2 didn't exist as an accessible reference until this session. They're visually in the same neighborhood (light neutrals for background/surface, dark neutrals for foreground/ink) but **not verified to be the same values**, and almost certainly aren't exact matches — OKLCH lightness/chroma/hue were never chosen with this specific gray scale as a target.

**This is flagged, not fixed.** Precisely remapping OKLCH → the nearest DS2 Digital Gray requires an actual color-conversion pass (checking real contrast ratios, not eyeballing which swatch "looks about right") — that's real work, not a copy-paste. Proposed approach for whoever picks this up:
1. Convert each current OKLCH neutral token to sRGB.
2. Find the closest DS2 Digital Gray/Mineral Black by actual color distance, not visual guess.
3. Re-verify WCAG contrast ratios after remapping (the WCAG audit in `AUDIT.md` §6 passed against the *current* values — a remap could change contrast math).
4. Ship as a single, reviewable PR — not mixed with unrelated changes.

## 5. Spacing — not defined in DS2, nothing to harmonize

Checked the Figma file's full page list (Cover, Colors, Typography, Autopay Logo — confirmed by the maintainer as complete). **No spacing/sizing scale exists in this Figma file at all.** There's nothing to reverse-engineer from Figma specifically because there's no Figma source for it, not because it was missed.

This package's actual, currently-used spacing (grepped across `src/atoms`, `src/molecules`, `src/organisms`) is **Tailwind's stock default scale, uncustomized** — `px-2/2.5/4/5/6/8/10`, `py-0.5/1/2.5`, `gap-2/3/4/6/10`, `mt-1/2/3/6/8/10/12/32`, etc. — plus one real custom token, `--radius: 0.625rem`, with a derived scale in `tailwind.config.ts` (`sm`/`md`/`lg`/`xl`/`2xl`/`3xl`). This is the de-facto baseline; there's no conflicting or competing spec to reconcile it against today.

## 6. Typography sizes — harmonized (implemented)

Unlike font *families* (§1), heading *sizes* had never been checked against DS2 at all, and a grep across every organism found real drift: the same visual heading level (h2) shipped with three different size pairs across sections (44/56, 40/56 as `text-3xl`/`text-4xl`, 44/64), and one heading (`HeroVideoSplit`'s h1) had no responsive scaling defined at all. The maintainer asked specifically to bring our sizes in line with DS2's own typescale (independent of the stale font-family label on that same Figma page — see §1): "zwróć też uwagę na rozmiary typografii ... czy mamy odpowiednie rozmiary dla odpowiednich rozmiarów ekranów?", then confirmed to proceed: "Wprowadzamy zmiany aby rozmiary w naszym ds były zbliżone do tego co jest w figmie. Działaj."

**Real DS2 sizes** (transcribed from the same Figma typescale frame as §1 — the size *values* are current even though that page's font-family label is stale; sizes and typefaces are independent properties of the same frame):

| Level | Mobile size | Mobile line-height | Desktop (≥768px) size | Desktop line-height | Letter-spacing |
|---|---|---|---|---|---|
| H1 | 48px | 1 | 64px | 1.15 | -0.02em |
| H2 | 40px | 1 | 56px | 1.15 | -0.02em |
| H3 | 32px | 1 | 48px | 1.15 | -0.02em |
| H4 | 24px | 1 | 32px | 1.15 | -0.02em |
| H5 | 20px | 1 | 24px | 1.15 | -0.01em (desktop) |
| H6 | 18px | 1 | 20px | 1.15 | -0.01em (desktop) |

**Implementation:** CSS custom properties in `src/tokens/tokens.css` (`--text-hN`/`--leading-hN`/`--tracking-hN`, flipped at the existing `768px` breakpoint used everywhere else in this file), consumed via `tailwind.config.ts`'s `theme.extend.fontSize.h1`-`h6`, so every heading uses one responsive class (`text-h1`..`text-h6`) instead of a hand-rolled `text-[Npx] md:text-[Mpx]` literal. A `headingScale` JS export was added to `src/tokens/index.ts` for non-Tailwind consumers. See `AUDIT.md` §9.

**Per-heading mapping** (every occurrence of a `font-display` heading in `src/organisms` and `src/molecules`; mapped to the closest DS2 level, not blindly by HTML tag — several are deliberate judgment calls, called out below):

| Component | Was | Mapped to | Note |
|---|---|---|---|
| `HeroVideoSplit` h1 | 48→72 (`md:text-[72px]`) | `text-h1` | Desktop capped at DS2's 64 instead of 72 — a deliberate reduction, not a bug |
| `ContactSection` h2 | 44→56 | `text-h2` | Direct match |
| `ContactSection` h3 (form heading) | flat 30px (`text-3xl`) | `text-h4` | Mapped by closest visual size (30→24/32), not by tag — jumping to H3's 32/48 was too large a change from a flat 30px sub-heading |
| `DataLeverageSection` h2 | 44→56 | `text-h2` | Direct match |
| `DataLeverageSection` h3 (list item title) | flat 24px | `text-h4` | 24 is an exact H4-mobile match |
| `FaqAccordionSection` h2 | 30→36 (`text-3xl md:text-4xl`) | `text-h2` | Promoted to match sibling section headings for consistency, even though previously smaller |
| `Footer` h3 (closing CTA heading) | 36→56 | `text-h2` | Desktop 56 is an exact H2 match; chosen over tag-matched H3 for visual prominence as the page's biggest closing CTA |
| `FourStepsSection` h2 | 32→56 | `text-h2` | Direct match |
| `GlobalCoverageSection` h2 | 44→56 | `text-h2` | Direct match |
| `HeroImageOverlay` h2 (stacked variant) | 40→48→60→72 (4 breakpoint steps: base/sm/md/lg) | `text-h1` | Mapped as a hero-role heading despite the h2 tag; **note:** this collapses the previous 4-step responsive scale to base+md only, capping desktop at 64 instead of growing to 72 at `lg` — a disclosed simplification |
| `HeroImageOverlay` h2 (split variant) | 36→56 | `text-h2` | Direct match |
| `IndustriesGridSection` h2 | 44→56 | `text-h2` | Direct match |
| `IndustriesStackedSection` h2 | 44→56 | `text-h2` | Direct match |
| `PlatformFeatureShowcase` h4 (mobile-only title) | flat 20px | `text-h5` | Exact H5-mobile match |
| `PromoCtaSection` h2 | 30→48 | `text-h2` | Chosen over the visually-closer H3 for consistency with `Footer`'s similarly-purposed closing-CTA heading, also mapped to H2 |
| `SecuritySection` h2 | 44→**64** | `text-h2` | One of two outliers previously at 64 instead of 56 — deliberately normalized *down* to join the other h2 siblings, since fixing exactly this inconsistency was the point of this pass |
| `SingleIntegrationSection` h2 | 44→**64** | `text-h2` | The other 64px outlier — normalized down to 56 |
| `SingleIntegrationSection` h3 (subheading) | flat 28px | `text-h4` | Closest match (24/32) |
| `StatsSection` h2 | 44→56 | `text-h2` | Direct match |
| `TrustedByLogos` h2 | 32→40 | `text-h3` | Mobile 32 is an exact H3-mobile match |
| `IconCard` h3 (card title, molecule) | flat 24px | `text-h4` | Exact H4-mobile match; now grows to 32 on desktop (previously flat) |
| `IconFeatureItem` heading (h3/h4, molecule) | flat 18px | `text-h6` | Exact H6-mobile match |
| `StepCard` h3 (molecule) | flat 18px | `text-h6` | Exact H6-mobile match |

**Verification:** `npm run typecheck`, `npm run lint`, `npm test` (69 tests incl. the automated axe a11y suite against every story — no new violations), `npm run build`, `npx size-limit` (all packages under budget) and `npm run build-storybook` all pass; spot-checked `HeroVideoSplit`, `SecuritySection`, and `TrustedByLogos` visually in Storybook at mobile and desktop widths.

**Not in scope for this pass:** the Figma file's "BASE SECTIONS" examples page and the neutral-color gap (§4) are separate, already-tracked threads — not touched here.

## Summary

| Layer | Status |
|---|---|
| Typography (families) | ✅ Confirmed aligned (Bricolage Grotesque / Open Sans) — no action |
| Typography (sizes) | ✅ Harmonized — token-based `text-h1`..`text-h6` scale implemented across all organisms/molecules (§6) |
| Brand accent colors | ✅ Confirmed aligned (`--lime` = Pistachio 500, logo blue = Blue 500) — no action, optional OKLCH conversion for consistency only |
| Neutral/semantic colors | ⚠️ Real gap — needs a dedicated color-conversion + contrast-reverification pass (§4) |
| Spacing | ➖ No DS2 source exists to compare against — current Tailwind-default baseline stands as-is |
