import type { Meta, StoryObj } from "@storybook/react"
import { Select } from "./Select"
import type { SelectOption } from "./Select.types"
import { useState } from "react"

const meta: Meta<typeof Select> = {
  title: "Molecules/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  decorators: [
    Story => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    label: { control: "text" },
    iconLeft: { control: "text" },
    variant: {
      control: { type: "radio" },
      options: ["default", "success", "error"],
    },
    disabled: { control: "boolean" },
    readonly: { control: "boolean" },
    placeholder: { control: "text" },
    value: { control: "text" },
    options: { control: "object" },
    onValueChange: { action: "onValueChange" },
  },
  args: {
    id: "default-select",
    label: "Label",
    placeholder: "Placeholder",
    options: [
      { value: "1", label: "Option 01" },
      { value: "2", label: "Option 02" },
      { value: "3", label: "Option 03" },
      { value: "4", label: "Option 04" },
    ],
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Renderizador com estado
const SelectWithState = (args: any) => {
  const [value, setValue] = useState(args.value)

  return (
    <Select
      {...args}
      value={value}
      onValueChange={setValue}
    />
  )
}

export const Default: Story = {
  name: "Padrão (Placeholder)",
  render: SelectWithState,
}

export const Selected: Story = {
  name: "Valor Selecionado",
  render: SelectWithState,
  args: {
    value: "2", // "Option 02"
  },
}

export const IconLeft: Story = {
  name: "Ícone à Esquerda",
  render: SelectWithState,
  args: {
    iconLeft: "person",
    value: "3", // "Option 03"
  },
}
