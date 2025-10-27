import type { StorybookConfig } from "@storybook/react-vite"
import { mergeConfig } from "vite"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(viteConfig) {
    // Importa o plugin do Tailwind para Vite
    const { default: tailwindcss } = await import("@tailwindcss/vite")

    return mergeConfig(viteConfig, {
      plugins: [
        // Adiciona o plugin do Tailwind para Vite à configuração
        tailwindcss(),
      ],
    })
  },
}

export default config
