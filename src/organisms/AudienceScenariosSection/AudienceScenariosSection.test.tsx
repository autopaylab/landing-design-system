import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AudienceScenariosSection } from "./AudienceScenariosSection";

const props = {
  heading: "Heading",
  description: "Intro",
  scenarios: [
    { title: "First", description: "First text" },
    { title: "Second", description: "Second text" },
  ],
};

describe("AudienceScenariosSection", () => {
  it("renders plain white cards with no surface by default", () => {
    const { container } = render(<AudienceScenariosSection {...props} />);
    const section = container.querySelector("section")!;
    expect(section.firstElementChild?.className).toBe("text-center");
    expect(screen.getByText("First text").parentElement?.className).toBe("rounded-3xl border border-border bg-card p-8 shadow-sm");
  });

  it("wraps heading and cards in a light blue surface with tone tinted", () => {
    const { container } = render(<AudienceScenariosSection {...props} tone="tinted" />);
    const surface = container.querySelector("section")!.firstElementChild!;
    expect(surface.className).toContain("bg-[oklch(0.97_0.02_240)]");
    expect(surface).toContainElement(screen.getByRole("heading", { level: 2, name: "Heading" }));
    expect(surface).toContainElement(screen.getByText("Second text"));
    expect(screen.getByText("First text").parentElement?.className).toContain("bg-card");
  });

  it("uses the dark surface with light text and translucent cards with tone dark", () => {
    const { container } = render(<AudienceScenariosSection {...props} tone="dark" />);
    const surface = container.querySelector("section")!.firstElementChild!;
    expect(surface.className).toContain("bg-foreground");
    expect(surface.className).toContain("text-background");
    expect(screen.getByText("Intro").className).toContain("text-background/70");
    expect(screen.getByText("First text").parentElement?.className).toContain("bg-background/10");
    expect(screen.getByRole("heading", { level: 3, name: "First" }).className).toContain("text-lime");
  });
});
