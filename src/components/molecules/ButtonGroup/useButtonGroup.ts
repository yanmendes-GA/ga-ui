import { useEffect, useState } from "react"
import type { ButtonGroupItem, ButtonGroupProps } from "./ButtonGroup.types"

type UseButtonGroupProps = Pick<
  ButtonGroupProps,
  "items" | "defaultValue" | "onSelectionChange" | "multiple" | "mandatory"
>

export const useButtonGroup = ({
  items,
  defaultValue,
  onSelectionChange,
  multiple = false,
  mandatory = false,
}: UseButtonGroupProps) => {
  const [internalValue, setInternalValue] = useState<
    string | string[] | undefined
  >(defaultValue ?? (multiple ? [] : undefined))

  useEffect(() => {
    if (mandatory && items.length > 0) {
      if (multiple) {
        if (!Array.isArray(internalValue) || internalValue.length === 0) {
          setInternalValue([items[0].value])
        }
      } else if (internalValue === undefined) {
        setInternalValue(items[0].value)
      }
    }
  }, [items, mandatory, multiple, internalValue])

  const handleSelect = (item: ButtonGroupItem) => {
    let newValue: string | string[] | undefined

    if (multiple) {
      const currentValues = (internalValue as string[]) || []
      if (currentValues.includes(item.value)) {
        newValue = currentValues.filter(v => v !== item.value)
        if (mandatory && newValue.length === 0) {
          newValue = internalValue
        }
      } else {
        newValue = [...currentValues, item.value]
      }
    } else {
      if (mandatory && internalValue === item.value) {
        newValue = internalValue
      } else {
        newValue = internalValue === item.value ? undefined : item.value
      }
    }

    setInternalValue(newValue)
    if (onSelectionChange) {
      onSelectionChange(newValue || (multiple ? [] : ""))
    }
  }

  const isSelected = (item: ButtonGroupItem) => {
    if (multiple && Array.isArray(internalValue)) {
      return internalValue.includes(item.value)
    }
    return internalValue === item.value
  }

  return {
    internalValue,
    handleSelect,
    isSelected,
  }
}
