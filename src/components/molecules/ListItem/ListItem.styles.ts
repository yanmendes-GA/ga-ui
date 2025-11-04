import { cn } from "@/utils/cn"

type ListItemStyleProps = {
  isDisabled?: boolean
}

export const getListItemStyles = ({
  isDisabled = false,
}: ListItemStyleProps) => {
  return {
    listItem: cn(
      "flex items-center justify-center flex-nowrap text-nowrap h-[40px] w-full px-[20px] gap-3 rounded-[6px] font-medium text-base transition-colors duration-200 text-dark-100 hover:bg-dark-500",
      "outline-none focus-visible:ring-2 focus-visible:ring-primary",

      isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
    ),
    label: cn("flex-1 text-left"),
  }
}