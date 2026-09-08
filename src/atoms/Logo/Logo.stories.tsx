import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Atoms/Logo",
  component: Logo,
};
export default meta;
type Story = StoryObj<typeof Logo>;

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='24'%3E%3Crect width='100' height='24' rx='4' fill='%23222'/%3E%3C/svg%3E";

export const Small: Story = { args: { size: "sm", src: placeholder, alt: "Brand" } };
export const Medium: Story = { args: { size: "md", src: placeholder, alt: "Brand" } };
export const Large: Story = { args: { size: "lg", src: placeholder, alt: "Brand" } };
