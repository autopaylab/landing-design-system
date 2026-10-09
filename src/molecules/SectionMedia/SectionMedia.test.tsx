import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SectionMedia } from "./SectionMedia";

describe("SectionMedia", () => {
  it("renders nothing without video or image", () => {
    const { container } = render(<SectionMedia caption="Demo" />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders the image with its alt text and a visible caption", () => {
    render(<SectionMedia image={{ src: "/still.svg", alt: "Conversation screen" }} caption="Visualisation" />);
    expect(screen.getByRole("img", { name: "Conversation screen" })).toHaveAttribute("src", "/still.svg");
    expect(screen.getByRole("figure")).toHaveTextContent("Visualisation");
  });

  it("prefers the video over the image", () => {
    const { container } = render(<SectionMedia videoSrc="/demo.webm" image={{ src: "/still.svg", alt: "Still" }} />);
    expect(container.querySelector("video")).toHaveAttribute("src", "/demo.webm");
    expect(screen.queryByRole("img")).toBeNull();
  });

  it("adds native controls only when asked, so the loop can be paused", () => {
    const { container, rerender } = render(<SectionMedia videoSrc="/demo.webm" />);
    expect(container.querySelector("video")).not.toHaveAttribute("controls");
    rerender(<SectionMedia videoSrc="/demo.webm" showVideoControls />);
    expect(container.querySelector("video")).toHaveAttribute("controls");
  });

  it("gives the video a poster and an accessible name describing it", () => {
    render(<SectionMedia videoSrc="/demo.mp4" videoPoster="/demo.webp" videoLabel="A purchase made in a conversation" />);
    const video = screen.getByLabelText("A purchase made in a conversation");
    expect(video.tagName).toBe("VIDEO");
    expect(video).toHaveAttribute("poster", "/demo.webp");
  });
});
