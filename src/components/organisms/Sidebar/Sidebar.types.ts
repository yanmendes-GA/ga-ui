import type { ReactNode } from "react"
// Importamos as props do NavItem para ter o tipo 'to' correto
import type { NavItemProps } from "../../molecules/NavItem"

/**
 * Descreve a estrutura de dados para um item na navegação do Sidebar.
 */
export interface SidebarNavItem {
  label: string
  icon: string
  /** O destino da navegação (compatível com React Router) */
  to: NavItemProps["to"]
  /** Se o item deve estar desabilitado */
  disabled?: boolean
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
  // A prop 'navItemComponent' foi removida pois agora usamos 'NavItem' diretamente.
}