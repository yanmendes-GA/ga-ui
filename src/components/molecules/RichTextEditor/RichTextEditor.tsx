import { useState, type MouseEvent } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Placeholder from "@tiptap/extension-placeholder"
import Underline from "@tiptap/extension-underline"
import Link from "@tiptap/extension-link"
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
      StarterKit.configure({}),
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
    editorProps: {
      attributes: {
        id: id,
      },
    },
  })

  const handleLabelClick = (event: MouseEvent<HTMLLabelElement>) => {
    event.preventDefault()
    editor?.chain().focus().run()
  }

  return (
    <div className={getWrapperStyles()}>
      {label && (
        <Text
          as="label"
          variant="label"
          onMouseDown={handleLabelClick}
          htmlFor={id}
        >
          {label}
        </Text>
      )}

      <div
        id="richTextContainer"
        className={getEditorContainerStyles({
          variant,
          disabled,
          readonly,
          isFocused: editor?.isFocused,
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
          editor={editor}
          className={getEditorProseStyles()}
        />
      </div>
    </div>
  )
}
