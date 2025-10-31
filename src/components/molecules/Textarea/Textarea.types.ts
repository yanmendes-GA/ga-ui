import type { TextareaHTMLAttributes } from "react"

export type TextareaVariant = "default" | "success" | "error"

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * O ID é obrigatório para a acessibilidade (conectar label e input).
   */
  id: string
  /**
   * Texto a ser exibido acima do input.
   */
  label?: string
  /**
   * Define quando o input é apenas litura.
   */
  readonly?: boolean
  /**
   * Função de callback para o clique no ícone.
   */

  variant?: TextareaVariant
}
