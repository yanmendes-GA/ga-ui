import { getListItemStyles } from "./ListItem.styles"
import { Icon } from "@/atoms/Icon"

export const ListItem = <T extends ElementType = "a">(
  {
    as,
    label,
    icon,
    isActive = false,
    iconOnly,
    to,
    isCollapsed,
    onClick,
    ...props
  }: ListItemProps<T>,
) => {
  const Component = as || "a"

  const isDisabled = (props as any).disabled || false
  const styles = getListItemStyles({ isActive, isDisabled, isCollapsed })

  return (
    <Component
      href={to}
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
      {...props}
    >
      {icon && <Icon name={icon} />}
      <span className={styles.label}>{label}</span>
    </Component>
  )
}
