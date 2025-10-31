import type { Editor } from "@tiptap/react"
import type { RichTextControl } from "./RichTextEditor.types"
import { Button } from "@/atoms/Button" // Nosso átomo!
import { cn } from "@/utils/cn"

// Este é um Átomo "privado" para a molécula de Toolbar
// Ele adiciona a lógica de 'ativo' ao nosso Button.
type ToolbarButtonProps = {
  icon: string
  onClick: () => void
  isActive?: boolean
  disabled?: boolean
}

const ToolbarButton = ({
  icon,
  onClick,
  isActive = false,
  disabled = false,
}: ToolbarButtonProps) => {
  return (
    <Button
      iconOnly
      icon={icon}
      variant="ghost" // Variante ghost, como na imagem
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-8 h-8", // Tamanho menor para toolbar
        { "bg-primary/20 text-primary": isActive }, // Estilo 'ativo'
      )}
    />
  )
}

// A Molécula principal da Toolbar
type RichTextToolbarProps = {
  editor: Editor | null
  controls: RichTextControl[]
}

export const RichTextToolbar = ({ editor, controls }: RichTextToolbarProps) => {
  if (!editor) {
    return null
  }

  // Lógica de mapeamento de string para componente
  const renderControl = (control: RichTextControl) => {
    const isDisabled = !editor.isEditable

    switch (control) {
      case "bold":
        return (
          <ToolbarButton
            key={control}
            icon="format_bold"
            disabled={isDisabled}
            onClick={() => editor.chain().focus().toggleBold().run()}
            isActive={editor.isActive("bold")}
          />
        )
      case "italic":
        return (
          <ToolbarButton
            key={control}
            icon="format_italic"
            disabled={isDisabled}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            isActive={editor.isActive("italic")}
          />
        )
      case "underline":
        return (
          <ToolbarButton
            key={control}
            icon="format_underlined"
            disabled={isDisabled}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            isActive={editor.isActive("underline")}
          />
        )
      // ... Adicionar todos os outros 'case' aqui (undo, redo, lists, etc.) ...

      // Exemplo de 'undo'
      case "undo":
        return (
          <ToolbarButton
            key={control}
            icon="undo"
            disabled={!editor.can().undo()}
            onClick={() => editor.chain().focus().undo().run()}
          />
        )

      // O 'select' de texto (Normal, H1, H2) é mais complexo,
      // podemos começar com botões simples para H1, H2.

      case "heading-1":
        return (
          <ToolbarButton
            key={control}
            icon="format_h1"
            disabled={isDisabled}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            isActive={editor.isActive("heading", { level: 1 })}
          />
        )

      default:
        return null
    }
  }

  return (
    <div
      className="flex flex-wrap items-center gap-1 border-b border-dark-400 p-2"
    >
      {controls.map(renderControl)}
    </div>
  )
}
