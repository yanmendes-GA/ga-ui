import type { Meta, StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions" // Para Storybook v4
import { FileUploader } from "./FileUploader"

const meta: Meta<typeof FileUploader> = {
  title: "Molecules/FileUploader",
  component: FileUploader,
  parameters: {
    layout: "centered",
    // Adiciona um fundo escuro para simular o contexto da imagem
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#101820" }, // Cor $Dark do tailwind.config
      ],
    },
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
      control: "text", // Controlado via args nas histórias
      description: "Arquivo inicial para exibir o estado 'selecionado'",
    },
  },
  // Define os args padrões para as histórias
  args: {
    label: "Upload de documento",
    disabled: false,
    onFileSelect: action("fileSelected"),
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Cria um arquivo mock para os stories
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
    onView: undefined, // Garante que não há callback de visualização
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
