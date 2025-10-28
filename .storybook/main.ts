import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(viteConfig) {
    // Remove plugin do Tailwind (não é mais necessário)
    return mergeConfig(viteConfig, {
      css: {
        postcss: "./postcss.config.js", // garante que o Tailwind seja processado
      },
      assetsInclude: ["/sb-preview/runtime.js"],
    });
  },
};

export default config;
