import type { Meta, StoryObj } from "@storybook/react"
import { Breadcrumb } from "./Breadcrumb"
import type { BreadcrumbItem } from "./Breadcrumb.types"

// Mock de um componente <Link> (ex: Next.js ou React Router)
// Isso é crucial para testar a prop 'linkComponent'
const MockLink = ({ href, children, ...props }: any) => (
  <a
    href={href}
    {...props}
    onClick={e => {
      e.preventDefault()
      alert(`Navegando para: ${href}`)
    }}
  >
    {children}
  </a>
)

const meta: Meta<typeof Breadcrumb> = {
  title: "Molecules/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "Array de itens (`{ label: string, href: string }`)",
    },
    separatorIcon: {
      control: "text",
      description: "Nome do ícone (ex: 'chevron_right')",
    },
    linkComponent: {
      table: {
        disable: true, // Esconde das controls, pois usamos o MockLink
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const defaultItems: BreadcrumbItem[] = [
  { label: "Dashboard", href: "/" },
  { label: "Análises", href: "/analytics" },
  { label: "Tempo Real", href: "/analytics/real-time", isCurrent: true },
]

export const Default: Story = {
  args: {
    items: defaultItems,
    linkComponent: MockLink,
    separatorIcon: "chevron_right",
  },
}

export const TwoItems: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Configurações", href: "/settings", isCurrent: true },
    ],
    linkComponent: MockLink,
    separatorIcon: "chevron_right",
  },
}

export const CustomSeparator: Story = {
  args: {
    items: defaultItems,
    linkComponent: MockLink,
    separatorIcon: "arrow_forward_ios", // Ícone diferente, só para testar
  },
}
