import type { Meta, StoryObj } from "@storybook/react"
import { Switch } from "./Switch"

const meta: Meta<typeof Switch> = {
  title: "Atoms/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    onChange: {
      action: "toggled",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Off: Story = {
  args: {
    checked: false,
    disabled: false,
  },
}

export const On: Story = {
  args: {
    checked: true,
    disabled: false,
  },
}

export const DisabledOff: Story = {
  args: {
    checked: false,
    disabled: true,
  },
}

export const DisabledOn: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}
