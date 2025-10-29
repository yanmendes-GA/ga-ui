// src/atoms/Text/Text.styles.ts
import { cn } from "@/utils/cn"
import type { TextProps } from "./Text.types"

type TextStyleProps = Pick<TextProps, "variant">

// Mapeamento atualizado para USAR OS TOKENS DO CONFIG
const variantStyles = {
  h1: "text-[5.050rem] font-extrabold leading-h1",
  h2: "text-[3.850rem] font-extrabold leading-h2",
  h3: "text-[2.950rem] font-bold leading-h3",
  h4: "text-[2.250rem] font-bold leading-h4",
  h5: "text-[1.700rem] font-bold leading-h5",
  h6: "text-[1.300rem] font-bold leading-h6",
  body: "text-[1.000rem] font-normal leading-body",
  button: "text-[0.900rem] font-bold leading-button",
  label: "text-[0.750rem] font-bold leading-label",
  small: "text-[0.750rem] font-normal leading-small",
  caption: "text-[0.600rem] font-medium leading-caption italic",
}

export const getTextStyles = ({ variant = "body" }: TextStyleProps) => {
  return cn("text-dark-100", variantStyles[variant])
}
