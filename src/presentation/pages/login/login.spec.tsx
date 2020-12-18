import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import faker from 'faker'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import light from '@/presentation/theme/light'
import Login from '.'
import { ValidationStub, AuthenticationSpy, Helper } from '@/presentation/test'
import { InvalidCredencialError } from '@/domain/errors'
import { ApiContext } from '@/presentation/contexts'
import { AccountModel } from '@/domain/models'

type SutTypes = {
  validationStub: ValidationStub
  authenticationSpy: AuthenticationSpy
  setCurrentAccountMock: (account: AccountModel) => void
}

const history = createMemoryHistory({ initialEntries: ['/login'] })
const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub()
  const authenticationSpy = new AuthenticationSpy()
  const setCurrentAccountMock = jest.fn()
  render(
    <ApiContext.Provider value={{ setCurrentAccount: setCurrentAccountMock }}>
      <Router history={history}>
        <ThemeProvider theme={light}>
          <Login validation={validationStub} authentication={authenticationSpy} />
        </ThemeProvider>
      </Router>
    </ApiContext.Provider>
  )
  return { validationStub, authenticationSpy, setCurrentAccountMock }
}

const simulateValidSubmit = async (
  email = faker.internet.email(),
  password = faker.internet.password()
): Promise<void> => {
  Helper.populateField('email', email)
  Helper.populateField('password', password)
  const form = screen.getByTestId('login-form')
  fireEvent.submit(form)
  await waitFor(() => form)
}

describe('Login Component', () => {
  test('should start with initial state', () => {
    makeSut()
    const statusWrap = screen.getByTestId('status-wrap')
    expect(statusWrap.childElementCount).toBe(0)

    /* const submitButton = screen.getByTestId('submit-button') as HTMLButtonElement
    expect(submitButton.disabled).toBeTruthy() */
  })

  test('should show email valid password state if Validation succeeds', () => {
    const { validationStub } = makeSut()
    validationStub.errorMessage = null
    Helper.populateField('email', faker.internet.email())
    const errorMessage = screen.getByTestId('emailError')
    expect(errorMessage.textContent.length).toBe(0)
  })

  test('should enable submit button if form is valid', () => {
    const { validationStub } = makeSut()
    validationStub.errorMessage = null
    Helper.populateField('email', faker.internet.email())
    Helper.populateField('password', faker.internet.password())
    const submitBtn = screen.getByTestId('submit-button') as HTMLButtonElement
    expect(submitBtn.disabled).toBe(false)
  })

  test('should enable spinner on form submit', async () => {
    const { validationStub } = makeSut()
    validationStub.errorMessage = null
    await simulateValidSubmit()
    const spinner = screen.getByTestId('status-wrap')
    expect(spinner).toBeTruthy()
  })

  test('should call Authentication with correct values', async () => {
    const { validationStub, authenticationSpy } = makeSut()
    validationStub.errorMessage = null
    const email = faker.internet.email()
    const password = faker.internet.password()
    await simulateValidSubmit(email, password)
    expect(authenticationSpy.params).toEqual({
      email,
      password
    })
  })

  test('should call Authentication only once', async () => {
    const { authenticationSpy } = makeSut()
    await simulateValidSubmit()
    await simulateValidSubmit()
    expect(authenticationSpy.callsCount).toBe(1)
  })

  test('should present error if Authentication fails', async () => {
    const { authenticationSpy } = makeSut()
    const error = new InvalidCredencialError()
    jest.spyOn(authenticationSpy, 'auth').mockReturnValueOnce(Promise.reject(error))
    await simulateValidSubmit()
    const statusWrap = screen.getByTestId('status-wrap')
    const mainError = screen.getByTestId('main-error')
    expect(mainError.textContent).toBe(error.message)
    expect(statusWrap.childElementCount).toBe(1)
  })

  test('should call updateCurrentAccount on success', async () => {
    const { authenticationSpy, setCurrentAccountMock } = makeSut()
    await simulateValidSubmit()
    expect(setCurrentAccountMock).toHaveBeenCalledWith(authenticationSpy.account)
    expect(history.length).toBe(1)
    expect(history.location.pathname).toBe('/')
  })

  test('should go to signup page', () => {
    makeSut()
    const register = screen.getByTestId('signup')
    fireEvent.click(register)
    expect(history.length).toBe(2)
    expect(history.location.pathname).toBe('/signup')
  })
})
