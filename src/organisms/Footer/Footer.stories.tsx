import type { Meta, StoryObj } from "@storybook/react";
import { Link, X } from "lucide-react";
import { Footer } from "./Footer";

/**
 * lucide-react 1.x dropped its bundled brand/logo icons (Facebook, Linkedin, etc.).
 * This path is copied verbatim from simple-icons@16.30.0's facebook.svg (verified,
 * not hand-drawn) -- simple-icons has no LinkedIn entry at all (checked directly
 * against its data file), so LinkedIn below uses lucide's generic `Link` icon as an
 * honest placeholder rather than an invented/approximated brand mark.
 */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </svg>
  );
}

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
      { label: "Facebook", href: "#", icon: FacebookIcon },
      { label: "LinkedIn", href: "#", icon: Link },
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
