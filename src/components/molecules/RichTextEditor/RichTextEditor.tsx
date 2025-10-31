import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Placeholder from "@tiptap/extension-placeholder"
import Underline from "@tiptap/extension-underline" // Precisamos da extensão
import Link from "@tiptap/extension-link" // Precisamos da extensão
import { Text } from "@/atoms/Text"

import type { RichTextProps, RichTextControl } from "./RichTextEditor.types"
import {
  getWrapperStyles,
  getEditorContainerStyles,
  getEditorProseStyles,
} from "./RichTextEditor.styles"
import { RichTextToolbar } from "./RichTextToolbar"

// DEFINIÇÃO DO DEFAULT (como você pediu)
const defaultControls: RichTextControl[] = [
  "undo",
  "redo",
  "|",
  "bold",
  "italic",
  "underline",
  "strike",
  "|",
  "link",
  "code",
  "clear",
]

export const RichText = ({
  id,
  label,
  value,
  onChange,
  variant = "default",
  disabled = false,
  readonly = false,
  placeholder,
  controls = defaultControls,
}: RichTextProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Configurações do starter kit (ex: desabilitar 'bold' se não quisermos)
      }),
      Underline, // Adiciona extensão de underline
      Link.configure({
        // Configura o link
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder: placeholder || "",
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editable: !disabled && !readonly,
  })

  // Lógica de estado de foco para o container
  // (O Tiptap nos dá 'editor.isFocused')

  return (
    <div className={getWrapperStyles()}>
      {/* 1. Label (Reutilizado) */}
      {label && (
        // <label
        //   htmlFor={id}
        //   className={getLabelStyles()}
        // >
        //   {label}
        // </label>
        <Text variant="label">{label}</Text>
      )}

      {/* 2. Container (Toolbar + Editor) */}
      <div
        className={getEditorContainerStyles({
          variant,
          disabled,
          readonly,
          isFocused: editor?.isFocused || false, // Passa o estado de foco
        })}
      >
        {/* 2.1. A Toolbar */}
        {!readonly && (
          <RichTextToolbar
            editor={editor}
            controls={controls}
          />
        )}

        {/* 2.2. O Editor */}
        <EditorContent
          id={id}
          editor={editor}
          className={getEditorProseStyles()} // Estilos do .ProseMirror
        />
      </div>
    </div>
  )
}
