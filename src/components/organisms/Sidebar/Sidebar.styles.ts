import { cn } from "@/utils/cn"

type SidebarStyleProps = {
  isCollapsed?: boolean
}

/**
 * Estilos para o container principal <aside> do Sidebar.
 * Controla a largura, cor de fundo e padding com base no estado 'isCollapsed'.
 */
export const getSidebarStyles = ({
  isCollapsed = false,
}: SidebarStyleProps) => {
  return cn(
    "w-[280px] bg-sidebar-background bg-cover bg-center p-4 flex h-screen flex-col border border-transparent border-r-dark-400 transition-all duration-300 ease-in-out",
    {
      "w-[80px] p-[8px]": isCollapsed,
    },
  )
}

/**
 * Estilos para o <header> do Sidebar (Logo e botão de recolher).
 */
export const getSidebarHeaderStyles = ({
  isCollapsed = false,
}: SidebarStyleProps) => {
  return cn("relative flex h-[32px]", {
    "justify-between": !isCollapsed,
    "justify-center": isCollapsed,
  })
}

export const getSidebarToggleButtonStyles = ({
  isCollapsed,
}: SidebarStyleProps) => {
  return cn("absolute right-[-25px] top-[50px]", {
    "right-[-20px]": isCollapsed,
  })
}

export const getSidebarNavStyles = () => {
  return cn("flex flex-col gap-2 mt-10 overflow-hidden")
}

export const getSidebarListStyles = ({ isCollapsed }: SidebarStyleProps) => {
  return cn("flex flex-col gap-3 mt-3", { "items-center": isCollapsed })
}

export const getSidebarFooterStyles = () => {
  return cn("mt-auto pt-6 justify-center flex")
}
