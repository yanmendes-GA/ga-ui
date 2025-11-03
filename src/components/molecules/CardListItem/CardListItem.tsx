import type { CardListItemProps } from "./CardListItem.types"
import { getCardListItemStyles } from "./CardListItem.styles"

/**
 * CardListItem é um contêiner de layout que estiliza um item de lista.
 * Ele usa um layout de grid que pode ser customizado via props `cols` ou `gridCols`.
 */
export const CardListItem = ({ children, cols }: CardListItemProps) => {
  const styles = getCardListItemStyles(cols)
  return <div className={styles.wrapper}>{children}</div>
}
