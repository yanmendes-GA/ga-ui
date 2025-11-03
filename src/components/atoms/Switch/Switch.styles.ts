import { cn } from "@/utils/cn"

type SwitchStyleProps = {
  checked: boolean
  disabled?: boolean
}

export const getSwitchStyles = ({
  checked,
  disabled,
}: SwitchStyleProps) => {
  return {
    track: cn(
      "inline-flex bg-dark h-[20px] w-[40px] cursor-pointer items-center rounded-[6px] border-transparent p-[3px] transition-all",
      {
        "bg-primary": checked,
        "opacity-50 pointer-events-none": disabled,
      },
    ),
    thumb: cn(
      "pointer-events-none bg-dark-400 h-[14px] w-[14px] transform rounded-[3px] transition-all",
      {
        "translate-x-0": !checked,
        "translate-x-5 bg-dark-500": checked,
        "bg-dark-100": disabled,
      },
    ),
  }
}
