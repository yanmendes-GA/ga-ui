import type { Meta, StoryObj } from "@storybook/react"
import { NavItem } from "./NavItem"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import { fn } from "@storybook/test"

const meta: Meta<typeof NavItem> = {
  title: "Molecules/Nav Item",
  component: NavItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: "text" },
    icon: { control: "text" },
    isCollapsed: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    onClick: fn(),
  },
  decorators: [
    (Story, context) => (
      <MemoryRouter initialEntries={["/active"]}>
        <Routes>
          <Route
            path="/*"
            element={
              <ul style={{ width: context.args.isCollapsed ? "auto" : "250px" }}>
                <Story />
              </ul>
            }
          />
        </Routes>
      </MemoryRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Active: Story = {
  args: {
    children: "Active Item",
    icon: "filters",
    to: "/active",
    isCollapsed: false,
    disabled: false,
  },
}

export const Inactive: Story = {
  args: {
    children: "Inactive Item",
    icon: "filters",
    to: "/inactive",
    isCollapsed: false,
    disabled: false,
  },
}

export const Collapsed: Story = {
  args: {
    children: "Collapsed Item",
    icon: "filters",
    to: "/active",
    isCollapsed: true,
    disabled: false,
  },
}