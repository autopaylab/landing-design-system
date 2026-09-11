---
"@autopaylab/landing-design-system": minor
---

Add `CookieConsentScript` (organisms) — Autopay's production ConsentManager cookie-consent loader, ported byte-for-byte from autopaylab.com as a deliberate exception (not redesigned or restyled). Every new landing page should include it as the first child of `<body>`. Raises the `organisms` and root `size-limit` budgets (13→15KB, 14→16KB) to reflect the vendor script's real, non-optimizable weight.
