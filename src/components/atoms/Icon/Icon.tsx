import type { IconProps } from "./Icon.types"
import { OrderedList } from "./svg-icons"

export const Icon = ({ name, color = "primary" }: IconProps) => {
  if (name === "list-ol") {
    return <OrderedList color={color} />
  } else {
    return (
      <i
        className={`fi fi-rs-${name} flex items-center justify-center`}
        style={{ color: `hsl(var(--${color}))` }}
      />
    )
  }
}
