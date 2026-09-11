import type { Meta, StoryObj } from "@storybook/react";
import { CookieConsentScript } from "./CookieConsentScript";

/**
 * No visual preview: mounted here via client-side rendering, this renders
 * an inert `<script>` tag that never executes (see the component's own doc
 * comment — it only does its job server-rendered, as in real Next.js
 * usage). Included so the component is discoverable in the catalog and its
 * docs/props render via Storybook autodocs, not to demonstrate an
 * interactive consent banner. A benign React console warning about the
 * script tag is expected here.
 */
const meta: Meta<typeof CookieConsentScript> = {
  title: "Organisms/CookieConsentScript",
  component: CookieConsentScript,
};
export default meta;
type Story = StoryObj<typeof CookieConsentScript>;

export const Default: Story = {
  args: {},
};
