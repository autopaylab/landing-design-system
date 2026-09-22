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

export { Button as B, type ButtonProps as a, buttonVariants as b };
