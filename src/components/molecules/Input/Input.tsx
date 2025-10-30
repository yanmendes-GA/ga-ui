import type { InputProps } from "./Input.types"
import {
  getWrapperStyles,
  getLabelStyles,
  getInputContainerStyles,
  getIconStyles,
  getInputStyles,
} from "./Input.styles"
import { Icon } from "@/atoms/Icon"
export const Input = ({
  id,
  label,
  iconLeft,
  iconRight,
  isPassword = false,
  onIconClick,
  variant = "default",
  disabled,
  readonly = false,
  ...rest
}: InputProps) => {
  return (
    <div className={getWrapperStyles()}>
      {label && (
        <label
          htmlFor={id}
          className={getLabelStyles()}
        >
          {label}
        </label>
      )}

      <div
        className={getInputContainerStyles({
          variant,
          disabled,
          iconLeft,
          readonly,
        })}
      >
        <input
          id={id}
          className={getInputStyles({ variant, disabled, readonly })}
          disabled={disabled}
          type={isPassword ? "password" : "text"}
          {...rest}
        />

        {(iconLeft || iconRight) && (
          <button
            type="button"
            onClick={onIconClick}
            disabled={disabled}
            className={getIconStyles({
              variant,
              disabled,
              clickable: onIconClick !== undefined,
            })}
            aria-label="Ação do Input"
          >
            <Icon name={iconRight || iconLeft || ""} />
          </button>
        )}
      </div>
    </div>
  )
}
