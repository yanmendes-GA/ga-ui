import type { HTMLAttributes, ReactNode } from "react"
// Assumimos que o tipo BreadcrumbItem existe e é exportado pela molécula Breadcrumb
import type { BreadcrumbItem } from "@/molecules/Breadcrumb/Breadcrumb.types"

export interface ToolbarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Array de itens para o componente Breadcrumb.
   * (Tipo importado de @/molecules/Breadcrumb)
   */
  breadcrumbItems: BreadcrumbItem[]
  /**
   * Conteúdo a ser exibido no lado direito do toolbar
   * (ex: Input de busca, botões de ação, CTA).
   */
  children?: ReactNode
}
