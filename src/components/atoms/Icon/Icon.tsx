import type { IconProps } from "./Icon.types"

export const Icon = ({ name, color }: IconProps) => {
  return (
    <i
      className={`fi fi-rs-${name} flex items-center justify-center`}
      style={{ color: `hsl(var(--${color}))` }}
    />
  )
}
