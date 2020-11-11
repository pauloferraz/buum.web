import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FormStatus from '@/presentation/components/form-status'
import Input from '@/presentation/components/input'
import Context from '@/presentation/contexts/form-context'

import {
  Container,
  LoginContainer,
  FormLogin,
  Title,
  SubTitle,
  Button,
  LinkCreate
} from './styles'

const Signup: React.FC = () => {
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    emailError: '',
    errorMessage: '',
    btnDisabled: true
  })

  return (
    <Container>
      <LoginContainer>
        <Context.Provider value={{ state, setState }}>
          <Title>Portal do vendedor</Title>
          <SubTitle>Gerencie sua loja de forma fácil e rápida</SubTitle>
          <FormLogin autoComplete='off' onSubmit={() => {}} data-testid='login-form'>
            <Input name='name' placeholder='Digite seu nome' />
            <Input name='email' placeholder='Digite seu e-mail' />
            <Input type='password' name='password' placeholder='Digite sua senha' />
            <Input
              type='password'
              name='passwordConfirmation'
              placeholder='Repita sua senha'
            />
            <Button
              type='submit'
              disabled={state.btnDisabled}
              data-testid='submit-button'
            >
              Cadastrar
            </Button>
          </FormLogin>
          <LinkCreate>
            Já tem conta?{' '}
            <Link data-testid='login' to='/login'>
              {' '}
              Volte para o login
            </Link>
          </LinkCreate>
          <FormStatus />
        </Context.Provider>
      </LoginContainer>
    </Container>
  )
}

export default Signup
