import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Link } from "@/atoms/Link";

import { externalLinkProps, isExternalHref } from "./external-link";

describe("isExternalHref", () => {
  it("treats absolute http(s) addresses as external", () => {
    expect(isExternalHref("https://autopay.pl/polityka-prywatnosci")).toBe(true);
    expect(isExternalHref("http://example.com")).toBe(true);
    expect(isExternalHref("  HTTPS://AUTOPAY.PL ")).toBe(true);
  });

  it("keeps anchors, paths and other schemes on the page", () => {
    for (const href of ["#form", "/", "/en", "mailto:kontakt@autopay.pl", "tel:+48123", "", undefined]) {
      expect(isExternalHref(href)).toBe(false);
    }
  });
});

describe("externalLinkProps", () => {
  it("opens an external address in a new tab without access back to this page", () => {
    expect(externalLinkProps("https://autopay.pl")).toEqual({ target: "_blank", rel: "noopener noreferrer" });
  });

  it("adds nothing for an anchor", () => {
    expect(externalLinkProps("#form")).toEqual({});
  });

  it("lets the caller override the detection", () => {
    expect(externalLinkProps("https://autopay.pl", false)).toEqual({});
    expect(externalLinkProps("/regulamin", true)).toEqual({ target: "_blank", rel: "noopener noreferrer" });
  });
});

describe("Link", () => {
  it("opens an external href in a new tab", () => {
    render(<Link href="https://autopay.pl/polityka-prywatnosci">Polityka prywatności</Link>);
    const link = screen.getByRole("link", { name: "Polityka prywatności" });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("keeps an anchor in the same tab", () => {
    render(<Link href="#form">Formularz</Link>);
    const link = screen.getByRole("link", { name: "Formularz" });
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  });

  it("respects an explicit target", () => {
    render(
      <Link href="https://autopay.pl" target="_self">
        Autopay
      </Link>,
    );
    const link = screen.getByRole("link", { name: "Autopay" });
    expect(link).toHaveAttribute("target", "_self");
    expect(link).not.toHaveAttribute("rel");
  });
});
