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

## Summary

| Layer | Status |
|---|---|
| Typography | ✅ Confirmed aligned (Bricolage Grotesque / Open Sans) — no action |
| Brand accent colors | ✅ Confirmed aligned (`--lime` = Pistachio 500, logo blue = Blue 500) — no action, optional OKLCH conversion for consistency only |
| Neutral/semantic colors | ⚠️ Real gap — needs a dedicated color-conversion + contrast-reverification pass (§4) |
| Spacing | ➖ No DS2 source exists to compare against — current Tailwind-default baseline stands as-is |
