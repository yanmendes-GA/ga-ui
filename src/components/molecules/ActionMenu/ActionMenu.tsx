import { cloneElement } from "react"
import type { ActionMenuItem, ActionMenuProps } from "./ActionMenu.types"
import { useActionMenu } from "./useActionMenu"
import { getActionMenuStyles } from "./ActionMenu.styles"
import { ListItem } from "@/molecules/ListItem"

export const ActionMenu = <T extends ActionMenuItem>({
  trigger,
  items,
  side = "bottom",
  align = "start",
}: ActionMenuProps<T>) => {
  const { isOpen, toggleMenu, wrapperRef, menuId, getTriggerProps } =
    useActionMenu()
  const styles = getActionMenuStyles({ side, align })

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      {/* Clonamos o trigger para injetar as props de acessibilidade 
        e o nosso handler de onClick.
      */}
      {cloneElement(trigger, getTriggerProps(trigger.props.onClick))}

      {isOpen && (
        <div
          id={menuId}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={trigger.props.id}
          className={styles.panel}
        >
          <ul className="flex flex-col">
            {items.map(item => (
              <ListItem
                role="menuItem"
                id={item.id}
                label={item.label}
                icon={item.icon}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation()
                  item.onClick()
                  toggleMenu()
                }}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
