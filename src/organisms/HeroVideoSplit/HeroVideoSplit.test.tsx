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
});
