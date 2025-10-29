import type { ReactNode, FieldsetHTMLAttributes } from "react"

export interface FieldsetProps
  extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string
  children: ReactNode
}
