import type { Meta, StoryObj } from "@storybook/react";
import { PositioningSpectrumSection } from "./PositioningSpectrumSection";

const meta: Meta<typeof PositioningSpectrumSection> = {
  title: "Organisms/PositioningSpectrumSection",
  component: PositioningSpectrumSection,
};
export default meta;
type Story = StoryObj<typeof PositioningSpectrumSection>;

export const Default: Story = {
  args: {
    eyebrow: "Model",
    heading: "PayFac to naturalny kolejny krok, bez pełnych kosztów i obowiązków acquiringu.",
    currentLabel: "Jesteś tutaj",
    options: [
      {
        eyebrow: "ISO",
        title: "Reseller",
        description: "Jesteś rozszerzeniem acquirera. Ograniczona kontrola, ograniczona marża.",
      },
      {
        eyebrow: "PAYFAC",
        title: "Business owner",
        description: "Ty odpowiadasz za wdrażanie merchantów, ich doświadczenie i ekonomię współpracy. Autopay prowadzi infrastrukturę pod spodem.",
        current: true,
      },
      {
        eyebrow: "ACQUIRER",
        title: "Principal Member",
        description: "Maksymalna kontrola, ale też pełne koszty operacyjne oraz obowiązki regulacyjne.",
      },
    ],
  },
};
