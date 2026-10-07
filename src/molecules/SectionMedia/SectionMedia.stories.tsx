import type { Meta, StoryObj } from "@storybook/react";
import { SectionMedia } from "./SectionMedia";

const meta: Meta<typeof SectionMedia> = {
  title: "Molecules/SectionMedia",
  component: SectionMedia,
};
export default meta;
type Story = StoryObj<typeof SectionMedia>;

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='400'%3E%3Crect width='700' height='400' fill='%23ccc'/%3E%3C/svg%3E";

export const ImageWithCaption: Story = {
  args: {
    image: { src: placeholder, alt: "Grey placeholder rectangle", width: 700, height: 400 },
    caption: "Visualisation",
  },
};

export const VideoWithControls: Story = {
  args: {
    videoSrc: "/hero.webm",
    caption: "Demo",
    showVideoControls: true,
  },
};
