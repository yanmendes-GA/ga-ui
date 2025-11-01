import type { Meta, StoryObj } from "@storybook/react"
import { Stepper } from "./Stepper"

const meta: Meta<typeof Stepper> = {
  title: "Molecules/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  decorators: [
    Story => (
      <div className="w-[200px] max-w-[700px]">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    totalSteps: {
      control: { type: "number", min: 1, max: 10, step: 1 },
      description: "Número total de passos.",
    },
    currentStep: {
      control: { type: "number", min: 0, max: 10, step: 1 },
      description: "Índice (base 0) do passo atual.",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Interativo",
  args: {
    totalSteps: 2,
    currentStep: 0,
  },
}

export const Step1: Story = {
  name: "Passo completo",
  args: {
    totalSteps: 3,
    currentStep: 1,
  },
}

export const AllCompleted: Story = {
  name: "Todo completo",
  args: {
    totalSteps: 3,
    currentStep: 4,
  },
}
