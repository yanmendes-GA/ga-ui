import type { ButtonGroupProps } from "./ButtonGroup.types"
import { useButtonGroup } from "./useButtonGroup"
import { getButtonGroupStyles } from "./ButtonGroup.styles"
import { Icon } from "@/atoms/Icon"

export const ButtonGroup = ({
  items,
  defaultValue,
  onSelectionChange,
  variant = "default",
  multiple = false,
  mandatory = false,
  className,
}: ButtonGroupProps) => {
  const { handleSelect, isSelected } = useButtonGroup({
    items,
    defaultValue,
    onSelectionChange,
    multiple,
    mandatory,
  })

  return (
    <div
      className={getButtonGroupStyles({ className }).group}
      role={multiple ? "group" : "radiogroup"}
    >
      {items.map((item, index) => {
        const selected = isSelected(item)
        const styles = getButtonGroupStyles({ variant, index, isSelected: selected })
        return (
          <button
            key={item.value}
            type="button"
            role={multiple ? "checkbox" : "radio"}
            aria-checked={selected}
            onClick={() => handleSelect(item)}
            className={styles.button}
          >
            <span className={styles.content}>
              {variant === "icon" && item.iconName && (
                <Icon name={item.iconName} />
              )}

              {variant === "default" && item.label}
            </span>

            <div
              className={styles.background}
              aria-hidden="true"
            />
          </button>
        )
      })}
    </div>
  )
}
