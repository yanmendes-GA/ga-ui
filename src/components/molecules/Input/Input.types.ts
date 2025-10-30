import type { InputHTMLAttributes } from "react"

export type InputVariant = "default" | "success" | "error"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * O ID é obrigatório para a acessibilidade (conectar label e input).
   */
  id: string
  /**
   * Texto a ser exibido acima do input.
   */
  label?: string
  /**
   * Nome do ícone (do átomo Icon) a ser exibido à esquerda.
   */
  iconLeft?: string
  /**
   * Nome do ícone (do átomo Icon) a ser exibido à direita.
   */
  iconRight?: string

  /**
   * Define quando o input é apenas litura.
   */
  readonly?: boolean

  /**
   * Função de callback para o clique no ícone da direita.
   */
  onIconClick?: () => void
  /**
   * O estado visual do input.
   * @default "default"
   */
  variant?: InputVariant
  /**
   * Indica se o input é de senha ou não
   */
  isPassword?: boolean
}
