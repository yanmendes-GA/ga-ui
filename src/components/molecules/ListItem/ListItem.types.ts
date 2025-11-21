import type { ButtonHTMLAttributes } from "react"

export type ListItemProps = {
  label: string
  icon?: string
  iconOnly?: boolean
  isDisabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onClick">
