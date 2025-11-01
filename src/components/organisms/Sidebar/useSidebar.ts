import { useState } from "react"

export const useSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev)
  }

  return { isCollapsed, toggleCollapse }
}
