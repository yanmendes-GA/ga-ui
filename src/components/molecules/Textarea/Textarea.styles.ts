import { cn } from "@/utils/cn"
import type { TextareaVariant } from "./Textarea.types"

export const getWrapperStyles = () => {
  return cn("flex w-full flex-col gap-2") //
}

export const getLabelStyles = () => {
  return cn("font-bold text-sm text-dark-100") //
}

type ContainerStyleProps = {
  variant: TextareaVariant
  disabled?: boolean
  iconLeft?: string
  readonly?: boolean
}

export const getTextareaContainerStyles = ({
  variant,
  disabled,
  iconLeft,
  readonly,
}: ContainerStyleProps) => {
  return cn(
    "flex min-h-[120px] gap-[10px] rounded-[12px] bg-dark px-[20px] py-3 transition-all border border-transparent",
    "items-start",

    {
      "flex-row-reverse": iconLeft,
      "focus-within:border-dark-200": variant === "default" && !disabled,

      "border-error": variant === "error",
      "border-success": variant === "success",
      "bg-dark-300 border-dark-500 hover:border-dark-500 focus-within:border-dark-500":
        readonly,

      "bg-dark-300 opacity-50 cursor-not-allowed": disabled,
      "focus-within:border-transparent": disabled,
      "border-transparent": disabled,
    },
  )
}

type IconStyleProps = {
  variant: TextareaVariant
  disabled?: boolean
  clickable?: boolean
  readonly?: boolean
}

export const getIconStyles = ({
  variant,
  disabled,
  clickable,
  readonly,
}: IconStyleProps) => {
  return cn(
    "text-dark-100 transition-colors cursor-default",
    "pt-1",
    {
      "text-error": variant === "error",
      "text-success": variant === "success",
      "text-dark-500": readonly,
    },
    {
      "cursor-pointer hover:text-primary": clickable && !disabled,
      "cursor-not-allowed": clickable && disabled,
    },
  )
}

export const getTextareaStyles = ({
  variant,
  disabled,
  readonly,
}: IconStyleProps) => {
  return cn(
    "w-full h-full bg-transparent p-0",
    "font-medium text-dark-100",
    "placeholder:text-dark-300 placeholder:text-[12px] placeholder:italic",
    "focus:outline-none focus:ring-0",
    "disabled:cursor-not-allowed",
    "resize-none",
    {
      "text-error": variant === "error",
      "text-success": variant === "success",
      "text-dark-200 placeholder:text-dark-200": disabled,
      "text-dark-500": readonly,
    },
  )
}
