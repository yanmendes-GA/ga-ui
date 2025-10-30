import type { ButtonGroupProps } from "./ButtonGroup.types"
import { useButtonGroup } from "./useButtonGroup"
import {
  getGroupStyles,
  getButtonStyles,
  getContentStyles,
  getBackgroundStyles,
} from "./ButtonGroup.styles"
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
      className={getGroupStyles(className)}
      role={multiple ? "group" : "radiogroup"}
    >
      {items.map((item, index) => {
        const selected = isSelected(item)
        return (
          <button
            key={item.value}
            type="button"
            role={multiple ? "checkbox" : "radio"}
            aria-checked={selected}
            onClick={() => handleSelect(item)}
            className={getButtonStyles({ variant, index })}
          >
            <span className={getContentStyles(selected)}>
              {variant === "icon" && item.iconName && (
                <Icon name={item.iconName} />
              )}

              {variant === "default" && item.label}
            </span>

            <div
              className={getBackgroundStyles({
                isSelected: selected,
                variant,
              })}
              aria-hidden="true"
            />
          </button>
        )
      })}
    </div>
  )
}
