import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { RichTextEditor } from "./RichTextEditor"
import type { RichTextControl } from "./RichTextEditor.types"

const allControls: RichTextControl[] = [
  "undo",
  "redo",
  "|",
  "bold",
  "italic",
  "underline",
  "strike",
  "|",
  "heading-1",
  "heading-2",
  "heading-3",
  "paragraph",
  "|",
  "bulletList",
  "orderedList",
  "blockquote",
  "|",
  "link",
  "code",
  "clear",
]

const meta: Meta<typeof RichTextEditor> = {
  title: "Molecules/Rich Text Editor",
  component: RichTextEditor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    label: { control: "text" },
    value: { control: "text" },
    onChange: { action: "onChange" },
    variant: {
      control: { type: "radio" },
      options: ["default", "success", "error"],
    },
    disabled: { control: "boolean" },
    readonly: { control: "boolean" },
    placeholder: { control: "text" },
    controls: {
      control: { type: "check" },
      options: allControls,
      description: "Controles da toolbar. O '|' é um divisor.",
    },
  },
  args: {
    id: "default-richtext",
    label: "Editor de Texto",
    placeholder: "Comece a escrever...",
    disabled: false,
    readonly: false,
    variant: "default",
  },
}

export default meta
type Story = StoryObj<typeof meta>

const RichTextWithState = (args: any) => {
  const [value, setValue] = useState(
    args.value ||
      "<p>Este é um <strong>conteúdo</strong> <em>inicial</em> de exemplo.</p>",
  )

  return (
    <RichTextEditor
      {...args}
      value={value}
      onChange={html => {
        setValue(html)
        args.onChange(html)
      }}
    />
  )
}

export const Default: Story = {
  name: "Padrão",
  render: RichTextWithState,
  args: {
    // Os controles default já vêm do componente
  },
}

export const Error: Story = {
  name: "Estado: Erro",
  render: RichTextWithState,
  args: {
    id: "error-richtext",
    variant: "error",
    value: "<p>Este campo tem um erro.</p>",
  },
}

export const Success: Story = {
  name: "Estado: Sucesso",
  render: RichTextWithState,
  args: {
    id: "success-richtext",
    variant: "success",
    value: "<p>Informação validada com sucesso!</p>",
  },
}

export const Readonly: Story = {
  name: "Estado: Somente leitura",
  render: RichTextWithState,
  args: {
    id: "readonly-richtext",
    readonly: true,
    value:
      "<p>Este conteúdo é <strong>apenas para leitura</strong>. Note como a toolbar desaparece.</p>",
  },
}

export const Disabled: Story = {
  name: "Estado: Desabilitado",
  render: RichTextWithState,
  args: {
    id: "disabled-richtext",
    disabled: true,
    value: "<p>Este editor está completamente desabilitado.</p>",
  },
}

export const FullControls: Story = {
  name: "Toolbar: Completa",
  render: RichTextWithState,
  args: {
    id: "full-controls-richtext",
    label: "Editor Completo (com divisores)",
    controls: allControls,
    value: "<p>Testando <strong>todos</strong> os <em>botões</em>.</p>",
  },
}
