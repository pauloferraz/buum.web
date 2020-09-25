import React, { useState } from 'react'
import FormStatus from '@/presentation/components/form-status'
import Context from '@/presentation/contexts/form-context'

import {
  Container,
  LoginContainer,
  FormLogin,
  Title,
  SubTitle,
  Input,
  Button,
  LinkCreate
} from './styles'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const Login: React.FC = () => {
  const [state] = useState<StateProps>({ isLoading: false, errorMessage: '' })

  return (
    <Container>
      <LoginContainer>
        <Context.Provider value={state}>
          <Title>Portal do vendedor</Title>
          <SubTitle>Gerencie sua loja de forma fácil e rápida</SubTitle>
          <FormLogin>
            <Input type='email' placeholder='Digite seu e-mail' />
            <Input type='password' placeholder='Digite sua senha' />
            <Button type='submit' disabled data-testid="submit-button">Entrar</Button>
          </FormLogin>

          <LinkCreate>
          Não tem acesso? <a href='#'> Crie sua conta</a> e comece a vender.
          </LinkCreate>
          <FormStatus/>
        </Context.Provider>
      </LoginContainer>
    </Container>
  )
}

export default Login
