import type { ButtonProps } from "./Button.types"
import { getButtonStyles } from "./Button.styles"
import { Icon } from "@/atoms/Icon"

export const Button = ({
  children,
  icon,
  iconSide = "left",
  variant,
  size = "default",
  iconOnly = false,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const styles = getButtonStyles({
    variant,
    iconOnly,
    iconSide,
    disabled,
    size,
  })

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles.button}
      type="button"
    >
      {icon && <Icon name={icon} />}

      {!iconOnly && children && <div className="text-nowrap">{children}</div>}

      {iconOnly && !icon && children && (
        <div className="text-nowrap">{children}</div>
      )}
    </button>
  )
}
