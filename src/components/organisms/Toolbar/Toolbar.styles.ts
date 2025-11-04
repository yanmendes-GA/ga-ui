import { cn } from "@/utils/cn"

export const getToolbarStyles = () => {
  return cn(
    "flex w-full items-center justify-between h-[56px] px-6 gap-[20px] bg-dark-500 rounded-[8px]",
  )
}

export const getToolbarRightSlotStyles = () => {
  return cn("flex flex-1 items-center gap-4")
}
