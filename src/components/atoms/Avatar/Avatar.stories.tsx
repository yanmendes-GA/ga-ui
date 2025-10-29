import type { Meta, StoryObj } from "@storybook/react"
import { Avatar } from "./Avatar"
import GALogo from "@/assets/images/ga-logo.png"

const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    alt: "John Doe",
    size: "md",
    variant: "default",
  },
}

export const WithImage: Story = {
  args: {
    src: GALogo,
    alt: "Grupo Acelerador Logo",
    size: "lg",
  },
}

export const Small: Story = {
  args: {
    alt: "Small Avatar",
    size: "sm",
  },
}

export const Medium: Story = {
  args: {
    alt: "Medium Avatar",
    size: "md",
  },
}

export const Large: Story = {
  args: {
    alt: "Large Avatar",
    size: "lg",
  },
}

export const ExtraLarge: Story = {
  args: {
    alt: "Extra Large Avatar",
    size: "xl",
  },
}

export const WithCustomFallback: Story = {
  args: {
    alt: "Custom User",
    fallback: "CF",
    size: "xl",
  },
}
