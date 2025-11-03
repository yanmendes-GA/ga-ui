import { cn } from "@/utils/cn"
import type { MenuSide, MenuAlign } from "./ActionMenu.types"

export const getActionMenuStyles = ({
  side = "bottom",
  align = "start",
}: PanelStyleProps) => {
  return {
    wrapper: cn("relative inline-block text-left"),
    panel: cn(
      "absolute z-50 rounded-[12px] bg-dark p-[20px]",
      "shadow-[0px_4px_25px_0px_rgba(0,0,0,0.15)]",
      "focus:outline-none",

      {
        "top-full mt-2": side === "bottom",
        "bottom-full mb-2": side === "top",
        "right-full mr-2": side === "left",
        "left-full ml-2": side === "right",
      },

      {
        "origin-top": side === "bottom" && align === "center",
        "origin-top-left": side === "bottom" && align === "start",
        "origin-top-right": side === "bottom" && align === "end",

        "origin-bottom": side === "top" && align === "center",
        "origin-bottom-left": side === "top" && align === "start",
        "origin-bottom-right": side === "top" && align === "end",
      },

      {
        "left-0": (side === "bottom" || side === "top") && align === "start",
        "right-0": (side === "bottom" || side === "top") && align === "end",
        "top-0": (side === "left" || side === "right") && align === "start",
        "bottom-0": (side === "left" || side === "right") && align === "end",

        "left-1/2 -translate-x-1/2":
          (side === "bottom" || side === "top") && align === "center",
        "top-1/2 -translate-y-1/2":
          (side === "left" || side === "right") && align === "center",
      },
    ),
  }
}
