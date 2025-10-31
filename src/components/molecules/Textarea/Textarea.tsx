import type { TextareaProps } from "./Textarea.types"
import {
  getWrapperStyles,
  getLabelStyles,
  getTextareaContainerStyles,
  getTextareaStyles,
} from "./Textarea.styles"
export const Textarea = ({
  id,
  label,
  variant = "default",
  disabled,
  readonly = false,
  rows = 4,
  ...rest
}: TextareaProps) => {
  return (
    <div className={getWrapperStyles()}>
      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          className={getLabelStyles()}
        >
          {label}
        </label>
      )}

      <div
        className={getTextareaContainerStyles({
          variant,
          disabled,
          readonly,
        })}
      >
        <textarea
          id={id}
          className={getTextareaStyles({ variant, disabled, readonly })}
          disabled={disabled}
          rows={rows}
          {...rest}
        />
      </div>
    </div>
  )
}
