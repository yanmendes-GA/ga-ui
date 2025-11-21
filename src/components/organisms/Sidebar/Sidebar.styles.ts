import { cn } from "@/utils/cn"

type SidebarStyleProps = {
  isCollapsed?: boolean
}

export const getSidebarStyles = ({ isCollapsed }: SidebarStyleProps) => {
  return {
    root: cn(
      "w-[280px] bg-sidebar-background bg-cover bg-center p-4 flex h-screen flex-col",
      "border border-transparent border-r-dark-400",
      "transition-all duration-300 ease-in-out",
      {
        "w-[80px] p-[8px]": isCollapsed,
      },
    ),

    header: cn("relative justify-between flex h-[32px]", {
      "justify-center": isCollapsed,
    }),

    logo: cn("mb-10"),

    toggleButton: cn("absolute right-[-25px] top-[50px]", {
      "right-[-20px]": isCollapsed,
    }),

    navigation: cn("flex flex-col gap-2 overflow-hidden"),

    list: cn("flex flex-col gap-3 mt-3", { "items-center": isCollapsed }),

    footer: cn("mt-auto pt-6 justify-center flex"),
  }
}
