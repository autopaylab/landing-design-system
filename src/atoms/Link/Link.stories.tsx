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

/**
 * New capability, not extracted from the source: `asChild` merges Link's
 * styling onto a single child element via Radix's `Slot` (the same mechanism
 * `Button` already used) instead of rendering its own `<a>`. Lets a consumer
 * use a router's own link component (e.g. Next.js `Link`) and still get
 * Link's variant classes, without double-nesting anchors.
 */
export const AsChild: Story = {
  args: {
    variant: "nav",
    asChild: true,
    children: <a href="#platform">Platform (rendered by a stand-in "router link")</a>,
  },
};
