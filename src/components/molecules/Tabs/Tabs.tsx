import { useState } from "react"
import type { TabsProps, TabItem } from "./Tabs.types"
import {
  getTabStyles,
  getTabBackgroundStyles,
  getTabsWrapperStyles,
  getWrapperBackgroundStyles,
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
      className={getTabsWrapperStyles()}
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
          <span>{tab.label}</span>
          <div
            className={getTabBackgroundStyles({
              isActive: activeTab === tab.id,
              disabled: tab.disabled,
            })}
          ></div>
        </button>
      ))}

      <div className={getWrapperBackgroundStyles()}></div>
    </div>
  )
}
