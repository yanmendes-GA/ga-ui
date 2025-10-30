import { cn } from "@/utils/cn"

type TabStyleProps = {
  isActive?: boolean
  isFirst?: boolean
  disabled?: boolean
}

export const getTabStyles = ({
  isActive = false,
  isFirst = false,
  disabled = false,
}: TabStyleProps) => {
  return cn(
    "relative inline-flex  items-center justify-center",
    "h-[48px] px-[32px]",
    "font-bold text-dark-100",
    "transform",
    "transition-all duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:z-40",
    "z-10 hover:z-20",
    {
      "ml-[-24px]": !isFirst,
    },

    // --- Estilos de Estado ---

    // Estado Padrão (Default)
    {
      "hover:bg-dark-400": !isActive,
      "active:bg-dark-500": !isActive,
    },

    // Estado Ativo (Selecionado)
    {
      "bg-primary text-dark-500 z-30": isActive,
    },

    // Estado Desabilitado
    {
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-dark-300 disabled:hover:bg-dark-300 disabled:z-0":
        disabled,
    },
  )
}

/**
 * Estilos para o conteúdo interno (span) para reverter a inclinação do botão.
 */
export const getTabContentStyles = () => {
  return cn("block transform skew-x-[40deg]")
}

export const getTabBackgroundStyles = () => {
  return cn(
    "absolute bg-dark-300 w-full h-full inset-0 skew-x-[-20deg] pointer-events-none",
  )
}
