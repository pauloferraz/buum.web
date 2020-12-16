import React from 'react'
import Logo from '../logo'

import {
  FiHome,
  FiShoppingBag,
  FiLayers,
  FiMail,
  FiSettings,
  FiUsers
} from 'react-icons/fi'

import {
  SidebarWrap,
  SidebarTop,
  SidebarList,
  SidebarTitle,
  SidebarMenu,
  SidebarItem,
  SidebarItemLink
} from './styles'

const Sidebar: React.FC = () => {
  return (
    <SidebarWrap>
      <SidebarTop>
        <Logo />
      </SidebarTop>
      <SidebarList>
        <SidebarTitle>Admin tools</SidebarTitle>
        <SidebarMenu>
          <SidebarItem active>
            <SidebarItemLink>
              <FiHome size={20} /> Dashboard
            </SidebarItemLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarItemLink>
              <FiShoppingBag size={20} />
              Produtos
            </SidebarItemLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarItemLink>
              <FiLayers size={20} />
              Categorias
            </SidebarItemLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarItemLink>
              <FiMail size={20} />
              Mensagens
            </SidebarItemLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarItemLink>
              <FiSettings size={20} />
              Configurações
            </SidebarItemLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarItemLink>
              <FiUsers size={20} />
              Usuários
            </SidebarItemLink>
          </SidebarItem>
        </SidebarMenu>
      </SidebarList>
    </SidebarWrap>
  )
}

export default Sidebar
