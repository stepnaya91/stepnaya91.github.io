import { type Preview } from "@storybook/react";
import { ThemeProvider } from "../src/components/ThemeProvider"
import { LanguageProvider } from "../src/components/LanguageProvider"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
    decorators: [
        (Story) => (
          <LanguageProvider>
            <ThemeProvider>
                <Story/>
            </ThemeProvider>
          </LanguageProvider>
    )]
};

export default preview;
