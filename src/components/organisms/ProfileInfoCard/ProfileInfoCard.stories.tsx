import type { Meta, StoryObj } from "@storybook/react"
import { ProfileInfoCard } from "./ProfileInfoCard"
// @ts-ignore
import Logo from "@/assets/images/logo_ga.png"

const meta = {
  title: "Organisms/Profile Info Card",
  component: ProfileInfoCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ProfileInfoCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Padrão",
  args: {
    name: "Yan R. Mendes",
    company: "Grupo Acelerador",
    avatarProps: { src: Logo },
    infoItems: ["yan.mendes@grupoacelerador.com.br", "(41) 99999-9999"],
  },
}

export const DefaultAvatar: Story = {
  name: "Variante padrão do Avatar",
  args: {
    name: "Yan R. Mendes",
    company: "Grupo Acelerador",
    avatarProps: {
      variant: "default",
      src: "https://github.com/ga-dev-inc.png",
    },
    infoItems: ["yan.mendes@grupoacelerador.com.br", "(41) 99999-9999"],
  },
}

export const PrimaryAvatar: Story = {
  name: "Variante Primária do Avatar",
  args: {
    name: "Yan R. Mendes",
    company: "Grupo Acelerador",
    avatarProps: {
      src: "https://github.com/ga-dev-inc.png",
    },
    infoItems: ["yan.mendes@grupoacelerador.com.br", "(41) 99999-9999"],
  },
}

export const NoListItems: Story = {
  name: "Sem Lista",
  args: {
    name: "Yan R. Mendes",
    company: "Grupo Acelerador",
    avatarProps: {
      src: "https://github.com/ga-dev-inc.png",
    },
    infoItems: [],
  },
}
