import type { Meta, StoryObj } from "@storybook/react";
import { FaqAccordionSection } from "./FaqAccordionSection";

const meta: Meta<typeof FaqAccordionSection> = {
  title: "Organisms/FaqAccordionSection",
  component: FaqAccordionSection,
};
export default meta;
type Story = StoryObj<typeof FaqAccordionSection>;

export const Default: Story = {
  args: {
    heading: "Frequently asked questions",
    entries: [
      {
        question: "Will my customers need to pay a deposit online?",
        answer:
          "You decide whether to require a deposit, and how much. Starting with a small amount is usually enough to reduce no-shows without discouraging genuine customers.",
      },
      {
        question: "Will I lose my existing customers if I switch systems?",
        answer: "No. Nimbus isn't a marketplace, it's your own booking page. Customers go straight to you.",
      },
      {
        question: "Do I pay a fee on every visit?",
        answer:
          "No. You pay a flat subscription plus a standard transaction fee only on payments made online, there's no fee for acquiring a customer.",
      },
    ],
  },
};
