import type { Editor } from "@tiptap/react"
import type { MouseEvent } from "react" // Importar o MouseEvent

/**
 * Define os botões de controle disponíveis na toolbar.
 * Você pode adicionar/remover itens aqui (ex: 'link', 'image', 'codeBlock').
 */
export type RichTextControl =
  | "bold"
  | "italic"
  | "strike"
  | "underline"
  | "paragraph"
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "bulletList"
  | "orderedList"
  | "blockquote"
  | "|"
  | "code"
  | "undo"
  | "redo"
  | "link"
  | "clear"

export interface RichTextProps {
  /**
   * O ID é obrigatório para a acessibilidade (conectar label e input).
   */
  id: string
  /**
   * Conteúdo HTML (controlado).
   */
  value: string
  /**
   * Função de callback para 'onChange'.
   */
  onChange: (html: string) => void
  /**
   * Texto a ser exibido acima do input.
   */
  label?: string
  /**
   * Texto placeholder.
   */
  placeholder?: string
  /**
   * Define quando o input é apenas leitura.
   */
  readonly?: boolean
  /**
   * Define o estado desabilitado.
   */
  disabled?: boolean
  /**
   * Define a variante de feedback (reutilizando do Textarea).
   */
  variant?: "default" | "success" | "error"
  /**
   * Array de controles a serem exibidos na toolbar.
   * Se não for fornecido, usará o 'defaultControls'.
   */
  controls?: RichTextControl[]
}

export interface RichTextToolbarProps {
  editor: Editor | null
  controls: RichTextControl[]
}

export interface ToolbarButtonProps {
  icon: string
  // --- ALTERAÇÃO AQUI ---
  // onClick: () => void
  onMouseDown: (event: MouseEvent<HTMLButtonElement>) => void
  // --- FIM DA ALTERAÇÃO ---
  isActive?: boolean
  disabled?: boolean
}
