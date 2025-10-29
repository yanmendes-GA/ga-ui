// src/atoms/Text/Text.styles.ts
import { cn } from "@/utils/cn"
import type { TextProps } from "./Text.types"

type TextStyleProps = Pick<TextProps, "variant">

// Mapeamento atualizado para USAR OS TOKENS DO CONFIG
const variantStyles = {
  h1: "text-h1 font-extrabold leading-h1",
  h2: "text-h2 font-extrabold leading-h2",
  h3: "text-h3 font-bold leading-h3",
  h4: "text-h4 font-bold leading-h4",
  h5: "text-h5 font-bold leading-h5",
  h6: "text-h6 font-bold leading-h6",
  body: "text-body font-normal leading-body",
  button: "text-button font-bold leading-button",
  label: "text-label font-bold leading-label",
  small: "text-small font-normal leading-small",
  caption: "text-caption font-medium leading-caption",
}

export const getTextStyles = ({ variant = "body" }: TextStyleProps) => {
  return cn("text-primary", variantStyles[variant])
}
