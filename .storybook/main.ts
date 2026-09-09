import type { StorybookConfig } from "@storybook/react-vite";

/**
 * Storybook config for the CSF3 `.stories.tsx` files in src/.
 * Tailwind is wired via postcss.config.cjs + .storybook/preview.css,
 * scanning src/ directly (not dist/, which the package's own exported
 * tailwind.config.ts targets for consumers) -- see .storybook/tailwind.config.ts.
 */
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(viteConfig) {
    // Vite 8's dependency scanner doesn't pick up react/react-dom as
    // pre-bundle candidates here, leaving their CJS builds served as raw
    // ESM (no default export) -- forcing them into optimizeDeps fixes it.
    viteConfig.optimizeDeps = {
      ...viteConfig.optimizeDeps,
      include: [
        ...(viteConfig.optimizeDeps?.include ?? []),
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-dev-runtime",
      ],
    };
    // Mirrors vitest.config.ts's alias -- src/ uses the "@/*" tsconfig path,
    // which Storybook's own Vite config doesn't pick up automatically.
    viteConfig.resolve = {
      ...viteConfig.resolve,
      alias: {
        ...viteConfig.resolve?.alias,
        "@": `${import.meta.dirname}/../src`,
      },
    };
    return viteConfig;
  },
};

export default config;
