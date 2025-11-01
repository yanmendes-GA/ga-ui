import type { Meta, StoryObj } from "@storybook/react"
import { Toolbar } from "./Toolbar"

import { Button } from "../../atoms/Button"
import { Input } from "../../molecules/Input"
import type { BreadcrumbItem } from "../../molecules/Breadcrumb/Breadcrumb.types"

const meta: Meta<typeof Toolbar> = {
  title: "Organisms/Toolbar",
  component: Toolbar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    breadcrumbItems: {
      control: "object",
      description: "Array de itens para o Breadcrumb.",
    },
    children: {
      control: false,
      description: "Slot para os componentes da direita (Input, Buttons).",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const mockItems: BreadcrumbItem[] = [
  { label: "Início", href: "#" },
  { label: "Grupo Acelerador", href: "#" },
  { label: "Mentorias", href: "#", isCurrent: true },
]

export const Default: Story = {
  name: "Padrão (como na imagem)",
  args: {
    breadcrumbItems: mockItems,
    children: (
      <>
        <div className="flex-1">
          <Input
            id="search"
            iconLeft="search"
            placeholder="Pesquisar"
          />
        </div>
        <div>
          <Button
            variant="ghost"
            iconOnly
            size="sm"
            icon="filters"
          />
          <Button
            variant="ghost"
            iconOnly
            size="sm"
            icon="bell"
          />
          <Button
            variant="ghost"
            iconOnly
            size="sm"
            icon="sun"
          />
        </div>
      </>
    ),
  },
}

export const Simple: Story = {
  name: "Simples (sem ações)",
  args: {
    breadcrumbItems: [
      { label: "Página Inicial", href: "#" },
      { label: "Configurações", href: "#", isCurrent: true },
    ],
    children: null,
  },
}
