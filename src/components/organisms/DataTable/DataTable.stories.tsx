import type { Meta, StoryObj } from "@storybook/react"
import { DataTable } from "./DataTable"
import type { DataAction, DataTableColumn } from "./DataTable.types"
import { Text } from "../../atoms/Text"
import { Avatar } from "../../atoms/Avatar"
import { Chip } from "../../molecules/Chip"

const meta: Meta<typeof DataTable> = {
  title: "Organisms/Data Table",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    fixedHeader: { control: "boolean" },
    emptyMessage: { control: "text" },
    rowKey: { control: false },
    columns: { control: false },
    items: { control: false },
    actions: { control: false },
    renderExpandedRow: { control: false },
    onRowClick: { control: false },
  },
  args: {
    fixedHeader: false,
    emptyMessage: "Nenhum dado para exibir.",
  },
}

export default meta
type Story = StoryObj<typeof meta>

interface MentoriasData {
  id: string
  title: string
  status: string
  companyName: string
  companyInitial: string
  date: string
}

const mockItems: MentoriasData[] = [
  {
    id: "1",
    title: "Mentoria sobre financeiro",
    status: "NÃO INICIADO",
    companyName: "Empresa de teste A",
    companyInitial: "GA",
    date: "08/10/2025",
  },
  {
    id: "2",
    title: "Marketing na empresa",
    status: "NÃO INICIADO",
    companyName: "Empresa de teste C",
    companyInitial: "GA",
    date: "01/11/2025",
  },
  {
    id: "3",
    title: "A importância de seguir os processo",
    status: "NÃO INICIADO",
    companyName: "Empresa de teste B",
    companyInitial: "GA",
    date: "15/10/2025",
  },
  {
    id: "4",
    title: "Mentoria de teste 02",
    status: "NÃO INICIADO",
    companyName: "Empresa de teste D",
    companyInitial: "GA",
    date: "22/09/2025",
  },
]

const mockItemsWithPagination = Array.from({ length: 20 }, (_, i) => ({
  id: `${i + 1}`,
  title: `Mentoria de teste ${i + 1}`,
  status: i % 2 === 0 ? "CONCLUÍDO" : "NÃO INICIADO",
  companyName: `Empresa de teste ${String.fromCharCode(65 + i)}`,
  companyInitial: "GA",
  date: `01/${i + 1 > 9 ? i + 1 : `0${i + 1}`}/2025`,
}))

const columnsDefinition: DataTableColumn<MentoriasData>[] = [
  {
    key: "title",
    label: "Título",
    width: "25%",
    sortable: true,
  },
  {
    key: "status",
    label: "Status",
    width: "300px",
    render: item => (
      <Chip variant={item.status === "NÃO INICIADO" ? "default" : "success"}>
        {item.status}
      </Chip>
    ),
  },
  {
    key: "companyName",
    label: "Empresa",
    width: "30%",
    sortable: true,
    render: item => (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Avatar alt={item.companyInitial} />
        <Text variant="small">
          {item.companyName}
          <br />
          <span style={{ color: "#6F7479" }}>Ltda.</span>
        </Text>
      </div>
    ),
  },
  {
    key: "date",
    label: "Data da mentoria",
    width: "15%",
    sortable: true,
  },
]

const mockActions: DataAction<MentoriasData>[] = [
  {
    label: "Editar Mentoria",
    icon: "pencil",
    onClick: item => alert(`Editando: ${item.title}`),
  },
  {
    label: "Ver Detalhes",
    icon: "eye",
    onClick: item => alert(`Vendo: ${item.title}`),
  },
  {
    label: "Excluir",
    icon: "trash",
    disabled: true,
    onClick: item => alert(`Excluindo: ${item.title}`),
  },
]

export const Default: Story = {
  name: "Padrão",
  args: {
    columns: columnsDefinition,
    items: mockItems,
    rowKey: "id",
  },
}

export const WithPaginator: Story = {
  name: "Com Paginação",
  args: {
    ...Default.args,
    items: mockItemsWithPagination,
    paginator: {
      pageSize: 2,
    },
  },
}

export const Clickable: Story = {
  name: "Linhas Clicáveis",
  args: {
    ...Default.args,
    onRowClick: (item: MentoriasData) =>
      alert(`Clicou na linha: ${item.title}`),
  },
}

export const WithActions: Story = {
  name: "Com Ações (ActionMenu)",
  args: {
    ...Default.args,
    actions: mockActions,
  },
}

export const Expandable: Story = {
  name: "Linhas Expansíveis",
  args: {
    ...Default.args,
    renderExpandedRow: (item: MentoriasData) => (
      <div style={{ padding: "16px", backgroundColor: "#3F464C" }}>
        <Text>Detalhes expandidos para: {item.title}</Text>
        <Text variant="small">Empresa: {item.companyName}</Text>
        <Text variant="small">Status: {item.status}</Text>
      </div>
    ),
  },
}

export const FullFeatures: Story = {
  name: "Completo (Ações + Expansível + Clicável)",
  args: {
    ...Clickable.args,
    ...WithActions.args,
    ...Expandable.args,
  },
}

export const FixedHeader: Story = {
  name: "Header Fixo",
  args: {
    ...FullFeatures.args,
    fixedHeader: true,
  },
}

export const Empty: Story = {
  name: "Estado Vazio",
  args: {
    columns: columnsDefinition,
    items: [],
    actions: mockActions,
  },
}
