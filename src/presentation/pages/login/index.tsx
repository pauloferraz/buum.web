import React, { useState, useEffect } from 'react'
import FormStatus from '@/presentation/components/form-status'
import Input from '@/presentation/components/input'
import Context from '@/presentation/contexts/form-context'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication } from '@/domain/usecases'

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
  authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    errorMessage: '',
    btnDisabled: true
  })

  useEffect(() => {
    if (state.email.length > 0 && state.password.length > 0) {
      setState({
        ...state,
        btnDisabled: false
      })
    } else {
      setState({
        ...state,
        btnDisabled: true
      })
    }
  }, [state.email, state.password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    try {
      if (state.isLoading) {
        return
      }
      setState({ ...state, isLoading: true })
      await authentication.auth({ email: state.email, password: state.password })
    } catch (error) {
      setState({ ...state, isLoading: false, errorMessage: error.message })
    }
  }

  return (
    <Container>
      <LoginContainer>
        <Context.Provider value={{ state, setState }}>
          <Title>Portal do vendedor</Title>
          <SubTitle>Gerencie sua loja de forma fácil e rápida</SubTitle>
          <FormLogin autoComplete="off" onSubmit={handleSubmit}>
            <Input type='email' name='email' placeholder='Digite seu e-mail' />
            <Input type='password' name='password' placeholder='Digite sua senha' />
            <Button type='submit' disabled={state.btnDisabled} data-testid='submit-button'>Entrar</Button>
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
