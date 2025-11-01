import type { Meta, StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { FileUploader } from "./FileUploader"

const meta: Meta<typeof FileUploader> = {
  title: "Molecules/File Uploader",
  component: FileUploader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Texto do estado ocioso",
    },
    acceptedFileTypes: {
      control: "text",
      description: "ex: image/png,application/pdf",
    },
    disabled: {
      control: "boolean",
    },
    onFileSelect: {
      action: "fileSelected",
      description: "Callback (file: File | null) => void",
    },
    onView: {
      action: "fileViewed",
      description: "Callback (file: File) => void",
    },
    initialFile: {
      control: "text",
      description: "Arquivo inicial para exibir o estado 'selecionado'",
    },
  },
  args: {
    label: "Upload de documento",
    disabled: false,
    onFileSelect: action("fileSelected"),
  },
}

export default meta
type Story = StoryObj<typeof meta>

const mockFile = new File(
  ["(conteúdo fictício do PDF)"],
  "Documento da mentoria.pdf",
  {
    type: "application/pdf",
  },
)

/**
 * Estado padrão do componente, aguardando um arquivo.
 */
export const Default: Story = {
  args: {
    initialFile: null,
  },
}

/**
 * Estado do componente após um arquivo ser selecionado.
 * O botão "Visualizar" aparece pois a prop `onView` foi fornecida.
 */
export const FileSelected: Story = {
  args: {
    initialFile: mockFile,
    onView: action("fileViewed"),
  },
}

/**
 * Estado "FileSelected" sem a função `onView`.
 * O botão "Visualizar" não deve ser renderizado.
 */
export const SelectedWithoutView: Story = {
  args: {
    initialFile: mockFile,
    onView: undefined,
  },
}

/**
 * Estado desabilitado, sem arquivo.
 */
export const Disabled: Story = {
  args: {
    initialFile: null,
    disabled: true,
  },
}

/**
 * Estado desabilitado, com um arquivo já selecionado.
 * Os botões de ação ficam desabilitados.
 */
export const DisabledWithFile: Story = {
  args: {
    initialFile: mockFile,
    onView: action("fileViewed"),
    disabled: true,
  },
}
