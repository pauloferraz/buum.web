import React from 'react'

// import { Container } from './styles';

const Login: React.FC = () => {
  return <div>
    <h1>Login</h1>
    <form>
      <input type="email" placeholder="Digite seu e-mail"/>
      <input type="password" placeholder="Digite sua senha"/>
      <button type="submit">Entrar</button>
    </form>
  </div>
}

export default Login
