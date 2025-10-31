import type { ComponentPropsWithoutRef, ElementType } from "react"

export type ListItemProps<T extends ElementType = "a"> = {
  as?: T
  label: string
  icon?: string
  isActive?: boolean
  to?: string
} & Omit<ComponentPropsWithoutRef<T>, "children">
