import type { HTMLAttributes } from "react"

export interface FileUploaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onDrop" | "onChange"> {
  /**
   * Texto a ser exibido na área de upload.
   */
  label?: string
  /**
   * Função de callback disparada quando um arquivo é selecionado ou limpo.
   */
  onFileSelect: (file: File | null) => void
  /**
   * Função de callback para o botão "Visualizar". Se não for fornecida, o botão não é renderizado.
   */
  onView?: (file: File) => void
  /**
   * String com os tipos de arquivo aceitos (ex: "image/png, application/pdf").
   */
  acceptedFileTypes?: string
  /**
   * Um arquivo inicial para controlar o componente.
   */
  initialFile?: File | null
  /**
   * Desabilita o componente.
   */
  disabled?: boolean
}
