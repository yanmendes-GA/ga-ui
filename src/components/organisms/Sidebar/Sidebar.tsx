import { getSidebarStyles } from "./Sidebar.styles"
import type { SidebarProps } from "./Sidebar.types"
import { NavItem } from "../../molecules/NavItem"
import { ProfileButton } from "../../molecules/ProfileButton"
import { Button } from "../../atoms/Button"
import { useSidebar } from "./useSidebar"
import sidebarBg from "@/assets/images/sidebar-bg.png"

export const Sidebar = ({
  logoFull,
  logoSmall,
  navItems,
  profile,
  collapsable = false,
}: SidebarProps) => {
  const { isCollapsed, toggleCollapse } = useSidebar()
  const styles = getSidebarStyles({ isCollapsed })

  return (
    <section
      className={styles.root}
      style={{ backgroundImage: `url(${sidebarBg})` }}
    >
      <div className="flex flex-1 flex-col">
        <header className={styles.header}>
          {logoFull ||
            (logoSmall && (
              <div className={styles.logo}>
                <img src={isCollapsed ? logoSmall : logoFull} />
              </div>
            ))}
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
          {Array.isArray(navItems) ? (
            <ul className={styles.list}>
              {navItems.map(item => (
                <li key={item.label}>
                  <NavItem
                    to={item.to}
                    icon={item.icon}
                    disabled={item.disabled}
                    isCollapsed={isCollapsed}
                  >
                    {item.label}
                  </NavItem>
                </li>
              ))}
            </ul>
          ) : (
            navItems({ isCollapsed })
          )}
        </nav>
      </div>

      {profile && (
        <footer className={styles.footer}>
          <ProfileButton
            name={profile.name}
            role={profile.role}
            avatarProps={{ alt: profile.name, size: isCollapsed ? "sm" : "md" }}
            isCollapsed={isCollapsed}
          />
        </footer>
      )}
    </section>
  )
}
