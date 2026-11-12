import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HeroVideoSplit } from "./HeroVideoSplit";

const props = { title: "Title", subtitle: "Subtitle", ctaLabel: "Join", ctaHref: "#form" };

describe("HeroVideoSplit", () => {
  it("renders the title as the page h1 by default, as extracted", () => {
    render(<HeroVideoSplit {...props} />);
    expect(screen.getByRole("heading", { level: 1, name: "Title" })).toBeInTheDocument();
  });

  it("renders an h2 when used further down a page", () => {
    render(<HeroVideoSplit headingLevel="h2" {...props} />);
    expect(screen.getByRole("heading", { level: 2, name: "Title" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { level: 1 })).toBeNull();
  });

  // jsdom has no layout, so this checks the two CSS rules that keep a long label inside a narrow column:
  // a single track that can shrink below its content (minmax(0, 1fr)) and a CTA that may wrap.
  it("lets a long CTA label wrap instead of widening the mobile grid", () => {
    render(<HeroVideoSplit {...props} ctaLabel="Join the PayTalk co-creation programme" />);
    const cta = screen.getByRole("link", { name: "Join the PayTalk co-creation programme" });
    expect(cta.className).toContain("whitespace-normal");
    expect(cta.className).not.toContain("whitespace-nowrap");
    expect(cta.closest(".grid")?.className).toContain("grid-cols-1");
  });
});
