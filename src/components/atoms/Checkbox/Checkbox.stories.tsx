import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./Checkbox"

const meta = {
  title: "Atoms/Checkbox",
  component: Checkbox,
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
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "checkbox-default",
    checked: false,
    disabled: false,
  },
}

export const Checked: Story = {
  args: {
    id: "checkbox-checked",
    checked: true,
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    id: "checkbox-disabled",
    checked: false,
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    id: "checkbox-disabled-checked",
    checked: true,
    disabled: true,
  },
}
