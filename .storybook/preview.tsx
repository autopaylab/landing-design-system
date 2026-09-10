import * as React from "react";
import type { Preview } from "@storybook/react";

import "./preview.css";

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
  globalTypes: {
    theme: {
      description: "Swap the CSS custom properties every component reads its colors from -- proves the palette isn't hardcoded into component source. See .storybook/demo-theme.css.",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "default", title: "Default (source)" },
          { value: "demo", title: "Demo (fictional, proves retheming)" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "default",
  },
  decorators: [
    (Story, context) => (
      <div data-theme={context.globals.theme === "demo" ? "demo" : undefined}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
