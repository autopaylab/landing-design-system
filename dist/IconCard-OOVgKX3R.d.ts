import * as React from 'react';

/** One tile from the Stats section grid in HomeContent.tsx ("UP TO" + value + label). */
interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    eyebrow?: string;
    value: string;
    label: string;
}
declare function StatBlock({ className, eyebrow, value, label, ...props }: StatBlockProps): React.JSX.Element;

/**
 * The icon+title+description row repeated 6× across "Single Integration"
 * and "Global Coverage" in HomeContent.tsx (identical structure, only the
 * icon/copy changed at each call site).
 */
interface IconFeatureItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    icon: React.ComponentType<{
        className?: string;
    }>;
    title: string;
    description: string;
    /** Icon color as observed on the page — an ad hoc oklch literal, not a semantic token. See AUDIT.md #10. */
    iconClassName?: string;
}
declare function IconFeatureItem({ className, icon: Icon, title, description, iconClassName, ...props }: IconFeatureItemProps): React.JSX.Element;

/** One of the 4 Security cards in HomeContent.tsx: icon-in-gradient-tile + title + bullet list. */
interface IconCardProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: React.ComponentType<{
        className?: string;
    }>;
    title: string;
    bullets: string[];
    /** Gradient tile base color, as observed (ad hoc oklch/var literal). See AUDIT.md #10. */
    color: string;
}
declare function IconCard({ className, icon: Icon, title, bullets, color, ...props }: IconCardProps): React.JSX.Element;

export { IconCard as I, StatBlock as S, type IconCardProps as a, IconFeatureItem as b, type IconFeatureItemProps as c, type StatBlockProps as d };
