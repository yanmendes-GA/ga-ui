import { cn } from "@/utils/cn"

type StyleProps = {
  disabled?: boolean
}

export const getProfileButtonStyles = ({ disabled }: StyleProps) => {
  return cn(
    "flex w-full items-center gap-3 hover:bg-dark-400 h-full p-[10px] rounded-[8px] bg-dark-500 transition-colors text-dark-100",
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
  return cn("text-[15px]", "truncate")
}

export const getRoleStyles = () => {
  return cn("italic text-[12px] text-dark-100", "truncate")
}
