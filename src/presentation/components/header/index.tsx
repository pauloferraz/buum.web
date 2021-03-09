import React, { useContext } from 'react'
import { ApiContext } from '@/presentation/contexts'
import { HeaderWrap, Column, HeaderName, HeaderTitle, ButtonLogout } from './styles'

import { FiLogOut } from 'react-icons/fi'
import { useLogout } from '@/presentation/hooks'

const Header: React.FC = () => {
  const logout = useLogout()
  const { getCurrentAccount } = useContext(ApiContext)

  const buttonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault()
    logout()
  }
  return (
    <HeaderWrap>
      <Column>
        <HeaderName data-testid='username'>
          Olá {getCurrentAccount().name},
        </HeaderName>
        <HeaderTitle>Bem vindo! 👋</HeaderTitle>
      </Column>
      <Column textAlign='end'>
        <ButtonLogout data-testid='logout' onClick={buttonClick}>
          <FiLogOut size={20} />
        </ButtonLogout>
      </Column>
    </HeaderWrap>
  )
}

export default Header
