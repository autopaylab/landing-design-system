import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Navbar, type NavItem } from "./Navbar";

const navItems: NavItem[] = [
  { label: "Platform", href: "#platform" },
  { label: "Security", href: "#security" },
];

const baseProps = {
  logoSrc: "/logo.svg",
  logoAlt: "Autopay",
  navItems,
  languageLabel: "🇬🇧",
};

describe("Navbar mobile menu", () => {
  it("is closed by default and the toggle exposes aria-expanded=false", () => {
    render(<Navbar {...baseProps} />);
    const toggle = screen.getByRole("button", { name: "Open menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryAllByText("Platform")).toHaveLength(1);
  });

  it("opens the drawer on click, exposing the nav items a second time and flipping aria-expanded", async () => {
    const user = userEvent.setup();
    render(<Navbar {...baseProps} />);
    await user.click(screen.getByRole("button", { name: "Open menu" }));

    const toggle = screen.getByRole("button", { name: "Close menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getAllByText("Platform")).toHaveLength(2);
    expect(toggle).toHaveAttribute("aria-controls", screen.getAllByText("Platform")[1].closest("nav")!.id);
  });

  it("closes the drawer when a nav link inside it is clicked", async () => {
    const user = userEvent.setup();
    render(<Navbar {...baseProps} />);
    await user.click(screen.getByRole("button", { name: "Open menu" }));
    const links = screen.getAllByText("Platform");
    await user.click(links[links.length - 1]);

    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryAllByText("Platform")).toHaveLength(1);
  });
});

describe("Navbar single call to action", () => {
  const singleCtaProps = {
    logoSrc: "/logo.svg",
    logoAlt: "Product",
    navItems: [],
    showAuthButtons: false,
    cta: { label: "Apply", href: "#apply" },
    languageLink: { label: "EN", href: "/en", hrefLang: "en", lang: "en", srLabel: "(English version)" },
  };

  it("renders the CTA as a link and hides the Login/Sign In pair", () => {
    render(<Navbar {...singleCtaProps} />);
    expect(screen.getByRole("link", { name: "Apply" })).toHaveAttribute("href", "#apply");
    expect(screen.queryByRole("button", { name: "Login" })).toBeNull();
    expect(screen.queryByRole("button", { name: "Sign In" })).toBeNull();
  });

  it("renders the language switch as a link with hreflang, whose name starts with the visible label", () => {
    render(<Navbar {...singleCtaProps} />);
    const link = screen.getByRole("link", { name: /^EN\s*\(English version\)$/ });
    expect(link).toHaveAttribute("href", "/en");
    expect(link).toHaveAttribute("hreflang", "en");
    expect(link).toHaveAttribute("lang", "en");
  });

  it("does not render a mobile menu toggle when the menu would be empty", () => {
    render(<Navbar {...singleCtaProps} />);
    expect(screen.queryByRole("button", { name: "Open menu" })).toBeNull();
  });

  it("keeps the Login/Sign In pair by default", () => {
    render(<Navbar {...baseProps} />);
    expect(screen.getAllByRole("button", { name: "Login" }).length).toBeGreaterThan(0);
  });
});
