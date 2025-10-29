import { cn } from "@/utils/cn"

export const getBreadcrumbStyles = () => {
  return cn("flex items-center gap-2 text-dark-300")
}

export const getItemStyles = () => {
  return cn("flex items-center gap-2 text-dark-300")
}

export const getLinkStyles = () => {
  return cn(
    "text-small text-dark-300",
    "transition-colors hover:text-dark-200 hover:underline",
  )
}

export const getCurrentItemStyles = () => {
  return cn("text-small text-dark-100 font-bold")
}

export const getSeparatorStyles = () => {
  return cn("text-dark-300 text-caption")
}
