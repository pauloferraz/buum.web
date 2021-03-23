import React from 'react'
import { Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory } from 'history'
import PrivateRoute from './private-route'
import { ApiContext } from '@/presentation/contexts'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'
import { mockAccountModel } from '@/domain/test'

type SutTypes = {
  history: MemoryHistory
}

const makeSut = (account = mockAccountModel()): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  render(
    <ThemeProvider theme={light}>
      <ApiContext.Provider value={{ getCurrentAccount: () => account }}>
        <Router history={history}>
          <PrivateRoute />
        </Router>
      </ApiContext.Provider>
    </ThemeProvider>
  )
  return { history }
}

describe('PrivateRoute', () => {
  test('Should redirect to /login if token is empty', () => {
    const { history } = makeSut(null)
    expect(history.location.pathname).toBe('/login')
  })

  test('Should render current component if token is not empty', () => {
    const { history } = makeSut()
    expect(history.location.pathname).toBe('/')
  })
})
