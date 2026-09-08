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
