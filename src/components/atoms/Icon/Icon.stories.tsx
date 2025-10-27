import type { Meta, StoryObj } from "@storybook/react"
import { Icon } from "./Icon"

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    name: {
      control: "text",
    },
    color: {
      control: "text",
    },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: "user",
    size: "md",
    color: "primary",
  },
}

export const Small: Story = {
  args: {
    name: "user",
    size: "sm",
    color: "primary",
  },
}

export const Large: Story = {
  args: {
    name: "user",
    size: "lg",
    color: "primary",
  },
}

export const ExtraLarge: Story = {
  args: {
    name: "user",
    size: "xl",
    color: "primary",
  },
}

export const CustomIcon: Story = {
    args: {
      name: "settings",
      size: "md",
      color: "secondary",
    },
  }