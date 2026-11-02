import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { pageContainer } from "./page-container";

const organismsDir = join(__dirname, "..", "organisms");
const sources = readdirSync(organismsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map(({ name }) => ({
  name,
  source: readFileSync(join(organismsDir, name, `${name}.tsx`), "utf8"),
}));

/** Full-bleed or wrapper-less by design: they keep their own width (see page-container.ts). */
const OWN_WIDTH = new Set(["HeroImageOverlay", "PromoCtaSection", "Footer", "PlatformFeatureShowcase", "CookieConsentScript"]);

describe("pageContainer", () => {
  it("gives autopay.pl's text column (1116 / 1296 px) inside a fixed 40 px padding", () => {
    expect(pageContainer).toContain("md:px-10");
    expect(pageContainer).toContain("min-[1200px]:max-w-[1196px]"); // 1116 + 2 x 40
    expect(pageContainer).toContain("min-[1400px]:max-w-[1376px]"); // 1296 + 2 x 40
    expect(pageContainer).toMatch(/(^| )px-6( |$)/);
  });

  it("does not change the padding at a min-[…] breakpoint, which Tailwind would order before md:", () => {
    expect(pageContainer).not.toMatch(/min-\[\d+px\]:px-/);
  });

  it("is the only content width in the organisms", () => {
    const ownWidths = sources.filter(({ name, source }) => !OWN_WIDTH.has(name) && /max-w-\[(1280|1600)px\]/.test(source));
    expect(ownWidths.map((s) => s.name)).toEqual([]);
  });

  it("is used by every section organism and the Navbar", () => {
    const missing = sources.filter(({ name, source }) => !OWN_WIDTH.has(name) && !source.includes("pageContainer"));
    expect(missing.map((s) => s.name)).toEqual([]);
  });
});
