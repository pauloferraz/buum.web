import React from 'react'

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

const Login: React.FC = () => {
  return (
    <Container>
      <LoginContainer>
        <Title>Portal do vendedor</Title>
        <SubTitle>Gerencie sua loja de forma fácil e rápida</SubTitle>
        <FormLogin>
          <Input type='email' placeholder='Digite seu e-mail' />
          <Input type='password' placeholder='Digite sua senha' />
          <Button type='submit'>Entrar</Button>
        </FormLogin>
        <LinkCreate>
          Não tem acesso? <a href='#'> Crie sua conta</a> e comece a vender.
        </LinkCreate>
      </LoginContainer>
    </Container>
  )
}

export default Login
