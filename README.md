# @autopaylab/landing-design-system

A standalone, Atomic Design component package extracted from [`autopaylab/landing-page-kit`](https://github.com/autopaylab/landing-page-kit) — a single long-scroll Lovable-generated landing page.

**This is a first-pass extraction, not a rebrand.** Autopay's brand design tokens (colors, type scale, spacing) have **not** been applied — everything here documents what actually existed in the source, as-is. See [`AUDIT.md`](./AUDIT.md) for the full inventory, every deduplication decision, and the classification rationale for anything ambiguous. See "Known limitations" below for what still needs a harmonization pass against Autopay Design System 2.0.

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
```

`dist/` is committed to this repo. This package is consumed elsewhere as a plain
GitHub dependency (`github:autopaylab/landing-design-system#main`) rather than
published to npm, and installers of a git dependency get no build step by
default — an earlier version relied on an npm `prepare` script to rebuild on
install, which meant every consuming install (including CI) had to fetch this
package's own devDependencies and run `tsup` from scratch, a slow, fragile
step to depend on in a production build. Shipping the built output directly
means installing this package is a plain file copy, same as any npm-published
package. **After changing anything under `src/`, run `npm run build` and
commit the resulting `dist/` changes in the same commit.**

Story files are CSF3-compatible; a minimal `.storybook/main.ts` is included but Storybook itself has not been installed or run as part of this package's own tooling — run `npx storybook init` (or add `@storybook/react-vite` to a consumer app) if you want the interactive dev server. Stated as uncertain rather than claimed working, per the audit's own "verify before implementing" rule.

## Known limitations / not yet harmonized with Autopay Design System 2.0

See [`AUDIT.md`](./AUDIT.md) section 5 for full detail. Summary:

1. **Two products are mixed in the source page** — English payments-platform copy plus Polish "Autopay Calendar" booking-SaaS content (`HeroImageOverlay`, `FourStepsSection`, `CalendarCtaSection`). Extracted as real, working organisms; needs a product decision before shipping together again.
2. **35 shadcn/ui primitives existed in the source; only `Accordion` was ever used** — the rest were not ported (would have been inventing usage that doesn't exist).
3. **Button/Input/Label each had two competing visual systems** in the source (a real, rendered one and an unused, more "complete" `cva`/Radix one). Merged into one atom each, matching what actually renders; the unused alternates are documented, not silently dropped.
4. **`--lime` is a raw hex value** while every other color token is OKLCH — an authoring inconsistency carried through into `tokens/` as-is.
5. **Two competing "Industries" section layouts** (`IndustriesStackedSection`, `IndustriesGridSection`) over identical data — likely an unresolved A/B exploration; both extracted, needs a decision on which one ships.
6. **The contact form is uncontrolled and non-functional** in the source (`e.preventDefault()`, no real validation/submission) — extracted as-is; `ContactSection`'s `onSubmit` prop is where real logic should be wired in.
7. **Ad hoc color literals** (`text-[oklch(0.6_0.22_255)]`, etc.) are used directly in several organisms rather than semantic tokens — a token-mapping pass is needed before this can be called "on brand".
8. **No brand color/type/spacing replacement has been applied anywhere in this package.** That is the explicit scope of the *next* pass, once Autopay Design System 2.0 tokens are available.
