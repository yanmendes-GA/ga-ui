import { getListItemStyles } from "./ListItem.styles"
import { Icon } from "@/atoms/Icon"
import type { ListItemProps } from "./ListItem.types"

export const ListItem = ({
  label,
  icon,
  onClick,
  ...props
}: ListItemProps) => {
  const isDisabled = props.disabled || false
  const styles = getListItemStyles({
    isDisabled,
  })

  return (
    <button
      {...props}
      type="button"
      className={styles.listItem}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        if (isDisabled) {
          e.preventDefault()
          return
        }
        if (onClick) {
          onClick(e)
        }
      }}
    >
      {icon && <Icon name={icon} />}
      <span className={styles.label}>{label}</span>
    </button>
  )
}