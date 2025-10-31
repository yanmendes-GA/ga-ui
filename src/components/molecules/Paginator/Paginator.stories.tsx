import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Paginator } from "./Paginator"

const meta: Meta<typeof Paginator> = {
  title: "Molecules/Paginator",
  component: Paginator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    totalCount: {
      control: "number",
      description: "Total de itens.",
    },
    pageSize: {
      control: "number",
      description: "Itens por página.",
    },
    currentPage: {
      control: "number",
      description: "Página atual (controlada).",
    },
    siblingCount: {
      control: "number",
      description: "Páginas vizinhas à atual.",
    },
    onPageChange: {
      action: "onPageChange",
      description: "Callback ao mudar de página.",
    },
  },
  args: {
    totalCount: 1000,
    pageSize: 10,
    currentPage: 1,
    siblingCount: 1,
  },
}

export default meta
type Story = StoryObj<typeof meta>

const PaginationWithState = (args: any) => {
  const [page, setPage] = useState(args.currentPage || 1)

  return (
    <Paginator
      {...args}
      currentPage={page}
      onPageChange={pageNumber => {
        setPage(pageNumber)
        args.onPageChange(pageNumber)
      }}
    />
  )
}

export const Default: Story = {
  name: "Padrão (Início)",
  render: PaginationWithState,
  args: {
    totalCount: 850,
    pageSize: 10,
    currentPage: 1,
  },
}

export const MiddlePage: Story = {
  name: "Página Intermediária",
  render: PaginationWithState,
  args: {
    totalCount: 850,
    pageSize: 10,
    currentPage: 45,
  },
}

export const EndPage: Story = {
  name: "Página Final",
  render: PaginationWithState,
  args: {
    totalCount: 850,
    pageSize: 10,
    currentPage: 85,
  },
}

export const FewPages: Story = {
  name: "Poucas Páginas (sem ...)",
  render: PaginationWithState,
  args: {
    totalCount: 50,
    pageSize: 10,
    currentPage: 3,
  },
}

export const MoreSiblings: Story = {
  name: "Mais Páginas Vizinhas",
  render: PaginationWithState,
  args: {
    totalCount: 850,
    pageSize: 10,
    currentPage: 45,
    siblingCount: 2,
  },
}
