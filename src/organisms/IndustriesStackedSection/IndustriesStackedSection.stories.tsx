import type { Meta, StoryObj } from "@storybook/react";
import { IndustriesStackedSection } from "./IndustriesStackedSection";

const meta: Meta<typeof IndustriesStackedSection> = {
  title: "Organisms/IndustriesStackedSection",
  component: IndustriesStackedSection,
};
export default meta;
type Story = StoryObj<typeof IndustriesStackedSection>;

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Crect width='800' height='500' fill='%23999'/%3E%3C/svg%3E";

export const Default: Story = {
  args: {
    eyebrow: "Payments in practice",
    heading: (
      <>
        Frictionless operations across
        <br />
        industries
      </>
    ),
    ctaLabel: "Learn more",
    industries: [
      { name: "Banking", backgroundColor: "var(--banking)", image: placeholder, description: "Banking real-time capabilities depends on integrating with legacy infrastructure." },
      { name: "Insurance", backgroundColor: "var(--insurance)", image: placeholder, description: "Payment infrastructure tailored to the insurance lifecycle enables instant claims payouts." },
    ],
  },
};
