import type { Meta, StoryObj } from "@storybook/react"
import { ProfileButton } from "./ProfileButton"

const meta: Meta<typeof ProfileButton> = {
  title: "Molecules/Profile Button",
  component: ProfileButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    role: { control: "text" },
    avatarProps: { control: "object" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Estado Padrão",
  args: {
    name: "Nome do Beltrano",
    role: "Mentor",
    avatarProps: {
      alt: "Grupo Acelerador",
      src: "",
      size: "md",
      variant: "default",
    },
    disabled: false,
  },
}

export const Disabled: Story = {
  name: "Estado Desabilitado",
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const WithImage: Story = {
  name: "Com Imagem (Avatar)",
  args: {
    ...Default.args,
    avatarProps: {
      src: "https://github.com/shadcn.png",
      alt: "Avatar do Beltrano",
    },
  },
}
