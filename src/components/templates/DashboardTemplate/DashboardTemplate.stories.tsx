import type { Meta, StoryObj } from "@storybook/react"
import { DashboardTemplate } from "./DashboardTemplate"

const meta: Meta<typeof DashboardTemplate> = {
  title: "Templates/Dashboard Template",
  component: DashboardTemplate,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    sidebar: {
      control: false,
      description: "Node para o slot da sidebar",
    },
    toolbar: {
      control: false,
      description: "Node para o slot do toolbar",
    },
    mainContent: {
      control: false,
      description: "Node para o slot de conteúdo principal",
    },
    footer: {
      control: false,
      description: "Node para o slot do footer",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// --- Mocks para simular os organismos ---

const MockSidebar = () => (
  <div className="relative h-full w-full p-6 text-white">
    <div className="h-10 w-32 rounded bg-dark-300 mb-8 opacity-50" />{" "}
    {/* Logo */}
    <div className="h-8 w-full rounded bg-dark-300 mb-4 opacity-50" />{" "}
    {/* Nav 1 */}
    <div
      className="flex h-10 items-center justify-center rounded-lg border
        border-primary bg-primary/20 p-2 text-sm font-bold text-primary"
    >
      Sidebar Slot
    </div>
    <div className="h-8 w-full rounded bg-dark-300 my-4 opacity-50" />{" "}
    {/* Nav 3 */}
    <div className="h-8 w-full rounded bg-dark-300 mb-4 opacity-50" />{" "}
    {/* Nav 4 */}
    <div
      className="absolute bottom-6 left-6 right-6 h-12 rounded bg-dark-300
        opacity-50"
    />{" "}
    {/* User */}
  </div>
)

const MockToolbar = () => (
  <div className="flex h-[92px] w-full items-center justify-between px-8 py-6">
    <div className="h-6 w-48 rounded bg-dark-300 opacity-50" />{" "}
    {/* Breadcrumbs */}
    <div className="flex items-center gap-4">
      <div className="h-10 w-64 rounded bg-dark-300 opacity-50" />{" "}
      {/* Search */}
      <div className="h-10 w-10 rounded-lg border border-dark-300 opacity-50" />{" "}
      {/* Icon */}
      <div className="h-10 w-10 rounded-lg border border-dark-300 opacity-50" />{" "}
      {/* Icon */}
    </div>
  </div>
)

const MockMainContent = () => (
  <div className="w-full px-8">
    <div className="w-full rounded-lg bg-dark-500 text-dark-200">
      <div
        className="flex items-center justify-between border-b border-dark-400
          p-6"
      >
        <div className="h-8 w-48 rounded bg-dark-300 opacity-50" />{" "}
        {/* Title */}
        <div className="h-12 w-40 rounded-lg bg-primary opacity-50" />{" "}
        {/* Button */}
      </div>
      <div className="h-[400px] p-6">Main Content Slot (Ex: Tabela)</div>
      <div
        className="flex items-center justify-between border-t border-dark-400
          p-6"
      >
        <div className="h-6 w-24 rounded bg-dark-300 opacity-50" />{" "}
        {/* Total */}
        <div className="h-8 w-64 rounded bg-dark-300 opacity-50" />{" "}
        {/* Pagination */}
      </div>
    </div>
  </div>
)

const MockFooter = () => (
  <div
    className="flex w-full items-center justify-between px-8 py-4 text-sm
      text-dark-200"
  >
    <div>Footer Slot (Ex: Grupo Acelerador 2025)</div>
    <div className="opacity-50">V.1.0.2</div>
  </div>
)

export const Default: Story = {
  args: {
    sidebar: <MockSidebar />,
    toolbar: <MockToolbar />,
    mainContent: <MockMainContent />,
    footer: <MockFooter />,
  },
}
