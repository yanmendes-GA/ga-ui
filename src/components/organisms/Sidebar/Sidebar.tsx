import { getSidebarStyles } from "./Sidebar.styles"
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
  const styles = getSidebarStyles({ isCollapsed })

  return (
    <section className={styles.root}>
      <div className="flex flex-1 flex-col">
        <header className={styles.header}>
          <div>{isCollapsed ? logoSmall : logoFull}</div>
          {collapsable && (
            <div className={styles.toggleButton}>
              <Button
                iconOnly
                size="xs"
                icon={isCollapsed ? "angle-circle-right" : "angle-circle-left"}
                onClick={toggleCollapse}
              />
            </div>
          )}
        </header>

        <nav className={styles.navigation}>
          <ul className={styles.list}>
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

      <footer className={styles.footer}>
        <ProfileButton
          name={profile.name}
          role={profile.role}
          avatarProps={{ alt: profile.name, size: isCollapsed ? "sm" : "md" }}
          isCollapsed={isCollapsed}
        />
      </footer>
    </section>
  )
}
