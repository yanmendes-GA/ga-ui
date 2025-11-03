import type { SwitchProps } from "./Switch.types"
import { getSwitchStyles } from "./Switch.styles"

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

  const styles = getSwitchStyles({ checked, disabled })

  return (
    <button
      {...props}
      id={id}
      role="switch"
      type="button"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleToggle}
      className={styles.track}
    >
      <span aria-hidden="true" className={styles.thumb} />
    </button>
  )
}
