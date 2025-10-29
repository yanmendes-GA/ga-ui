import type { ChipProps } from "./Chip.types"
import { getChipStyles } from "./Chip.styles"
import { cn } from "@/utils/cn"

export const Chip = ({
  children,
  variant = "default",
  ...props
}: ChipProps) => {
  return (
    <div
      className={cn(getChipStyles({ variant }))}
      {...props}
    >
      {children}
    </div>
  )
}
