import type { ElementType, ReactNode, ComponentPropsWithoutRef } from "react"

export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "button"
  | "label"
  | "small"
  | "caption"

// Define as props que o nosso componente Text adiciona
export type TextOwnProps<C extends ElementType> = {
  children: ReactNode
  as?: C
  variant?: TextVariant
}

// Cria as props finais, combinando as nossas com as props do elemento HTML subjacente (ex: <p>, <label>)
// Usamos 'p' como padrão, assim como no componente.
export type TextProps<C extends ElementType = "p"> = TextOwnProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof TextOwnProps<C>>
