import { cn } from "@/utils/cn"

export const getBreadcrumbStyles = () => {
  return {
    breadcrumb: cn("flex items-center gap-2 text-dark-300"),
    item: cn("flex items-center gap-2 text-dark-300"),
    link: cn(
      "text-small text-dark-300",
      "transition-colors hover:text-dark-200 hover:underline",
    ),
    currentItem: cn("text-small text-dark-100 font-bold"),
    separator: cn("text-dark-300 text-caption"),
  }
}
