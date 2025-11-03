import type { PaginatorProps } from "./Paginator.types"
import { getPaginatorStyles } from "./Paginator.styles"
import { usePaginator, DOTS } from "./usePaginator"
import { Button } from "@/atoms/Button"
import { cn } from "@/utils/cn"
import { Icon } from "@/atoms/Icon"
import { Text } from "@/atoms/Text"

export const Paginator = ({
  onPageChange,
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
  className,
  ...props
}: PaginatorProps) => {
  const paginationRange = usePaginator({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  })

  const totalPageCount = Math.ceil(totalCount / pageSize)

  const onNext = () => {
    if (currentPage < totalPageCount) {
      onPageChange(currentPage + 1)
    }
  }

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const styles = getPaginatorStyles()

  const prevButton = (
    <Button
      iconOnly
      variant="ghost"
      size="sm"
      icon="arrow-left"
      onClick={onPrevious}
      disabled={currentPage === 1}
      aria-label="Ir para a página anterior"
    />
  )
  const nextButton = (
    <Button
      iconOnly
      variant="ghost"
      size="sm"
      icon="arrow-right"
      onClick={onNext}
      disabled={currentPage === totalPageCount}
      aria-label="Ir para a próxima página"
    />
  )

  return (
    <nav
      role="navigation"
      aria-label="Paginação"
      className={cn(styles.paginator, className)}
      {...props}
    >
      {prevButton}

      {paginationRange.map((pageNumber, index) => {
        const key = `${pageNumber}-${index}`

        if (pageNumber === DOTS) {
          return <Icon color="dark-300" name="menu-dots" />
        }

        const isCurrent = pageNumber === currentPage
        return (
          <Button
            key={key}
            iconOnly
            variant={isCurrent ? "outline" : "ghost"}
            size="sm"
            onClick={() => onPageChange(pageNumber as number)}
          >
            <Text variant="button">{pageNumber}</Text>
          </Button>
        )
      })}

      {nextButton}
    </nav>
  )
}
