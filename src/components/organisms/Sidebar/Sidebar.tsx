import {
  getSidebarStyles,
  getSidebarHeaderStyles,
  getSidebarNavStyles,
  getSidebarFooterStyles,
  getSidebarListStyles,
  getSidebarToggleButtonStyles,
} from "./Sidebar.styles"
import type { SidebarProps } from "./Sidebar.types"
import { ListItem } from "../../molecules/ListItem"
import { ProfileButton } from "../../molecules/ProfileButton"
import { Button } from "../../atoms/Button"
import { useSidebar } from "./useSidebar"

export const Sidebar = ({
  logoFull,
  logoSmall,
  navItems,
  profile,
  activeLink,
  collapsable = false,
}: SidebarProps) => {
  const { isCollapsed, toggleCollapse } = useSidebar()

  return (
    <aside className={getSidebarStyles({ isCollapsed })}>
      <div className="flex flex-1 flex-col">
        <header className={getSidebarHeaderStyles({ isCollapsed })}>
          <div>{isCollapsed ? logoSmall : logoFull}</div>
          {collapsable && (
            <div className={getSidebarToggleButtonStyles({ isCollapsed })}>
              <Button
                variant="default"
                iconOnly
                size="xs"
                icon={isCollapsed ? "angle-circle-right" : "angle-circle-left"}
                onClick={toggleCollapse}
              />
            </div>
          )}
        </header>

        <nav className={getSidebarNavStyles()}>
          <ul className={getSidebarListStyles({ isCollapsed })}>
            {navItems.map(item => (
              <li key={item.href}>
                <ListItem
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                  isActive={item.href === activeLink}
                  isCollapsed={isCollapsed}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <footer className={getSidebarFooterStyles()}>
        <ProfileButton
          name={profile.name}
          role={profile.role}
          avatarProps={{ alt: profile.name, size: isCollapsed ? "sm" : "md" }}
          isCollapsed={isCollapsed}
        />
      </footer>
    </aside>
  )
}
