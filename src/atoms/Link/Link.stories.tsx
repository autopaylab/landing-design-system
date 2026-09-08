import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Atoms/Link",
  component: Link,
};
export default meta;
type Story = StoryObj<typeof Link>;

export const Underline: Story = { args: { variant: "underline", href: "#", children: "More" } };
export const Nav: Story = { args: { variant: "nav", href: "#platform", children: "Platform" } };
export const Plain: Story = { args: { variant: "plain", href: "#", children: "Privacy Policy" } };
