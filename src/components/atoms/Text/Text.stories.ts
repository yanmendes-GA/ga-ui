import type { Meta, StoryObj } from "@storybook/react"
import { Text } from "./Text"
import type { TextVariant } from "./Text.types"

const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
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
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "body",
        "button",
        "label",
        "small",
        "caption",
      ] as TextVariant[],
    },
    as: {
      control: "text",
      description: "Elemento HTML (p, span, h1, h2, etc.)",
    },
  },
  args: {
    children: "The quick brown fox jumps over the lazy dog",
    variant: "body",
    as: "p",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "body",
    children: "Body (Default)",
  },
}

export const H1: Story = {
  args: { variant: "h1", children: "Headings 01", as: "h1" },
}
export const H2: Story = {
  args: { variant: "h2", children: "Headings 02", as: "h2" },
}
export const H3: Story = {
  args: { variant: "h3", children: "Headings 03", as: "h3" },
}
export const H4: Story = {
  args: { variant: "h4", children: "Headings 04", as: "h4" },
}
export const H5: Story = {
  args: { variant: "h5", children: "Headings 05", as: "h5" },
}
export const H6: Story = {
  args: { variant: "h6", children: "Headings 06", as: "h6" },
}

export const Button: Story = {
  args: {
    variant: "button",
    children: "Button Text",
  },
}

export const Label: Story = {
  args: {
    variant: "label",
    children: "Label Text",
    as: "label",
  },
}

export const Small: Story = {
  args: {
    variant: "small",
    children: "Small Text",
  },
}

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "Caption Text",
  },
}
