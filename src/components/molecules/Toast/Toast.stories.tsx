import type { Meta, StoryObj } from "@storybook/react"
import { Toast } from "./Toast"

const meta: Meta<typeof Toast> = {
  title: "Molecules/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: null },
  },
  tags: ["autodocs"],
  argTypes: {
    message: {
      control: "text",
    },
    variant: {
      control: { type: "select" },
      options: ["success", "warning", "error", "info"],
    },
    autoClose: {
      control: "number",
      description: "Tempo em Milisegundos",
    },
    onClose: {
      control: false,
    },
  },
  args: {
    message: "This is a toast message!",
    autoClose: 0,
    onClose: () => {
      console.log("onClose triggered")
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    variant: "success",
    message: "Esta é uma mensagem de sucesso!",
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
    message: "Esta é uma mensagem de aviso!",
  },
}

// Renomeado para 'ErrorStory' para evitar conflito com o tipo 'Error'
export const ErrorStory: Story = {
  args: {
    variant: "error",
    message: "esta é uma mensagem de erro!",
  },
}

export const Info: Story = {
  args: {
    variant: "info",
    message: "Esta é uma mensagem informativa!",
  },
}

export const NoAutoClose: Story = {
  args: {
    variant: "success",
    message: "Este toast não fechará automaticamente.",
    autoClose: 0,
  },
}
