# Contributing

This package was built by extracting real, rendered UI from `autopaylab/landing-page-kit` rather than by writing components from a spec. That origin shapes every rule below — the goal is to keep new work held to the same discipline, whether the next contributor is a person or an AI agent.

## The rule that matters most: no hallucinated props, variants, or copy

Every prop, variant, and default in this package traces back to something actually observed — either in the original source page, or in a real, stated requirement from a consuming project. If you're adding something that doesn't exist yet anywhere:

- Say so explicitly in a comment or in `AUDIT.md`, don't quietly invent it as if it were extracted.
- Prefer the smallest change that satisfies the real, current need over a speculative "might need this later" API.
- If you're building something a consuming project needed but this package didn't have (the pattern behind `Select`/`Textarea` originally missing here), that's fine — just say clearly in the PR description or commit message that it's new, not extracted.

## Atomic Design layers

- **Atoms** (`src/atoms/`): smallest indivisible pieces — `Button`, `Badge`, `Input`. No composition of other layers.
- **Molecules** (`src/molecules/`): small, reusable groups of atoms functioning as one unit — `FormField` (`Label` + `Input`), `IconCard`.
- **Organisms** (`src/organisms/`): larger, self-contained sections — `Navbar`, `FaqAccordionSection`. Can compose atoms and molecules.
- **Templates** (`src/templates/`): page-shaped layout skeletons with no hardcoded copy — everything comes in as props/children.

If a new component's tier is ambiguous, say so and make a reasoned call rather than guessing silently — see `AUDIT.md` section 3 ("Ambiguous calls") for the standard this package already holds itself to.

## Deduplication

If you notice two components (or two call sites of the same component) that are really the same visual/structural pattern with only content differing, merge them into one component with variant props instead of leaving duplicates. Write the merge decision down — what was merged, why, and what (if anything) was NOT silently normalized (e.g. a real inconsistency in the source that got preserved as a documented variant rather than "fixed" quietly). `AUDIT.md` section 2 has worked examples.

## File layout per component

```
src/<layer>/ComponentName/
  ComponentName.tsx           # the component
  ComponentName.stories.tsx   # CSF3 stories showing real variants — no invented content
  index.ts                    # re-exports the component + its prop types
```

Update the layer's barrel (`src/<layer>/index.ts`) to export the new component.

## Before every commit that touches `src/`

`dist/` is committed to this repo (see README — this package is installed as a plain git dependency, not published to npm, so there's no build step on install). Run:

```bash
npm run build
```

and commit the resulting `dist/` diff in the same commit as your `src/` change. A PR that changes `src/` without a matching `dist/` diff will fail CI.

## Checks that must pass

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

All four run in CI on every PR. `npm run lint` includes `eslint-plugin-jsx-a11y`; `npm test` includes an automated accessibility check (via `jest-axe`) against every component's story fixtures — this is deliberate. The WCAG audit in `AUDIT.md` section 6 found real bugs (a keyboard-focus bug in `PlatformFeatureShowcase`, missing ARIA linkage, unlabeled nav landmarks); the CI a11y check exists so issues like that get caught automatically instead of waiting for the next manual audit.

## Releases

This package is **not published to any registry** (npm or GitHub Packages) — it's deliberately kept installable only as a plain git dependency (`github:autopaylab/landing-design-system#<ref>`), so nobody outside GitHub collaborators explicitly granted access to this repo can pull it in. `package.json` has `"private": true` to make that a hard guard, not just a convention.

It still has real semantic versions and a changelog, via [Changesets](https://github.com/changesets/changesets), configured with `privatePackages: { version: true, tag: true }` specifically so it can version and tag without ever touching a registry:

1. **When making a user-facing change**, run `npm run changeset` and describe it (patch/minor/major, same as any semver decision) — same PR as the change itself.
2. **When cutting a release** (a maintainer decision, not automated): on `main`, run `npm run changeset:version` — this consumes every pending changeset, bumps `package.json`'s version, and updates `CHANGELOG.md`. Review and commit the result.
3. Run `npm run changeset:tag` to create the `v<version>` git tag locally, then `git push --tags`.
4. Consumers can now pin a specific version instead of always tracking `#main`: `github:autopaylab/landing-design-system#v0.2.0`.

Deliberately manual, not CI-automated: cutting a release is infrequent enough that a maintainer running three commands is simpler than maintaining a release workflow, and it avoids adding another CI secret for something this low-frequency.

## Tokens

Everything in `src/tokens/` is extracted verbatim from the source's actual CSS, not renamed or remapped to Autopay Design System 2.0 token names. Don't "fix" a token value or name to look more polished — if something looks wrong (see `AUDIT.md` section 4/5 for known issues like `--lime` being a raw hex value while everything else is OKLCH), flag it, don't silently correct it. The harmonization pass against Autopay DS 2.0 is explicitly out of scope until that work is scheduled.
