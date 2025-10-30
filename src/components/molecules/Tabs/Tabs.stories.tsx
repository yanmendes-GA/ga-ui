import type { Meta, StoryObj } from "@storybook/react"
import { Tabs } from "./Tabs"
import type { TabItem } from "./Tabs.types"

const meta: Meta<typeof Tabs> = {
  title: "Molecules/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    // Adiciona um fundo escuro para melhor visualização,
    // usando a cor $Dark do seu tailwind.config
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#F6E5D2" }, // Primary-100
        { name: "dark", value: "#101820" }, // Dark
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    tabs: {
      control: "object",
      description: "Array de objetos para configurar as tabs.",
    },
    defaultTab: {
      control: "text",
      description: "O 'id' da tab que deve iniciar ativa.",
    },
    onTabChange: {
      action: "onTabChange",
      description: "Função callback disparada na troca de tab.",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const sampleTabs: TabItem[] = [
  { id: "tab1", label: "Default" },
  { id: "tab2", label: "Default" },
  { id: "tab3", label: "Default" },
  { id: "tab4", label: "Default" },
]

export const Default: Story = {
  args: {
    tabs: sampleTabs,
    defaultTab: "tab3", // Define a terceira tab como ativa para bater com a imagem
  },
}

export const WithDisabledTab: Story = {
  args: {
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "activity", label: "Activity" },
      { id: "settings", label: "Settings", disabled: true },
      { id: "profile", label: "Profile" },
    ],
    defaultTab: "overview",
  },
}

export const FirstTabActive: Story = {
  args: {
    tabs: sampleTabs,
    defaultTab: "tab1",
  },
}
