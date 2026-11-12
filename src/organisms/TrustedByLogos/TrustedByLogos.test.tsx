import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TrustedByLogos } from "./TrustedByLogos";

const logos = [
  { src: "/a.svg", alt: "Stacked", width: 160, height: 96 },
  { src: "/b.svg", alt: "Wide", width: 320 },
];

describe("TrustedByLogos", () => {
  it("mutes logos by default, as extracted", () => {
    render(<TrustedByLogos heading="Partners" logos={logos} />);
    expect(screen.getByRole("img", { name: "Wide" }).style.filter).toBe("grayscale(100%) opacity(0.65)");
  });

  it("shows logos as supplied with logoTone original", () => {
    render(<TrustedByLogos heading="Partners" logos={logos} logoTone="original" />);
    expect(screen.getByRole("img", { name: "Wide" }).style.filter).toBe("");
  });

  it("applies a per-logo height instead of the row default", () => {
    render(<TrustedByLogos heading="Partners" logos={logos} />);
    const stacked = screen.getByRole("img", { name: "Stacked" });
    expect(stacked.style.height).toBe("96px");
    expect(stacked.className).not.toContain("h-8");
    expect(screen.getByRole("img", { name: "Wide" }).className).toContain("h-8");
  });

  it("renders the description under the heading", () => {
    render(<TrustedByLogos heading="Partners" description="Intro text" logos={logos} />);
    expect(screen.getByText("Intro text")).toBeInTheDocument();
  });

  it("keeps the stacked markup by default", () => {
    const { container } = render(<TrustedByLogos heading="Partners" description="Intro text" logos={logos} />);
    const section = container.querySelector("section")!;
    expect(section.className).not.toContain("md:grid");
    expect(section.firstElementChild?.tagName).toBe("H2");
    expect(screen.getByRole("heading", { name: "Partners" }).className).toBe("text-center font-display text-h3");
  });

  it("puts heading and description beside the logos with layout split", () => {
    const { container } = render(
      <TrustedByLogos heading="Partners" description="Intro text" logos={logos} layout="split" />,
    );
    const section = container.querySelector("section")!;
    expect(section.className).toContain("md:grid-cols-2");
    const [textColumn, logoColumn] = Array.from(section.children);
    expect(textColumn).toContainElement(screen.getByRole("heading", { name: "Partners" }));
    expect(textColumn).toContainElement(screen.getByText("Intro text"));
    expect(logoColumn).toContainElement(screen.getByRole("img", { name: "Wide" }));
    expect(logoColumn.className).toContain("md:justify-end");
  });

  it("keeps per-logo height and maxWidth with layout split", () => {
    render(<TrustedByLogos heading="Partners" logos={logos} layout="split" />);
    const stacked = screen.getByRole("img", { name: "Stacked" });
    expect(stacked.style.height).toBe("96px");
    expect(stacked.style.maxWidth).toBe("160px");
  });
});
