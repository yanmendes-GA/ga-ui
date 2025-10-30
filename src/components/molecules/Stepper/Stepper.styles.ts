import { cn } from "@/utils/cn"
import type { StepState } from "./Stepper.types"

export const getStepperWrapperStyles = () => {
  return cn("flex max-w-[100vw] justify-center")
}

export const getStepItemStyles = () => {
  return cn("flex items-center")
}

export const getCircleStyles = (state: StepState) => {
  return cn(
    "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2",
    "font-bold text-lg",
    {
      "bg-primary border-primary text-dark-500": state === "completed",
      "border-primary text-primary": state === "current",
      "border-dark-200 text-dark-200": state === "default",
    },
  )
}

export const getBarWrapperStyles = () => {
  return cn("flex items-center gap-[4px] px-[12px]")
}

export const getBarSegmentStyles = (state: StepState) => {
  return cn("h-[6px] w-[14px] skew-x-[-40deg]", {
    "bg-primary": state === "completed",
    "bg-dark-300": state !== "completed",
  })
}
