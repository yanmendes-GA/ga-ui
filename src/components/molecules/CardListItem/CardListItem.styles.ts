import { cn } from "@/utils/cn"
import type { GridColsCount } from "./CardListItem.types"

const colsMap: Record<GridColsCount, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12",
}

export const getCardListItemStyles = (cols?: GridColsCount) => {
  const gridLayout = colsMap[cols ? cols : 5]

  return {
    wrapper: cn(
      "grid items-center gap-x-6 w-full h-[104px] px-6 py-4 bg-dark-400 rounded-[12px]",
      gridLayout,
    ),
  }
}
