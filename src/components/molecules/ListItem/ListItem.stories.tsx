import type { Meta, StoryObj } from "@storybook/react"
import { ListItem } from "./ListItem"

const meta: Meta<typeof ListItem> = {
  title: "Molecules/List Item",
  component: ListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["a", "button"],
    },
    label: {
      control: "text",
    },
    icon: {
      control: "text",
    },
    isActive: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    to: {
      control: "text",
      if: { arg: "as", eq: "a" },
    },
    onClick: {
      action: "clicked",
    },
  },
  args: {
    as: "a",
    label: "Dashboard",
    icon: "chart-pie-alt",
    isActive: false,
    disabled: false,
    to: "#",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isActive: false,
  },
}

export const Active: Story = {
  args: {
    isActive: true,
  },
}

export const Disabled: Story = {
  args: {
    isActive: false,
    disabled: true,
  },
}

export const AsButton: Story = {
  args: {
    as: "button",
    label: "Click Me",
    icon: "chart-pie-alt",
    to: undefined,
  },
}
