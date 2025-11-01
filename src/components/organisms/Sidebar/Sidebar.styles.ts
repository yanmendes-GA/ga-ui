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
    "w-[280px] p-4 flex h-screen flex-col border border-transparent border-r-dark-400 bg-dark transition-all duration-300 ease-in-out",
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

export const getSidebarNavStyles = () => {
  return cn("flex flex-col gap-2 mt-10 overflow-hidden")
}

export const getSidebarFooterStyles = () => {
  return cn("mt-auto pt-6 justify-center flex")
}
