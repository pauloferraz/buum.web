import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'
import { Header } from '@/presentation/components'
import { ApiContext } from '@/presentation/contexts'

describe('Header component', () => {
  test('should call setCurrentAccount with null', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] })
    const sutCurrentAccountMock = jest.fn()
    render(
      <ApiContext.Provider value={{ setCurrentAccount: sutCurrentAccountMock }}>
        <Router history={history}>
          <ThemeProvider theme={light}>
            <Header />
          </ThemeProvider>
        </Router>
      </ApiContext.Provider>
    )
    fireEvent.click(screen.getByTestId('logout'))
    expect(sutCurrentAccountMock).toHaveBeenCalledWith(undefined)
    expect(history.location.pathname).toBe('/login')
  })
})
