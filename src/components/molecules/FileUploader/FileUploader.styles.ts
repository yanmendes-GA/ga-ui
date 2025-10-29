import { cn } from "@/utils/cn"

type UploaderStyleProps = {
  isDragging: boolean
  disabled: boolean
  hasFile: boolean
}

export const getUploaderStyles = ({
  isDragging,
  disabled,
  hasFile,
}: UploaderStyleProps) => {
  return cn(
    "w-full rounded-[8px] transition-all flex items-center border-2 h-full p-[20px]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background",

    disabled &&
      "opacity-50 cursor-not-allowed pointer-events-none bg-dark-300 border-dark-300 text-dark-200",

    !disabled && {
      "border-solid border-primary bg-dark p-6 flex-row justify-between gap-4":
        hasFile,

      "border-dashed border-primary bg-dark-500 flex-col justify-center gap-2 text-dark-200 cursor-pointer hover:bg-dark-400":
        !hasFile && !isDragging,

      "border-solid border-dark-300 bg-dark-300 flex-col justify-center gap-2 text-dark-100 cursor-pointer":
        !hasFile && isDragging,
    },
  )
}
