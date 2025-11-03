import { cn } from "@/utils/cn"
import type { ButtonProps } from "./Button.types"

type ButtonStyleProps = Pick<
  ButtonProps,
  "variant" | "iconOnly" | "iconSide" | "disabled" | "size"
>

export const getButtonStyles = ({
  variant,
  iconOnly = false,
  iconSide = "left",
  size = "default",
}: ButtonStyleProps) => {
  return {
    button: cn(
      "inline-flex h-[56px] px-[32px] items-center justify-center gap-[10px] transition-all font-bold text-primary-100",

      "bg-gradient-to-t from-primary to-primary-400",
      "border border-transparent rounded-[8px]",

      "hover:shadow-button-primary",
      "active:from-primary-400 active:to-primary",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",

      {
        "border border-primary text-primary bg-transparent hover:bg-primary/10 active:bg-primary/20":
          variant === "outline",

        "text-primary bg-transparent hover:bg-primary/10 active:bg-primary/20":
          variant === "ghost",
      },

      {
        "text-[15px] h-[32px] rounded-[4px] px-[8px]": size === "sm",
        "text-[12px] h-[24px] rounded-[4px] px-[6px]": size === "xs",
      },

      {
        "w-[56px] p-[16px]": iconOnly,
        "w-[32px] p-[8px]": iconOnly && size === "sm",
        "w-[24px] p-[6px]": iconOnly && size === "xs",
      },

      {
        "flex-row": iconSide === "left",
        "flex-row-reverse": iconSide === "right",
      },
    ),
  }
}
