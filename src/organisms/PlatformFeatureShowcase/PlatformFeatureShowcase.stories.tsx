import type { Meta, StoryObj } from "@storybook/react";
import { PlatformFeatureShowcase } from "./PlatformFeatureShowcase";

const meta: Meta<typeof PlatformFeatureShowcase> = {
  title: "Organisms/PlatformFeatureShowcase",
  component: PlatformFeatureShowcase,
};
export default meta;
type Story = StoryObj<typeof PlatformFeatureShowcase>;

export const Default: Story = {
  args: {
    features: [
      { key: "smart-routing", title: "Smart routing", desc: "Unified payment providers management and optimized provider selection.", video: "/smart-routing.webm" },
      { key: "personalized-checkout", title: "Personalized checkout", desc: "Build and customize your own checkout to increase conversion and optimize user experience.", video: "/personalized-checkout.webm" },
      { key: "dashboard", title: "One dashboard", desc: "All you payment data and insights in one place.", video: "/dashboard.webm" },
    ],
  },
};
