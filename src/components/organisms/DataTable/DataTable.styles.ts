import { cn } from "@/utils/cn"
import type { DataTextAlign } from "./DataTable.types"

export const getWrapperStyles = ({
  fixedHeader,
}: {
  fixedHeader?: boolean
}) => {
  return cn("w-full", {
    "overflow-y-auto max-h-[100%]": fixedHeader,
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
    "first:rounded-tl-[10px] last:rounded-tr-[10px] first:rounded-bl-[10px] last:rounded-br-[10px]",
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

export const getRowStyles = ({ clickable }: { clickable?: boolean }) => {
  return cn(
    "border-b border-dark-400 last:border-b-0",
    "hover:bg-dark-400 transition-colors",
    {
      "cursor-pointer": clickable,
    },
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

// --- Estilos para Linha Expandida ---

export const getExpandedRowStyles = () => {
  // Estilo para a <tr> da linha expandida
  return cn("border-b border-dark-400")
}

export const getExpandedCellStyles = () => {
  // A célula expandida usa um background mais escuro
  return cn("p-4 bg-dark-500")
}

// --- Estilos para o Footer ---

export const getFooterStyles = () => {
  return cn("bg-dark-500 border-t-2 border-dark-400 sticky bottom-0")
}

export const getFooterCellStyles = () => {
  return cn("p-2")
}
