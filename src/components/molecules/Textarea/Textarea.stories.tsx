import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "./Textarea"
import { useState } from "react"

const meta: Meta<typeof Textarea> = {
  title: "Molecules/Textarea",
  component: Textarea,
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
    variant: {
      control: { type: "radio" },
      options: ["default", "success", "error"],
    },
    disabled: { control: "boolean" },
    readonly: { control: "boolean" },
    placeholder: { control: "text" },
    value: { control: "text" },
    rows: { control: { type: "number", min: 2, max: 10 } },
  },
  args: {
    id: "default-textarea",
    label: "Label",
    placeholder: "Placeholder",
    rows: 4,
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Renderizador com estado
const TextareaWithState = (args: any) => {
  const [value, setValue] = useState(args.value || "")

  return (
    <Textarea
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}

export const Default: Story = {
  name: "Padrão",
  render: TextareaWithState,
}

export const Error: Story = {
  name: "Estado: Erro",
  render: TextareaWithState,
  args: {
    id: "error-textarea",
    variant: "error",
    value: "Valor inválido...",
  },
}

export const Success: Story = {
  name: "Estado: Sucesso",
  render: TextareaWithState,
  args: {
    id: "success-textarea",
    variant: "success",
    value: "Tudo certo!",
  },
}

export const Readonly: Story = {
  name: "Estado: Somente leitura",
  args: {
    id: "readonly-textarea",
    readonly: true,
    value: "Este texto não pode ser alterado.",
  },
}

export const Disabled: Story = {
  name: "Estado: Desabilitado",
  args: {
    id: "disabled-textarea",
    disabled: true,
    iconLeft: "description",
    placeholder: "Placeholder",
  },
}
