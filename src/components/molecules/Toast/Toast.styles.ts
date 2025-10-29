import { cn } from "@/utils/cn"
import type { ToastVariant } from "./Toast.types"

type StyleProps = {
  variant: ToastVariant
  show: boolean
  paused?: boolean
  progress?: number
}

export const getToastWrapperStyles = (show: boolean) => {
  return cn(
    "relative flex items-center bg-transparent py-3 px-0 font-sans max-w-[400px] w-full",

    "transition-transform transform-gpu duration-300 ease-[cubic-bezier(.4,1.3,.6,1)] right-[-20px]",

    show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[120%]",
  )
}

export const getSideBarStyles = (show: boolean) => {
  return cn(
    "absolute left-0 bottom-0 overflow-hidden",
    "w-[25px] max-h-[100px]",
    "bg-dark-200",
    "rounded-tl-[6px] rounded-br-[6px]",
    "skew-x-[-20deg]",
    "z-10 transition-all duration-500",

    show ? "h-full" : "h-0",
  )
}

export const getProgressBarStyles = ({
  variant,
  paused,
}: Pick<StyleProps, "variant" | "paused">) => {
  return cn(
    "absolute bottom-0 w-[80px] z-20",
    {
      "bg-success": variant === "success",
      "bg-warning": variant === "warning",
      "bg-error": variant === "error",
      "bg-info": variant === "info",
    },
    paused ? "transition-none" : "transition-[height] duration-100 linear",
  )
}

export const getToastBoxStyles = ({
  variant,
  show,
}: Pick<StyleProps, "variant" | "show">) => {
  return cn(
    "flex items-center rounded-b-xl rounded-tr-xl border",
    "bg-dark-400",
    "min-h-[60px] max-h-[60px] overflow-auto py-[8px] scrollbar-hidden mr-[60px]",
    "transition-[width,opacity] duration-400",
    show ? "opacity-100 w-full" : "opacity-0 w-0",
    {
      "border-success": variant === "success",
      "border-warning": variant === "warning",
      "border-error": variant === "error",
      "border-info": variant === "info",
    },
  )
}

export const getMessageStyles = (variant: ToastVariant) => {
  return cn("font-semibold leading-tight", "px-8 pl-[45px]", {
    "text-success": variant === "success",
    "text-warning": variant === "warning",
    "text-error": variant === "error",
    "text-info": variant === "info",
  })
}

export const getCloseButtonStyles = (variant: ToastVariant) => {
  return cn(
    "absolute right-[50px] top-0",
    "w-6 h-6 rounded-full flex items-center justify-center",
    "text-white text-xl font-bold transition-colors",
    {
      "bg-success hover:bg-success-dark": variant === "success",
      "bg-warning hover:bg-warning-dark": variant === "warning",
      "bg-error hover:bg-error-dark": variant === "error",
      "bg-info hover:bg-info-dark": variant === "info",
    },
  )
}
