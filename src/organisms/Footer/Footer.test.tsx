import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Footer } from "./Footer";

const baseProps = {
  logoSrc: "/product.svg",
  logoAlt: "Product",
  tagline: "Tagline",
  address: "Address",
  legalText: "Legal",
};

describe("Footer", () => {
  it("renders no banner heading without bannerImage", () => {
    render(<Footer {...baseProps} navItems={[]} ctaHeading="Banner heading" />);
    expect(screen.queryByText("Banner heading")).toBeNull();
  });

  it("renders the banner when bannerImage is set", () => {
    render(<Footer {...baseProps} navItems={[]} bannerImage="/photo.jpg" ctaHeading="Banner heading" />);
    expect(screen.getByRole("heading", { name: "Banner heading" })).toBeInTheDocument();
  });

  it("renders an onClick-only nav item as a button and calls it", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Footer {...baseProps} navItems={[{ label: "Cookie settings", onClick }, { label: "Contact", href: "#c" }]} />);
    await user.click(screen.getByRole("button", { name: "Cookie settings" }));
    expect(onClick).toHaveBeenCalledOnce();
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "#c");
  });

  it("renders the secondary logo with its alt text", () => {
    render(<Footer {...baseProps} navItems={[]} secondaryLogoSrc="/autopay.svg" secondaryLogoAlt="Autopay" />);
    expect(screen.getByRole("img", { name: "Autopay" })).toBeInTheDocument();
  });
});
