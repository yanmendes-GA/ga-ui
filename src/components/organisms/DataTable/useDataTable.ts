import { useState, useMemo } from "react"
import type { DataSortDirection } from "./DataTable.types"

/**
 * Hook para gerenciar o estado de ordenação do DataTable.
 * @param items - O array de dados original.
 * @returns Um objeto com os items ordenados, estado de ordenação
 * e o handler para cliques no header.
 */
export const useDataTable = <T extends {}>(items: T[]) => {
  const [sortKey, setSortKey] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<DataSortDirection>("asc")

  /**
   * Altera o estado de ordenação quando um header clicável é acionado.
   */
  const handleHeaderClick = (key: string, sortable?: boolean) => {
    if (!sortable) return

    let direction: DataSortDirection = "asc"
    // Se clicou na mesma coluna, inverte a direção
    if (key === sortKey && sortDirection === "asc") {
      direction = "desc"
    }
    setSortKey(key)
    setSortDirection(direction)
  }

  /**
   * Memoiza os itens ordenados.
   * Retorna os itens originais se nenhuma chave de ordenação estiver ativa.
   */
  const sortedItems = useMemo(() => {
    if (!sortKey) return items

    // Cria uma cópia para não mutar o array original
    const newItems = [...items]

    newItems.sort((a, b) => {
      const aValue = a[sortKey as keyof T]
      const bValue = b[sortKey as keyof T]

      // Lógica de ordenação (trata nulos)
      if (aValue === null || aValue === undefined)
        return sortDirection === "asc" ? -1 : 1
      if (bValue === null || bValue === undefined)
        return sortDirection === "asc" ? 1 : -1

      if (aValue < bValue) {
        return sortDirection === "asc" ? -1 : 1
      }
      if (aValue > bValue) {
        return sortDirection === "asc" ? 1 : -1
      }
      return 0
    })

    return newItems
  }, [items, sortKey, sortDirection])

  return { sortedItems, sortKey, sortDirection, handleHeaderClick }
}
