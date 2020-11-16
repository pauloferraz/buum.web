import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FormStatus from '@/presentation/components/form-status'
import Input from '@/presentation/components/input'
import Context from '@/presentation/contexts/form-context'
import { Validation } from '@/presentation/protocols/validation'
import { AddAccount } from '@/domain/usecases'

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
  addAccount: AddAccount
}

const Signup: React.FC<Props> = ({ validation, addAccount }: Props) => {
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
      await addAccount.add({
        name: state.name,
        email: state.email,
        password: state.password,
        passwordConfirmation: state.passwordConfirmation
      })
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
            data-testid='signup-form'
          >
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
