import { render } from "@testing-library/react";
import * as React from "react";
import { describe, expect, it } from "vitest";

/**
 * Every link to another page or site opens in a new tab, in every component. Renders each story fixture (as
 * `a11y.test.tsx` does) with every `...href`/`...Href` arg swapped for an absolute address, then checks every
 * anchor with an absolute http(s) href, so a new component with a plain `<a>` that forgets `externalLinkProps`
 * fails here instead of on a live landing page. (The fixtures themselves mostly link to `#`, which would test nothing.)
 */

function withExternalHrefs(value: unknown, key = ""): unknown {
  if (typeof value === "string") return /href$/i.test(key) ? `https://example.com/${key}` : value;
  if (Array.isArray(value)) return value.map((item) => withExternalHrefs(item));
  if (value && typeof value === "object" && !React.isValidElement(value)) {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, withExternalHrefs(v, k)]));
  }
  return value;
}

interface StoryModule {
  default: { component?: React.ComponentType<unknown>; title?: string };
  [exportName: string]: unknown;
}

const storyModules = import.meta.glob<StoryModule>("./**/*.stories.tsx", { eager: true });

/**
 * Deliberate same-tab links. The language switch moves the visitor to the same page in another language, so a new
 * tab would leave the old language open behind it.
 */
const SAME_TAB_BY_DESIGN = (anchor: HTMLAnchorElement) => anchor.hasAttribute("hreflang");

interface StoryCase {
  name: string;
  element: React.ReactElement;
}

const cases: StoryCase[] = [];
for (const [path, mod] of Object.entries(storyModules)) {
  const Component = mod.default?.component;
  if (!Component) continue;
  for (const [exportName, value] of Object.entries(mod)) {
    if (exportName === "default") continue;
    const story = value as { args?: Record<string, unknown>; render?: (args: never) => React.ReactElement };
    const args = withExternalHrefs({ ...(mod.default as { args?: object }).args, ...story.args }) as Record<string, unknown>;
    const element = story.render ? story.render(args as never) : React.createElement(Component, args);
    cases.push({ name: `${mod.default.title ?? path} / ${exportName}`, element });
  }
}

let checkedLinks = 0;

describe("external links open in a new tab", () => {
  it("found stories to check", () => {
    expect(cases.length).toBeGreaterThan(0);
  });

  for (const { name, element } of cases) {
    it(name, () => {
      const { container } = render(element);
      const external = [...container.querySelectorAll<HTMLAnchorElement>("a[href]")].filter(
        (a) => /^https?:\/\//i.test(a.getAttribute("href") ?? "") && !SAME_TAB_BY_DESIGN(a),
      );
      checkedLinks += external.length;
      const wrong = external
        .filter((a) => a.getAttribute("target") !== "_blank" || !/\bnoopener\b/.test(a.getAttribute("rel") ?? ""))
        .map((a) => a.getAttribute("href"));
      expect(wrong, "external links without target=_blank and rel=noopener").toEqual([]);
    });
  }

  it("actually checked links (the href swap reached the components)", () => {
    expect(checkedLinks).toBeGreaterThan(20);
  });
});
