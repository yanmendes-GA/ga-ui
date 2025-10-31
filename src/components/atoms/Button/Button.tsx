import type { ButtonProps } from "./Button.types"
import { getButtonStyles } from "./Button.styles"
import { Icon } from "@/atoms/Icon"

export const Button = ({
  children,
  icon,
  iconSide = "left",
  variant = "default",
  size = "default",
  iconOnly = false,
  disabled = false,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={getButtonStyles({
        variant,
        iconOnly,
        iconSide,
        disabled,
        size,
      })}
      {...props}
    >
      {icon && <Icon name={icon} />}

      {!icon && iconOnly && children && <div>{children}</div>}
    </button>
  )
}
