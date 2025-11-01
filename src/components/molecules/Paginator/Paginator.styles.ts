import { cn } from "@/utils/cn"

export const getPaginatorStyles = () => {
  return cn("flex items-center justify-center gap-2")
}

export const getPaginatorItemStyles = () => {
  return cn(
    "flex items-center justify-center text-dark-100 font-bold",
    "w-[40px] h-[40px]",
  )
}
