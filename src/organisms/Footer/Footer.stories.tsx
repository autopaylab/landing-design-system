import type { Meta, StoryObj } from "@storybook/react";
import { Facebook, Linkedin, X } from "lucide-react";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Organisms/Footer",
  component: Footer,
};
export default meta;
type Story = StoryObj<typeof Footer>;

const placeholderLogo =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='24'%3E%3Crect width='100' height='24' rx='4' fill='%23fff'/%3E%3C/svg%3E";

export const Default: Story = {
  args: {
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
    logoSrc: placeholderLogo,
    logoAlt: "Autopay",
    socialLinks: [
      { label: "Facebook", href: "#", icon: Facebook },
      { label: "LinkedIn", href: "#", icon: Linkedin },
      { label: "X", href: "#", icon: X },
    ],
    tagline: (
      <>
        Effortless Payments.
        <br />
        Scalable Solutions.
        <br />
        No waste of Growth.
      </>
    ),
    navItems: [
      { label: "Product", href: "#" },
      { label: "Company", href: "#" },
      { label: "Global Coverage", href: "#" },
      { label: "Contact us", href: "#contact" },
    ],
    address: (
      <>
        Autopay RS Sp. z o.o.
        <br />
        Zlota 3/18 Street
        <br />
        00-019 Warsaw, Poland
      </>
    ),
    legalText: "Privacy Policy Autopay RS Sp. z o.o.",
    schemeBadges: ["Verified by VISA", "Mastercard SecureCode", "PCI DSS"],
  },
};
