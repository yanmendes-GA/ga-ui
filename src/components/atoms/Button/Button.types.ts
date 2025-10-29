import type { ButtonHTMLAttributes } from "react"

export type ButtonVariant = "default" | "outline" | "ghost"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  icon?: string
  iconSide?: "left" | "right"
  variant?: ButtonVariant
  iconOnly?: boolean
  disabled?: boolean
}
