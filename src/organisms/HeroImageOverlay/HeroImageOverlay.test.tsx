import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HeroImageOverlay } from "./HeroImageOverlay";

const props = {
  image: "/hero.jpg",
  title: "Title",
  subtitle: "Subtitle",
  primaryCta: { label: "Primary", href: "#form" },
  secondaryCta: { label: "Secondary", href: "#faq" },
};

const background = (container: HTMLElement) => container.querySelector("img")!;

describe("HeroImageOverlay", () => {
  it("renders an h2 with a lazily loaded background by default, as extracted", () => {
    const { container } = render(<HeroImageOverlay layout="stacked" {...props} />);
    expect(screen.getByRole("heading", { level: 2, name: "Title" })).toBeInTheDocument();
    expect(background(container)).toHaveAttribute("loading", "lazy");
  });

  it("renders the title as the page h1 when it opens the page", () => {
    render(<HeroImageOverlay layout="stacked" headingLevel="h1" {...props} />);
    expect(screen.getByRole("heading", { level: 1, name: "Title" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { level: 2 })).toBeNull();
  });

  it("applies the heading level in the split layout too", () => {
    render(<HeroImageOverlay layout="split" headingLevel="h1" {...props} />);
    expect(screen.getByRole("heading", { level: 1, name: "Title" })).toBeInTheDocument();
  });

  it("loads the background eagerly when asked to", () => {
    const { container } = render(<HeroImageOverlay layout="stacked" imageLoading="eager" {...props} />);
    expect(background(container)).toHaveAttribute("loading", "eager");
  });
});
