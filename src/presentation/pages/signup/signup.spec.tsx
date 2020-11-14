import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'
import Signup from '.'

type SutTypes = {
  sut: RenderResult
}

const history = createMemoryHistory({ initialEntries: ['/signup'] })
const makeSut = (): SutTypes => {
  const sut = render(
    <Router history={history}>
      <ThemeProvider theme={light}>
        <Signup />
      </ThemeProvider>
    </Router>
  )
  return { sut }
}

describe('Signup component', () => {
  test('should start with initial state', () => {
    const { sut } = makeSut()
    const statusWrap = sut.getByTestId('status-wrap')
    expect(statusWrap.childElementCount).toBe(0)

    const submitButton = sut.getByTestId('submit-button') as HTMLButtonElement
    expect(submitButton.disabled).toBeTruthy()
  })
})
