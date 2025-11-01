import type { AvatarProps } from "@/atoms/Avatar"

export interface ProfileInfoCardProps {
  /**
   * O nome principal do usuário.
   */
  name: string
  /**
   * O texto secundário, como o grupo ou cargo.
   */
  company: string
  /**
   * Uma lista de itens de informação a serem exibidos.
   */
  infoItems: string[]

  avatarProps: AvatarProps
}
