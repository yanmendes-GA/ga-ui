import type { HTMLAttributes } from "react"

/**
 * Define os estilos visuais (variantes) que o Chip pode ter.
 */
export type ChipVariant = "default" | "success" | "error" | "warning" | "info"

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * O conteúdo de texto a ser exibido dentro do chip.
   */
  children: React.ReactNode
  /**
   * A variante de cor do chip, que indica seu propósito semântico.
   * @default "default"
   */
  variant?: ChipVariant
}
