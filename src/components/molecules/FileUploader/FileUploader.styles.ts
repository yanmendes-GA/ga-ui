import { cn } from "@/utils/cn"

type UploaderStyleProps = {
  isDragging: boolean
  disabled: boolean
  hasFile: boolean
}

/**
 * Define os estilos para o container principal do FileUploader,
 * variando com base nos estados de 'arrastando', 'desabilitado' e 'com arquivo'.
 */
export const getUploaderStyles = ({
  isDragging,
  disabled,
  hasFile,
}: UploaderStyleProps) => {
  return cn(
    "w-full rounded-[8px] transition-all flex items-center border-2", // Estilo base
    // Estilos de acessibilidade para foco
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background",

    // Estado Desabilitado: aplicado independentemente de outros estados
    disabled &&
      "opacity-50 cursor-not-allowed pointer-events-none bg-dark-300 border-dark-300 text-dark-200",

    // Estilos de estados ativos (não desabilitados)
    !disabled && {
      // Estado 3: Arquivo Selecionado
      "border-solid border-primary bg-dark-500 p-6 flex-row justify-between gap-4":
        hasFile,

      // Estado 1: Ocioso (Sem arquivo, sem arrastar)
      "border-dashed border-primary bg-dark-500 h-[160px] flex-col justify-center gap-2 text-dark-200 cursor-pointer hover:bg-dark-400":
        !hasFile && !isDragging,

      // Estado 2: Arrastando
      "border-solid border-dark-300 bg-dark-300 h-[160px] flex-col justify-center gap-2 text-dark-100 cursor-pointer":
        !hasFile && isDragging,
    },
  )
}
