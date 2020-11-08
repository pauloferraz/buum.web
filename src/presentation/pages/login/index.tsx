import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import FormStatus from '@/presentation/components/form-status'
import Input from '@/presentation/components/input'
import Context from '@/presentation/contexts/form-context'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication, SaveAccessToken } from '@/domain/usecases'

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
  saveAccessToken: SaveAccessToken
}

const Login: React.FC<Props> = ({
  validation,
  authentication,
  saveAccessToken
}: Props) => {
  const history = useHistory()
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    errorMessage: '',
    btnDisabled: true
  })

  useEffect(() => {
    if (
      !validation.validade('email', state.email) &&
      !validation.validade('password', state.password)
    ) {
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

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()

    try {
      if (state.isLoading) {
        return
      }
      setState({ ...state, isLoading: true })
      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })
      await saveAccessToken.save(account.accessToken)
      history.replace('/')
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
          <FormLogin
            autoComplete='off'
            onSubmit={handleSubmit}
            data-testid='login-form'
          >
            <Input name='email' placeholder='Digite seu e-mail' />
            <Input
              type='password'
              name='password'
              placeholder='Digite sua senha'
            />
            <Button
              type='submit'
              disabled={state.btnDisabled}
              data-testid='submit-button'
            >
              Entrar
            </Button>
          </FormLogin>
          <LinkCreate>
            Não tem acesso?{' '}
            <Link data-testid='signup' to='/signup'>
              {' '}
              Crie sua conta
            </Link>
            e comece a vender.
          </LinkCreate>
          <FormStatus />
        </Context.Provider>
      </LoginContainer>
    </Container>
  )
}

export default Login
