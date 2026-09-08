import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Organisms/Navbar",
  component: Navbar,
};
export default meta;
type Story = StoryObj<typeof Navbar>;

const placeholderLogo =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='24'%3E%3Crect width='100' height='24' rx='4' fill='%23222'/%3E%3C/svg%3E";

export const Default: Story = {
  args: {
    logoSrc: placeholderLogo,
    logoAlt: "Autopay",
    navItems: [
      { label: "Platform", href: "#four-steps" },
      { label: "Global Coverage", href: "#security" },
      { label: "Security", href: "#stats" },
      { label: "HandGo", href: "#faq" },
    ],
    languageLabel: "🇬🇧",
  },
};
