import React, { useContext } from 'react'
import { ApiContext } from '@/presentation/contexts'
import { useHistory } from 'react-router-dom'
import { HeaderWrap, Column, HeaderName, HeaderTitle, ButtonLogout } from './styles'

import { FiLogOut } from 'react-icons/fi'

const Header: React.FC = () => {
  const { setCurrentAccount } = useContext(ApiContext)
  const history = useHistory()
  const logout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault()
    setCurrentAccount(undefined)
    history.replace('/login')
  }
  return (
    <HeaderWrap>
      <Column>
        <HeaderName>Olá Paulo Ferraz,</HeaderName>
        <HeaderTitle>Bem vindo! 👋</HeaderTitle>
      </Column>
      <Column textAlign='end'>
        <ButtonLogout data-testid='logout' onClick={logout}>
          <FiLogOut size={20} />
        </ButtonLogout>
      </Column>
    </HeaderWrap>
  )
}

export default Header
