import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import faker from 'faker'
import { render, RenderResult, fireEvent, cleanup, waitFor } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'
import Login from '.'
import { ValidationStub, AuthenticationSpy, SaveAccessTokenMock } from '@/presentation/test'
import { InvalidCredencialError } from '@/domain/errors'

type SutTypes = {
  sut: RenderResult
  validationStub: ValidationStub
  authenticationSpy: AuthenticationSpy
  saveAccessTokenMock: SaveAccessTokenMock
}

const history = createMemoryHistory({ initialEntries: ['/login'] })
const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub()
  const authenticationSpy = new AuthenticationSpy()
  const saveAccessTokenMock = new SaveAccessTokenMock()
  const sut = render(
    <Router history={history}>
      <ThemeProvider theme={light}>
        <Login
          validation={validationStub}
          authentication={authenticationSpy}
          saveAccessToken={saveAccessTokenMock}
        />
      </ThemeProvider>
    </Router>
  )
  return { sut, validationStub, authenticationSpy, saveAccessTokenMock }
}

const simulateValidSubmit = async (
  sut: RenderResult,
  email = faker.internet.email(),
  password = faker.internet.password()
): Promise<void> => {
  populateEmailField(sut, email)
  populatePasswordField(sut, password)
  const form = sut.getByTestId('login-form')
  fireEvent.submit(form)
  await waitFor(() => form)
}

const populateEmailField = (sut: RenderResult, email = faker.internet.email()): void => {
  const emailInput = sut.getByTestId('email')
  fireEvent.input(emailInput, { target: { value: email } })
}

const populatePasswordField = (sut: RenderResult, password = faker.internet.password()): void => {
  const passwordInput = sut.getByTestId('password')
  fireEvent.input(passwordInput, { target: { value: password } })
}

describe('Login Component', () => {
  afterEach(cleanup)

  test('should start with initial state', () => {
    const { sut } = makeSut()
    const statusWrap = sut.getByTestId('status-wrap')
    expect(statusWrap.childElementCount).toBe(0)

    /* const submitButton = sut.getByTestId('submit-button') as HTMLButtonElement
    expect(submitButton.disabled).toBeTruthy() */
  })

  test('should show email valid password state if Validation succeeds', () => {
    const { sut, validationStub } = makeSut()
    validationStub.errorMessage = null
    populateEmailField(sut)
    const errorMessage = sut.getByTestId('emailError')
    expect(errorMessage.textContent.length).toBe(0)
  })

  test('should enable submit button if form is valid', () => {
    const { sut, validationStub } = makeSut()
    validationStub.errorMessage = null
    populateEmailField(sut)
    populatePasswordField(sut)
    const submitBtn = sut.getByTestId('submit-button') as HTMLButtonElement
    expect(submitBtn.disabled).toBe(false)
  })

  test('should enable spinner on form submit', async () => {
    const { sut, validationStub } = makeSut()
    validationStub.errorMessage = null
    await simulateValidSubmit(sut)
    const spinner = sut.getByTestId('status-wrap')
    expect(spinner).toBeTruthy()
  })

  test('should call Authentication with correct values', async () => {
    const { sut, validationStub, authenticationSpy } = makeSut()
    validationStub.errorMessage = null
    const email = faker.internet.email()
    const password = faker.internet.password()
    await simulateValidSubmit(sut, email, password)
    expect(authenticationSpy.params).toEqual({
      email,
      password
    })
  })

  test('should call Authentication only once', async () => {
    const { sut, authenticationSpy } = makeSut()
    await simulateValidSubmit(sut)
    await simulateValidSubmit(sut)
    expect(authenticationSpy.callsCount).toBe(1)
  })

  test('should present error if Authentication fails', async () => {
    const { sut, authenticationSpy } = makeSut()
    const error = new InvalidCredencialError()
    jest
      .spyOn(authenticationSpy, 'auth')
      .mockReturnValueOnce(Promise.reject(error))
    await simulateValidSubmit(sut)
    const statusWrap = sut.getByTestId('status-wrap')
    const mainError = sut.getByTestId('main-error')
    expect(mainError.textContent).toBe(error.message)
    expect(statusWrap.childElementCount).toBe(1)
  })

  test('should call SaveAccessToken on success', async () => {
    const { sut, authenticationSpy, saveAccessTokenMock } = makeSut()
    await simulateValidSubmit(sut)
    expect(saveAccessTokenMock.accessToken).toEqual(

      authenticationSpy.account.accessToken

    )
    expect(history.length).toBe(1)
    expect(history.location.pathname).toBe('/')
  })

  test('should go to signup page', () => {
    const { sut } = makeSut()
    const register = sut.getByTestId('signup')
    fireEvent.click(register)
    expect(history.length).toBe(2)
    expect(history.location.pathname).toBe('/signup')
  })
})
