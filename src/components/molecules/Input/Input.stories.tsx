import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./Input"
import { useState } from "react"

const meta: Meta<typeof Input> = {
  title: "Molecules/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  decorators: [
    Story => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    label: { control: "text" },
    iconLeft: { control: "text" },
    iconRight: { control: "text" },
    variant: {
      control: { type: "radio" },
      options: ["default", "success", "error"],
    },
    disabled: { control: "boolean" },
    onIconClick: { action: "iconClicked" },
    placeholder: { control: "text" },
    value: { control: "text" },
  },
  args: {
    id: "default-input",
    label: "Label",
    placeholder: "Placeholder",
  },
}

export default meta
type Story = StoryObj<typeof meta>

const InputWithState = (args: any) => {
  const [value, setValue] = useState(args.value || "")
  const [showPass, setShowPass] = useState(false)

  return (
    <Input
      {...args}
      value={value}
      isPassword={showPass}
      onChange={e => setValue(e.target.value)}
    />
  )
}

const PasswordInputStory = (args: any) => {
  const [value, setValue] = useState("secret123")
  const [showPass, setShowPass] = useState(false)

  return (
    <Input
      {...args}
      id="password-input"
      label="Senha"
      value={value}
      onChange={e => setValue(e.target.value)}
      isPassword={!showPass}
      iconRight={showPass ? "eye" : "crossed-eye"}
      onIconClick={() => setShowPass(prev => !prev)}
    />
  )
}

export const Default: Story = {
  name: "Padrão",
}

export const IconRight: Story = {
  name: "Ícone à Direita",
  render: InputWithState,
  args: {
    id: "icon-right-input",
    iconRight: "search",
    onIconClick: undefined,
  },
}

export const IconLeft: Story = {
  name: "Ícone à Esquerda",
  render: InputWithState,
  args: {
    id: "icon-left-input",
    iconLeft: "search",
    onIconClick: undefined,
  },
}

export const ClickableIcon: Story = {
  name: "Ícone clicável",
  render: PasswordInputStory,
  args: {
    id: "icon-clickable-input",
  },
}

export const Error: Story = {
  name: "Estado: Erro",
  render: InputWithState,
  args: {
    id: "error-input",
    variant: "error",
    value: "Input Value",
  },
}

export const Success: Story = {
  name: "Estado: Sucesso",
  render: InputWithState,
  args: {
    id: "success-input",
    variant: "success",
    value: "Input Value",
  },
}

export const Readonly: Story = {
  name: "Estado: Somente leitura",
  args: {
    id: "readonly-input",
    readonly: true,
    value: "https://www.grupoacelerador.com.br",
  },
}

export const Disabled: Story = {
  name: "Estado: Desabilitado",
  args: {
    id: "disabled-input",
    disabled: true,
    iconLeft: "home",
    placeholder: "Placeholder",
  },
}
