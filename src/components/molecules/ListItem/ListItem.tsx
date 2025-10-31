import type { ElementType } from "react"
import type { ListItemProps } from "./ListItem.types"
import { getListItemStyles } from "./ListItem.styles"
import { Icon } from "@/atoms/Icon"

export const ListItem = <T extends ElementType = "a">({
  as,
  label,
  icon,
  isActive = false,
  className,
  ...props
}: ListItemProps<T>) => {
  const Component = as || "a"

  const isDisabled = (props as any).disabled || false

  return (
    <Component
      className={getListItemStyles({ isActive, isDisabled, className })}
      aria-current={isActive ? "page" : undefined}
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation()

        if (isDisabled) {
          e.preventDefault()
        }
        if (props.onClick) {
          ;(props as any).onClick(e)
        }
      }}
      {...props}
    >
      {icon && <Icon name={icon} />}
      <span className="flex-1">{label}</span>
    </Component>
  )
}
