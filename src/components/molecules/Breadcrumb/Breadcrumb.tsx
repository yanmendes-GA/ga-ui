import { getBreadcrumbStyles } from "./Breadcrumb.styles"
import type { BreadcrumbProps } from "./Breadcrumb.types"
import { Icon } from "@/atoms/Icon"

export const Breadcrumb = ({
  items,
  linkComponent: LinkComponent = "a",
  separatorIcon = "chevron_right",
  ...props
}: BreadcrumbProps) => {
  const styles = getBreadcrumbStyles()

  return (
    <nav aria-label="Breadcrumb" {...props}>
      <ol className={styles.breadcrumb}>
        {items.map((item, index) => {
          return (
            <li key={index} className={styles.item}>
              {item.isCurrent ? (
                <span className={styles.currentItem} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <LinkComponent href={item.href} className={styles.link}>
                  {item.label}
                </LinkComponent>
              )}

              {!item.isCurrent && <Icon name="caret-right" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
