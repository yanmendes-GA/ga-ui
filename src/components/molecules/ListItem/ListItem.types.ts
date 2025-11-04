import type { ComponentPropsWithoutRef, ElementType } from "react"

export type AppRoute =
  | string
  | {
      pathname?: string
      search?: string
      hash?: string
    }

export type ListItemProps<T extends ElementType = "a"> = {
  as?: T
  label: string
  icon?: string
  isCollapsed?: boolean
  isActive?: boolean
  to?: AppRoute
} & Omit<ComponentPropsWithoutRef<T>, "children" | "to">
