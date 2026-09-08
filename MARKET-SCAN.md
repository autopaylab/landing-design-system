# MARKET-SCAN — live-site comparison (autopay.pl, autopayglobal.com)

Date: 2026-09-08. Method: manual browser walkthrough of both live production sites, compared section-by-section against `AUDIT.md`'s inventory. Goal: find UI modules that exist on the real, shipped sites but were never covered by this package's extraction from `landing-page-kit` (which was itself a draft/exploration, not the shipped site). Old branding-book content found on autopay.pl was ignored per instruction — it's unrelated to this component set.

## 0. Headline result: extraction fidelity confirmed

autopayglobal.com's Hero, Single Integration, Trusted-by, Global Coverage, Security, Stats, Contact and Footer sections are near word-for-word identical to what's already in this package. It also has **no "Industries" section at all** — this independently confirms AUDIT.md #5/#7's flag that the two competing `IndustriesStackedSection`/`IndustriesGridSection` layouts were an unshipped A/B exploration that never reached production.

## 1. Confirmed gap: `Navbar` has no mobile menu

**Fixed in this pass** (see `Navbar.tsx`). Observed identically on **both** autopay.pl and autopayglobal.com: a hamburger icon opens a full-width drawer with the same nav items, Login button, Sign In button, and language switcher already modeled as `Navbar`'s existing props (`navItems`, `loginLabel`, `signInLabel`, `languageLabel`). The extracted `Navbar` only ever rendered these `hidden md:flex` — on a real mobile viewport the entire nav was inert, since `landing-page-kit` (the draft source) never implemented the drawer that the shipped site has. This isn't new content or a new design — it's the same props, rendered in a second, small-viewport layout, matching what's live.

## 2. New patterns seen live, not yet in this package (proposed, not built)

These exist on autopay.pl and/or autopayglobal.com but have no equivalent organism here. None are implemented yet — listed for a scope decision before any work starts, per this repo's own extraction discipline (no inventing props/content, no scope creep without a decision).

| # | Pattern | Where seen | Why not covered | Proposed classification |
|---|---|---|---|---|
| 1 | Hero carousel (dot indicators + arrow nav, multiple slides) | autopay.pl hero | `landing-page-kit`'s hero was static (single `HeroVideoSplit`/`HeroImageOverlay` variants, no carousel state) | New organism, `HeroCarousel`, composing existing hero visual style with slide state + `Button`-style dot/arrow controls |
| 2 | Industry solution showcase: dropdown industry selector + photo/mockup overlay + feature list, updates together | autopay.pl | No equivalent in source; source's `Industries` sections are static cards, not a selector-driven detail view | New organism, distinct from existing `IndustriesStackedSection`/`IndustriesGridSection` — different interaction model, not a variant of either |
| 3 | Hub-and-spoke feature diagram (center logo, radiating icon nodes with connecting lines) | autopay.pl platform section | No equivalent in source at all | New organism — largely a decorative/graphic composition; needs a decision on whether it's an SVG-based atom+organism or purely illustrative (lower priority, high build cost for the payoff) |
| 4 | Full-bleed dark/navy section background treatment | autopay.pl, alternating with light sections | Source is entirely light-background; no dark section token or pattern exists in `tokens/` | Token/theming addition (a `dark` section background token + verifying existing organisms' text contrast against it), not a new organism |
| 5 | Blog/article card grid | autopay.pl | No blog content or route exists in source at all | Net-new molecule (`ArticleCard`) + organism (`ArticleGrid`) — needs real content shape (author/date/image/excerpt fields) confirmed against whatever CMS backs it, not guessed |
| 6 | Partner-integration badge with a count (e.g. "+40 providers") | autopay.pl | No equivalent counter/badge composition in source | Small molecule, low effort, low risk — safe to build once prioritized |

## 3. Discrepancy worth flagging, not fixing

autopayglobal.com's live contact form asks for **"First and last name" as a single field**, plus phone and business e-mail. The extracted `ContactSection`/source draft has **separate** first-name/last-name fields (`HomeContent.tsx`'s original 2-column grid). This is a real divergence between the draft this package extracted and what shipped — not a bug in the extraction (the job was to faithfully extract the source, which it does), but worth noting if `ContactSection` is ever reconciled against the live form shape.

## 4. Recommendation

Implemented now: `Navbar` mobile drawer (#1) — highest confidence, zero invented content, matches existing prop shape exactly.

Deferred, pending a scope decision: items in section 2. Suggested order if picked up: #6 (badge, trivial) → #4 (dark section token, moderate, unlocks reuse for #1–#3's sections) → #1 (hero carousel) → #2 (industry showcase) → #5 (blog grid, needs real content shape first) → #3 (hub-and-spoke diagram, decorative/high-cost-low-reuse).
