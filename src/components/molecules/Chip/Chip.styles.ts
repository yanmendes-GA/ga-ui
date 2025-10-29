import { cn } from "@/utils/cn"
import type { ChipVariant } from "./Chip.types"

type ChipStyleProps = {
  variant?: ChipVariant
}

export const getChipStyles = ({ variant = "default" }: ChipStyleProps) => {
  return cn(
    "inline-flex h-[34px] items-center justify-center rounded-[8px] border px-[20px] text-sm font-bold uppercase",

    {
      "bg-dark-400 text-dark-100 border-dark-100": variant === "default",
      "bg-warning-dark text-warning border-warning": variant === "warning",
      "bg-success-dark text-success border-success": variant === "success",
      "bg-error-dark text-error border-error": variant === "error",
      "bg-info-dark text-info border-info": variant === "info",
    },
  )
}
