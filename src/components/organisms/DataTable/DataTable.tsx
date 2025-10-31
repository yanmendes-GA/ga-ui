import { useState, useMemo, type ReactNode } from "react"
import type { DataTableProps, DataSortDirection } from "./DataTable.types"
import {
  getWrapperStyles,
  getTableStyles,
  getHeaderStyles,
  getHeaderCellStyles,
  getRowStyles,
  getBodyCellStyles,
  getEmptyCellStyles,
} from "./DataTable.styles"
import { cn } from "@/utils/cn"
import { Text } from "@/atoms/Text"
import { Icon } from "@/atoms/Icon"

const SortIcon = ({
  isSorted,
  direction,
}: {
  isSorted: boolean
  direction: DataSortDirection | null
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
  fixedHeader = false,
  emptyMessage = "Nenhum registro encontrado.",
  className,
  ...props
}: DataTableProps<T>) => {
  const colSpan = columns.length

  const [sortKey, setSortKey] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<DataSortDirection | null>(
    "asc",
  )

  const handleHeaderClick = (key: string, sortable?: boolean) => {
    if (!sortable) return

    let direction: DataSortDirection | null = "asc"
    if (key === sortKey && sortDirection === "asc") {
      direction = "desc"
    }
    setSortKey(key)
    setSortDirection(direction)
  }

  const sortedItems = useMemo(() => {
    if (!sortKey) return items

    const newItems = [...items]

    newItems.sort((a, b) => {
      const aValue = a[sortKey as keyof T]
      const bValue = b[sortKey as keyof T]

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

  return (
    <div className={getWrapperStyles({ fixedHeader })}>
      <table
        className={cn(getTableStyles(), className)}
        {...props}
      >
        <thead className={getHeaderStyles({ fixedHeader })}>
          <tr>
            {columns.map(col => {
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
                        direction={sortDirection || "asc"}
                      />
                    )}
                  </div>
                </th>
              )
            })}
          </tr>
        </thead>

        <tbody>
          {sortedItems.length > 0 ? (
            sortedItems.map((item, index) => (
              <tr
                key={index}
                className={getRowStyles()}
              >
                {columns.map(col => (
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
            ))
          ) : (
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
      </table>
    </div>
  )
}
