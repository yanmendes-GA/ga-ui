import { useState, type FocusEvent } from "react"
import type { FieldsetProps } from "./Fieldset.types"
import {
  getFieldsetStyles,
  getLegendStyles,
  getLegendLabelStyles,
  getLegendBgStyles,
} from "./Fieldset.styles"

export const Fieldset = ({
  legend,
  children,
  className,
  ...props
}: FieldsetProps) => {
  const [focused, setFocused] = useState(false)

  const handleFocus = (e: FocusEvent<HTMLFieldSetElement>) => {
    if (e.target instanceof HTMLInputElement) {
      setFocused(true)
    }
  }

  const handleBlur = (e: FocusEvent<HTMLFieldSetElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setFocused(false)
    }
  }

  return (
    <fieldset
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={getFieldsetStyles({ focused })}
      {...props}
    >
      <legend className={getLegendStyles()}>
        <span className={getLegendLabelStyles({ focused })}>{legend}</span>

        <div className={getLegendBgStyles({ focused })} />
      </legend>

      {children}
    </fieldset>
  )
}
