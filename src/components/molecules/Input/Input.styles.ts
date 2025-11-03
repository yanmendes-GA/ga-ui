import { cn } from "@/utils/cn"
import type { InputVariant } from "./Input.types"

type StyleProps = {
  variant?: InputVariant
  disabled?: boolean
  iconLeft?: string
  readonly?: boolean
  clickable?: boolean
}

export const getInputStyles = ({
  variant = "default",
  disabled,
  iconLeft,
  readonly,
  clickable,
}: StyleProps) => {
  return {
    wrapper: cn("flex w-full flex-col gap-2"),
    label: cn("font-bold text-sm text-dark-100"),
    inputContainer: cn(
      "flex h-[50px] gap-[10px] rounded-[12px] bg-dark items-center px-[20px] transition-all border border-transparent",
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
    ),
    icon: cn(
      "text-dark-100 transition-colors cursor-default",
      {
        "text-error": variant === "error",
        "text-success": variant === "success",
        "text-dark-500": readonly,
      },
      {
        "cursor-pointer hover:text-primary": clickable && !disabled,
        "cursor-not-allowed": clickable && disabled,
      },
    ),
    input: cn(
      "w-full h-full bg-transparent p-0",
      "font-medium text-dark-100",
      "placeholder:text-dark-300 placeholder:text-[12px] placeholder:italic",
      "focus:outline-none focus:ring-0",
      "disabled:cursor-not-allowed",
      {
        "text-error": variant === "error",
        "text-success": variant === "success",
        "text-dark-200 placeholder:text-dark-200": disabled,
        "text-dark-500": readonly,
      },
    ),
  }
}
