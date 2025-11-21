import type { BaseLayoutTemplateProps } from "./BaseLayoutTemplate.types"
import { getBaseLayoutTemplateStyles } from "./BaseLayoutTemplate.styles"
import React, { type ReactNode } from "react"

export const HeaderSlot = ({ children }: { children: ReactNode }) => (
  <>{children}</>
)
export const ContentSlot = ({ children }: { children: ReactNode }) => (
  <>{children}</>
)
export const FooterSlot = ({ children }: { children: ReactNode }) => (
  <>{children}</>
)

export const BaseLayoutTemplate = ({
  sidebar,
  children,
}: BaseLayoutTemplateProps) => {
  const styles = getBaseLayoutTemplateStyles()

  const header = React.Children.toArray(children).find(
    child => React.isValidElement(child) && child.type === HeaderSlot,
  )
  const content = React.Children.toArray(children).find(
    child => React.isValidElement(child) && child.type === ContentSlot,
  )
  const footer = React.Children.toArray(children).find(
    child => React.isValidElement(child) && child.type === FooterSlot,
  )

  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>{sidebar}</aside>

      <main className={styles.main}>
        {header && <header className={styles.header}>{header}</header>}

        <section className={styles.content}>
          {!header && !footer ? children : content}
        </section>

        {footer && <footer className={styles.footer}>{footer}</footer>}
      </main>
    </div>
  )
}
