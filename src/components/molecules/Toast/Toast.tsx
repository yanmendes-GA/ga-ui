import type { ToastProps } from "./Toast.types"
import { useToast } from "./useToast"
import { Icon } from "@/atoms/Icon"
import {
  getToastWrapperStyles,
  getSideBarStyles,
  getProgressBarStyles,
  getToastBoxStyles,
  getMessageStyles,
  getCloseButtonStyles,
} from "./Toast.styles"

export const Toast = ({
  message,
  onClose,
  variant = "success",
  autoClose = 4000,
}: ToastProps) => {
  const {
    show,
    progress,
    paused,
    handleMouseEnter,
    handleMouseLeave,
    handleClose,
  } = useToast({ onClose, autoClose })

  return (
    <div
      className={getToastWrapperStyles(show)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="alert"
      aria-live="assertive"
    >
      <div className={getSideBarStyles(show)}>
        <div
          className={getProgressBarStyles({ variant, paused })}
          style={{ height: `${progress}%` }}
        />
      </div>

      <div
        className={getToastBoxStyles({ variant, show })}
        style={{
          clipPath: "polygon(6% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <span className={getMessageStyles(variant)}>{message}</span>
      </div>

      <button
        type="button"
        onClick={handleClose}
        className={getCloseButtonStyles(variant)}
        aria-label="Fechar notificação"
      >
        <Icon name="cross-small" />
      </button>
    </div>
  )
}
