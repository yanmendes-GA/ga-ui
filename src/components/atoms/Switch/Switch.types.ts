import type { ButtonHTMLAttributes } from "react"

export interface SwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  id?: string
}
