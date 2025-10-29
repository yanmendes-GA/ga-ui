import type { TextProps } from "./Text.types"
import { getTextStyles } from "./Text.styles"

export const Text = ({
  as: Component = "p",
  variant = "body",
  children,
}: TextProps) => {
  return (
    <Component className={getTextStyles({ variant })}>{children}</Component>
  )
}
