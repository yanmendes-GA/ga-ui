import type { CardListItemProps } from "./CardListItem.types"
import { getWrapperStyles } from "./CardListItem.styles"

/**
 * CardListItem é um contêiner de layout que estiliza um item de lista.
 * Ele usa um layout de grid que pode ser customizado via props `cols` ou `gridCols`.
 */
export const CardListItem = ({ children, cols }: CardListItemProps) => {
  return <div className={getWrapperStyles(cols)}>{children}</div>
}
