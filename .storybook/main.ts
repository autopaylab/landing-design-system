import type { StorybookConfig } from "@storybook/react-vite";

/**
 * Minimal Storybook config for the CSF3 `.stories.tsx` files in src/.
 * Not installed/run as part of this package's own build or CI — run
 * `npx storybook init` in a consumer project (or here) if you want the
 * dev-server/build commands; the story files themselves are valid CSF3
 * regardless. See README "Known limitations".
 */
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;
