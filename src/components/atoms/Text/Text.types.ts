import type { ElementType, HTMLAttributes, ReactNode } from "react"

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

export interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  as?: ElementType
  variant?: TextVariant
}
