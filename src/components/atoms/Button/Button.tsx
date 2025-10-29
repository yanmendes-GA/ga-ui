import type { ButtonProps } from "./Button.types"
import { getButtonStyles } from "./Button.styles"
import { Icon } from "@/atoms/Icon"

export const Button = ({
  children,
  icon,
  iconSide = "left",
  variant = "default",
  iconOnly = false,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={getButtonStyles({ variant, iconOnly, iconSide, disabled })}
    >
      {icon && <Icon name={icon} />}

      {!iconOnly && children && <div>{children}</div>}
    </button>
  )
}
