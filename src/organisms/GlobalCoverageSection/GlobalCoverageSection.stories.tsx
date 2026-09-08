import type { Meta, StoryObj } from "@storybook/react";
import { Globe, LineChart, Coins } from "lucide-react";
import { GlobalCoverageSection } from "./GlobalCoverageSection";

const meta: Meta<typeof GlobalCoverageSection> = {
  title: "Organisms/GlobalCoverageSection",
  component: GlobalCoverageSection,
};
export default meta;
type Story = StoryObj<typeof GlobalCoverageSection>;

export const Default: Story = {
  args: {
    eyebrow: "Global Coverage",
    heading: "Accept payments in every market, without barriers",
    features: [
      { icon: Globe, title: "Direct access to regional and international PSPs", description: "No extra integrations needed." },
      { icon: LineChart, title: "Optimized payment acceptance rates", description: "Reduce failed transactions with localized payment options." },
      { icon: Coins, title: "Multi-currency support", description: "Settle transactions in customers' preferred currencies." },
    ],
    floatingBadges: [
      { label: "支", top: "30%", right: "40%", className: "bg-[oklch(0.55_0.2_255)] text-white" },
      { label: "KPay", top: "26%", right: "20%", className: "bg-card text-foreground" },
      { label: "UnionPay", top: "44%", right: "30%", className: "bg-card text-[oklch(0.55_0.2_25)]" },
      { label: "✓", top: "60%", right: "22%", className: "bg-[oklch(0.7_0.18_140)] text-white" },
      { label: "zip", top: "76%", right: "14%", className: "bg-card text-[oklch(0.55_0.2_295)]" },
    ],
  },
};
