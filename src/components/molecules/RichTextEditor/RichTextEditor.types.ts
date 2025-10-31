import type { Editor } from "@tiptap/react"

/**
 * Define os botões de controle disponíveis na toolbar.
 * Você pode adicionar/remover itens aqui (ex: 'link', 'image', 'codeBlock').
 */
export type RichTextControl =
  | "bold"
  | "italic"
  | "strike"
  | "underline" // Adicionado da imagem
  | "paragraph"
  | "heading-1" // A imagem mostra 'Normal text' (select)
  | "heading-2"
  | "heading-3"
  | "bulletList"
  | "orderedList"
  | "blockquote"
  | "|"
  | "code" // O </> da imagem
  | "undo"
  | "redo"
  | "link" // O ícone de link da imagem
  | "clear" // O ícone 'format_clear' da imagem

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
  onClick: () => void
  isActive?: boolean
  disabled?: boolean
}
