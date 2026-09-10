# @autopaylab/landing-design-system

[![CI](https://github.com/autopaylab/landing-design-system/actions/workflows/ci.yml/badge.svg)](https://github.com/autopaylab/landing-design-system/actions/workflows/ci.yml)
[![Storybook on Chromatic](https://img.shields.io/badge/Storybook-Chromatic-FF4785?logo=storybook&logoColor=white)](https://www.chromatic.com/builds?appId=6aa104b411b5b49179275bdc)

A standalone, Atomic Design component package extracted from [`autopaylab/landing-page-kit`](https://github.com/autopaylab/landing-page-kit) — a single long-scroll Lovable-generated landing page.

**This is a first-pass extraction, not a rebrand.** Autopay's brand design tokens (colors, type scale, spacing) have **not** been applied — everything here documents what actually existed in the source, as-is. See [`AUDIT.md`](./AUDIT.md) for the full inventory, every deduplication decision, and the classification rationale for anything ambiguous. See "Known limitations" below for what still needs a harmonization pass against Autopay Design System 2.0.

Contributing? See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the extraction discipline this package holds itself to. Found a vulnerability? See [`SECURITY.md`](./SECURITY.md). Licensed under [MIT](./LICENSE).

## Install

```bash
npm install @autopaylab/landing-design-system
```

Peer dependencies: `react`, `react-dom`, `tailwindcss`. No runtime dependency on shadcn/ui or Lovable tooling — see [`AUDIT.md`](./AUDIT.md) #3.

Add the base Tailwind config and the raw CSS tokens to your app:

```ts
// tailwind.config.ts
import base from "@autopaylab/landing-design-system/tailwind.config";

export default {
  ...base,
  content: [...base.content, "./app/**/*.{ts,tsx}"],
};
```

```css
/* your global CSS */
@import "@autopaylab/landing-design-system/styles.css";
```

### Fonts

`styles.css` imports both font families (`Bricolage Grotesque` display, `Open Sans` body — weights 400/600/700) via `@fontsource/*`, which are real dependencies of this package. This is self-hosting: the actual `.woff2` files ship inside `@fontsource/bricolage-grotesque` and `@fontsource/open-sans` (installed transitively with this package), and are served same-origin by your app's own bundler — no request to Google's font CDN (`fonts.googleapis.com`/`fonts.gstatic.com`) at build time or runtime. This requires a bundler that resolves bare npm specifiers inside CSS `@import` (webpack, Vite, Next.js, and Storybook's Vite builder all do) — a plain, unbundled static-file server won't resolve it.

## Quick usage

```tsx
import { Button, Badge } from "@autopaylab/landing-design-system/atoms";
import { HeroVideoSplit, ContactSection } from "@autopaylab/landing-design-system/organisms";

function Page() {
  return (
    <>
      <HeroVideoSplit
        title="One platform. Full control over global payments."
        subtitle="Increase revenue, reduce costs and ensure seamless compliance."
        ctaLabel="Contact us"
        ctaHref="#contact"
        videoSrc="/hero.webm"
      />
      <ContactSection
        heading="Talk to us"
        description="..."
        formHeading="Schedule a consultation"
        consentText="..."
        controllerText="..."
      />
    </>
  );
}
```

Or compose a full page with the template:

```tsx
import { LandingPageTemplate } from "@autopaylab/landing-design-system/templates";
```

See `src/templates/LandingPageTemplate/LandingPageTemplate.stories.tsx` for a complete, working example built entirely from this package's own components.

## Component catalog

| Layer | Count | Location |
|---|---|---|
| Atoms | 9 (incl. vendored `Accordion`) | `src/atoms/` |
| Molecules | 9 | `src/molecules/` |
| Organisms | 17 | `src/organisms/` |
| Templates | 1 | `src/templates/` |

Every component ships a `.stories.tsx` (CSF3 format) alongside its implementation, showing its real observed variants — no invented ones. Props tables are the exported TypeScript types themselves (`ButtonProps`, `IconCardProps`, etc.) rather than hand-written tables that can drift; run `npm run typecheck` or hover the export in your editor to see them.

Full audit, dedup rationale and classification calls: [`AUDIT.md`](./AUDIT.md).

## Development

```bash
npm install
npm run build      # tsup — ESM + CJS + .d.ts, per-layer barrels
npm run typecheck   # tsc --noEmit
npm run lint        # eslint, incl. eslint-plugin-jsx-a11y
npm test            # vitest — see "Testing" below
npm run storybook   # dev server at localhost:6006 — visual catalog of every story
```

All four (build/typecheck/lint/test) run in CI (`.github/workflows/ci.yml`) on every push/PR to `main`, along with a check that `dist/` is actually up to date with `src/` (a build whose `dist/` diff wasn't committed fails CI rather than shipping stale output).

## Testing

`npm test` runs two things:

1. **`PlatformFeatureShowcase.test.tsx`** — targeted behavior tests for the one organism with real interactive state (keyboard arrow-key navigation, roving `tabindex`, `aria-controls`/`aria-labelledby` linkage). This is a regression test for the keyboard-focus bug the WCAG audit found — see `AUDIT.md` section 6.
2. **`src/a11y.test.tsx`** — an automated accessibility guardrail: it dynamically imports every `.stories.tsx` file in the package (36 files, each with one or more real, already-documented variants — no invented content) and runs `axe-core` against every rendered story. This turns the manual WCAG audit into a permanent CI check instead of a one-time pass. Two known, documented exceptions exist (see `KNOWN_LIMITATIONS` in that file) for cases where "fixing" the finding would mean inventing content the source never had — most notably the bare `Checkbox` atom, which the source itself never gave a label outside of `ConsentCheckboxField`.

Built with Vitest + React Testing Library + `vitest-axe`, running in `jsdom`.

`dist/` is committed to this repo. This package is consumed elsewhere as a plain
GitHub dependency (`github:autopaylab/landing-design-system#main`, or a tagged
version like `#v0.2.0` — see "Releases" in `CONTRIBUTING.md`) rather than
published to npm, and installers of a git dependency get no build step by
default — an earlier version relied on an npm `prepare` script to rebuild on
install, which meant every consuming install (including CI) had to fetch this
package's own devDependencies and run `tsup` from scratch, a slow, fragile
step to depend on in a production build. Shipping the built output directly
means installing this package is a plain file copy, same as any npm-published
package. **After changing anything under `src/`, run `npm run build` and
commit the resulting `dist/` changes in the same commit.**

This package is deliberately **not** published to npm or GitHub Packages —
`"private": true` in `package.json` enforces that. Only GitHub collaborators
explicitly given access to this repo can consume it at all, which is a real
decision, not an oversight (a public registry would make it installable by
anyone, which isn't wanted here). It still gets real semver versions and a
changelog via [Changesets](https://github.com/changesets/changesets) — see
`CONTRIBUTING.md` for how a release is cut.

Storybook (10.6, `@storybook/react-vite`) runs directly on the same `src/**/*.stories.tsx` files used by the a11y test suite — `npm run storybook` for the dev server, `npm run build-storybook` for a static build (output: `storybook-static/`, gitignored). Tailwind v4 (`@tailwindcss/postcss`) is wired up via `postcss.config.cjs` + `.storybook/preview.css`'s `@import "tailwindcss";`; the `@config "./tailwind.config.ts";` directive there points Tailwind at `.storybook/tailwind.config.ts` — a dev-only override of the package's own exported `tailwind.config.ts` (which targets consumers' `dist/`, not `src/`) using the same v3-style `content`/`theme.extend` shape, which v4 still fully supports via `@config`. `.storybook/main.ts`'s `viteFinal` also adds the `@/*` alias (mirroring `vitest.config.ts`) and forces `react`/`react-dom` into `optimizeDeps` — both needed for Storybook's own Vite pipeline, not required by consumers.

Every push/PR to `main` also publishes the built Storybook to [Chromatic](https://www.chromatic.com/builds?appId=6aa104b411b5b49179275bdc) (the `chromatic` CI job, gated on the `CHROMATIC_PROJECT_TOKEN` repo secret) — a visual, browsable catalog of every story, and the foundation for visual regression testing if that's added later.

## Known limitations / not yet harmonized with Autopay Design System 2.0

See [`AUDIT.md`](./AUDIT.md) section 5 for full detail. Summary:

1. **Two products are mixed in the source page** — English payments-platform copy plus a second, unrelated product line's content in a different language (`HeroImageOverlay`, `FourStepsSection`, `PromoCtaSection`). Extracted as real, working organisms with fictional placeholder copy; needs a product decision before shipping together again.
2. **35 shadcn/ui primitives existed in the source; only `Accordion` was ever used** — the rest were not ported (would have been inventing usage that doesn't exist).
3. **Button/Input/Label each had two competing visual systems** in the source (a real, rendered one and an unused, more "complete" `cva`/Radix one). Merged into one atom each, matching what actually renders; the unused alternates are documented, not silently dropped.
4. **`--lime` is a raw hex value** while every other color token is OKLCH — an authoring inconsistency carried through into `tokens/` as-is.
5. **Two competing "Industries" section layouts** (`IndustriesStackedSection`, `IndustriesGridSection`) over identical data — likely an unresolved A/B exploration; both extracted, needs a decision on which one ships.
6. **The contact form is uncontrolled and non-functional** in the source (`e.preventDefault()`, no real validation/submission) — extracted as-is; `ContactSection`'s `onSubmit` prop is where real logic should be wired in.
7. **Ad hoc color literals** (`text-[oklch(0.6_0.22_255)]`, etc.) are used directly in several organisms rather than semantic tokens — a token-mapping pass is needed before this can be called "on brand".
8. **No brand color/type/spacing replacement has been applied anywhere in this package.** That is the explicit scope of the *next* pass, once Autopay Design System 2.0 tokens are available.
