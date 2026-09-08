import type { Meta, StoryObj } from "@storybook/react";
import { DataLeverageSection } from "./DataLeverageSection";

const meta: Meta<typeof DataLeverageSection> = {
  title: "Organisms/DataLeverageSection",
  component: DataLeverageSection,
};
export default meta;
type Story = StoryObj<typeof DataLeverageSection>;

export const Default: Story = {
  args: {
    eyebrow: "Data Leverage",
    heading: (
      <>
        Turn payment data into
        <br />a competitive advantage
      </>
    ),
    description:
      "Make every transaction more valuable. Gain real-time insights, improve performance, and drive smarter decisions across your entire payment strategy.",
    items: [
      { title: "Auto reconciliation", desc: "Streamline financial operations with automated, standardized reconciliation across all payment providers and methods. Reduce manual overhead and ensure accuracy at scale." },
      { title: "Prediction reports", desc: "Access real-time data and performance forecasts to anticipate trends and reduce transaction failure rates. Strengthen your payment strategy with forward-looking insights." },
      { title: "Customer targeting", desc: "Boost conversion by using payment data to better understand customer behavior. Personalize experiences and campaigns to reach the right users with the right message at the right time." },
      { title: "Product campaign", desc: "Maximize the revenue potential of every product and offer. Use data-driven insights to identify high-performing segments and focus campaigns where they have the greatest impact." },
    ],
    reportingPeriods: [
      { month: "June 2025", status: "Processing", date: "2025-06-30" },
      { month: "May 2025", status: "Processing", date: "2025-05-30" },
      { month: "April 2025", status: "Processing", date: "2025-04-30" },
    ],
  },
};
