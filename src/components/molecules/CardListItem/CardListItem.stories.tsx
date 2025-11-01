import type { Meta, StoryObj } from "@storybook/react"
import { CardListItem } from "./CardListItem"
import { Icon, Avatar, Button } from "../../atoms"
import { Chip } from "../../molecules"

const meta: Meta<typeof CardListItem> = {
  title: "Molecules/Card List Item",
  component: CardListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: false },
    cols: {
      control: { type: "number", min: 1, max: 12, step: 1 },
      description: "Máximo de 12 colunas.",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Default",
  args: {
    cols: 5,
    children: (
      <>
        <div className="flex flex-col flex-grow-3 gap-2 overflow-hidden">
          <h3 className="font-bold text-lg text-dark-100 truncate">
            Grupo Acelerador
          </h3>
        </div>

        <div className="flex justify-center items-center">
          <Chip variant="success">Ativo</Chip>
        </div>

        <span className="text-sm text-center text-dark-100">Presencial</span>

        <div
          className="flex items-center justify-center gap-2 text-sm
            text-dark-100"
        >
          <Icon name="calendar" />
          <span>03/10/2025</span>
        </div>

        <div className="text-right">
          <Button
            variant="ghost"
            iconOnly
            icon="menu-dots"
          />
        </div>
      </>
    ),
  },
}

export const ColSpan: Story = {
  name: "Col-span",
  args: {
    cols: 7,
    children: (
      <>
        <div
          className="flex flex-col col-span-3 flex-grow-3 gap-2 overflow-hidden"
        >
          <h3 className="font-bold text-lg text-dark-100 truncate">
            Mentoria sobre financeiro
          </h3>
          <div className="flex items-center gap-2">
            <Avatar
              alt="MT"
              size="sm"
              variant="primary"
            />
            <span className="text-sm text-dark-100 truncate">
              Mentor De teste
            </span>
          </div>
        </div>

        <Chip variant="success">Finalizado</Chip>

        <span className="text-sm text-center text-dark-100">Presencial</span>

        <div
          className="flex items-center justify-center gap-2 text-sm
            text-dark-100"
        >
          <Icon name="calendar" /> <span>03/10/2025</span>
        </div>

        <div className="text-right">
          <Button
            variant="ghost"
            iconOnly
            icon="menu-dots"
          />
        </div>
      </>
    ),
  },
}
