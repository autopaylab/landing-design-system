import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';

/**
 * Vendored from src/components/ui/accordion.tsx — the only shadcn/ui
 * primitive actually imported by the audited page (FaqSection.tsx).
 * Radix is kept as a direct dependency (not a shadcn/registry dependency);
 * the shadcn CLI/registry wiring itself is dropped. See AUDIT.md #3.
 */
declare const Accordion: React.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

/**
 * Merges 11+ hand-rolled CTA markups found across landing-page-kit (hero CTAs,
 * header Login/Sign In, industry-card "Learn more", contact-form submit) into
 * one variant-driven atom. See AUDIT.md, "Buttons" section, for the full list
 * of source occurrences and the one inconsistency (CalendarFooter's fixed
 * h-12 + hover:bg-lime/90) that was NOT silently folded in.
 */
declare const buttonVariants: (props?: ({
    variant?: "link" | "lime" | "outline-inverse" | "outline" | "solid" | "default" | "destructive" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "xs" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

/**
 * `eyebrow` merges three byte-identical implementations: `Eyebrow` in
 * HomeContent.tsx, `VariantLabel` in HeroVariants.tsx, and an inline <span>
 * in IndustriesGridA.tsx. `default`/`secondary`/`destructive`/`outline` are
 * the unused-on-page shadcn/ui variants, kept as real declared alternates
 * rather than discarded — see AUDIT.md, "Eyebrow / pill badge".
 */
declare const badgeVariants: (props?: ({
    variant?: "outline" | "default" | "destructive" | "secondary" | "eyebrow" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): React.JSX.Element;

/**
 * Matches the filled input actually rendered by the contact form
 * (HomeContent.tsx) — not the unused outlined `ui/input.tsx` shadcn
 * primitive. See AUDIT.md, "Input — 2 competing visual systems".
 */
declare const Input: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;

/**
 * Matches the plain <span> used above every contact-form field
 * (HomeContent.tsx) — not the unused Radix-based `ui/label.tsx`.
 * No Radix `Label` primitive is pulled in since the page never used it.
 * See AUDIT.md, "Label — 2 competing systems".
 */
declare function Label({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element;

/**
 * The source (HomeContent.tsx contact form) uses a bare, browser-default
 * `<input type="checkbox">` with no visual design of its own — this atom
 * only adds the alignment/sizing the source applied (`mt-1`). No styling
 * is invented here; see AUDIT.md, Atoms classification note on Checkbox.
 */
declare const Checkbox: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;

/**
 * Covers the plain-text anchor patterns observed across the source:
 * footer nav links (`hover:underline`), the header pill nav link
 * (`SiteHeader.tsx`), and the inline consent-form "More" link.
 */
declare const linkVariants: (props?: ({
    variant?: "nav" | "underline" | "plain" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof linkVariants> {
}
declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;

/**
 * Wraps the `<img>` pattern used for the Autopay wordmark in SiteHeader,
 * SiteFooter and CalendarFooter (h-7, h-6, h-7/h-8 respectively — the
 * source never settled on one height, see AUDIT.md #4). `src`/`alt` are
 * left as required props rather than hardcoding the Autopay asset, since
 * this package ships no brand assets (see README "Known limitations").
 */
declare const logoVariants: (props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface LogoProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">, VariantProps<typeof logoVariants> {
    src: string;
    alt: string;
}
declare function Logo({ className, size, src, alt, ...props }: LogoProps): React.JSX.Element;

/** The numbered circle from FourStepsSection.tsx's step list. */
interface StepNumberProps extends React.HTMLAttributes<HTMLSpanElement> {
    value: number;
}
declare function StepNumber({ className, value, ...props }: StepNumberProps): React.JSX.Element;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Badge, type BadgeProps, Button, type ButtonProps, Checkbox, Input, Label, Link, type LinkProps, Logo, type LogoProps, StepNumber, type StepNumberProps, badgeVariants, buttonVariants, linkVariants };
