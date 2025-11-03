import React from "react"
import { getCheckboxStyles } from "./Checkbox.styles"
import type { CheckboxProps } from "./Checkbox.types"
import { Icon } from "@/atoms/Icon"

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked = false, disabled = false, id, ...props }, ref) => {
    const styles = getCheckboxStyles({ disabled, checked })

    return (
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          ref={ref}
          checked={checked}
          disabled={disabled}
          className="hidden"
          {...props}
        />

        <div className={styles.checkbox}>
          {checked && <Icon name="check" />}
        </div>
      </label>
    )
  },
)
