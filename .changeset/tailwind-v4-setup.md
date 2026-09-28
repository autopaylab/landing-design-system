---
"@autopaylab/landing-design-system": minor
---

Add a working Tailwind CSS v4 setup for consumers: `@autopaylab/landing-design-system/tailwind.css` (tokens, fonts, `@theme` mapping and an `@source` for the package's own `dist/`). Replaces the README's `import base from "@autopaylab/landing-design-system/tailwind.config"`, which never resolved (`ERR_PACKAGE_PATH_NOT_EXPORTED` — the config was neither exported nor shipped).

**Breaking:** peer dependency is now `tailwindcss >=4.0.0` (was `>=3.4.0`). Tailwind v3 is no longer supported.
