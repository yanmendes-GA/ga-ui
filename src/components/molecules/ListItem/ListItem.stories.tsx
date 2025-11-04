import type { Meta, StoryObj } from "@storybook/react"
import { ListItem } from "./ListItem"
import { fn } from "@storybook/test"

const meta: Meta<typeof ListItem> = {
  title: "Molecules/ListItem",
  component: ListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    icon: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    onClick: fn(),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Clickable Item",
    icon: "filters",
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    label: "Disabled Item",
    icon: "filters",
    disabled: true,
  },
}

export const NoIcon: Story = {
  args: {
    label: "No Icon Item",
    disabled: false,
  },
}