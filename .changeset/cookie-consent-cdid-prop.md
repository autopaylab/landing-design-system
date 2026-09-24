---
"@autopaylab/landing-design-system": minor
---

`CookieConsentScript`/`buildCookieConsentScript` accept an optional `cmpCdid` prop for pointing the banner at a ConsentManager account other than autopaylab.com's. Defaults to autopaylab.com's existing cdid, so nothing changes for current consumers; leaving it at the default logs a one-time console warning as a reminder to verify the right cdid before reusing this component on a different domain.
