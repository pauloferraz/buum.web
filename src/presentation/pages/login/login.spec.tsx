import React from 'react'
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'
import Login from '.'
import { ValidationSpy } from '@/presentation/test'
import faker from 'faker'

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = render(
    <ThemeProvider theme={light}>
      <Login validation={validationSpy}/>
    </ThemeProvider>
  )
  return { sut, validationSpy }
}

describe('Login Component', () => {
  afterEach(cleanup)

  test('should start with initial state', () => {
    const { sut } = makeSut()
    const statusWrap = sut.getByTestId('status-wrap')
    expect(statusWrap.childElementCount).toBe(0)

    const submitButton = sut.getByTestId('submit-button') as HTMLButtonElement
    expect(submitButton.disabled).toBeTruthy()
  })

  test('should call Validation with correct value', () => {
    const { sut, validationSpy } = makeSut()
    const emailInput = sut.getByTestId('email')
    const email = faker.internet.email()
    fireEvent.input(emailInput, { target: { value: email } })
    expect(validationSpy.inputName).toBe('email')
    expect(validationSpy.inputValue).toBe(email)
  })

  test('should show email error if Validation fails', () => {
    const { sut, validationSpy } = makeSut()
    const errorMsg = faker.random.words()
    validationSpy.errorMessage = errorMsg
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const errorMessage = sut.getByTestId('emailError')
    expect(errorMessage.textContent).toBe(errorMsg)
  })
})
