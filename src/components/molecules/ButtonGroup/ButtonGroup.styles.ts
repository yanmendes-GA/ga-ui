import { cn } from "@/utils/cn"
import type { ButtonGroupVariant } from "./ButtonGroup.types"

type ButtonGroupStyleProps = {
  variant?: ButtonGroupVariant
  index?: number
  isSelected?: boolean
  className?: string
}

export const getButtonGroupStyles = ({
  variant,
  index,
  isSelected,
  className,
}: ButtonGroupStyleProps) => {
  return {
    group: cn("flex items-center gap-[10px]", className),
    button: cn(
      "group relative flex items-center justify-center px-[20px] py-2 text-sm font-medium",
      {
        "min-w-[150px]": variant === "default",
        "min-w-[70px]": variant === "icon",
        "-ml-8": variant === "icon" && index !== undefined && index > 0,
      },
    ),
    content: cn("z-10 transition-colors", {
      "text-dark-100": isSelected,
      "text-dark-300": !isSelected,
    }),
    background: cn(
      "absolute h-[34px] bg-dark w-full skew-x-[-40deg] rounded-bl-[2px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[2px] transition-colors",
      {
        "bg-dark-400": isSelected,
        "bg-dark group-hover:bg-dark-400": !isSelected,
        "h-[34px] w-[40px]": variant === "icon",
      },
    ),
  }
}
