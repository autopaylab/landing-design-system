import * as React from 'react';
export { I as IconCard, a as IconCardProps, b as IconFeatureItem, c as IconFeatureItemProps, S as StatBlock, d as StatBlockProps } from '../IconCard-C24oi4uU.cjs';

/** Label + Input, matching the contact-form fields in HomeContent.tsx. */
interface FormFieldProps extends React.ComponentProps<"input"> {
    label: string;
}
declare const FormField: React.ForwardRefExoticComponent<Omit<FormFieldProps, "ref"> & React.RefAttributes<HTMLInputElement>>;

/** Checkbox + legal copy + "More" link, from the contact-form consent row in HomeContent.tsx. */
interface ConsentCheckboxFieldProps extends Omit<React.ComponentProps<"input">, "type" | "children"> {
    /** The consent sentence, e.g. "I consent to the processing of my personal data..." */
    consentText: React.ReactNode;
    /** The controller sentence shown below, e.g. "The personal data controller is..." */
    controllerText: React.ReactNode;
    moreHref?: string;
}
declare const ConsentCheckboxField: React.ForwardRefExoticComponent<Omit<ConsentCheckboxFieldProps, "ref"> & React.RefAttributes<HTMLInputElement>>;

/** Dot + text row used inside IconCard's bullet list (HomeContent.tsx Security cards). */
declare function BulletItem({ className, children, ...props }: React.LiHTMLAttributes<HTMLLIElement>): React.JSX.Element;

/** One list item from FourStepsSection.tsx's numbered step list. */
interface StepCardProps extends React.LiHTMLAttributes<HTMLLIElement> {
    index: number;
    title: string;
    body: string;
}
declare function StepCard({ className, index, title, body, ...props }: StepCardProps): React.JSX.Element;

/**
 * The industry-tile card, reused by two different organism layouts over the
 * same data (HomeContent's sticky full-bleed stack and IndustriesGridA's
 * 3-up grid) — see AUDIT.md "Industries — same data, two different layouts".
 * `layout` captures the one real structural difference between the two.
 */
interface IndustryCardProps extends React.HTMLAttributes<HTMLElement> {
    name: string;
    description: string;
    image: string;
    /** Background color token, e.g. "var(--banking)". */
    backgroundColor: string;
    ctaLabel?: string;
    onCtaClick?: () => void;
    layout?: "stacked" | "grid";
}
declare function IndustryCard({ className, name, description, image, backgroundColor, ctaLabel, onCtaClick, layout, style, ...props }: IndustryCardProps): React.JSX.Element;

/** One question/answer pair, wrapping the Accordion primitives (FaqSection.tsx). */
interface FaqItemProps {
    value: string;
    question: string;
    answer: React.ReactNode;
}
declare function FaqItem({ value, question, answer }: FaqItemProps): React.JSX.Element;

export { BulletItem, ConsentCheckboxField, type ConsentCheckboxFieldProps, FaqItem, type FaqItemProps, FormField, type FormFieldProps, IndustryCard, type IndustryCardProps, StepCard, type StepCardProps };
