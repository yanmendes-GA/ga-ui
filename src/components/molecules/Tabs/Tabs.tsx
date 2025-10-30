import { useState } from "react"
import type { TabsProps, TabItem } from "./Tabs.types"
import {
  getTabStyles,
  getTabContentStyles,
  getTabBackgroundStyles,
} from "./Tabs.styles"

export const Tabs = ({ tabs, defaultTab, onTabChange }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(
    defaultTab || (tabs.length > 0 ? tabs[0].id : undefined),
  )

  const handleTabClick = (tab: TabItem) => {
    if (tab.disabled) return
    setActiveTab(tab.id)
    onTabChange?.(tab.id)
  }

  return (
    <div
      className="flex"
      role="tablist"
    >
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={`tabpanel-${tab.id}`}
          id={`tab-${tab.id}`}
          disabled={tab.disabled}
          onClick={() => handleTabClick(tab)}
          className={getTabStyles({
            isActive: activeTab === tab.id,
            isFirst: index === 0,
            disabled: tab.disabled,
          })}
        >
          <span className={getTabContentStyles()}>{tab.label}</span>
          <div className={getTabBackgroundStyles()}></div>
        </button>
      ))}
    </div>
  )
}
