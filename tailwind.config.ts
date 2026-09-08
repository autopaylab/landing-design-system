import type { Config } from "tailwindcss";

/**
 * Base Tailwind config for consumers of @autopaylab/landing-design-system.
 * Extend this from a host app's tailwind.config.ts:
 *
 *   import base from "@autopaylab/landing-design-system/tailwind.config";
 *   export default { ...base, content: [...base.content, "./app/**\/*.tsx"] };
 *
 * Colors below are the raw values observed in landing-page-kit's src/styles.css.
 * They are NOT Autopay Design System 2.0 brand tokens — see AUDIT.md.
 */
const config: Config = {
  content: ["./node_modules/@autopaylab/landing-design-system/dist/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Bricolage Grotesque", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Open Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ink: "var(--ink)",
        surface: "var(--surface)",
        "surface-muted": "var(--surface-muted)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        lime: "var(--lime)",
        "lime-foreground": "var(--lime-foreground)",
        banking: "var(--banking)",
        automotive: "var(--automotive)",
        insurance: "var(--insurance)",
        healthcare: "var(--healthcare)",
        retail: "var(--retail)",
        energy: "var(--energy)",
        telecom: "var(--telecom)",
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 6px)",
        "2xl": "calc(var(--radius) + 14px)",
        "3xl": "calc(var(--radius) + 22px)",
      },
    },
  },
  plugins: [],
};

export default config;
