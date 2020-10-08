import React from 'react'
import faker from 'faker'
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'
import Login from '.'
import { ValidationStub, AuthenticationSpy } from '@/presentation/test'

type SutTypes = {
  sut: RenderResult
  validationStub: ValidationStub
  authenticationSpy: AuthenticationSpy
}

const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub()
  const authenticationSpy = new AuthenticationSpy()
  const sut = render(
    <ThemeProvider theme={light}>
      <Login validation={validationStub} authentication={authenticationSpy}/>
    </ThemeProvider>
  )
  return { sut, validationStub, authenticationSpy }
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

  test('should show email valid password state if Validation succeeds', () => {
    const { sut, validationStub } = makeSut()
    validationStub.errorMessage = null
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const errorMessage = sut.getByTestId('emailError')
    expect(errorMessage.textContent.length).toBe(0)
  })

  test('should enable submit button if form is valid', () => {
    const { sut, validationStub } = makeSut()
    validationStub.errorMessage = null
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } })
    const submitBtn = sut.getByTestId('submit-button') as HTMLButtonElement
    expect(submitBtn.disabled).toBe(false)
  })

  test('should enable spinner on form submit', () => {
    const { sut, validationStub } = makeSut()
    validationStub.errorMessage = null
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } })
    const submitBtn = sut.getByTestId('submit-button')
    fireEvent.click(submitBtn)
    const spinner = sut.getByTestId('status-wrap')
    expect(spinner).toBeTruthy()
  })

  test('should call Authentication with correct values', () => {
    const { sut, validationStub, authenticationSpy } = makeSut()
    validationStub.errorMessage = null
    const emailInput = sut.getByTestId('email')
    const email = faker.internet.email()
    fireEvent.input(emailInput, { target: { value: email } })
    const passwordInput = sut.getByTestId('password')
    const password = faker.internet.password()
    fireEvent.input(passwordInput, { target: { value: password } })
    const submitBtn = sut.getByTestId('submit-button')
    fireEvent.click(submitBtn)
    expect(authenticationSpy.params).toEqual({
      email,
      password
    })
  })
})
