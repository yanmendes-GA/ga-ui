import type { HTMLAttributes } from "react"

export interface UsePaginatorProps {
  /**
   * Número total de itens em todas as páginas.
   */
  totalCount: number
  /**
   * Número de itens por página.
   */
  pageSize: number
  /**
   * Número de páginas a serem exibidas em cada lado da página atual.
   * @default 1
   */
  siblingCount?: number
  /**
   * A página atual (começa em 1).
   */
  currentPage: number
}

export interface PaginatorProps
  extends Omit<HTMLAttributes<HTMLElement>, "onChange">,
    UsePaginatorProps {
  /**
   * Callback disparado quando a página é alterada.
   * Retorna o novo número da página.
   */
  onPageChange: (page: number) => void
}
