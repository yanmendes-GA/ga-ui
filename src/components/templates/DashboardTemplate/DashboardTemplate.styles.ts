import { cn } from "@/utils/cn"

export const getDashboardTemplateStyles = () => {
  return {
    wrapper: cn("flex h-screen w-full bg-dark text-foreground"),

    main: cn("flex h-full flex-1 flex-col overflow-y-auto"),

    sidebar: cn("h-full w-fit max-w-[280px] min-w-[80px] bg-dark-500"),

    toolbar: cn("w-full flex-shrink-0 p-5"),

    content: cn("w-full flex-1 p-5"),

    footer: cn("w-full flex-shrink-0"),
  }
}
