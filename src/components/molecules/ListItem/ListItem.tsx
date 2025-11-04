import { getListItemStyles } from "./ListItem.styles"
import { Icon } from "@/atoms/Icon"
import type { ElementType } from "react"
import type { ListItemProps } from "./ListItem.types"

export const ListItem = <T extends ElementType = "a">({
  as,
  label,
  icon,
  isActive = false,
  to,
  isCollapsed,
  onClick,
  ...props
}: ListItemProps<T>) => {
  const Component = as || "a"

  const isDisabled = (props as any).disabled || false
  const styles = getListItemStyles({
    isActive,
    isDisabled,
    isCollapsed,
  })

  const componentProps = {
    ...props,
    ...(Component === "a" && {
      href: typeof to === "string" ? to : undefined,
    }),
    ...(Component !== "a" && { to: to }),
  }

  return (
    <Component
      {...componentProps}
      className={styles.listItem}
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
    >
      {icon && <Icon name={icon} />}
      {!isCollapsed && <span className={styles.label}>{label}</span>}
    </Component>
  )
}
