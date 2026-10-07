import { describe, expect, it } from "vitest";

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
