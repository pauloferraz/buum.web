import React from 'react'
import { HeaderWrap, Column, HeaderName, HeaderTitle } from './styles'

import { FiLogOut } from 'react-icons/fi'

const Header: React.FC = () => {
  return (
    <HeaderWrap>
      <Column>
        <HeaderName>Olá Paulo Ferraz,</HeaderName>
        <HeaderTitle>Bem vindo! 👋</HeaderTitle>
      </Column>
      <Column textAlign='end'>
        <FiLogOut size={20} />
      </Column>
    </HeaderWrap>
  )
}

export default Header
