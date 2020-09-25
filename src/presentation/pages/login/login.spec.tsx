import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'
import Login from '.'

describe('Login Component', () => {
  test('should be not showing error and loading', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={light}>
        <Login/>
      </ThemeProvider>
    )
    const statusWrap = getByTestId('status-wrap')
    expect(statusWrap.childElementCount).toBe(0)

    const submitButton = getByTestId('submit-button') as HTMLButtonElement
    expect(submitButton.disabled).toBeTruthy()
  })
})
