import type { ReactNode } from "react"

export interface DashboardTemplateProps {
  /**
   * Conteúdo a ser renderizado no slot da sidebar (lateral esquerda).
   */
  sidebar: ReactNode
  /**
   * Conteúdo a ser renderizado no slot do toolbar (cabeçalho principal).
   */
  toolbar: ReactNode
  /**
   * Conteúdo a ser renderizado no slot de conteúdo principal.
   */
  mainContent: ReactNode
  /**
   * Conteúdo a ser renderizado no slot do footer (rodapé principal).
   */
  footer: ReactNode
}
