import type { HTMLAttributes, ReactNode } from "react"

export type DataTextAlign = "left" | "center" | "right"
export type DataSortDirection = "asc" | "desc"

/**
 * Define a estrutura de uma ação para o menu.
 * O 'onClick' receberá o item <T> da linha.
 */
export interface DataAction<T> {
  label: string
  icon?: string
  disabled?: boolean
  onClick: (item: T) => void
}

/**
 * Define a estrutura de uma coluna da tabela.
 */
export interface DataTableColumn<T> {
  key: keyof T | string
  label: string
  align?: DataTextAlign
  width?: string
  sortable?: boolean
  render?: (item: T) => ReactNode
}

/**
 * Props do componente principal DataTable.
 */
export interface DataTableProps<T> extends HTMLAttributes<HTMLTableElement> {
  /**
   * Chave única para cada item no array 'items' (ex: 'id').
   * Essencial para as funções de expansão e ações.
   */
  rowKey: keyof T
  /**
   * Array de definições das colunas.
   */
  columns: DataTableColumn<T>[]
  /**
   * Array dos dados (items) a serem exibidos.
   */
  items: T[]
  /**
   * Array de ações para renderizar um ActionMenu
   * em cada linha. Adiciona uma coluna de ações automaticamente.
   */
  actions?: DataAction<T>[]
  /**
   * Função para renderizar o conteúdo expandido de uma linha.
   * Adiciona uma coluna de expansão (toggle) automaticamente.
   */
  renderExpandedRow?: (item: T) => ReactNode
  /**
   * Callback disparado ao clicar em uma linha.
   * Ativa o cursor 'pointer' na linha.
   */
  onRowClick?: (item: T) => void
  /**
   * Habilita o header fixo (sticky).
   * @default false
   */
  fixedHeader?: boolean
  /**
   * Mensagem para quando 'items' estiver vazio.
   * @default 'Nenhum registro encontrado.'
   */
  emptyMessage?: string
}
