import type { ReactNode } from "react"

export type ButtonGroupVariant = "default" | "icon"

export interface ButtonGroupItem {
  value: string
  label?: string
  iconName?: string
}

export interface ButtonGroupProps {
  items: ButtonGroupItem[]
  defaultValue?: string | string[]
  onSelectionChange?: (value: string | string[]) => void
  variant?: ButtonGroupVariant
  multiple?: boolean
  mandatory?: boolean
  className?: string
}
