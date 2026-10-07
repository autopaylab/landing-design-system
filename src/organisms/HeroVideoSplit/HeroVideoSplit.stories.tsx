import type { Meta, StoryObj } from "@storybook/react";
import { HeroVideoSplit } from "./HeroVideoSplit";

const meta: Meta<typeof HeroVideoSplit> = {
  title: "Organisms/HeroVideoSplit",
  component: HeroVideoSplit,
};
export default meta;
type Story = StoryObj<typeof HeroVideoSplit>;

export const Default: Story = {
  args: {
    title: (
      <>
        One platform.
        <br />
        Full control over
        <br />
        global payments.
      </>
    ),
    subtitle:
      "Increase revenue, reduce costs and ensure seamless compliance — through a single integration. Simplify payment operations across multiple markets.",
    ctaLabel: "Contact us",
    ctaHref: "#contact",
    videoSrc: "/hero.webm",
  },
};

/** Without `videoSrc`: a single text column. */
export const TextOnly: Story = {
  args: {
    title: "One platform. Full control over global payments.",
    subtitle: "Increase revenue, reduce costs and ensure seamless compliance through a single integration.",
    ctaLabel: "Contact us",
    ctaHref: "#contact",
  },
};

/** With a recording labelled as a demo. */
export const WithMediaCaption: Story = {
  args: {
    ...Default.args,
    mediaCaption: "Demo",
  },
};

/** A still (or placeholder) in the media slot, labelled as a demo. */
export const WithImage: Story = {
  args: {
    ...TextOnly.args,
    image: { src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='400'%3E%3Crect width='700' height='400' fill='%23ccc'/%3E%3C/svg%3E", alt: "Grey placeholder rectangle", width: 700, height: 400 },
    mediaCaption: "Demo",
  },
};
