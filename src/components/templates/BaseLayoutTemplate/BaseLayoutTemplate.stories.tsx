import type { Meta, StoryObj } from "@storybook/react"
import {
  BaseLayoutTemplate,
  HeaderSlot,
  ContentSlot,
  FooterSlot,
} from "./BaseLayoutTemplate"
import { Sidebar } from "../../organisms/Sidebar"
import { ListItem } from "../../molecules/ListItem"

const meta: Meta<typeof BaseLayoutTemplate> = {
  title: "Templates/Base Layout Template",
  component: BaseLayoutTemplate,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    sidebar: {
      description: "Componente Sidebar (Barra Lateral) do Organism.",
    },
    children: {
      control: false,
      description:
        "Slots de conteúdo (Header, Content, Footer) passados como children do componente composto.",
    },
  },
} satisfies Meta<typeof BaseLayoutTemplate>

export default meta
type Story = StoryObj<typeof meta>

// --- Mocks para simular os organismos ---

const MockHeader = () => (
  <div className="flex h-[50px] w-full items-center justify-between">
    <div className="h-6 w-48 rounded text-dark-100">Header Slot</div>
    {/* Breadcrumbs */}
    <div className="flex items-center gap-4">
      <div className="h-10 w-64 rounded bg-dark-300 opacity-50" />{" "}
      {/* Search */}
      <div className="h-10 w-10 rounded-lg border border-dark-300 opacity-50" />{" "}
      {/* Icon */}
      <div className="h-10 w-10 rounded-lg border border-dark-300 opacity-50" />{" "}
      {/* Icon */}
    </div>
  </div>
)

const MockMainContent = () => (
  <div className="w-full flex-1 px-8">
    <div className="w-full rounded-lg bg-dark-500 text-dark-100">
      <div className="p-6">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
          temporibus! Dicta expedita facilis eveniet error culpa optio ut,
          praesentium voluptates tenetur cumque accusamus, dolor in vitae
          reprehenderit? Eveniet, dolorum quam? Neque quam quis esse cum iusto.
          Repudiandae sint animi, ipsam eveniet laborum quam? Quibusdam
          asperiores, laudantium delectus officia maiores facilis necessitatibus
          illum, voluptatibus nulla soluta, ipsum dolore veniam et placeat!
          Perspiciatis alias eum consequuntur amet officia! Alias, provident!
          Molestias suscipit earum at quibusdam enim doloremque aut porro culpa
          neque! Explicabo, quasi! Vel cum, aliquid facere reiciendis fugit quo
          eos optio. Maiores nulla ab necessitatibus. Mollitia, maiores, tempore
          possimus nulla, temporibus provident quam rem quasi ut eaque sint odit
          iste voluptas eos saepe nostrum itaque reprehenderit consequuntur
          dolores consequatur ratione dolorum. Voluptatem vel nesciunt
          consequatur inventore enim repellendus laboriosam blanditiis sequi
          earum similique! Officiis et facilis optio atque sit ea dicta
          voluptatum enim nam? Provident dignissimos suscipit at tempore
          doloribus! Eaque. Unde cupiditate, dolorem quis, quibusdam dolores cum
          placeat ea ad reprehenderit perferendis aliquid blanditiis id nam
          minus rerum aliquam culpa mollitia, voluptatibus quas similique
          assumenda repellat! Illo necessitatibus voluptatem eius! Autem vitae
          officiis eius repellat error repellendus sed saepe minus iste
          explicabo quibusdam non corporis animi velit, eum tenetur cumque optio
          praesentium itaque. Excepturi, natus id eveniet odit nesciunt aut.
          Tempore maxime ut atque! Eius, nostrum repellendus. Laboriosam itaque
          quibusdam ea nostrum, commodi accusantium obcaecati! Omnis doloribus
          fugiat saepe, reprehenderit, placeat laborum, est itaque facere a
          maxime repudiandae architecto deleniti! Fugit eaque velit hic iusto
          nulla necessitatibus voluptatum excepturi laudantium. Autem iste
          eligendi nobis labore aliquam animi magnam perferendis, hic veniam rem
          architecto, accusamus quo repellendus doloribus provident ipsum
          voluptates. Dolorem dolorum tempore nesciunt. Cum, repellendus animi
          voluptatem eveniet nihil illo eum velit sunt enim in officiis
          repudiandae dignissimos officia nemo consequuntur accusamus deserunt
          repellat, sequi, itaque odio sed provident? In mollitia voluptate,
          voluptatum sit natus, odit fuga ipsum laboriosam expedita eius, quas
          blanditiis molestiae dicta omnis illo et ipsam quisquam quasi culpa
          cum atque? Iusto labore ut error consequatur. Maxime voluptatibus
          deleniti eaque id aut? Aliquam corrupti dolor debitis mollitia rerum
          molestiae saepe veniam dignissimos cum eum eveniet magnam,
          perspiciatis deserunt ducimus, sequi quam dolorem! Eligendi quibusdam
          quasi at. Ipsum cupiditate a nemo vitae labore animi nihil odit.
          Magni, illum voluptatem eaque cupiditate nobis pariatur quod enim quae
          quam repudiandae commodi assumenda laboriosam praesentium consequuntur
          accusantium quas saepe amet. Sit exercitationem qui eos doloremque
          nobis provident autem illo aliquam animi deserunt, ipsa expedita eius
          deleniti voluptates, consequuntur ut aperiam cum? Sequi dolores
          excepturi vero similique modi. Animi, sapiente ipsa. Iure atque, ipsam
          nemo aliquid dignissimos, ratione laborum, quibusdam ad autem labore
          dolores eius molestiae! Officia, eaque? Ipsum repellendus doloremque
          dolor atque porro obcaecati cupiditate. Ratione harum possimus
          voluptatum quia. Perspiciatis consectetur magnam, alias consequuntur
          architecto repudiandae quo nostrum animi commodi eveniet saepe
          asperiores veritatis quasi officiis esse maiores aliquam deserunt, eos
          cumque adipisci. Unde, distinctio saepe. Nam, provident nemo.
          Accusamus obcaecati eveniet harum aliquam reprehenderit, molestiae
          libero omnis rem, magnam ad fugiat illum natus. Nostrum, commodi!
          Veritatis tempora blanditiis labore asperiores impedit exercitationem
          id repellendus consectetur dolorum. Earum, minus. Error aliquam
          laudantium necessitatibus quidem dolorum tempora quisquam, harum modi,
          sunt eius repellat optio dolore similique ab, nostrum facere
          doloremque. Amet tempore ipsam officiis rerum eaque iste iusto esse
          ducimus. Similique officia delectus esse eveniet voluptatem ratione
          recusandae placeat eos odio ab. Nesciunt facere tenetur quis eius
          distinctio praesentium, sint voluptate doloribus a ad eligendi fugit
          reprehenderit, autem quisquam consequatur. Reprehenderit fuga aliquid
          ducimus a, culpa placeat omnis, provident asperiores doloribus
          nesciunt harum expedita excepturi dicta. Fuga beatae, eveniet alias
          veniam similique, velit accusantium obcaecati ad omnis a non rem.
        </h1>
      </div>
    </div>
  </div>
)

