import { cn } from "@/utils/cn"

type TabStyleProps = {
  isActive?: boolean
  isFirst?: boolean
  disabled?: boolean
}

export const getTabsWrapperStyles = () => {
  return "relative flex items-center gap-[10px] py-[8px] pr-[12px] w-full"
}

export const getWrapperBackgroundStyles = () => {
  return "absolute top-0 w-full h-full bg-dark -z-20 rounded-[4px] skew-x-[-40deg] px-[10px]"
}

export const getTabStyles = ({
  isActive = false,
  isFirst = false,
  disabled = false,
}: TabStyleProps) => {
  return cn(
    "relative inline-flex items-center justify-center group",
    "h-[24px] px-[32px]",
    "font-bold text-dark-100",
    "transition-all duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:z-40",
    {
      "text-primary-100": isActive,
      "text-dark-200": disabled,
      "ml-[12px]": isFirst,
    },
  )
}

export const getTabBackgroundStyles = ({
  isActive,
  disabled,
}: TabStyleProps) => {
  return cn(
    "absolute -z-10 bg-dark rounded-tr-[4px] rounded-tl-[2px] rounded-br-[2px] rounded-bl-[4px] w-full h-full inset-0 skew-x-[-40deg] pointer-events-none group-hover:bg-dark-400 transition-colors",
    {
      "bg-primary group-hover:bg-primary": isActive,
      "bg-dark-300 group-hover:bg-dark-300": disabled,
    },
  )
}
