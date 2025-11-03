import { cn } from "@/utils/cn"

export const getPaginatorStyles = () => {
  return {
    paginator: cn("flex items-center justify-center gap-2"),
    item: cn(
      "flex items-center justify-center text-dark-100 font-bold",
      "w-[40px] h-[40px]",
    ),
  }
}
