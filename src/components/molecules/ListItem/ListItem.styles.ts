import { cn } from "@/utils/cn"

type ListItemStyleProps = {
  isActive?: boolean
  isDisabled?: boolean
  isCollapsed?: boolean
}

export const getListItemStyles = ({
  isActive = false,
  isDisabled = false,
  isCollapsed = false,
}: ListItemStyleProps) => {
  return cn(
    "flex items-center justify-center flex-nowrap text-nowrap h-[40px] w-full px-[20px] gap-3 rounded-[6px] font-medium text-base transition-colors duration-200 text-dark-100 hover:bg-dark-500",
    "outline-none focus-visible:ring-2 focus-visible:ring-primary",

    isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",

    isActive && "bg-dark-500 text-primary border border-primary font-bold",

    isCollapsed && "w-[40px] px-[10px]",
  )
}

export const getListItemLabelStyles = ({
  isCollapsed = false,
}: Pick<ListItemStyleProps, "isCollapsed">) => {
  return cn("flex-1", { "sr-only": isCollapsed })
}
