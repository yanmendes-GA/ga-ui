import { cn } from "@/utils/cn"
import type { MenuSide, MenuAlign } from "./ActionMenu.types"

/**
 * Estilos para o wrapper, que posiciona o menu.
 */
export const getWrapperStyles = () => {
  return cn("relative inline-block text-left")
}

type PanelStyleProps = {
  side?: MenuSide
  align?: MenuAlign
  className?: string
}

/**
 * Estilos para o painel flutuante do menu.
 */
export const getActionMenuPanelStyles = ({
  side = "bottom",
  align = "start",
}: PanelStyleProps) => {
  return cn(
    // Estilos base do usuário
    "absolute z-50 w-56 rounded-[12px] bg-dark p-[20px]",
    "shadow-[0px_4px_25px_0px_rgba(0,0,0,0.15)]",
    "focus:outline-none",

    // --- Lógica de Posicionamento (Side e Offset) ---
    {
      "top-full mt-2": side === "bottom",
      "bottom-full mb-2": side === "top",
      "right-full mr-2": side === "left",
      "left-full ml-2": side === "right",
    },

    // --- Lógica de Transform Origin (para animações) ---
    {
      "origin-top": side === "bottom" && align === "center",
      "origin-top-left": side === "bottom" && align === "start",
      "origin-top-right": side === "bottom" && align === "end",

      "origin-bottom": side === "top" && align === "center",
      "origin-bottom-left": side === "top" && align === "start",
      "origin-bottom-right": side === "top" && align === "end",
    },

    // --- Lógica de Alinhamento ---
    {
      // Alinhamento Start/End
      "left-0": (side === "bottom" || side === "top") && align === "start",
      "right-0": (side === "bottom" || side === "top") && align === "end",
      "top-0": (side === "left" || side === "right") && align === "start",
      "bottom-0": (side === "left" || side === "right") && align === "end",

      // Alinhamento Center (com translate)
      "left-1/2 -translate-x-1/2":
        (side === "bottom" || side === "top") && align === "center",
      "top-1/2 -translate-y-1/2":
        (side === "left" || side === "right") && align === "center",
    },
  )
}
