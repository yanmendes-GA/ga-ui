import type {
  RichTextControl,
  ToolbarButtonProps,
  RichTextToolbarProps,
} from "./RichTextEditor.types"
import { Button } from "@/atoms/Button"

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
      size="xs"
      variant={isActive ? "outline" : "ghost"}
      onClick={onClick}
      disabled={disabled}
    />
  )
}

export const RichTextToolbar = ({ editor, controls }: RichTextToolbarProps) => {
  if (!editor) {
    return null
  }

  const setLink = () => {
    if (editor.isActive("link")) {
      editor.chain().focus().unsetLink().run()
      return
    }

    const previousUrl = editor.getAttributes("link").href || ""
    const url = window.prompt("URL", previousUrl)

    if (url === null) {
      return
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run()
      return
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
  }

  const renderControl = (control: RichTextControl) => {
    const isDisabled = !editor.isEditable

    switch (control) {
      case "bold":
        return (
          <ToolbarButton
            key={control}
            icon="bold"
            disabled={isDisabled}
            onClick={() => editor.chain().focus().toggleBold().run()}
            isActive={editor.isActive("bold")}
          />
        )
      case "italic":
        return (
          <ToolbarButton
            key={control}
            icon="italic"
            disabled={isDisabled}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            isActive={editor.isActive("italic")}
          />
        )
      case "underline":
        return (
          <ToolbarButton
            key={control}
            icon="underline"
            disabled={isDisabled}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            isActive={editor.isActive("underline")}
          />
        )
      case "undo":
        return (
          <ToolbarButton
            key={control}
            icon="undo"
            disabled={!editor.can().undo()}
            onClick={() => editor.chain().focus().undo().run()}
          />
        )
      case "heading-1":
        return (
          <ToolbarButton
            key={control}
            icon="h1"
            disabled={isDisabled}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            isActive={editor.isActive("heading", { level: 1 })}
          />
        )

      case "strike":
        return (
          <ToolbarButton
            key={control}
            icon="strikethrough"
            disabled={isDisabled}
            onClick={() => editor.chain().focus().toggleStrike().run()}
            isActive={editor.isActive("strike")}
          />
        )

      case "paragraph":
        return (
          <ToolbarButton
            key={control}
            icon="paragraph"
            disabled={isDisabled}
            onClick={() => editor.chain().focus().setParagraph().run()}
            isActive={editor.isActive("paragraph")}
          />
        )

      case "heading-2":
        return (
          <ToolbarButton
            key={control}
            icon="h2"
            disabled={isDisabled}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            isActive={editor.isActive("heading", { level: 2 })}
          />
        )

      case "heading-3":
        return (
          <ToolbarButton
            key={control}
            icon="h3"
            disabled={isDisabled}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            isActive={editor.isActive("heading", { level: 3 })}
          />
        )

      case "bulletList":
        return (
          <ToolbarButton
            key={control}
            icon="list"
            disabled={isDisabled}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            isActive={editor.isActive("bulletList")}
          />
        )

      case "orderedList":
        return (
          <ToolbarButton
            key={control}
            icon="list-ol"
            disabled={isDisabled}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            isActive={editor.isActive("orderedList")}
          />
        )

      case "blockquote":
        return (
          <ToolbarButton
            key={control}
            icon="quote-right"
            disabled={isDisabled}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            isActive={editor.isActive("blockquote")}
          />
        )

      case "code":
        return (
          <ToolbarButton
            key={control}
            icon="code-simple"
            disabled={isDisabled}
            onClick={() => editor.chain().focus().toggleCode().run()}
            isActive={editor.isActive("code")}
          />
        )

      case "redo":
        return (
          <ToolbarButton
            key={control}
            icon="redo"
            disabled={!editor.can().redo()}
            onClick={() => editor.chain().focus().redo().run()}
          />
        )

      case "link":
        return (
          <ToolbarButton
            key={control}
            icon="link"
            disabled={isDisabled}
            onClick={setLink}
            isActive={editor.isActive("link")}
          />
        )

      case "clear":
        return (
          <ToolbarButton
            key={control}
            icon="eraser"
            disabled={isDisabled}
            onClick={() => editor.chain().focus().unsetAllMarks().run()}
          />
        )

      case "|":
        return (
          <div
            key={`divider-${Math.random()}`}
            className="mx-1 h-5 w-px bg-dark-400"
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
