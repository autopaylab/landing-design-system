import type { Meta, StoryObj } from "@storybook/react";
import { Zap, RefreshCw, CreditCard, Lock, Archive } from "lucide-react";

import { HeroVideoSplit } from "@/organisms/HeroVideoSplit";
import { TrustedByLogos } from "@/organisms/TrustedByLogos";
import { SingleIntegrationSection } from "@/organisms/SingleIntegrationSection";
import { SecuritySection } from "@/organisms/SecuritySection";
import { StatsSection } from "@/organisms/StatsSection";
import { ContactSection } from "@/organisms/ContactSection";
import { FaqAccordionSection } from "@/organisms/FaqAccordionSection";

import { LandingPageTemplate } from "./LandingPageTemplate";

const meta: Meta<typeof LandingPageTemplate> = {
  title: "Templates/LandingPageTemplate",
  component: LandingPageTemplate,
};
export default meta;
type Story = StoryObj<typeof LandingPageTemplate>;

const placeholderLogo =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='24'%3E%3Crect width='100' height='24' rx='4' fill='%23222'/%3E%3C/svg%3E";
const placeholderLogoLight =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='24'%3E%3Crect width='100' height='24' rx='4' fill='%23fff'/%3E%3C/svg%3E";
const logoPlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='32'%3E%3Crect width='120' height='32' fill='%23888'/%3E%3C/svg%3E";

/**
 * A full page assembled entirely from this package's own atoms/molecules/
 * organisms — satisfies the "at least one working template example" bar.
 * Content mirrors HomeContent.tsx's payments-platform copy (a subset of
 * sections, for a readable story); every string is passed as a prop.
 */
export const FullPage: Story = {
  args: {
    navbar: {
      logoSrc: placeholderLogo,
      logoAlt: "Autopay",
      navItems: [
        { label: "Platform", href: "#platform" },
        { label: "Security", href: "#security" },
        { label: "Contact", href: "#contact" },
      ],
      languageLabel: "🇬🇧",
    },
    hero: (
      <HeroVideoSplit
        title={
          <>
            One platform.
            <br />
            Full control over
            <br />
            global payments.
          </>
        }
        subtitle="Increase revenue, reduce costs and ensure seamless compliance — through a single integration."
        ctaLabel="Contact us"
        ctaHref="#contact"
        videoSrc="/hero.webm"
      />
    ),
    sections: [
      <TrustedByLogos
        key="trusted"
        heading="Trusted by industry leaders worldwide"
        logos={[
          { src: logoPlaceholder, alt: "Allianz", width: 120 },
          { src: logoPlaceholder, alt: "Orange", width: 100 },
          { src: logoPlaceholder, alt: "VTEX", width: 100 },
        ]}
      />,
      <SingleIntegrationSection
        key="platform"
        eyebrow="Single Integration"
        heading="All payment methods, all providers."
        subheading="Single API for everything"
        subheadingCaption="No need for redundant integrations"
        videoSrc="/single-api.webm"
        features={[
          { icon: Zap, title: "Faster time-to-market", description: "One integration for all PSPs" },
          { icon: RefreshCw, title: "No maintenance overhead", description: "Automated provider updates and compliance" },
          { icon: CreditCard, title: "Optimized payments", description: "Smart routing increases approval rates" },
        ]}
      />,
      <SecuritySection
        key="security"
        eyebrow="Security"
        heading={
          <>
            Built to protect every
            <br />
            transaction
          </>
        }
        description="Autopay ensures end-to-end security and compliance across the entire payment process."
        schemeBadges={["VISA SECURE", "mastercard ID Check", "PCI DSS"]}
        cards={[
          { icon: Lock, title: "Secure Payment Processing", bullets: ["PCI DSS-compliant infrastructure"], color: "oklch(0.75 0.18 235)" },
          { icon: Archive, title: "Tokenized Card Storage", bullets: ["No cardholder data is stored"], color: "var(--lime)" },
        ]}
      />,
      <StatsSection
        key="stats"
        heading={
          <>
            Optimize global
            <br />
            payment performance
          </>
        }
        description="Drive margin improvement through smarter routing and unified payment infrastructure."
        stats={[
          { value: "16%", label: "higher conversion" },
          { value: "21%", label: "lower processing costs" },
        ]}
      />,
      <ContactSection
        key="contact"
        heading={
          <>
            Build a smarter,
            <br />
            more profitable
            <br />
            payment strategy
          </>
        }
        description="Let's discuss how Autopay can help you optimize payment processes."
        formHeading="Schedule a consultation"
        consentText="I consent to the processing of my personal data contained in the contact form."
        controllerText="The personal data controller is Autopay Global sp z o. o."
      />,
      <FaqAccordionSection
        key="faq"
        heading="Najczęstsze pytania"
        entries={[
          { question: "Czy moje pieniądze są bezpieczne?", answer: "Tak. Płatności obsługiwane są przez Autopay." },
        ]}
      />,
    ],
    footer: {
      ctaHeading: (
        <>
          Build a smarter,
          <br />
          more profitable
          <br />
          payment strategy.
        </>
      ),
      ctaSubheading: (
        <>
          Join Autopay
          <br />
          today.
        </>
      ),
      bannerImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=80",
      logoSrc: placeholderLogoLight,
      logoAlt: "Autopay",
      socialLinks: [],
      tagline: (
        <>
          Effortless Payments.
          <br />
          Scalable Solutions.
        </>
      ),
      navItems: [
        { label: "Product", href: "#" },
        { label: "Contact us", href: "#contact" },
      ],
      address: (
        <>
          Autopay RS Sp. z o.o.
          <br />
          Warsaw, Poland
        </>
      ),
      legalText: "Privacy Policy Autopay RS Sp. z o.o.",
      schemeBadges: ["Verified by VISA", "PCI DSS"],
    },
  },
};
