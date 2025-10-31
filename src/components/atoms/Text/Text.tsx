import type { ElementType } from "react"
import type { TextProps } from "./Text.types"
import { getTextStyles } from "./Text.styles"

export const Text = <C extends ElementType = "p">({
  as,
  variant = "body",
  children,
  ...props
}: TextProps<C>) => {
  const Component = as || "p"

  return (
    <Component
      className={getTextStyles({ variant })}
      {...props}
    >
      {children}
    </Component>
  )
}
