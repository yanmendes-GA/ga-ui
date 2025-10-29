import type { Meta, StoryObj } from "@storybook/react"
import { ListItem } from "./ListItem"

const meta: Meta<typeof ListItem> = {
  title: "Molecules/ListItem",
  component: ListItem,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#101820" }],
    },
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
    href: {
      control: "text",
      if: { arg: "as", eq: "a" },
    },
    onClick: {
      action: "clicked",
      if: { arg: "as", eq: "button" },
    },
  },
  args: {
    as: "a",
    label: "Dashboard",
    icon: "chart-pie-alt",
    isActive: false,
    disabled: false,
    href: "#",
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
    href: undefined,
  },
}
