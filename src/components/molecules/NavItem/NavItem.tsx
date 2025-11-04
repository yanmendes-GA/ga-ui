import { NavLink as RouterNavLink } from "react-router-dom"
import { getNavItemStyles } from "./NavItem.styles"
import { Icon } from "@/atoms/Icon"
import type { NavItemProps } from "./NavItem.types"
import { cn } from "@/utils/cn"

export const NavItem = ({
  children,
  icon,
  isCollapsed,
  onClick,
  ...props
}: NavItemProps) => {
  const isDisabled = props.disabled || false

  return (
    <RouterNavLink
      {...props}
      end={props.end ?? true}
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        e.stopPropagation()
        if (isDisabled) {
          e.preventDefault()
        }
        if (onClick) {
          onClick(e)
        }
      }}
      className={({ isActive }) => {
        // Passa o 'isActive' do router para nossa função de estilos
        const styles = getNavItemStyles({
          isActive,
          isDisabled,
          isCollapsed,
        })
        return styles.navItem
      }}
    >
      {/* Conteúdo do Link */}
      {icon && <Icon name={icon} />}
      {!isCollapsed && (
        <span className={cn("flex-1", { "sr-only": isCollapsed })}>
          {children}
        </span>
      )}
    </RouterNavLink>
  )
}