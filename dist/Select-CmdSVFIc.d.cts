import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Merges 11+ hand-rolled CTA markups found across landing-page-kit (hero CTAs,
 * header Login/Sign In, industry-card "Learn more", contact-form submit) into
 * one variant-driven atom. See AUDIT.md, "Buttons" section, for the full list
 * of source occurrences and the one inconsistency (a second product line's
 * footer CTA using a fixed h-12 + hover:bg-lime/90) that was NOT silently
 * folded in.
 */
declare const buttonVariants: (props?: ({
    variant?: "link" | "lime" | "outline-inverse" | "outline" | "solid" | "default" | "destructive" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "xs" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface SelectOption {
    value: string;
    label: string;
}
/**
 * A native `<select>` styled to match Input's filled/rounded-xl look, with a
 * trailing chevron (matching the ChevronDown already used in Navbar and
 * Accordion, not a new icon choice). Native, not a custom listbox — real
 * lead-gen forms (e.g. autopay.pl's /lp/payfac-08, which has four dropdowns)
 * need dropdown fields and this package had none. See AUDIT.md.
 *
 * `options` + `placeholder` cover the common case (a labeled list of
 * choices with an empty/disabled first option); pass `children` directly
 * instead if you need `<optgroup>`s or anything `options` can't express.
 */
interface SelectProps extends Omit<React.ComponentProps<"select">, "children"> {
    options?: SelectOption[];
    placeholder?: string;
    children?: React.ReactNode;
}
declare const Select: React.ForwardRefExoticComponent<Omit<SelectProps, "ref"> & React.RefAttributes<HTMLSelectElement>>;

export { Button as B, Select as S, type ButtonProps as a, type SelectOption as b, type SelectProps as c, buttonVariants as d };
