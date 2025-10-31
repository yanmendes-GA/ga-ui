import type { Meta, StoryObj } from "@storybook/react"
import { DataTable } from "./DataTable"
import type { DataTableColumn } from "./DataTable.types"
import { Text } from "../../atoms/Text"
import { Button } from "../../atoms/Button"
import { Avatar } from "../../atoms/Avatar"
import { Chip } from "../../molecules/Chip"

const ThreeDots = () => (
  <Button
    iconOnly
    icon="dots_three_vertical"
    variant="ghost"
    size="sm"
  />
)

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
    columns: { control: false },
    items: { control: false },
    // sortKey, sortDirection, onSort removidos
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
    width: "50px",
    render: item => <Chip>{item.status}</Chip>,
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
  {
    key: "actions",
    label: "",
    align: "right",
    width: "5%",
    render: () => <ThreeDots />,
  },
]

export const Default: Story = {
  name: "Padrão",
  args: {
    columns: columnsDefinition,
    items: mockItems,
  },
}

export const FixedHeader: Story = {
  name: "Header Fixo",
  args: {
    ...Default.args,
    fixedHeader: true,
  },
}

export const Empty: Story = {
  name: "Estado Vazio",
  args: {
    columns: columnsDefinition,
    items: [],
  },
}

// useSortableData e DataTableWithSorting removidos

export const Sortable: Story = {
  name: "Com Ordenação",
  // 'render' não é mais necessário
  args: {
    columns: columnsDefinition,
    items: mockItems,
  },
}
