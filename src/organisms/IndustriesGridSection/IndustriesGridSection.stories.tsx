import type { Meta, StoryObj } from "@storybook/react";
import { IndustriesGridSection } from "./IndustriesGridSection";

const meta: Meta<typeof IndustriesGridSection> = {
  title: "Organisms/IndustriesGridSection",
  component: IndustriesGridSection,
};
export default meta;
type Story = StoryObj<typeof IndustriesGridSection>;

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Crect width='800' height='500' fill='%23999'/%3E%3C/svg%3E";

export const Default: Story = {
  args: {
    eyebrow: "Industries",
    heading: "Three industries, one platform",
    ctaLabel: "Learn more",
    industries: [
      { name: "Banking", backgroundColor: "var(--banking)", image: placeholder, description: "Banking real-time capabilities depends on integrating with legacy infrastructure." },
      { name: "Automotive\n& Infrastructure", backgroundColor: "var(--automotive)", image: placeholder, description: "Embedded, automated payment infrastructure removes friction from mobility." },
      { name: "Insurance", backgroundColor: "var(--insurance)", image: placeholder, description: "Payment infrastructure tailored to the insurance lifecycle enables instant claims payouts." },
    ],
  },
};
