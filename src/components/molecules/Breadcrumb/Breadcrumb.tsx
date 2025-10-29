import {
  getBreadcrumbStyles,
  getItemStyles,
  getLinkStyles,
  getCurrentItemStyles,
} from "./Breadcrumb.styles"
import type { BreadcrumbProps } from "./Breadcrumb.types"
import { Icon } from "@/atoms/Icon"

export const Breadcrumb = ({
  items,
  linkComponent: LinkComponent = "a",
  separatorIcon = "chevron_right",
  ...props
}: BreadcrumbProps) => {
  return (
    <nav
      aria-label="Breadcrumb"
      {...props}
    >
      <ol className={getBreadcrumbStyles()}>
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className={getItemStyles()}
            >
              {item.isCurrent ? (
                <span
                  className={getCurrentItemStyles()}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <LinkComponent
                  href={item.href}
                  className={getLinkStyles()}
                >
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
