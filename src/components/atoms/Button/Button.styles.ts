import { cn } from "@/utils/cn"
import type { ButtonProps } from "./Button.types"

type ButtonStyleProps = Pick<
  ButtonProps,
  "variant" | "iconOnly" | "iconSide" | "disabled"
>

export const getButtonStyles = ({
  variant = "default",
  iconOnly = false,
  iconSide = "left",
  disabled = false,
}: ButtonStyleProps) => {
  return cn(
    "inline-flex h-[56px] items-center justify-center gap-[10px] rounded-[8px] transition-all disabled:opacity-50 disabled:cursor-not-allowed font-bold",

    {
      "bg-gradient-to-t from-primary to-primary-400 text-primary-100 hover:shadow-button-primary active:from-primary-400 active:to-primary disabled:hover:shadow-none":
        variant === "default",

      "border border-primary text-primary bg-transparent hover:bg-primary/10 active:bg-primary/20 disabled:hover:bg-transparent":
        variant === "outline",

      "text-primary bg-transparent hover:bg-primary/10 active:bg-primary/20 disabled:hover:bg-transparent":
        variant === "ghost",
    },

    {
      "cursor-not-allowed pointer-events-none bg-dark-300 text-dark-200 border-none":
        disabled,
    },

    {
      "w-[56px] p-0": iconOnly,
      "px-[32px]": !iconOnly,
    },

    {
      "flex-row": iconSide === "left",
      "flex-row-reverse": iconSide === "right",
    },
  )
}
