/// <reference types="node" />
import { readFileSync } from "node:fs";
import config from "../../tailwind.config";

/**
 * The theme exists twice: tailwind.config.ts (v3-style, drives Storybook via
 * `@config`) and tailwind.css (v4 `@theme`, what consumers import). Nothing
 * else keeps them in sync, so a token added to one and not the other would
 * look fine in Storybook and silently produce no class in a consuming app.
 */
const tailwindCss = readFileSync(`${import.meta.dirname}/tailwind.css`, "utf8");
const extend = config.theme!.extend!;

describe("tailwind.css matches tailwind.config.ts", () => {
  it.each(Object.entries(extend.colors as Record<string, string>))("color %s", (name, value) => {
    expect(tailwindCss).toContain(`--color-${name}: ${value};`);
  });

  it.each(Object.entries(extend.borderRadius as Record<string, string>))("radius %s", (name, value) => {
    expect(tailwindCss).toContain(`--radius-${name}: ${value};`);
  });

  it.each(Object.entries(extend.fontFamily as Record<string, string[]>))("font %s", (name, families) => {
    const cssValue = families.map((family) => (family.includes(" ") ? `"${family}"` : family)).join(", ");
    expect(tailwindCss).toContain(`--font-${name}: ${cssValue};`);
  });

  it.each(Object.entries(extend.fontSize as Record<string, [string, Record<string, string>]>))(
    "heading size %s",
    (name, [fontSize, { lineHeight, letterSpacing }]) => {
      const utility = tailwindCss.match(new RegExp(`@utility text-${name} \\{([^}]*)\\}`))?.[1];
      expect(utility).toBeDefined();
      expect(utility).toContain(`font-size: ${fontSize};`);
      expect(utility).toContain(`line-height: ${lineHeight};`);
      expect(utility).toContain(`letter-spacing: ${letterSpacing};`);
    },
  );

  it("scans the package's own compiled components", () => {
    expect(tailwindCss).toMatch(/@source "\.\/\*\*\/\*\.js";/);
  });
});
