import type { ReactNode } from "react"

export type SelectVariant = "default" | "success" | "error"

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps {
  id: string
  label?: string
  iconLeft?: string
  value?: string
  onValueChange?: (value: string) => void
  options: SelectOption[]
  placeholder?: string
  variant?: SelectVariant
  disabled?: boolean
  readonly?: boolean
  containerClassName?: string
}
