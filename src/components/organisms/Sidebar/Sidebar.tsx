import {
  getSidebarStyles,
  getSidebarHeaderStyles,
  getSidebarNavStyles,
  getSidebarFooterStyles,
} from "./Sidebar.styles"
import type { SidebarProps } from "./Sidebar.types"
import { ListItem } from "../../molecules/ListItem"
import { ProfileButton } from "../../molecules/ProfileButton"
import { Button } from "../../atoms/Button"

export const Sidebar = ({
  logoFull,
  logoSmall,
  navItems,
  profile,
  activeHref,
  isCollapsed = false,
  onToggleCollapse,
}: SidebarProps) => {
  return (
    <aside className={getSidebarStyles({ isCollapsed })}>
      <div className="flex flex-1 flex-col">
        <header className={getSidebarHeaderStyles({ isCollapsed })}>
          <div>{isCollapsed ? logoSmall : logoFull}</div>

          <div className="absolute right-[-30px] top-[50px]">
            <Button
              variant="default"
              iconOnly
              size="xs"
              icon={isCollapsed ? "angle-circle-right" : "angle-circle-left"}
              onClick={onToggleCollapse}
            />
          </div>
        </header>

        <nav className={getSidebarNavStyles()}>
          <ul className="flex flex-col gap-3 mt-3">
            {navItems.map(item => (
              <li key={item.href}>
                <ListItem
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                  isActive={item.href === activeHref}
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
          avatarProps={{ alt: profile.name }}
        />
      </footer>
    </aside>
  )
}
