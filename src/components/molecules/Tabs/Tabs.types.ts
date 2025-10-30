export interface TabItem {
  id: string
  label: string
  disabled?: boolean
}

export interface TabsProps {
  tabs: TabItem[]
  defaultTab?: string
  onTabChange?: (id: string) => void
}
