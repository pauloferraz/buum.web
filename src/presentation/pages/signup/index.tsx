import React, { useEffect, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import FormStatus from '@/presentation/components/form-status'
import Input from '@/presentation/components/input'
import SubmitButton from '@/presentation/components/submit-button'
import Logo from '@/presentation/components/logo'
import { FormContext, ApiContext } from '@/presentation/contexts'
import { Validation } from '@/presentation/protocols/validation'
import { AddAccount } from '@/domain/usecases'

import {
  Container,
  LoginContainer,
  FormLogin,
  Title,
  SubTitle,
  LinkCreate
} from './styles'

type Props = {
  validation: Validation
  addAccount: AddAccount
}

const Signup: React.FC<Props> = ({ validation, addAccount }: Props) => {
  const { setCurrentAccount } = useContext(ApiContext)
  const history = useHistory()
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errorMessage: '',
    invalidForm: true
  })

  const [stateError, setStateError] = useState({
    nameError: '',
    emailError: '',
    passwordError: '',
    passwordConfirmationError: ''
  })

  useEffect(() => {
    const { name, email, password, passwordConfirmation } = state
    const formData = { name, email, password, passwordConfirmation }
    const nameError = validation.validade('name', formData)
    const emailError = validation.validade('email', formData)
    const passwordError = validation.validade('password', formData)
    const passwordConfirmationError = validation.validade(
      'passwordConfirmation',
      formData
    )

    setState({
      ...state,
      invalidForm:
        !!nameError || !!emailError || !!passwordError || !!passwordConfirmationError
    })

    setStateError({
      ...stateError,
      nameError,
      emailError,
      passwordError,
      passwordConfirmationError
    })
  }, [state.name, state.email, state.password, state.passwordConfirmation])

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()

    try {
      if (state.isLoading) {
        return
      }
      setState({ ...state, isLoading: true })
      const account = await addAccount.add({
        name: state.name,
        email: state.email,
        password: state.password,
        passwordConfirmation: state.passwordConfirmation
      })
      setCurrentAccount(account)
      history.replace('/')
    } catch (error) {
      setState({ ...state, isLoading: false, errorMessage: error.message })
    }
  }

  return (
    <Container>
      <Logo />
      <LoginContainer>
        <FormContext.Provider value={{ state, setState }}>
          <Title>Portal do vendedor</Title>
          <SubTitle>Gerencie sua loja de forma fácil e rápida</SubTitle>
          <FormLogin
            autoComplete='off'
            onSubmit={handleSubmit}
            data-testid='signup-form'
          >
            <Input
              name='name'
              label='Nome'
              placeholder='Digite seu nome'
              errorMsg={stateError.nameError}
            />
            <Input
              name='email'
              label='E-mail'
              placeholder='Digite seu e-mail'
              errorMsg={stateError.emailError}
            />
            <Input
              type='password'
              name='password'
              label='Senha'
              placeholder='Digite sua senha'
              errorMsg={stateError.passwordError}
            />
            <Input
              type='password'
              label='Confirme a senha'
              name='passwordConfirmation'
              placeholder='Repita sua senha'
              errorMsg={stateError.passwordConfirmationError}
            />
            <SubmitButton text='Cadastrar' />
          </FormLogin>
          <LinkCreate>
            Já tem conta?{' '}
            <Link data-testid='login' replace to='/login'>
              {' '}
              Volte para o login
            </Link>
          </LinkCreate>
          <FormStatus />
        </FormContext.Provider>
      </LoginContainer>
    </Container>
  )
}

export default Signup
