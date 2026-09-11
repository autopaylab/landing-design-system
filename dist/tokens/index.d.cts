/**
 * Programmatic access to the raw tokens observed in landing-page-kit.
 * See ./tokens.css for the CSS custom properties, and AUDIT.md section 4
 * for provenance. Not Autopay Design System 2.0 tokens.
 */
declare const colorTokens: {
    /** Neutral scale harmonized with Autopay DS2's real gray swatches — see
     * AUDIT.md #9 and DS2-HARMONIZATION.md #7. Mirrors tokens.css. */
    readonly background: "#fafafa";
    readonly foreground: "#0f0f0f";
    readonly ink: "#0f0f0f";
    readonly surface: "#f5f5f5";
    readonly surfaceMuted: "#ebebeb";
    readonly card: "oklch(1 0 0)";
    readonly primary: "#282828";
    readonly primaryForeground: "#fafafa";
    readonly secondary: "#ebebeb";
    readonly muted: "#ebebeb";
    readonly mutedForeground: "#4c4c4c";
    readonly accent: "#ebebeb";
    readonly destructive: "oklch(0.58 0.22 27)";
    readonly border: "#e5e5e5";
    readonly input: "#e5e5e5";
    /** Not remapped — no DS2 neutral gray is a close match; this token
     * carries real blue chroma the neutral scale doesn't cover. */
    readonly ring: "oklch(0.7 0.04 250)";
    /** Raw hex — inconsistent in representation with the rest of the palette
     * (OKLCH), but the value is correct: an exact match for Autopay DS2's
     * real "Pistachio 500". See AUDIT.md #6 and DS2-HARMONIZATION.md. */
    readonly lime: "#e6ffa0";
    readonly limeForeground: "#0f0f0f";
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
