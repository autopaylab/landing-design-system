import { render } from "@testing-library/react";
import * as React from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";

/**
 * Automated accessibility guardrail: runs axe against every story fixture in
 * the package (real variants already documented for each component, not
 * invented content) so a WCAG regression fails CI instead of waiting for the
 * next manual audit. See AUDIT.md section 6 for the manual pass this
 * automates the follow-up checks for -- it caught real bugs (a keyboard-focus
 * bug and missing ARIA linkage in PlatformFeatureShowcase), which is exactly
 * the class of issue a one-off audit can't guard against on its own.
 */

interface StoryModule {
  default: { component?: React.ComponentType<unknown>; title?: string };
  [exportName: string]: unknown;
}

const storyModules = import.meta.glob<StoryModule>("./**/*.stories.tsx", { eager: true });

/**
 * Documented, reviewable exceptions -- not silent skips. Each one is a case
 * where "fixing" the axe finding would mean inventing content this package
 * has no basis for, which AUDIT.md's own rules forbid (see CONTRIBUTING.md,
 * "no hallucinated props, variants, or copy").
 */
const KNOWN_LIMITATIONS: Record<string, string> = {
  "Atoms/Checkbox / Default":
    "The source page used a bare, unstyled native checkbox with no label of its own (AUDIT.md, Atoms classification note on Checkbox) -- it only ever appears correctly labeled when composed inside ConsentCheckboxField. Standalone, it's genuinely unlabeled by design; inventing a label here would misrepresent the source.",
  "Atoms/Checkbox / Checked":
    "Same as Atoms/Checkbox / Default -- the bare atom has no label in isolation.",
};

interface StoryCase {
  suiteName: string;
  storyName: string;
  element: React.ReactElement;
}

const cases: StoryCase[] = [];

for (const [path, mod] of Object.entries(storyModules)) {
  const meta = mod.default;
  const Component = meta?.component;
  if (!Component) continue;

  for (const [exportName, value] of Object.entries(mod)) {
    if (exportName === "default") continue;
    const story = value as { args?: Record<string, unknown>; render?: (args: never) => React.ReactElement };
    const args = story.args ?? {};
    const element = story.render ? story.render(args as never) : React.createElement(Component, args);
    cases.push({ suiteName: meta.title ?? path, storyName: exportName, element });
  }
}

describe("accessibility (axe) across every story fixture", () => {
  it("found at least one story to test", () => {
    expect(cases.length).toBeGreaterThan(0);
  });

  for (const { suiteName, storyName, element } of cases) {
    const caseName = `${suiteName} / ${storyName}`;
    const limitation = KNOWN_LIMITATIONS[caseName];
    const testTitle = limitation ? `${caseName} (known limitation, see reason)` : `${caseName} has no axe violations`;

    it(testTitle, async () => {
      const { container } = render(element);
      const results = await axe(container);
      const violationSummary = results.violations.map((v) => `${v.id}: ${v.help}`).join("; ") || "none";
      if (limitation) {
        // Documented exception, not a silent skip: this still runs axe and
        // will fail loudly if the violation count ever changes shape, it
        // just doesn't demand zero violations for this specific known case.
        expect(results.violations.length, `Expected exactly the known, documented limitation. Reason: ${limitation}. Found: ${violationSummary}`).toBe(1);
        return;
      }
      expect(results.violations, `axe violations: ${violationSummary}`).toHaveLength(0);
    });
  }
});
