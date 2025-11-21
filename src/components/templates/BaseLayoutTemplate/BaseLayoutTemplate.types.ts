import type { ReactNode } from "react"

export interface BaseLayoutTemplateProps {
  /**
   * Conteúdo a ser renderizado no slot da sidebar (lateral esquerda).
   */
  sidebar: ReactNode

  children: ReactNode
}
