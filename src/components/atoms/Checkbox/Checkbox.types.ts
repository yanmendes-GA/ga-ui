import React from "react"

export interface CheckboxProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "size"> {
  id: string
  checked?: boolean
  disabled?: boolean
}
