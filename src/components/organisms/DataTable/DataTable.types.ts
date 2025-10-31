import type { HTMLAttributes, ReactNode } from "react"

export type DataTextAlign = "left" | "center" | "right"
export type DataSortDirection = "asc" | "desc"

/**
 * Define a estrutura de uma coluna da tabela.
 * Usamos um genérico <T> para que 'key' e 'render'
 * sejam fortemente tipados com base nos dados.
 */
export interface DataTableColumn<T> {
  /**
   * Chave de acesso no objeto de dados (ex: 'title').
   * Pode ser uma chave "virtual" (ex: 'actions')
   * se uma função 'render' for fornecida.
   */
  key: keyof T | string
  /**
   * Rótulo a ser exibido no header (ex: 'Título').
   */
  label: string
  /**
   * Alinhamento do conteúdo (header e células).
   * @default 'left'
   */
  align?: DataTextAlign
  /**
   * Largura da coluna (ex: '200px', '25%').
   */
  width?: string
  /**
   * Habilita a ordenação nesta coluna.
   */
  sortable?: boolean
  /**
   * Função de renderização customizada (o 'slot').
   * Recebe o item inteiro da linha e retorna um ReactNode.
   * Se não for fornecida, a tabela renderizará o valor de 'key'
   * (ex: item[key]).
   */
  render?: (item: T) => ReactNode
}

/**
 * Props do componente principal DataTable.
 */
export interface DataTableProps<T> extends HTMLAttributes<HTMLTableElement> {
  /**
   * Array de definições das colunas.
   */
  columns: DataTableColumn<T>[]
  /**
   * Array dos dados (items) a serem exibidos.
   */
  items: T[]
  /**
   * Habilita o header fixo (sticky) e um scroll
   * vertical no container.
   * @default false
   */
  fixedHeader?: boolean
  /**
   * Mensagem para quando 'items' estiver vazio.
   * @default 'Nenhum registro encontrado.'
   */
  emptyMessage?: string
}
