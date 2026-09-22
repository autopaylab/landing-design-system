import type { Meta, StoryObj } from "@storybook/react";
import { ComparisonTimelineSection } from "./ComparisonTimelineSection";

const meta: Meta<typeof ComparisonTimelineSection> = {
  title: "Organisms/ComparisonTimelineSection",
  component: ComparisonTimelineSection,
};
export default meta;
type Story = StoryObj<typeof ComparisonTimelineSection>;

export const Default: Story = {
  args: {
    heading: "Dwie drogi do startu. Jedna jest o 60–80% szybsza.",
    highlight: "60–80% szybciej niż principal membership",
    paths: [
      {
        name: "principal membership",
        duration: "kilkanaście miesięcy",
        steps: ["Wniosek i due diligence", "Budowa technologii", "Ramy compliance", "Uruchomienie operacji", "Testy i certyfikacja"],
        caption: "Koszty, zespoły i obowiązki compliance od pierwszego dnia.",
      },
      {
        name: "PayFac z Autopay",
        duration: "kilka miesięcy",
        steps: ["Analiza", "Uzgodnienia", "Rejestracja w Card Scheme", "Integracja", "Go-live"],
        caption: "Na infrastrukturze, która działa na skalę.",
        highlighted: true,
      },
    ],
  },
};
