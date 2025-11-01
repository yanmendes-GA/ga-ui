// src/templates/SystemTemplate/SystemTemplate.stories.tsx

import type { Meta, StoryObj } from "@storybook/react"
import { SystemTemplate } from "./SystemTemplate"
import { Button } from "../../atoms/Button"
import { Input } from "../../molecules/Input"
// Importamos o DataTable e seus tipos
import { Chip } from "../../molecules/Chip"
// @ts-ignore
import { DataTable } from "../../organisms/DataTable"
import type {
  DataTableColumn,
  DataAction,
} from "../../organisms/DataTable/DataTable.types"
// Tipos dos organismos
import type { SidebarProps } from "../../organisms/Sidebar/Sidebar.types"
import type { ToolbarProps } from "../../organisms/Toolbar/Toolbar.types"
// @ts-ignore
import logoSmall from "../../../../public/symbol.png"
// @ts-ignore
import logoFull from "../../../../public/horizontal-logo.png"

// --- Mock Sidebar ---
const mockSidebarProps: SidebarProps = {
  logoFull: (
    <img
      src={logoFull}
      alt="Grupo Acelerador"
    />
  ),
  logoSmall: (
    <img
      src={logoSmall}
      alt="GA"
    />
  ),
  navItems: [
    { label: "Dashboard", icon: "chart-pie-alt", href: "/dashboard" },
    { label: "Mentorias", icon: "diploma", href: "/mentorias" },
    { label: "Empresas", icon: "building", href: "/empresas" },
    { label: "Relatórios", icon: "audit", href: "/relatorios" },
    { label: "Configurações", icon: "settings", href: "/configuracoes" },
  ],
  profile: {
    name: "Nome do Beltrano",
    role: "Mentor",
    avatarFallback: "GA",
  },
  activeLink: "/mentorias",
}

const mockToolbarProps: ToolbarProps = {
  breadcrumbItems: [
    { label: "Início", href: "/" },
    { label: "Mentorias", isCurrent: true },
  ],
  children: (
    <div className="flex flex-1 items-center justify-between gap-4">
      <div className="flex flex-1 justify-center">
        <Input
          id="search"
          iconLeft="search"
          placeholder="Pesquisar"
        />
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          iconOnly
          size="sm"
          icon="filters"
          aria-label="Filtrar"
        />
        <Button
          variant="ghost"
          iconOnly
          size="sm"
          icon="bell"
          aria-label="Notificações"
        />
      </div>
    </div>
  ),
}

// --- Mock DataTable Content ---

// 1. Definimos a interface dos nossos dados mockados
interface MockItem {
  id: string
  titulo: string
  status: "Não Iniciado" | "Em Andamento" | "Concluído"
  empresa: {
    name: string
    avatarFallback: string
  }
  dataMentoria: string
  avaliacao: number
}

