import { cn } from "@/utils/cn"

/**
 * Estilos para o container principal (nav).
 */
export const getPaginatorStyles = () => {
  return cn("flex items-center justify-center gap-2")
}

/**
 * Estilos para o item "..." (ellipsis).
 */
export const getPaginatorItemStyles = () => {
  return cn(
    "flex items-center justify-center text-dark-100 font-bold",
    "w-[40px] h-[40px]", // Deve ter o mesmo tamanho do Button 'sm'
  )
}
