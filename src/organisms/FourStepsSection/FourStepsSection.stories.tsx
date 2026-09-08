import type { Meta, StoryObj } from "@storybook/react";
import { FourStepsSection } from "./FourStepsSection";

const meta: Meta<typeof FourStepsSection> = {
  title: "Organisms/FourStepsSection",
  component: FourStepsSection,
};
export default meta;
type Story = StoryObj<typeof FourStepsSection>;

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='400'%3E%3Crect width='700' height='400' fill='%23ccc'/%3E%3C/svg%3E";

export const Default: Story = {
  args: {
    heading: "Autopay Calendar w 4 krokach",
    description:
      "Nie potrzebujesz wdrożeniowca ani szkoleń. Zakładasz konto, wpisujesz usługi i od razu przyjmujesz rezerwacje z płatnością online — na własnej stronie, bez pośredników.",
    image: placeholder,
    imageAlt: "Pulpit Autopay Calendar z listą rezerwacji na dany dzień",
    steps: [
      { title: "Załóż konto i skonfiguruj swój profil", body: "Podaj dane swojej firmy, godziny otwarcia, logo i zdjęcia. Profil gotowy w kilka minut." },
      { title: "Dodaj usługi, cennik i pracowników", body: "Wprowadź usługi, dodaj pracowników i przypisz im stanowiska." },
      { title: "Przyjmuj rezerwacje z jednego pulpitu", body: "Wszystkie rezerwacje i dane klientów widzisz w jednym panelu." },
      { title: "Zarządzaj sprzedażą bez ręcznego liczenia", body: "Historia transakcji, metody płatności i statusy zawsze pod ręką." },
    ],
  },
};
