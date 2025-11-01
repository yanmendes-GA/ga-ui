// src/templates/SystemTemplate/SystemTemplate.types.ts

import type { HTMLAttributes, ReactNode } from "react"
// Importamos os tipos dos organismos que este template irá renderizar
import type { SidebarProps } from "@/organisms/Sidebar/Sidebar.types"
import type { ToolbarProps } from "@/organisms/Toolbar/Toolbar.types"

export interface SystemTemplateProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Props completas a serem passadas para o organismo Sidebar.
   * (Tipo importado de @/organisms/Sidebar)
   */
  sidebarProps: SidebarProps
  /**
   * Props completas a serem passadas para o organismo Toolbar.
   * O 'children' dentro de ToolbarProps será renderizado
   * no lado direito do toolbar.
   * (Tipo importado de @/organisms/Toolbar)
   */
  toolbarProps: ToolbarProps
  /**
   * O conteúdo principal da página (ex: DataTable, forms, etc.).
   * Este é o 'children' do SystemTemplate.
   */
  children: ReactNode
  toolbarButton: ReactNode
}
