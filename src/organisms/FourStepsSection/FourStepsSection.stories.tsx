import type { Meta, StoryObj } from "@storybook/react";
import { FourStepsSection } from "./FourStepsSection";

const meta: Meta<typeof FourStepsSection> = {
  title: "Organisms/FourStepsSection",
  component: FourStepsSection,
};
export default meta;
type Story = StoryObj<typeof FourStepsSection>;

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='400'%3E%3Crect width='700' height='400' fill='%23ccc'/%3E%3C/svg%3E";

export const Default: Story = {
  args: {
    heading: "Get started with Nimbus in 4 steps",
    description:
      "No onboarding calls or training required. Create your account, add your services, and start taking orders right away, on your own site, no middlemen.",
    image: placeholder,
    imageAlt: "Nimbus dashboard showing today's activity",
    steps: [
      { title: "Create your account and set up your profile", body: "Add your business details, hours, logo and photos. Profile ready in minutes." },
      { title: "Add your services, pricing and team", body: "Enter your services, add team members and assign roles." },
      { title: "Manage everything from one dashboard", body: "See all your activity and customer data in a single panel." },
      { title: "Track sales without manual bookkeeping", body: "Transaction history, payment methods and statuses always at hand." },
    ],
  },
};
