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

/** A still (or placeholder) instead of the video, labelled as a visualisation. */
export const WithImage: Story = {
  args: {
    ...Default.args,
    videoSrc: undefined,
    image: { src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='400'%3E%3Crect width='700' height='400' fill='%23ccc'/%3E%3C/svg%3E", alt: "Grey placeholder rectangle", width: 700, height: 400 },
    mediaCaption: "Visualisation",
  },
};
