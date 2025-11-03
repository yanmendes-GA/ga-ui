import type { ChipProps } from "./Chip.types"
import { getChipStyles } from "./Chip.styles"
import { cn } from "@/utils/cn"

export const Chip = ({
  children,
  variant = "default",
  ...props
}: ChipProps) => {
  const styles = getChipStyles({ variant })
  return (
    <div className={cn(styles.chip)} {...props}>
      {children}
    </div>
  )
}
