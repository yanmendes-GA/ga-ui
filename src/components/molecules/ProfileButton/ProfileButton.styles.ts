import { cn } from "@/utils/cn"

type StyleProps = {
  disabled?: boolean
}

export const getProfileButtonStyles = ({ disabled }: StyleProps) => {
  return cn(
    "flex w-full items-center gap-3 hover:bg-dark-400 h-[76px] p-[10px] rounded-[8px] bg-dark-500 transition-colors text-dark-100",
    {
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400":
        !disabled,
    },
    "disabled:opacity-50 disabled:hover:bg-dark-500 disabled:cursor-not-allowed",
  )
}

export const getTextWrapperStyles = () => {
  return cn("flex flex-1 flex-col text-left")
}

export const getNameStyles = () => {
  return cn("font-bold text-base text-foreground", "truncate")
}

export const getRoleStyles = () => {
  return cn("font-medium text-sm text-dark-100", "truncate")
}
