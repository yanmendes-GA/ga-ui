import type { ButtonHTMLAttributes } from "react"

export type ListItemProps = {
  label: string
  icon?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onClick">