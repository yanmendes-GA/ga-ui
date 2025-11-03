export type ButtonVariant = "outline" | "ghost"

export interface ButtonProps {
  children?: React.ReactNode
  icon?: string
  iconSide?: "left" | "right"
  size?: "default" | "sm" | "xs"
  variant?: ButtonVariant
  iconOnly?: boolean
  disabled?: boolean
  onClick?: () => void
}
