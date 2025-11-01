import type { Meta, StoryObj } from "@storybook/react"
import { Sidebar } from "./Sidebar"
import type { SidebarNavItem, SidebarProfile } from "./Sidebar.types"
// @ts-ignore
import logoSmall from "../../../../public/symbol.png"
// @ts-ignore
import logoFull from "../../../../public/horizontal-logo.png"

// Mock dos dados de Navegação (baseado na imagem)
const mockNavItems: SidebarNavItem[] = [
  { label: "Dashboard", icon: "chart-pie-alt", href: "/dashboard" },
  { label: "Mentorias", icon: "diploma", href: "/mentorias" },
  { label: "Empresas", icon: "building", href: "/empresas" },
  { label: "Relatórios", icon: "audit", href: "/relatorios" },
  { label: "Configurações", icon: "settings", href: "/configuracoes" },
]

// Mock dos dados de Perfil (baseado na imagem)
const mockProfile: SidebarProfile = {
  name: "Nome do Beltrano",
  role: "Mentor",
  avatarFallback: "GA",
}

const mockProfileWithAvatar: SidebarProfile = {
  ...mockProfile,
  avatarSrc: "https://github.com/garridothedev.png",
}

// --- Configuração do Storybook ---

const meta: Meta<typeof Sidebar> = {
  title: "Organisms/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen", // O Sidebar ocupa a tela inteira
    docs: {
      description: {
        component:
          "Organismo de navegação principal (Sidebar). Este componente depende das moléculas `ListItem` e `ProfileButton` para funcionar corretamente. Os ícones são renderizados pelo átomo `Icon`.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    logoFull: {
      control: "text",
      description: "O logo a ser exibido quando o sidebar está expandido.",
    },
    logoSmall: {
      control: "text",
      description: "O logo a ser exibido quando o sidebar está recolhido.",
    },
    navItems: {
      control: "object",
      description: "Um array de objetos de item de navegação.",
    },
    profile: {
      control: "object",
      description: "Um objeto contendo os dados do perfil do usuário.",
    },
    activeLink: {
      control: "select",
      options: mockNavItems.map(item => item.href),
      description:
        "A URL ativa no momento, para destacar o `ListItem` correspondente.",
    },
    collapsable: {
      control: "boolean",
      description: "Controla se o sidebar é recolhível.",
    },
  },
  args: {
    logoFull: (
      <img
        width="100%"
        src={logoFull}
        alt="Logo"
      />
    ),
    logoSmall: (
      <img
        width="100%"
        src={logoSmall}
        alt="Small Logo"
      />
    ),
    navItems: mockNavItems,
    profile: mockProfile,
    collapsable: true,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Expandido (Padrão)",
  args: {
    activeHref: "/dashboard",
  },
}

export const Collapsed: Story = {
  name: "Recolhido",
  args: {
    ...Default.args,
  },
  // @ts-ignore
  play: async ({ canvasElement }) => {
    const { getByRole } = require("@storybook/testing-library")
    const canvas = getByRole(canvasElement, "button")
    canvas.click()
  },
}

export const WithAvatar: Story = {
  name: "Com Avatar",
  args: {
    ...Default.args,
    profile: mockProfileWithAvatar,
  },
}

export const NotCollapsable: Story = {
  name: "Não Recolhível",
  args: {
    ...Default.args,
    collapsable: false,
  },
}
