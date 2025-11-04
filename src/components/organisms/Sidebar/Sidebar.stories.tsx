import type { Meta, StoryObj } from "@storybook/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import type { SidebarNavItem } from "./Sidebar.types"
//@ts-ignore
import logoFull from "/public/horizontal-logo.png"
//@ts-ignore
import symbol from "/public/symbol.png"

const meta: Meta<typeof Sidebar> = {
  title: "Organisms/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    collapsable: { control: "boolean" },
  },
  decorators: [
    (Story, context) => (
      <MemoryRouter initialEntries={["/"]}>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <Story />
          <main style={{ padding: "2rem", flex: 1, backgroundColor: "#f4f4f4" }}>
            <Routes>
              <Route path="/" element={<h1>Página: Dashboard</h1>} />
              <Route path="/projetos" element={<h1>Página: Projetos</h1>} />
              <Route path="/config" element={<h1>Página: Configurações</h1>} />
            </Routes>
          </main>
        </div>
      </MemoryRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

const mockProfile = {
  name: "Yan Mendes",
  role: "Front-end developer",
}

const mockNavItems: SidebarNavItem[] = [
  { label: "Dashboard", icon: "home", to: "/" },
  { label: "Projetos", icon: "folder", to: "/projetos" },
  { label: "Configurações", icon: "settings", to: "/config" },
  { label: "Desabilitado", icon: "lock", to: "/disabled", disabled: true },
]

export const Default: Story = {
  args: {
    logoFull: <img src={logoFull} />,
    logoSmall: <img src={symbol} />,
    profile: mockProfile,
    navItems: mockNavItems,
    collapsable: true,
  },
}

export const NonCollapsable: Story = {
  args: {
    ...Default.args,
    collapsable: false,
  },
}