import { useState, useMemo, type ReactNode, Fragment } from "react"
import type {
  DataTableProps,
  DataSortDirection,
  DataTableColumn,
} from "./DataTable.types"
import { useDataTable } from "./useDataTable"
import {
  getWrapperStyles,
  getTableStyles,
  getHeaderStyles,
  getHeaderCellStyles,
  getRowStyles,
  getBodyCellStyles,
  getEmptyCellStyles,
  getExpandedRowStyles,
  getExpandedCellStyles,
  getFooterStyles,
  getFooterCellStyles,
} from "./DataTable.styles"
import { cn } from "@/utils/cn"
import { Text } from "@/atoms/Text"
import { Icon } from "@/atoms/Icon"
import { Button } from "@/atoms/Button"
import { ActionMenu } from "@/molecules/ActionMenu"
import { Paginator } from "@/molecules/Paginator"

// Componente interno para o ícone de Ordenação
const SortIcon = ({
  isSorted,
  direction,
}: {
  isSorted: boolean
  direction: DataSortDirection
}) => {
  if (!isSorted) {
    return <Icon name="sort-circle" />
  }
  const iconName = direction === "asc" ? "sort-circle-up" : "sort-circle-down"
  return <Icon name={iconName} />
}

export const DataTable = <T extends {}>({ 
  columns,
  items,
  rowKey,
  actions,
  renderExpandedRow,
  onRowClick,
  fixedHeader = false,
  emptyMessage = "Nenhum registro encontrado.",
  footer,
  paginator,
  className,
  ...props
}: DataTableProps<T>) => {
  // Hook para lógica de ordenação
  const { sortedItems, sortKey, sortDirection, handleHeaderClick } = 
    useDataTable(items)

  // Estado para controlar a página atual
  const [currentPage, setCurrentPage] = useState(paginator?.currentPage ?? 1)

  // Lógica de paginação
  const paginatedItems = useMemo(() => {
    if (!paginator) return sortedItems

    const { pageSize } = paginator
    const start = (currentPage - 1) * pageSize
    const end = start + pageSize
    return sortedItems.slice(start, end)
  }, [sortedItems, currentPage, paginator])

  // Estado para controlar linhas expandidas
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({})

  const toggleRowExpansion = (id: string) => {
    setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }))
  }

  // Memo para adicionar colunas de expansão e ações dinamicamente
  const displayColumns = useMemo(() => {
    const newColumns: DataTableColumn<T>[] = [...columns]

    // 1. Adiciona coluna de Ações (ao final)
    if (actions && actions.length > 0) {
      newColumns.push({
        key: "__actions",
        label: "",
        align: "right",
        width: "50px", // Largura para o ícone
        render: item => {
          const menuItems = actions.map((action, index) => ({
            id: `${item[rowKey] as string}-action-${index}`,
            label: action.label,
            icon: action.icon,
            disabled: action.disabled,
            onClick: () => action.onClick(item),
          }))

          return (
            <ActionMenu
              items={menuItems}
              trigger={
                <Button
                  id={`trigger-${item[rowKey] as string}`}
                  iconOnly
                  icon="menu-dots"
                  variant="ghost"
                  size="sm"
                />
              }
              side="bottom"
              align="end"
            />
          )
        },
      })
    }

    // 2. Adiciona coluna de Expansão (no início)
    if (renderExpandedRow) {
      newColumns.unshift({
        key: "__expand",
        label: "",
        width: "50px",
        render: item => {
          const id = item[rowKey] as string
          const isExpanded = !!expandedRows[id]
          return (
            <Button
              variant="ghost"
              size="sm"
              iconOnly
              icon={isExpanded ? "caret-down" : "caret-right"}
              onClick={e => {
                e.stopPropagation()
                toggleRowExpansion(id)
              }}
            />
          )
        },
      })
    }

    return newColumns
  }, [columns, actions, renderExpandedRow, expandedRows, rowKey])

  const colSpan = displayColumns.length

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Reseta as linhas expandidas ao mudar de página
    setExpandedRows({})
  }

  return (
    <div className={getWrapperStyles({ fixedHeader })}>
      <table
        className={cn(getTableStyles(), className)}
        {...props}
      >
        <thead className={getHeaderStyles({ fixedHeader })}> 
          <tr>
            {displayColumns.map(col => {
              const keyString = String(col.key)
              const isSorted = col.key === sortKey
              const ariaSort = isSorted
                ? sortDirection === "asc"
                  ? "ascending"
                  : "descending"
                : "none"

              return (
                <th
                  key={keyString}
                  className={cn(
                    getHeaderCellStyles({
                      align: col.align,
                      sortable: col.sortable,
                    }),
                    "group",
                  )}
                  style={{ width: col.width }}
                  onClick={() => handleHeaderClick(keyString, col.sortable)}
                  aria-sort={ariaSort}
                >
                  <div
                    className={cn("flex items-center gap-2", {
                      "justify-start": col.align === "left" || !col.align,
                      "justify-center": col.align === "center",
                      "justify-end": col.align === "right",
                    })}
                  >
                    <span>{col.label}</span>
                    {col.sortable && (
                      <SortIcon
                        isSorted={isSorted}
                        direction={sortDirection}
                      />
                    )}
                  </div>
                </th>
              )
            })}
          </tr>
        </thead>

        <tbody>
          {paginatedItems.length > 0 ? (
            paginatedItems.map(item => {
              const id = item[rowKey] as string
              const isExpanded = !!expandedRows[id]

              return (
                <Fragment key={id}>
                  {/* --- Linha Principal --- */}
                  <tr
                    className={getRowStyles({ clickable: !!onRowClick })}
                    onClick={() => onRowClick?.(item)}
                  >
                    {displayColumns.map(col => (
                      <td
                        key={String(col.key)}
                        className={getBodyCellStyles({ align: col.align })}
                        style={{ width: col.width }}
                      >
                        {col.render
                          ? col.render(item)
                          : (item[col.key as keyof T] as ReactNode)}
                      </td>
                    ))}
                  </tr>

                  {/* --- Linha Expandida (Condicional) --- */}
                  {isExpanded && renderExpandedRow && (
                    <tr className={getExpandedRowStyles()}>
                      <td
                        colSpan={colSpan}
                        className={getExpandedCellStyles()}
                      >
                        {renderExpandedRow(item)}
                      </td>
                    </tr>
                  )}
                </Fragment>
              )
            })
          ) : (
            // --- Linhas Vazias ---
            <tr>
              <td
                colSpan={colSpan}
                className={getEmptyCellStyles()}
              >
                <Text variant="small">{emptyMessage}</Text>
              </td>
            </tr>
          )}
        </tbody>

        {(footer || paginator) && (
          <tfoot className={getFooterStyles()}>
            <tr>
              <td
                colSpan={colSpan}
                className={getFooterCellStyles()}
              >
                {footer ??
                  (paginator && (
                    <div className="flex justify-center">
                      <Paginator
                        {...paginator}
                        totalCount={items.length}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                      />
                    </div>
                  ))}
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  )
}

