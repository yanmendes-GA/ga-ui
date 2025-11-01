import { cn } from "@/utils/cn"

export const getSystemTemplateStyles = () => {
  return cn("flex h-screen w-full text-foreground")
}

export const getMainContentStyles = () => {
  return cn("flex flex-1 flex-col p-4 gap-[20px]")
}

export const getContentWrapperStyles = () => {
  return cn(
    "flex-1 flex text-dark-100 overflow-auto rounded-[8px] w-full bg-dark-500 p-6 shadow-lg",
  )
}