const MockFooter = () => (
  <div
    className="flex w-full items-center justify-between px-8 py-4 text-sm
      text-dark-200"
  >
    <div>Footer Slot (Ex: Grupo Acelerador 2025)</div>
    <div className="opacity-50">V.1.0.2</div>
  </div>
)

export const Default: Story = {
  args: {
    sidebar: (
      <Sidebar
        navItems={({ isCollapsed }) => (
          <ul className="flex flex-col items-center transition-all">
            <ListItem
              iconOnly={isCollapsed}
              label={isCollapsed ? "" : "Sidebar"}
              icon="home"
            />
          </ul>
        )}
      />
    ),
  },
  render: ({ sidebar }) => (
    <BaseLayoutTemplate sidebar={sidebar}>
      <MockMainContent />
    </BaseLayoutTemplate>
  ),
}

export const WithHeader: Story = {
  name: "Com Cabeçalho",
  args: {
    sidebar: (
      <Sidebar
        navItems={({ isCollapsed }) => (
          <ul className="flex flex-col items-center transition-all">
            <ListItem
              iconOnly={isCollapsed}
              label={isCollapsed ? "" : "Sidebar"}
              icon="home"
            />
          </ul>
        )}
      />
    ),
  },
  render: ({ sidebar }) => (
    <BaseLayoutTemplate sidebar={sidebar}>
      <HeaderSlot>
        <MockHeader />
      </HeaderSlot>

      <ContentSlot>
        <MockMainContent />
      </ContentSlot>
    </BaseLayoutTemplate>
  ),
}

export const WithFooter: Story = {
  name: "Com Rodapé",
  args: {
    sidebar: (
      <Sidebar
        navItems={({ isCollapsed }) => (
          <ul className="flex flex-col items-center transition-all">
            <ListItem
              iconOnly={isCollapsed}
              label={isCollapsed ? "" : "Sidebar"}
              icon="home"
            />
          </ul>
        )}
      />
    ),
  },
  render: ({ sidebar }) => (
    <BaseLayoutTemplate sidebar={sidebar}>
      <ContentSlot>
        <MockMainContent />
      </ContentSlot>

      <FooterSlot>
        <MockFooter />
      </FooterSlot>
    </BaseLayoutTemplate>
  ),
}

export const Complete: Story = {
  name: "Completo",
  args: {
    sidebar: (
      <Sidebar
        collapsable
        navItems={({ isCollapsed }) => (
          <ul className="flex flex-col items-center transition-all">
            <ListItem
              iconOnly={isCollapsed}
              label={isCollapsed ? "" : "Sidebar"}
              icon="home"
            />
          </ul>
        )}
      />
    ),
  },
  render: ({ sidebar }) => (
    <BaseLayoutTemplate sidebar={sidebar}>
      <HeaderSlot>
        <MockHeader />
      </HeaderSlot>

      <ContentSlot>
        <MockMainContent />
      </ContentSlot>

      <FooterSlot>
        <MockFooter />
      </FooterSlot>
    </BaseLayoutTemplate>
  ),
}
