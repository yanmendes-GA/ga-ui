import type { Meta, StoryObj } from "@storybook/react"
import React, { useState } from "react"
import { Sidebar } from "./Sidebar"
import type { SidebarNavItem, SidebarProfile } from "./Sidebar.types"
import logoSmall from "../../../../public/symbol.png"
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

// --- Configuração do Storybook ---

const meta: Meta<typeof Sidebar> = {
  title: "Organisms/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered", // O Sidebar ocupa a tela inteira
    docs: {
      description: {
        component:
          "Organismo de navegação principal (Sidebar). Este componente depende das moléculas `ListItem` e `ProfileButton` para funcionar corretamente. Os ícones são renderizados pelo átomo `Icon`.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    logoFull: { control: "text" },
    logoSmall: { control: "text" },
    navItems: { control: "object" },
    profile: { control: "object" },
    activeHref: { control: "text" },
    isCollapsed: { control: "boolean" },
    onToggleCollapse: { action: "onToggleCollapse" },
  },
  args: {
    logoFull: (
      <img
        width="100%"
        src={logoFull}
      ></img>
    ),
    logoSmall: (
      <img
        width="100%"
        src={logoSmall}
      ></img>
    ),
    navItems: mockNavItems,
    profile: mockProfile,
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Template interativo que gerencia o estado 'isCollapsed'
 * para demonstrar a funcionalidade de recolher/expandir.
 */
const InteractiveSidebarTemplate: Story["render"] = args => {
  const [isCollapsed, setIsCollapsed] = useState(args.isCollapsed || false)

  return (
    <Sidebar
      logoFull={<img src={logoFull}></img>}
      logoSmall={<img src={logoSmall}></img>}
      navItems={mockNavItems}
      profile={mockProfile}
      {...args}
      isCollapsed={isCollapsed}
      onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
    />
  )
}

export const Default: Story = {
  name: "Expandido (Padrão)",
  render: InteractiveSidebarTemplate,
  args: {
    isCollapsed: false,
    activeHref: "/dashboard",
  },
}

export const Collapsed: Story = {
  name: "Recolhido",
  render: InteractiveSidebarTemplate,
  args: {
    isCollapsed: true,
    activeHref: "/dashboard",
  },
}
