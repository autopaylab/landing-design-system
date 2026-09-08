import type { Meta, StoryObj } from "@storybook/react";
import { FaqAccordionSection } from "./FaqAccordionSection";

const meta: Meta<typeof FaqAccordionSection> = {
  title: "Organisms/FaqAccordionSection",
  component: FaqAccordionSection,
};
export default meta;
type Story = StoryObj<typeof FaqAccordionSection>;

export const Default: Story = {
  args: {
    heading: "Najczęstsze pytania",
    entries: [
      {
        question: "Czy moi klienci będą musieli płacić zaliczkę online?",
        answer:
          "To Ty decydujesz, czy i jaką kwotę zaliczki wymagać przy rezerwacji. Możesz zacząć od symbolicznej kwoty — to zwykle wystarcza, żeby ograniczyć niezapowiedziane nieobecności, nie zniechęcając zdecydowanych klientów.",
      },
      {
        question: "Czy stracę swoich obecnych klientów przy zmianie systemu?",
        answer: "Nie. Autopay Calendar nie jest marketplace'em — to Twoja własna strona rezerwacyjna. Klienci trafiają wyłącznie do Ciebie.",
      },
      {
        question: "Czy płacę prowizję od każdej wizyty?",
        answer: "Nie. Płacisz stały abonament oraz standardową opłatę transakcyjną wyłącznie od płatności zrealizowanych online — nie ma opłaty za pozyskanie klienta.",
      },
    ],
  },
};
