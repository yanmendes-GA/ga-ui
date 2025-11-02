import type { DashboardTemplateProps } from "./DashboardTemplate.types"
import { getDashboardTemplateStyles } from "./DashboardTemplate.styles"

export const DashboardTemplate = ({
  sidebar,
  toolbar,
  mainContent,
  footer,
}: DashboardTemplateProps) => {
  const styles = getDashboardTemplateStyles()

  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>{sidebar}</aside>

      <main className={styles.main}>
        <header className={styles.toolbar}>{toolbar}</header>

        <section className={styles.content}>{mainContent}</section>

        <footer className={styles.footer}>{footer}</footer>
      </main>
    </div>
  )
}
