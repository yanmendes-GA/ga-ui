import { cn } from "@/utils/cn"
import type { ButtonGroupVariant } from "./ButtonGroup.types"

export const getGroupStyles = (className?: string) => {
  return cn("flex items-center gap-[10px]", className)
}

type ButtonStyleProps = {
  variant: ButtonGroupVariant
  index: number
}

export const getButtonStyles = ({ variant, index }: ButtonStyleProps) => {
  return cn(
    "group relative flex items-center justify-center px-[20px] py-2 text-sm font-medium",
    {
      "min-w-[150px]": variant === "default",
      "min-w-[70px]": variant === "icon",
      "-ml-8": variant === "icon" && index > 0,
    },
  )
}

export const getContentStyles = (isSelected: boolean) => {
  return cn("z-10 transition-colors", {
    "text-dark-100": isSelected,
    "text-dark-300": !isSelected,
  })
}

type BackgroundStyleProps = {
  isSelected: boolean
  variant: ButtonGroupVariant
}

export const getBackgroundStyles = ({
  isSelected,
  variant,
}: BackgroundStyleProps) => {
  return cn(
    "absolute h-[34px] bg-dark w-full skew-x-[-40deg] rounded-bl-[2px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[2px] transition-colors",
    {
      "bg-dark-400": isSelected,
      "bg-dark group-hover:bg-dark-400": !isSelected,
      "h-[34px] w-[40px]": variant === "icon",
    },
  )
}
