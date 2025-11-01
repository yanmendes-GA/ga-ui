import type { SystemTemplateProps } from "./SystemTemplate.types"
import {
  getSystemTemplateStyles,
  getMainContentStyles,
  getContentWrapperStyles,
} from "./SystemTemplate.styles"
import { cn } from "@/utils/cn"
import { Sidebar } from "@/organisms/Sidebar"
import { Toolbar } from "@/organisms/Toolbar"

export const SystemTemplate = ({
  sidebarProps,
  toolbarProps,
  toolbarButton,
  children,
  className,
  ...props
}: SystemTemplateProps) => {
  return (
    <div
      className={cn(getSystemTemplateStyles(), className)}
      {...props}
    >
      <Sidebar {...sidebarProps} />

      <main className={getMainContentStyles()}>
        <div className="flex items-center gap-[10px]">
          <Toolbar {...toolbarProps} />
          {toolbarButton}
        </div>

        <div className={getContentWrapperStyles()}>
          {children ? children : "Adicione aqui seu conteúdo!"}
        </div>
      </main>
    </div>
  )
}
