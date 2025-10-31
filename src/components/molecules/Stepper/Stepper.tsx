import { useRef } from "react"
import type { StepperProps, StepState } from "./Stepper.types"
import {
  getStepperWrapperStyles,
  getStepItemStyles,
  getCircleStyles,
} from "./Stepper.styles"
import { Icon } from "@/atoms/Icon"
import { DynamicBars } from "./DynamicBars"

export const Stepper = ({ totalSteps, currentStep }: StepperProps) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const getStepState = (index: number): StepState => {
    if (index < currentStep) return "completed"
    if (index === currentStep) return "current"
    return "default"
  }

  return (
    <div
      ref={wrapperRef}
      className={getStepperWrapperStyles()}
    >
      {steps.map(index => {
        const state = getStepState(index)
        const stepNumber = String(index + 1).padStart(2, "0")

        return (
          <div
            key={index}
            className={getStepItemStyles()}
          >
            <div className={getCircleStyles(state)}>
              {state === "completed" ? (
                <Icon
                  name="check"
                  color="dark"
                />
              ) : (
                <span>{stepNumber}</span>
              )}
            </div>

            {index < steps.length - 1 && (
              <DynamicBars
                wrapperRef={wrapperRef}
                state={state}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
