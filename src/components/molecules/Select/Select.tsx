import type { SelectProps } from "./Select.types"
import { useSelect } from "./useSelect"
import {
  getWrapperStyles,
  getLabelStyles,
  getSelectTriggerStyles,
  getTriggerTextStyles,
  getDropdownPanelStyles,
  getOptionItemStyles,
} from "./Select.styles"
import { Text } from "@/atoms/Text"
import { Icon } from "@/atoms/Icon"
import { ListItem } from "@/molecules/ListItem"

export const Select = ({
  id,
  label,
  iconLeft,
  value,
  onValueChange,
  options,
  placeholder = "Selecione...",
  variant = "default",
  disabled = false,
  readonly = false,
  containerClassName,
}: SelectProps) => {
  const { isOpen, closeMenu, wrapperRef, listboxId, getTriggerProps } =
    useSelect()

  const selectedOption = options.find(opt => opt.value === value)

  return (
    <div
      className={getWrapperStyles(containerClassName)}
      ref={wrapperRef}
    >
      {label && (
        <Text
          as="label"
          variant="label"
          htmlFor={id}
        >
          {label}
        </Text>
      )}

      <button
        id={id}
        type="button"
        role="combobox"
        disabled={disabled || readonly}
        className={getSelectTriggerStyles({
          variant,
          disabled,
          iconLeft,
          readonly,
        })}
        {...getTriggerProps()}
      >
        {iconLeft && <Icon name={iconLeft} />}

        <span className={getTriggerTextStyles(!!selectedOption)}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <Icon name="caret-down" />
      </button>

      {isOpen && !readonly && (
        <div
          id={listboxId}
          role="listbox"
          className={getDropdownPanelStyles()}
        >
          <ul className="flex flex-col">
            {options.map(option => (
              <ListItem
                label={option.label}
                id={option.value}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
