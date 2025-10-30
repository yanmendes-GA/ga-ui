import type { ReactNode } from "react"

/**
 * Define o número de colunas do grid (de 1 a 12).
 */
export type GridColsCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface CardListItemProps {
  /**
   * O conteúdo dinâmico do card.
   * O número de filhos deve corresponder ao layout de grid definido.
   */
  children: ReactNode
  /**
   * Atalho para definir um número de colunas (1 a 12) de tamanho igual.
   * Será ignorado se `gridCols` for fornecido.
   * @default undefined
   */
  cols?: GridColsCount
}
