import type { ReactNode, ElementType } from "react"
import type { AppRoute } from "../../molecules/ListItem"

export interface SidebarNavItem {
  label: string
  icon: string
  to: AppRoute
  isActive?: boolean
}

export interface SidebarProfile {
  name: string
  role: string
  avatarFallback: string
  avatarSrc?: string
}

export interface SidebarProps {
  /** O logo a ser exibido quando o sidebar está expandido (ex: <img> ou componente) */
  logoFull: ReactNode
  /** O logo a ser exibido quando o sidebar está recolhido (ex: ícone ou <img>) */
  logoSmall: ReactNode
  /** Um array de objetos de item de navegação */
  navItems: SidebarNavItem[]
  /** Um objeto contendo os dados do perfil do usuário */
  profile: SidebarProfile
  /** Controla quando o sidebar é recolhível */
  collapsable?: boolean
  /**
   * O componente a ser usado para renderizar os itens de navegação.
   * Ex: 'a' (padrão) ou 'Link' do react-router-dom.
   */
  navItemComponent?: ElementType
}
