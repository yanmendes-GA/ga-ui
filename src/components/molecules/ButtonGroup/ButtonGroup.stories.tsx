import type { Meta, StoryObj } from "@storybook/react"
import { ButtonGroup } from "./ButtonGroup"
import type { ButtonGroupItem } from "./ButtonGroup.types"

// Ícones de exemplo para a variante "icon"
const IconPlaceholder = ({ name }: { name: string }) => (
  <span
    className="flex h-6 w-6 items-center justify-center rounded bg-dark-500
      text-xs"
    title={name}
  >
    {name.charAt(0).toUpperCase()}
  </span>
)

const meta: Meta<typeof ButtonGroup> = {
  title: "Molecules/Button Group",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "icon"],
    },
    multiple: {
      control: "boolean",
    },
    mandatory: {
      control: "boolean",
      description:
        "Quando esta opção está marcada, pelo menos uma opção deve ser selecionada",
    },
    defaultValue: {
      control: "text",
    },
    items: {
      control: "object",
    },
    onSelectionChange: {
      action: "onSelectionChange",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const defaultItems: ButtonGroupItem[] = [
  { value: "1", label: "Opção 1" },
  { value: "2", label: "Opção 2" },
  { value: "3", label: "Opção 3" },
]

const iconItems: ButtonGroupItem[] = [
  { value: "grid", iconName: "list" },
  { value: "list", iconName: "square-t" },
  { value: "table", iconName: "bold" },
]

export const Default: Story = {
  args: {
    items: defaultItems,
    variant: "default",
    defaultValue: "2",
  },
}

export const Multiple: Story = {
  args: {
    ...Default.args,
    multiple: true,
    defaultValue: ["1", "3"],
  },
}

export const Mandatory: Story = {
  args: {
    ...Default.args,
    mandatory: true,
    defaultValue: "1",
  },
}

export const Icon: Story = {
  args: {
    items: iconItems,
    variant: "icon",
    defaultValue: "list",
  },
}

export const IconMultiple: Story = {
  args: {
    ...Icon.args,
    multiple: true,
    defaultValue: ["grid", "list"],
  },
}
