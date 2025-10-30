import type { Meta, StoryObj } from "@storybook/react"
import { ActionMenu } from "./ActionMenu"
import { Button } from "../../atoms/Button"
import type { ActionMenuItem } from "./ActionMenu.types"

const meta: Meta<typeof ActionMenu> = {
  title: "Molecules/Action Menu",
  component: ActionMenu,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#101820" },
        { name: "light", value: "#FFFFFF" },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    trigger: {
      table: {
        disable: true,
      },
    },
    items: {
      control: "object",
      description: "Array de itens de menu (`MenuItem[]`)",
    },
    side: {
      control: { type: "radio" },
      options: ["top", "bottom", "left", "right"],
      description: "O lado do trigger onde o menu deve aparecer.",
    },
    align: {
      control: { type: "radio" },
      options: ["start", "center", "end"],
      description: "O alinhamento do menu em relação ao lado.",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const defaultItems: ActionMenuItem[] = [
  {
    id: "1",
    label: "Editar",
    icon: "edit",
    onClick: () => alert("Editar clicado"),
  },
  {
    id: "2",
    label: "Copiar",
    icon: "duplicate",
    onClick: () => alert("Copiar clicado"),
  },
  {
    id: "3",
    label: "Mover",
    icon: "redo",
    disabled: true,
    onClick: () => alert("Mover clicado"),
  },
  {
    id: "4",
    label: "Excluir",
    icon: "trash",
    onClick: () => alert("Excluir clicado"),
  },
]

export const Default: Story = {
  name: "Padrão (bottom, start)",
  args: {
    trigger: (
      <Button
        id="trigger-default"
        iconOnly
        icon="menu-dots"
      />
    ),
    items: defaultItems,
    side: "bottom",
    align: "start",
  },
}

// --- Novas histórias para posicionamento ---

export const TopCenter: Story = {
  name: "Posição (top, center)",
  args: {
    trigger: (
      <Button
        id="trigger-top-center"
        icon="menu-dots"
      >
        Top Center
      </Button>
    ),
    items: defaultItems,
    side: "top",
    align: "center",
  },
}

export const RightStart: Story = {
  name: "Posição (right, start)",
  args: {
    trigger: (
      <Button
        id="trigger-right-start"
        icon="menu-dots"
      >
        Right Start
      </Button>
    ),
    items: defaultItems,
    side: "right",
    align: "start",
  },
}

export const LeftEnd: Story = {
  name: "Posição (left, end)",
  args: {
    trigger: (
      <Button
        id="trigger-left-end"
        icon="menu-dots"
      >
        Left End
      </Button>
    ),
    items: defaultItems,
    side: "left",
    align: "end",
  },
}

export const Empty: Story = {
  args: {
    trigger: (
      <Button
        id="trigger-empty"
        iconOnly
        icon="menu-dots"
      />
    ),
    items: [],
  },
}
