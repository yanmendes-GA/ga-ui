import type { ReactElement } from "react"

export type MenuSide = "top" | "bottom" | "left" | "right"
export type MenuAlign = "start" | "center" | "end"

export interface ActionMenuItem {
  id: string
  label: string
  icon?: string
  disabled?: boolean
  onClick: () => void
}

export interface ActionMenuProps<T extends ActionMenuItem> {
  /**
   * O elemento (ex: <Button />) que irá disparar a abertura do menu.
   */
  trigger: ReactElement
  /**
   * Array de ações a serem exibidas no menu.
   */
  items: T[]
  /**
   * O lado do trigger onde o menu deve aparecer.
   * @default "bottom"
   */
  side?: MenuSide
  /**
   * O alinhamento do menu em relação ao lado.
   * @default "start"
   */
  align?: MenuAlign
}
