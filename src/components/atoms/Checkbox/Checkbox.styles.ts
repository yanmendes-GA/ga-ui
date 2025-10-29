import { cn } from "@/utils/cn"

export const getCheckboxStyles = ({
  disabled,
  checked,
}: {
  disabled?: boolean
  checked?: boolean
}) => {
  return cn(
    "inline-flex h-[24px] w-[24px] items-center justify-center rounded-[5px] border transition-colors bg-dark-500 border-dark-200",

    {
      "cursor-pointer hover:bg-dark-400": !disabled,
      "bg-primary text-primary-100 border-primary hover:bg-primary": checked,
      "pointer-events-none opacity-50": disabled,
    },
    {
      "group-hover:bg-primary-400 group-hover:border-primary-400":
        !disabled && checked,
      "bg-dark-400 border-dark-300": disabled && !checked,
      "bg-primary-300 border-primary-300": disabled && checked,
    },
  )
}
