import type { Meta, StoryObj } from "@storybook/react";
import { HeroImageOverlay } from "./HeroImageOverlay";

const meta: Meta<typeof HeroImageOverlay> = {
  title: "Organisms/HeroImageOverlay",
  component: HeroImageOverlay,
};
export default meta;
type Story = StoryObj<typeof HeroImageOverlay>;

const placeholderImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='700'%3E%3Crect width='1600' height='700' fill='%23333'/%3E%3C/svg%3E";

export const Stacked: Story = {
  args: {
    layout: "stacked",
    image: placeholderImage,
    title: "Nie płacisz prowizji za Twoich klientów.",
    subtitle:
      "Kalendarz Autopay to system rezerwacji online, który zostaje z Tobą — bez przejmowania Twoich klientów i bez prowizji za każdą wizytę.",
    primaryCta: { label: "Dołącz do early access", href: "#contact" },
    secondaryCta: { label: "Zobacz demo", href: "#platform" },
  },
};

export const Split: Story = {
  args: {
    layout: "split",
    image: placeholderImage,
    title: "Gotowy, żeby Twój kalendarz zaczął pracować za Ciebie?",
    primaryCta: { label: "Zostaw e-mail", href: "#contact" },
    secondaryCta: { label: "Zobacz demo na żywo", href: "#platform" },
  },
};
