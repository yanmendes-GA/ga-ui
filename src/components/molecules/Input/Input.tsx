import type { InputProps } from "./Input.types"
import { getInputStyles } from "./Input.styles"
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
  const styles = getInputStyles({
    variant,
    disabled,
    iconLeft,
    readonly,
    clickable: onIconClick !== undefined,
  })

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <div className={styles.inputContainer}>
        <input
          id={id}
          className={styles.input}
          disabled={disabled}
          type={isPassword ? "password" : "text"}
          {...rest}
        />

        {(iconLeft || iconRight) && (
          <button
            type="button"
            onClick={onIconClick}
            disabled={disabled}
            className={styles.icon}
            aria-label="Ação do Input"
          >
            <Icon name={iconRight || iconLeft || ""} />
          </button>
        )}
      </div>
    </div>
  )
}
