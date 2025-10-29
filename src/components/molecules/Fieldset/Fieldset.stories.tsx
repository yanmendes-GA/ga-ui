import type { Meta, StoryObj } from "@storybook/react"
import { Fieldset } from "./Fieldset"

const meta: Meta<typeof Fieldset> = {
  title: "Molecules/Fieldset",
  component: Fieldset,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    legend: {
      control: "text",
    },
    children: {
      control: false,
    },
    className: {
      control: "text",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    legend: "Your Name",
    children: (
      <input
        type="text"
        placeholder="Type here..."
        className="w-full bg-transparent text-white outline-none"
      />
    ),
  },
}
