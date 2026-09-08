import * as React from "react";

import type { NavbarProps } from "@/organisms/Navbar";
import type { FooterProps } from "@/organisms/Footer";
import { Navbar } from "@/organisms/Navbar";
import { Footer } from "@/organisms/Footer";

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
export interface LandingPageTemplateProps {
  navbar: NavbarProps;
  hero: React.ReactNode;
  sections: React.ReactNode[];
  footer: FooterProps;
}

export function LandingPageTemplate({ navbar, hero, sections, footer }: LandingPageTemplateProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar {...navbar} />
      <main className="flex-1">
        <div id="top" />
        {hero}
        {sections}
      </main>
      <Footer {...footer} />
    </div>
  );
}
