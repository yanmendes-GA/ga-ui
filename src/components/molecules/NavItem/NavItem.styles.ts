import { cn } from "@/utils/cn"

type NavItemStyleProps = {
  isActive?: boolean
  isDisabled?: boolean
  isCollapsed?: boolean
}

export const getNavItemStyles = ({
  isActive = false,
  isDisabled = false,
  isCollapsed = false,
}: NavItemStyleProps) => {
  return {
    navItem: cn(
      "flex items-center justify-center flex-nowrap text-nowrap h-[40px] w-full px-[20px] gap-3 rounded-[6px] transition-colors duration-200 text-dark-100 hover:bg-dark-500 border border-transparent font-bold",
      "outline-none focus-visible:ring-2 focus-visible:ring-primary",
      isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
      isActive && "bg-dark-500 text-primary border border-primary",
      isCollapsed && "w-[40px] px-[10px]",
    ),
    label: cn("flex-1", { "sr-only": isCollapsed }),
  }
}