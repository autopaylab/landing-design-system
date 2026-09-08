import type { Meta, StoryObj } from "@storybook/react";
import { Zap, RefreshCw, CreditCard } from "lucide-react";
import { SingleIntegrationSection } from "./SingleIntegrationSection";

const meta: Meta<typeof SingleIntegrationSection> = {
  title: "Organisms/SingleIntegrationSection",
  component: SingleIntegrationSection,
};
export default meta;
type Story = StoryObj<typeof SingleIntegrationSection>;

export const Default: Story = {
  args: {
    eyebrow: "Single Integration",
    heading: "All payment methods, all providers.",
    subheading: "Single API for everything",
    subheadingCaption: "No need for redundant integrations",
    videoSrc: "/single-api.webm",
    features: [
      { icon: Zap, title: "Faster time-to-market", description: "One integration for all PSPs" },
      { icon: RefreshCw, title: "No maintenance overhead", description: "Automated provider updates and compliance" },
      { icon: CreditCard, title: "Optimized payments", description: "Smart routing increases approval rates" },
    ],
  },
};
