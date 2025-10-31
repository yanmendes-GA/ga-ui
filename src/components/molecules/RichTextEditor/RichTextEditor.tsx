import { useState } from "react"
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

export const RichTextEditor = ({
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
  const [_, setSelectionState] = useState(0)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Configurações do starter kit (ex: desabilitar 'bold' se não quisermos)
      }),
      Underline,
      Link.configure({
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
    onSelectionUpdate: () => {
      setSelectionState(s => s + 1)
    },
  })

  return (
    <div className={getWrapperStyles()}>
      {label && (
        // <label
        //   htmlFor={id}
        //   className={getLabelStyles()}
        // >
        //   {label}
        // </label>
        <Text variant="label">{label}</Text>
      )}

      <div
        id="richTextContainer"
        className={getEditorContainerStyles({
          variant,
          disabled,
          readonly,
          isFocused: editor.isFocused,
        })}
      >
        {!readonly && (
          <RichTextToolbar
            editor={editor}
            controls={controls}
          />
        )}

        <hr className="border-dark-500" />

        <EditorContent
          id={id}
          editor={editor}
          className={getEditorProseStyles()}
        />
      </div>
    </div>
  )
}
