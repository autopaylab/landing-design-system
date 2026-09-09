import type { Config } from "tailwindcss";

import base from "../tailwind.config";

/**
 * Storybook-only override of the package's own exported tailwind.config.ts:
 * consumers' `content` points at this package's built dist/, which doesn't
 * exist yet in Storybook's own dev/build process -- point at src/ instead.
 */
const config: Config = {
  ...base,
  content: ["./src/**/*.{ts,tsx}"],
};

export default config;
