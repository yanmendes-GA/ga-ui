import type { ElementType, HTMLAttributes } from "react"

export interface BreadcrumbItem {
  label: string
  href: string
  isCurrent?: boolean
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[]
  separatorIcon?: string
  linkComponent?: ElementType
}
