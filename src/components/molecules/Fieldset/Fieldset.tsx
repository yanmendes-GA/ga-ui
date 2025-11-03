import { useState, type FocusEvent } from "react"
import type { FieldsetProps } from "./Fieldset.types"
import { getFieldsetStyles } from "./Fieldset.styles"

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

  const styles = getFieldsetStyles({ focused })

  return (
    <fieldset
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={styles.fieldset}
      {...props}
    >
      <legend className={styles.legend}>
        <span className={styles.legendLabel}>{legend}</span>

        <div className={styles.legendBg} />
      </legend>

      {children}
    </fieldset>
  )
}
