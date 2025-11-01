import type { ButtonHTMLAttributes } from "react"
import type { AvatarProps } from "@/atoms/Avatar"

export interface ProfileButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * O nome principal a ser exibido.
   */
  name: string
  /**
   * O texto secundário (ex: cargo, status).
   */
  role: string
  /**
   * Props para o átomo Avatar (ex: initials, src).
   */
  avatarProps?: AvatarProps
  /**
   * Controla o estado desabilitado do botão.
   */
  disabled?: boolean
  /**
   * Controla o estado recolhido do botão dentro do Sidebar.
   */
  isCollapsed?: boolean
}
