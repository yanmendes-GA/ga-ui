import type { NavLinkProps as RouterNavLinkProps } from "react-router-dom"
import type { ReactNode } from "react"

export type NavItemProps = {
  children: ReactNode
  icon?: string
  isCollapsed?: boolean
  disabled?: boolean
} & Omit<RouterNavLinkProps, "children" | "className">