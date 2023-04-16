import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: false,
    },
    layout: "fullscreen",
  },
  decorators: [
    (story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>,
  ],
};

export default preview;
