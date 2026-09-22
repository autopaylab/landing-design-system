import type { Meta, StoryObj } from "@storybook/react";
import { RequirementsChecklistSection } from "./RequirementsChecklistSection";

const meta: Meta<typeof RequirementsChecklistSection> = {
  title: "Organisms/RequirementsChecklistSection",
  component: RequirementsChecklistSection,
};
export default meta;
type Story = StoryObj<typeof RequirementsChecklistSection>;

export const Default: Story = {
  args: {
    eyebrow: "Czego to naprawdę wymaga",
    heading: "Acquiring wymaga więcej niż licencji.",
    description: "Aby działać jako acquirer, trzeba byłoby zbudować i prowadzić to wszystko. W Autopay już działa.",
    items: [
      { label: "Wdrażanie merchantów", hasFootnote: true },
      { label: "KYC / AML i ocena ryzyka", hasFootnote: true },
      { label: "Przetwarzanie i rozliczanie transakcji" },
      { label: "Uzgadnianie i raportowanie" },
      { label: "Zarządzanie nadużyciami i obciążeniami zwrotnymi" },
      { label: "Monitorowanie transakcji" },
    ],
    caption: "Każdy obszar wymaga własnych zespołów, procesów i systemów. My już prowadzimy je na skalę.",
    footnote:
      "* Payment Facilitator odpowiada za prawidłowe wdrażanie merchantów, ich bieżące monitorowanie oraz zarządzanie związanym z nimi ryzykiem.",
  },
};
