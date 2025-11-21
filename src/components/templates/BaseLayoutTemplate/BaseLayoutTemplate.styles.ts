import { cn } from "@/utils/cn"

export const getBaseLayoutTemplateStyles = () => {
  return {
    wrapper: cn("flex h-screen w-full bg-dark"),

    main: cn("flex h-full flex-1 flex-col p-[20px]"),

    sidebar: cn("h-full w-fit max-w-[280px] min-w-[80px]"),

    header: cn("w-full flex-shrink-0 p-5"),

    content: cn("w-full bg-dark-500 rounded-[8px] flex-1 overflow-y-auto p-5"),

    footer: cn("w-full flex-shrink-0"),
  }
}
