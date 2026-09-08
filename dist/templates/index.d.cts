import * as React from 'react';
import { e as NavbarProps, b as FooterProps } from '../Footer-BdcVzbNU.cjs';

/**
 * Arranges Navbar + a hero slot + an ordered list of section slots + Footer.
 * All content is passed in via props/children — no hardcoded copy — so a
 * consumer composes their own page from the organisms in ./organisms,
 * matching the order observed in HomeContent.tsx, or reorders/omits freely.
 *
 * Example (mirrors the source page's section order):
 *
 *   <LandingPageTemplate
 *     navbar={navbarProps}
 *     hero={<HeroVideoSplit {...heroProps} />}
 *     sections={[
 *       <TrustedByLogos key="trusted" {...trustedProps} />,
 *       <FourStepsSection key="steps" {...stepsProps} />,
 *       <SecuritySection key="security" {...securityProps} />,
 *       <ContactSection key="contact" {...contactProps} />,
 *       <FaqAccordionSection key="faq" {...faqProps} />,
 *     ]}
 *     footer={footerProps}
 *   />
 */
interface LandingPageTemplateProps {
    navbar: NavbarProps;
    hero: React.ReactNode;
    sections: React.ReactNode[];
    footer: FooterProps;
}
declare function LandingPageTemplate({ navbar, hero, sections, footer }: LandingPageTemplateProps): React.JSX.Element;

export { LandingPageTemplate, type LandingPageTemplateProps };
