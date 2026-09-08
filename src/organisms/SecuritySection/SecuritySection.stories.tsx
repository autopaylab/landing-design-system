import type { Meta, StoryObj } from "@storybook/react";
import { Lock, Archive, Shield, ScanSearch } from "lucide-react";
import { SecuritySection } from "./SecuritySection";

const meta: Meta<typeof SecuritySection> = {
  title: "Organisms/SecuritySection",
  component: SecuritySection,
};
export default meta;
type Story = StoryObj<typeof SecuritySection>;

export const Default: Story = {
  args: {
    eyebrow: "Security",
    heading: (
      <>
        Built to protect every
        <br />
        transaction
      </>
    ),
    description:
      "Autopay ensures end-to-end security and compliance across the entire payment process — from card data protection to real-time fraud detection and authentication.",
    schemeBadges: ["VISA SECURE", "mastercard ID Check", "EMVCo", "PCI 3DS", "PCI DSS"],
    cards: [
      { icon: Lock, title: "Secure Payment Processing", bullets: ["PCI DSS-compliant infrastructure", "End-to-end transaction protection"], color: "oklch(0.75 0.18 235)" },
      { icon: Archive, title: "Tokenized Card Storage", bullets: ["No cardholder data is stored", "PCI DSS-compliant tokenization for maximum protection"], color: "var(--lime)" },
      { icon: Shield, title: "Smart Customer Verification", bullets: ["3D Secure 2.0 authentication", "Frictionless experience for low-risk transactions"], color: "oklch(0.78 0.14 295)" },
      { icon: ScanSearch, title: "Fraud Monitoring", bullets: ["Blacklists: auto-detect and block suspicious users", "Real-time monitoring of every transaction"], color: "oklch(0.82 0.14 0)" },
    ],
  },
};
