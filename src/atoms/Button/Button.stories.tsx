import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Lime: Story = {
  args: { variant: "lime", size: "lg", children: "Contact us" },
};
export const OutlineInverse: Story = {
  args: { variant: "outline-inverse", size: "lg", children: "Zobacz demo" },
  parameters: { backgrounds: { default: "dark" } },
};
export const Outline: Story = {
  args: { variant: "outline", size: "default", children: "Login" },
};
export const OutlineXs: Story = {
  args: { variant: "outline", size: "xs", children: "Learn more" },
};
export const Solid: Story = {
  args: { variant: "solid", size: "default", children: "Send" },
};
export const Disabled: Story = {
  args: { variant: "lime", size: "lg", children: "Contact us", disabled: true },
};