// 2. Criamos os dados mockados
const mockItems: MockItem[] = [
  {
    id: "1",
    titulo: "Mentoria sobre financeiro",
    status: "Não Iniciado",
    empresa: { name: "Nome da empresa de teste Ltda.", avatarFallback: "GA" },
    dataMentoria: "08/10/2025",
    avaliacao: 5,
  },
  {
    id: "2",
    titulo: "Marketing na empresa",
    status: "Não Iniciado",
    empresa: { name: "Nome da empresa de teste Ltda.", avatarFallback: "GA" },
    dataMentoria: "08/10/2025",
    avaliacao: 5,
  },
  {
    id: "3",
    titulo: "A importância de seguir os processos",
    status: "Não Iniciado",
    empresa: { name: "Nome da empresa de teste Ltda.", avatarFallback: "GA" },
    dataMentoria: "08/10/2025",
    avaliacao: 5,
  },
  {
    id: "4",
    titulo: "Gestão de tempo e produtividade",
    status: "Em Andamento",
    empresa: { name: "Empresa Alpha Consultoria", avatarFallback: "AC" },
    dataMentoria: "12/10/2025",
    avaliacao: 4,
  },
  {
    id: "5",
    titulo: "Planejamento estratégico anual",
    status: "Concluído",
    empresa: { name: "Beta Soluções Empresariais", avatarFallback: "BS" },
    dataMentoria: "05/09/2025",
    avaliacao: 5,
  },
  {
    id: "6",
    titulo: "Liderança e cultura organizacional",
    status: "Não Iniciado",
    empresa: { name: "Gamma Tech Ltda.", avatarFallback: "GT" },
    dataMentoria: "18/10/2025",
    avaliacao: 4,
  },
  {
    id: "7",
    titulo: "Comunicação eficaz entre equipes",
    status: "Em Andamento",
    empresa: { name: "Delta Group Consultoria", avatarFallback: "DG" },
    dataMentoria: "20/10/2025",
    avaliacao: 5,
  },
  {
    id: "8",
    titulo: "Inovação e transformação digital",
    status: "Concluído",
    empresa: { name: "Empresa Epsilon Digital", avatarFallback: "ED" },
    dataMentoria: "01/09/2025",
    avaliacao: 5,
  },
  {
    id: "9",
    titulo: "Melhoria de processos internos",
    status: "Em Andamento",
    empresa: { name: "Zeta Soluções Corporativas", avatarFallback: "ZS" },
    dataMentoria: "25/10/2025",
    avaliacao: 4,
  },
  {
    id: "10",
    titulo: "Gestão financeira avançada",
    status: "Não Iniciado",
    empresa: { name: "Theta Investimentos S.A.", avatarFallback: "TI" },
    dataMentoria: "10/11/2025",
    avaliacao: 5,
  },
  {
    id: "11",
    titulo: "Gestão de riscos empresariais",
    status: "Não Iniciado",
    empresa: { name: "Lambda Consultoria", avatarFallback: "LC" },
    dataMentoria: "15/11/2025",
    avaliacao: 4,
  },
  {
    id: "12",
    titulo: "Empreendedorismo digital",
    status: "Concluído",
    empresa: { name: "Sigma Digital Tech", avatarFallback: "SD" },
    dataMentoria: "02/09/2025",
    avaliacao: 5,
  },
  {
    id: "13",
    titulo: "Gestão de talentos e RH",
    status: "Em Andamento",
    empresa: { name: "Omega RH Solutions", avatarFallback: "OR" },
    dataMentoria: "28/10/2025",
    avaliacao: 4,
  },
  {
    id: "14",
    titulo: "Vendas e negociação estratégica",
    status: "Não Iniciado",
    empresa: { name: "Kappa Vendas Ltda.", avatarFallback: "KV" },
    dataMentoria: "08/11/2025",
    avaliacao: 5,
  },
  {
    id: "15",
    titulo: "Gestão de projetos ágeis",
    status: "Concluído",
    empresa: { name: "AgileX Solutions", avatarFallback: "AS" },
    dataMentoria: "10/08/2025",
    avaliacao: 5,
  },
  {
    id: "16",
    titulo: "Marketing de conteúdo para empresas",
    status: "Em Andamento",
    empresa: { name: "ContentPro Marketing", avatarFallback: "CM" },
    dataMentoria: "30/10/2025",
    avaliacao: 4,
  },
  {
    id: "17",
    titulo: "Gestão de crise corporativa",
    status: "Não Iniciado",
    empresa: { name: "CrisisControl Ltda.", avatarFallback: "CC" },
    dataMentoria: "12/11/2025",
    avaliacao: 3,
  },
  {
    id: "18",
    titulo: "Como estruturar OKRs eficientes",
    status: "Não Iniciado",
    empresa: { name: "Vision Performance", avatarFallback: "VP" },
    dataMentoria: "14/11/2025",
    avaliacao: 5,
  },
  {
    id: "19",
    titulo: "Design Thinking e inovação",
    status: "Concluído",
    empresa: { name: "Innovar Design Co.", avatarFallback: "ID" },
    dataMentoria: "09/09/2025",
    avaliacao: 5,
  },
  {
    id: "20",
    titulo: "Treinamento em Customer Success",
    status: "Em Andamento",
    empresa: { name: "ClientFirst Consultoria", avatarFallback: "CF" },
    dataMentoria: "05/11/2025",
    avaliacao: 4,
  },
  {
    id: "21",
    titulo: "Gestão de indicadores de performance",
    status: "Concluído",
    empresa: { name: "MetricPro Analytics", avatarFallback: "MA" },
    dataMentoria: "15/09/2025",
    avaliacao: 5,
  },
  {
    id: "22",
    titulo: "Cultura de inovação contínua",
    status: "Não Iniciado",
    empresa: { name: "Evolve Company", avatarFallback: "EC" },
    dataMentoria: "20/11/2025",
    avaliacao: 5,
  },
  {
    id: "23",
    titulo: "Gestão de feedbacks construtivos",
    status: "Em Andamento",
    empresa: { name: "HumanUp Desenvolvimento", avatarFallback: "HU" },
    dataMentoria: "03/11/2025",
    avaliacao: 4,
  },
  {
    id: "24",
    titulo: "Planejamento de carreira corporativa",
    status: "Não Iniciado",
    empresa: { name: "CareerBoost", avatarFallback: "CB" },
    dataMentoria: "22/11/2025",
    avaliacao: 5,
  },
  {
    id: "25",
    titulo: "Inteligência emocional no trabalho",
    status: "Concluído",
    empresa: { name: "Mindset Consultoria", avatarFallback: "MC" },
    dataMentoria: "11/09/2025",
    avaliacao: 5,
  },
  {
    id: "26",
    titulo: "Mentoria em gestão de equipes remotas",
    status: "Em Andamento",
    empresa: { name: "RemoteX Solutions", avatarFallback: "RX" },
    dataMentoria: "04/11/2025",
    avaliacao: 4,
  },
  {
    id: "27",
    titulo: "Estratégias de retenção de talentos",
    status: "Não Iniciado",
    empresa: { name: "TalentCore RH", avatarFallback: "TC" },
    dataMentoria: "25/11/2025",
    avaliacao: 5,
  },
  {
    id: "28",
    titulo: "Gestão de marca e posicionamento",
    status: "Concluído",
    empresa: { name: "BrandX Studio", avatarFallback: "BX" },
    dataMentoria: "10/09/2025",
    avaliacao: 5,
  },
  {
    id: "29",
    titulo: "Como criar uma cultura de alta performance",
    status: "Em Andamento",
    empresa: { name: "PerformUp", avatarFallback: "PU" },
    dataMentoria: "29/10/2025",
    avaliacao: 4,
  },
  {
    id: "30",
    titulo: "Finanças para líderes",
    status: "Não Iniciado",
    empresa: { name: "LeaderFinance", avatarFallback: "LF" },
    dataMentoria: "18/11/2025",
    avaliacao: 5,
  },
  {
    id: "31",
    titulo: "Mentoria sobre precificação",
    status: "Não Iniciado",
    empresa: { name: "ValueSmart Consultoria", avatarFallback: "VS" },
    dataMentoria: "26/11/2025",
    avaliacao: 4,
  },
  {
    id: "32",
    titulo: "Automação de processos internos",
    status: "Em Andamento",
    empresa: { name: "AutoFlow Systems", avatarFallback: "AF" },
    dataMentoria: "06/11/2025",
    avaliacao: 4,
  },
  {
    id: "33",
    titulo: "Gestão de performance em vendas",
    status: "Concluído",
    empresa: { name: "SalesForceX", avatarFallback: "SX" },
    dataMentoria: "14/09/2025",
    avaliacao: 5,
  },
  {
    id: "34",
    titulo: "Mentoria em análise de dados",
    status: "Não Iniciado",
    empresa: { name: "DataDriven Labs", avatarFallback: "DD" },
    dataMentoria: "28/11/2025",
    avaliacao: 5,
  },
  {
    id: "35",
    titulo: "Gestão de stakeholders",
    status: "Em Andamento",
    empresa: { name: "StakePro Consultoria", avatarFallback: "SP" },
    dataMentoria: "08/11/2025",
    avaliacao: 4,
  },
  {
    id: "36",
    titulo: "Mentoria de comunicação corporativa",
    status: "Não Iniciado",
    empresa: { name: "CorpTalk", avatarFallback: "CT" },
    dataMentoria: "01/12/2025",
    avaliacao: 5,
  },
  {
    id: "37",
    titulo: "Mentoria em ESG e sustentabilidade",
    status: "Concluído",
    empresa: { name: "GreenMind", avatarFallback: "GM" },
    dataMentoria: "07/09/2025",
    avaliacao: 5,
  },
  {
    id: "38",
    titulo: "Gestão estratégica de marketing digital",
    status: "Em Andamento",
    empresa: { name: "AdBoost", avatarFallback: "AB" },
    dataMentoria: "11/11/2025",
    avaliacao: 4,
  },
  {
    id: "39",
    titulo: "Mentoria em vendas complexas",
    status: "Não Iniciado",
    empresa: { name: "ComplexSales", avatarFallback: "CS" },
    dataMentoria: "03/12/2025",
    avaliacao: 5,
  },
  {
    id: "40",
    titulo: "Gestão de inovação em produtos",
    status: "Em Andamento",
    empresa: { name: "ProdX Innovations", avatarFallback: "PI" },
    dataMentoria: "12/11/2025",
    avaliacao: 4,
  },
  {
    id: "41",
    titulo: "Planejamento financeiro pessoal",
    status: "Não Iniciado",
    empresa: { name: "FinanceYou", avatarFallback: "FY" },
    dataMentoria: "06/12/2025",
    avaliacao: 5,
  },
  {
    id: "42",
    titulo: "Mentoria em branding pessoal",
    status: "Concluído",
    empresa: { name: "PersonalMark", avatarFallback: "PM" },
    dataMentoria: "20/09/2025",
    avaliacao: 5,
  },
  {
    id: "43",
    titulo: "Gestão de contratos empresariais",
    status: "Não Iniciado",
    empresa: { name: "LawX Consultoria", avatarFallback: "LX" },
    dataMentoria: "09/12/2025",
    avaliacao: 4,
  },
  {
    id: "44",
    titulo: "Mentoria em governança corporativa",
    status: "Concluído",
    empresa: { name: "GovCorp", avatarFallback: "GC" },
    dataMentoria: "16/09/2025",
    avaliacao: 5,
  },
  {
    id: "45",
    titulo: "Desenvolvimento de soft skills",
    status: "Em Andamento",
    empresa: { name: "SkillUp", avatarFallback: "SU" },
    dataMentoria: "10/11/2025",
    avaliacao: 4,
  },
  {
    id: "46",
    titulo: "Gestão de mudanças organizacionais",
    status: "Não Iniciado",
    empresa: { name: "ChangeMind", avatarFallback: "CM" },
    dataMentoria: "15/12/2025",
    avaliacao: 5,
  },
  {
    id: "47",
    titulo: "Mentoria em growth marketing",
    status: "Concluído",
    empresa: { name: "GrowthX", avatarFallback: "GX" },
    dataMentoria: "11/09/2025",
    avaliacao: 5,
  },
  {
    id: "48",
    titulo: "Gestão de reputação online",
    status: "Em Andamento",
    empresa: { name: "ReputationPro", avatarFallback: "RP" },
    dataMentoria: "11/11/2025",
    avaliacao: 4,
  },
  {
    id: "49",
    titulo: "Mentoria em gestão operacional",
    status: "Não Iniciado",
    empresa: { name: "OpManage", avatarFallback: "OM" },
    dataMentoria: "17/12/2025",
    avaliacao: 5,
  },
  {
    id: "50",
    titulo: "Como liderar em tempos de crise",
    status: "Concluído",
    empresa: { name: "LeadCrisis", avatarFallback: "LC" },
    dataMentoria: "08/09/2025",
    avaliacao: 5,
  },
  {
    id: "51",
    titulo: "Mentoria sobre finanças corporativas",
    status: "Não Iniciado",
    empresa: { name: "FinX Consultoria", avatarFallback: "FX" },
    dataMentoria: "19/12/2025",
    avaliacao: 4,
  },
  {
    id: "52",
    titulo: "Gestão de performance de times",
    status: "Em Andamento",
    empresa: { name: "PerformLab", avatarFallback: "PL" },
    dataMentoria: "20/11/2025",
    avaliacao: 4,
  },
  {
    id: "53",
    titulo: "Mentoria em planejamento tributário",
    status: "Não Iniciado",
    empresa: { name: "TaxSmart", avatarFallback: "TS" },
    dataMentoria: "21/12/2025",
    avaliacao: 5,
  },
]

