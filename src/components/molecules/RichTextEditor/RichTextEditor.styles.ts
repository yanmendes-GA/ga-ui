import { cn } from "@/utils/cn"
import "./RichTextEditor.css"

export const getWrapperStyles = () => {
  return cn("flex w-full flex-col gap-2")
}

type ContainerStyleProps = {
  variant: "default" | "success" | "error"
  disabled?: boolean
  readonly?: boolean
  isFocused?: boolean
}

export const getEditorContainerStyles = ({
  variant,
  disabled,
  readonly,
}: ContainerStyleProps) => {
  return cn(
    "flex flex-col rounded-[12px] bg-dark transition-all border border-transparent overflow-hidden",

    {
      "border-error": variant === "error",
      "border-success": variant === "success",
      "bg-dark-300 border-dark-500": readonly,
      "bg-dark-300 opacity-50 cursor-not-allowed": disabled,
    },
  )
}

export const getEditorProseStyles = () => {
  return cn(
    "prose prose-invert max-w-none w-full h-full min-h-[120px] border border-transparent",
    "text-dark-100",

    "prose-p:m-0",
    "prose-strong:text-dark-100",
    "prose-em:text-dark-100",

    "prose-p.is-editor-empty:before:content-[attr(data-placeholder)]",
    "prose-p.is-editor-empty:before:text-dark-300",
    "prose-p.is-editor-empty:before:text-[12px]",
    "prose-p.is-editor-empty:before:italic",
    "prose-p.is-editor-empty:before:float-left",
    "prose-p.is-editor-empty:before:h-0",

    "focus:outline-none focus:ring-0",
  )
}
