import type { Meta, StoryObj } from "@storybook/react";
import { Lock } from "lucide-react";
import { IconCard } from "./IconCard";

const meta: Meta<typeof IconCard> = {
  title: "Molecules/IconCard",
  component: IconCard,
};
export default meta;
type Story = StoryObj<typeof IconCard>;

export const Default: Story = {
  args: {
    icon: Lock,
    title: "Secure Payment Processing",
    bullets: ["PCI DSS-compliant infrastructure", "End-to-end transaction protection"],
    color: "oklch(0.75 0.18 235)",
  },
};