// 3. Criamos as ações para cada linha
const mockActions: DataAction<MockItem>[] = [
  {
    label: "Editar",
    icon: "edit",
    onClick: item => alert(`Editando: ${item.titulo}`),
  },
  {
    label: "Excluir",
    icon: "trash",
    onClick: item => alert(`Excluindo: ${item.titulo}`),
  },
]

// 4. Criamos as definições de coluna
const mockColumns: DataTableColumn<MockItem>[] = [
  {
    key: "titulo",
    label: "Título",
    render: item => (
      <div className="font-semibold text-foreground">{item.titulo}</div>
    ),
  },
  {
    key: "status",
    label: "Status",
    render: item => <Chip>{item.status.toUpperCase()}</Chip>,
  },
  {
    key: "empresa",
    label: "Empresa",
    render: item => (
      // Em uma app real, isso seria uma molécula <AvatarInfo>
      <div className="flex items-center gap-2">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full
            bg-primary/20 text-sm font-bold text-primary"
        >
          {item.empresa.avatarFallback}
        </div>
        <span className="text-sm text-foreground">{item.empresa.name}</span>
      </div>
    ),
  },
  {
    key: "dataMentoria",
    label: "Data da mentoria",
  },
  {
    key: "avaliacao",
    label: "Avaliação",
    render: item => (
      // Em uma app real, isso seria uma molécula <Rating>
      <div className="flex text-primary">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={i < item.avaliacao ? "text-primary" : "text-dark-300"}
          >
            ★
          </span>
        ))}
      </div>
    ),
  },
]

// 5. O conteúdo principal (children) do SystemTemplate é a DataTable
const MockContent = () => {
  return (
    <DataTable
      rowKey="id"
      columns={mockColumns}
      items={mockItems}
      actions={mockActions}
      emptyMessage="Nenhuma mentoria encontrada."
      paginator={{
        currentPage: 1,
        pageSize: 12,
        totalCount: 754,
        siblingCount: 1,
      }}
    />
  )
}

// --- Meta ---

const meta: Meta<typeof SystemTemplate> = {
  title: "Templates/System Template",
  component: SystemTemplate,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    sidebarProps: {
      control: "object",
      description: "Props passadas para o organismo Sidebar.",
    },
    toolbarProps: {
      control: "object",
      description: "Props passadas para o organismo Toolbar.",
    },
    children: {
      control: false,
      description: "Slot para o conteúdo principal (ex: DataTable).",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// --- Story ---

export const Default: Story = {
  name: "Layout Padrão do Sistema",
  args: {
    sidebarProps: mockSidebarProps,
    toolbarProps: mockToolbarProps,
    toolbarButton: <Button icon="plus-hexagon">Nova Mentoria</Button>,
    children: <MockContent />,
  },
}
