export type ToastVariant = "success" | "warning" | "error" | "info"

export interface ToastProps {
  message: string
  onClose: () => void
  variant?: ToastVariant
  autoClose?: number // em milissegundos
}
