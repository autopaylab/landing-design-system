import type { Meta, StoryObj } from "@storybook/react";
import { CostBreakdownSection } from "./CostBreakdownSection";

const meta: Meta<typeof CostBreakdownSection> = {
  title: "Organisms/CostBreakdownSection",
  component: CostBreakdownSection,
};
export default meta;
type Story = StoryObj<typeof CostBreakdownSection>;

export const Default: Story = {
  args: {
    eyebrow: "Model rozliczeń",
    heading: "Przejrzysty cennik IC++.",
    description:
      "Współpraca opiera się na strukturze IC++: interchange i opłaty organizacji kartowych, plus jedna przejrzysta marża Autopay. Bez ukrytych narzutów.",
    components: [
      { title: "Interchange", description: "Pokrywane przez PayFac." },
      { title: "Opłaty organizacji kartowych", description: "Pokrywane przez PayFac." },
      {
        title: "Marża serwisowa Autopay",
        description: "Jedna przejrzysta marża za infrastrukturę i wsparcie.",
        linkLabel: "uzgodniona z Tobą →",
      },
    ],
  },
};
