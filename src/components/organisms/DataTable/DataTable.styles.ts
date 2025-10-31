import { cn } from "@/utils/cn"
import type { DataTextAlign } from "./DataTable.types"

export const getWrapperStyles = ({
  fixedHeader,
}: {
  fixedHeader?: boolean
}) => {
  return cn("w-full overflow-hidden rounded-[8px]", {
    "overflow-y-auto max-h-[600px]": fixedHeader,
  })
}

export const getTableStyles = () => {
  return cn("w-full border-collapse")
}

export const getHeaderStyles = ({ fixedHeader }: { fixedHeader?: boolean }) => {
  return cn("bg-dark-400", {
    "sticky top-0 z-10": fixedHeader,
  })
}

export const getHeaderCellStyles = ({
  align,
  sortable,
}: {
  align?: DataTextAlign
  sortable?: boolean
}) => {
  return cn(
    "text-[15px] font-semibold text-dark-200 py-2 px-4",
    {
      "text-left": align === "left" || !align,
      "text-center": align === "center",
      "text-right": align === "right",
    },

    {
      "cursor-pointer hover:text-dark-100": sortable,
    },
  )
}

export const getRowStyles = () => {
  return cn(
    "border-b border-dark-400 last:border-b-0",
    "hover:bg-dark-400 transition-colors",
  )
}

export const getBodyCellStyles = ({ align }: { align?: DataTextAlign }) => {
  return cn("p-4 text-sm text-dark-100", {
    "text-left": align === "left" || !align,
    "text-center": align === "center",
    "text-right": align === "right",
  })
}

export const getEmptyCellStyles = () => {
  return cn("p-8 text-center text-dark-300 italic")
}
