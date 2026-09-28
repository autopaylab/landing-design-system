import type { Meta, StoryObj } from "@storybook/react";
import { ComparisonCardsSection } from "./ComparisonCardsSection";

const meta: Meta<typeof ComparisonCardsSection> = {
  title: "Organisms/ComparisonCardsSection",
  component: ComparisonCardsSection,
};
export default meta;
type Story = StoryObj<typeof ComparisonCardsSection>;

export const Default: Story = {
  args: {
    heading: "Co wyróżnia Kalendarz Autopay?",
    cards: [
      {
        name: "Marketplace",
        criteria: [
          { label: "Opłata za rezerwację", description: "nawet 35–45% wartości wizyty", positive: false },
          { label: "Widoczność ofert konkurencji", description: "tak, w aplikacji", positive: false },
          { label: "Własność bazy klientów", description: "ograniczona", positive: false },
          { label: "Opłata za przetworzenie płatności online", description: "zależnie od dostawcy", positive: false },
          { label: "Model rozliczenia", description: "abonament + prowizja od klientów", positive: false },
        ],
      },
      {
        name: "Autopay Calendar",
        highlighted: true,
        criteria: [
          { label: "Opłata za rezerwację", description: "brak", positive: true },
          { label: "Widoczność ofert konkurencji", description: "nie — Twoja własna strona", positive: true },
          { label: "Własność bazy klientów", description: "pełna", positive: true },
          { label: "Opłata za przetworzenie płatności online", description: "standardowa opłata transakcyjna", positive: true },
          { label: "Model rozliczenia", description: "119 PLN/miesiąc (6 miesięcy za darmo), bez prowizji od klientów", positive: true },
        ],
      },
    ],
  },
};
