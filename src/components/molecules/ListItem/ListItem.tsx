import type { ElementType } from "react"
import type { ListItemProps } from "./ListItem.types"
import { getListItemStyles, getListItemLabelStyles } from "./ListItem.styles"
import { Icon } from "@/atoms/Icon"

export const ListItem = <T extends ElementType = "a">({
  as,
  label,
  icon,
  isActive = false,
  iconOnly,
  to,
  isCollapsed,
  onClick,
  ...props
}: ListItemProps<T>) => {
  const Component = as || "a"

  const isDisabled = (props as any).disabled || false

  return (
    <Component
      href={to}
      className={getListItemStyles({ isActive, isDisabled, isCollapsed })}
      aria-current={isActive ? "page" : undefined}
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation()

        if (isDisabled) {
          e.preventDefault()
        }
        if (onClick) {
          ;(onClick as any)(e)
        }
      }}
      {...props}
    >
      {icon && <Icon name={icon} />}
      <span className={getListItemLabelStyles({ isCollapsed })}>{label}</span>
    </Component>
  )
}
