import type { Meta, StoryObj } from "@storybook/react"
import { Chip } from "./Chip"

const meta: Meta<typeof Chip> = {
  title: "Molecules/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "warning", "success", "error", "info"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * A variante padrão do chip.
 */
export const Default: Story = {
  args: {
    variant: "default",
    children: "Default",
  },
}

/**
 * A variante 'warning' do chip.
 */
export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
}

/**
 * A variante 'success' do chip.
 */
export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
}

/**
 * A variante 'error' do chip.
 */
export const Error: Story = {
  args: {
    variant: "error",
    children: "Error",
  },
}

/**
 * A variante 'info' do chip.
 */
export const Info: Story = {
  args: {
    variant: "info",
    children: "Info",
  },
}

/**
 * Exibe todos os chips lado a lado para comparação.
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Chip variant="default">Default</Chip>
      <Chip variant="warning">Warning</Chip>
      <Chip variant="success">Success</Chip>
      <Chip variant="error">Error</Chip>
      <Chip variant="info">Info</Chip>
    </div>
  ),
}
