import type { SwitchProps } from "./Switch.types"
import { getSwitchTrackStyles, getSwitchThumbStyles } from "./Switch.styles"

export const Switch = ({
  checked,
  onChange,
  disabled = false,
  id = "Grupo Acelerador",
  ...props
}: SwitchProps) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(!checked)
    }
  }

  return (
    <button
      {...props}
      id={id}
      role="switch"
      type="button"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleToggle}
      className={getSwitchTrackStyles({ checked, disabled })}
    >
      <span
        aria-hidden="true"
        className={getSwitchThumbStyles({ checked, disabled })}
      />
    </button>
  )
}
