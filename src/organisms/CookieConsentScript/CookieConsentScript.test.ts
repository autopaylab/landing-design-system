import { describe, expect, it, vi } from "vitest";

import { buildCookieConsentScript } from "./CookieConsentScript";

describe("buildCookieConsentScript locale", () => {
  it("writes an explicit locale straight into cmp_setlang without reading localStorage", () => {
    const script = buildCookieConsentScript({ cmpCdid: "test", locale: "pl" });
    expect(script).toContain('window.cmp_setlang = "PL";');
    expect(script).not.toContain("localStorage.getItem");
  });

  it("maps en to EN", () => {
    expect(buildCookieConsentScript({ cmpCdid: "test", locale: "en" })).toContain('window.cmp_setlang = "EN";');
  });

  it("keeps reading the locale from localStorage when no locale is given", () => {
    const script = buildCookieConsentScript({ cmpCdid: "test", localeStorageKey: "my-key" });
    expect(script).toContain('window.localStorage.getItem("my-key")');
  });
});

describe("buildCookieConsentScript cdid", () => {
  it("loads the standard Autopay banner by default without a console warning", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const script = buildCookieConsentScript();
    expect(script).toContain('window.cmp_cdid="136af463a10ba"');
    expect(warn).not.toHaveBeenCalled();
    warn.mockRestore();
  });

  it("loads another banner when a page is given its own cdid", () => {
    expect(buildCookieConsentScript({ cmpCdid: "abc123" })).toContain('window.cmp_cdid="abc123"');
  });
});
