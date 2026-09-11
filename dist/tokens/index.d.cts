/**
 * Programmatic access to the raw tokens observed in landing-page-kit.
 * See ./tokens.css for the CSS custom properties, and AUDIT.md section 4
 * for provenance. Not Autopay Design System 2.0 tokens.
 */
declare const colorTokens: {
    readonly background: "oklch(0.985 0.003 60)";
    readonly foreground: "oklch(0.18 0.02 260)";
    readonly ink: "oklch(0.18 0.02 260)";
    readonly surface: "oklch(0.97 0.005 60)";
    readonly surfaceMuted: "oklch(0.94 0.006 250)";
    readonly card: "oklch(1 0 0)";
    readonly primary: "oklch(0.22 0.03 260)";
    readonly primaryForeground: "oklch(0.985 0.003 60)";
    readonly secondary: "oklch(0.94 0.006 250)";
    readonly muted: "oklch(0.94 0.006 250)";
    readonly mutedForeground: "oklch(0.45 0.015 260)";
    readonly accent: "oklch(0.93 0.012 240)";
    readonly destructive: "oklch(0.58 0.22 27)";
    readonly border: "oklch(0.9 0.008 250)";
    readonly input: "oklch(0.92 0.008 250)";
    readonly ring: "oklch(0.7 0.04 250)";
    /** Raw hex — inconsistent in representation with the rest of the palette
     * (OKLCH), but the value is correct: an exact match for Autopay DS2's
     * real "Pistachio 500". See AUDIT.md #6 and DS2-HARMONIZATION.md. */
    readonly lime: "#e6ffa0";
    readonly limeForeground: "oklch(0.18 0.02 260)";
    readonly banking: "oklch(0.85 0.12 235)";
    readonly automotive: "oklch(0.92 0.18 100)";
    readonly insurance: "oklch(0.82 0.1 295)";
    readonly healthcare: "oklch(0.88 0.1 155)";
    readonly retail: "oklch(0.88 0.08 20)";
    readonly energy: "oklch(0.78 0.14 35)";
    readonly telecom: "oklch(0.93 0.15 110)";
};
declare const fontTokens: {
    readonly display: "\"Bricolage Grotesque\", ui-sans-serif, system-ui, sans-serif";
    readonly sans: "\"Open Sans\", ui-sans-serif, system-ui, sans-serif";
};
declare const radiusTokens: {
    readonly base: "0.625rem";
    readonly sm: "calc(0.625rem - 4px)";
    readonly md: "calc(0.625rem - 2px)";
    readonly lg: "0.625rem";
    readonly xl: "calc(0.625rem + 6px)";
    readonly "2xl": "calc(0.625rem + 14px)";
    readonly "3xl": "calc(0.625rem + 22px)";
};
/**
 * Heading scale (h1-h6), mobile and desktop (>=768px, matching Tailwind's
 * `md` breakpoint) sizes in px, plus line-height and letter-spacing.
 * Sourced from Autopay Design System 2.0's typescale — see
 * DS2-HARMONIZATION.md "Typography sizes". Use the `text-h1`..`text-h6`
 * Tailwind utilities (tailwind.config.ts) in components; this export is
 * for consumers that need the raw numbers (e.g. a non-Tailwind context).
 */
declare const headingScale: {
    readonly h1: {
        readonly mobile: {
            readonly size: 48;
            readonly lineHeight: 1;
            readonly letterSpacing: "-0.02em";
        };
        readonly desktop: {
            readonly size: 64;
            readonly lineHeight: 1.15;
            readonly letterSpacing: "-0.02em";
        };
    };
    readonly h2: {
        readonly mobile: {
            readonly size: 40;
            readonly lineHeight: 1;
            readonly letterSpacing: "-0.02em";
        };
        readonly desktop: {
            readonly size: 56;
            readonly lineHeight: 1.15;
            readonly letterSpacing: "-0.02em";
        };
    };
    readonly h3: {
        readonly mobile: {
            readonly size: 32;
            readonly lineHeight: 1;
            readonly letterSpacing: "-0.02em";
        };
        readonly desktop: {
            readonly size: 48;
            readonly lineHeight: 1.15;
            readonly letterSpacing: "-0.02em";
        };
    };
    readonly h4: {
        readonly mobile: {
            readonly size: 24;
            readonly lineHeight: 1;
            readonly letterSpacing: "-0.02em";
        };
        readonly desktop: {
            readonly size: 32;
            readonly lineHeight: 1.15;
            readonly letterSpacing: "-0.02em";
        };
    };
    readonly h5: {
        readonly mobile: {
            readonly size: 20;
            readonly lineHeight: 1;
            readonly letterSpacing: "-0.02em";
        };
        readonly desktop: {
            readonly size: 24;
            readonly lineHeight: 1.15;
            readonly letterSpacing: "-0.01em";
        };
    };
    readonly h6: {
        readonly mobile: {
            readonly size: 18;
            readonly lineHeight: 1;
            readonly letterSpacing: "-0.02em";
        };
        readonly desktop: {
            readonly size: 20;
            readonly lineHeight: 1.15;
            readonly letterSpacing: "-0.01em";
        };
    };
};

export { colorTokens, fontTokens, headingScale, radiusTokens };
