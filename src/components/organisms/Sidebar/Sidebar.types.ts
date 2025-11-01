import type { ReactNode } from "react"

/**
 * Define a estrutura de um item de navegação individual.
 */
export interface SidebarNavItem {
  label: string
  icon: string
  href: string
}

/**
 * Define a estrutura dos dados do perfil do usuário.
 */
export interface SidebarProfile {
  name: string
  role: string
  avatarFallback: string
  avatarSrc?: string
}

/**
 * Define as props do componente Sidebar.
 */
export interface SidebarProps {
  /** O logo a ser exibido quando o sidebar está expandido (ex: <img> ou componente) */
  logoFull: ReactNode
  /** O logo a ser exibido quando o sidebar está recolhido (ex: ícone ou <img>) */
  logoSmall: ReactNode
  /** Um array de objetos de item de navegação */
  navItems: SidebarNavItem[]
  /** Um objeto contendo os dados do perfil do usuário */
  profile: SidebarProfile
  /** A URL ativa no momento, para destacar o ListItem correspondente */
  activeLink?: string
  /** Controla quando o sidebar é recolhível */
  collapsable?: boolean
}
