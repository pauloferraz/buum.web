import React, { useState, useEffect } from 'react'
import FormStatus from '@/presentation/components/form-status'
import Input from '@/presentation/components/input'
import Context from '@/presentation/contexts/form-context'
import { Validation } from '@/presentation/protocols/validation'

import {
  Container,
  LoginContainer,
  FormLogin,
  Title,
  SubTitle,
  Button,
  LinkCreate
} from './styles'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    errorMessage: ''
  })

  useEffect(() => {
    setState({ ...state, emailError: validation.validade('email', state.email) })
  }, [state.email])

  return (
    <Container>
      <LoginContainer>
        <Context.Provider value={{ state, setState }}>
          <Title>Portal do vendedor</Title>
          <SubTitle>Gerencie sua loja de forma fácil e rápida</SubTitle>
          <FormLogin>
            <Input type='email' name='email' placeholder='Digite seu e-mail' />
            <Input type='password' name='password' placeholder='Digite sua senha' />
            <Button type='submit' disabled data-testid='submit-button'>Entrar</Button>
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
