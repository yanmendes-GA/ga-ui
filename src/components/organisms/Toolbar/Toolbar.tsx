import type { ToolbarProps } from "./Toolbar.types"
import { getToolbarStyles, getToolbarRightSlotStyles } from "./Toolbar.styles"

import { Breadcrumb } from "@/molecules/Breadcrumb"

export const Toolbar = ({
  breadcrumbItems,
  children,
  className,
  ...props
}: ToolbarProps) => {
  return (
    <div
      className={getToolbarStyles()}
      {...props}
    >
      <Breadcrumb items={breadcrumbItems} />

      {children && (
        <div className={getToolbarRightSlotStyles()}>{children}</div>
      )}
    </div>
  )
}
