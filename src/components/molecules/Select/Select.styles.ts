import { cn } from "@/utils/cn"
import type { SelectVariant } from "./Select.types"

export const getWrapperStyles = (className?: string) => {
  return cn("flex w-full flex-col gap-2 relative", className) //
}

export const getLabelStyles = () => {
  return cn("font-bold text-sm text-dark-100") //
}

type TriggerStyleProps = {
  variant: SelectVariant
  disabled?: boolean
  iconLeft?: string
  readonly?: boolean
}

export const getSelectTriggerStyles = ({
  variant,
  disabled,
  iconLeft,
  readonly,
}: TriggerStyleProps) => {
  return cn(
    "flex h-[50px] text-dark-100 w-full items-center gap-[10px] rounded-[12px] bg-dark px-[20px] transition-all border border-transparent", //
    {
      "flex-row-reverse": iconLeft,
      "focus:border-dark-200 focus:outline-none":
        variant === "default" && !disabled,
      "border-error": variant === "error",
      "border-success": variant === "success",
      "bg-dark-300 border-dark-500 hover:border-dark-500 focus:border-dark-500":
        readonly, //
      "bg-dark-300 opacity-50 cursor-not-allowed": disabled,
      "focus:border-transparent": disabled,
    },
  )
}

export const getTriggerTextStyles = (hasValue: boolean) => {
  return cn("flex-1 text-left", {
    "font-medium text-dark-100": hasValue,
    "text-dark-300 text-[12px] italic": !hasValue,
  })
}

export const getIconLeftStyles = ({
  variant,
  disabled,
  readonly,
}: Omit<TriggerStyleProps, "iconLeft">) => {
  return cn("text-dark-100 transition-colors cursor-default", {
    "text-error": variant === "error",
    "text-success": variant === "success",
    "text-dark-500": readonly,
  })
}

export const getChevronIconStyles = (disabled?: boolean) => {
  return cn("text-dark-100", { "opacity-50": disabled })
}

export const getDropdownPanelStyles = () => {
  return cn(
    "absolute left-0 z-10 w-full mt-[12px] top-full",
    "rounded-[12px] bg-dark p-2", // Estilo do painel
    "shadow-[0px_4px_25px_0px_rgba(0,0,0,0.15)]",
    "focus:outline-none",
  )
}

/**
 * Estilos para cada item (opção) no painel.
 */
export const getOptionItemStyles = (isActive: boolean) => {
  return cn(
    "flex w-full items-center",
    "px-4 py-2 text-sm font-medium text-foreground", //
    "rounded-md transition-colors",
    "cursor-pointer hover:bg-dark-400", // (Inferência de hover)
    {
      "bg-primary text-dark-500 hover:bg-primary": isActive, // (Inferência de ativo)
    },
  )
}
