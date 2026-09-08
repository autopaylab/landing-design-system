import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { PlatformFeatureShowcase, type PlatformFeature } from "./PlatformFeatureShowcase";

const features: PlatformFeature[] = [
  { key: "a", title: "Feature A", desc: "Desc A", video: "/a.webm" },
  { key: "b", title: "Feature B", desc: "Desc B", video: "/b.webm" },
  { key: "c", title: "Feature C", desc: "Desc C", video: "/c.webm" },
];

describe("PlatformFeatureShowcase", () => {
  it("links each tab to its panel via aria-controls/aria-labelledby", () => {
    render(<PlatformFeatureShowcase features={features} />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(features.length);
    for (const tab of tabs) {
      const panelId = tab.getAttribute("aria-controls");
      expect(panelId).toBeTruthy();
      const panel = document.getElementById(panelId!);
      expect(panel).not.toBeNull();
      expect(panel).toHaveAttribute("role", "tabpanel");
      expect(panel).toHaveAttribute("aria-labelledby", tab.id);
    }
  });

  it("starts with the first feature active and its tabIndex 0, the rest -1", () => {
    render(<PlatformFeatureShowcase features={features} />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    expect(tabs[0]).toHaveAttribute("tabindex", "0");
    expect(tabs[1]).toHaveAttribute("aria-selected", "false");
    expect(tabs[1]).toHaveAttribute("tabindex", "-1");
  });

  it("moves both selection and real DOM focus on arrow-key navigation (regression test for the keyboard-focus bug found in the WCAG audit)", async () => {
    const user = userEvent.setup();
    render(<PlatformFeatureShowcase features={features} />);
    const tabs = screen.getAllByRole("tab");

    tabs[0].focus();
    expect(tabs[0]).toHaveFocus();

    await user.keyboard("{ArrowDown}");

    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    expect(tabs[1]).toHaveAttribute("tabindex", "0");
    expect(tabs[0]).toHaveAttribute("aria-selected", "false");
    expect(tabs[0]).toHaveAttribute("tabindex", "-1");
    // The actual bug: DOM focus has to follow the roving tabindex, or a
    // keyboard user's focus is stranded on a button that just dropped out
    // of the tab order.
    expect(tabs[1]).toHaveFocus();
  });

  it("wraps around with ArrowUp from the first tab to the last", async () => {
    const user = userEvent.setup();
    render(<PlatformFeatureShowcase features={features} />);
    const tabs = screen.getAllByRole("tab");

    tabs[0].focus();
    await user.keyboard("{ArrowUp}");

    expect(tabs[tabs.length - 1]).toHaveAttribute("aria-selected", "true");
    expect(tabs[tabs.length - 1]).toHaveFocus();
  });
});
