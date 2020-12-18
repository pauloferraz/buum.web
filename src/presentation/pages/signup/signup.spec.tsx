import React from 'react'
import { fireEvent, render, waitFor, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { ThemeProvider } from 'styled-components'
import faker from 'faker'
import light from '@/presentation/theme/light'
import Signup from '.'
import { AddAccountSpy, ValidationStub, Helper } from '@/presentation/test'
import { EmailInUseError } from '@/domain/errors'
import { ApiContext } from '@/presentation/contexts'
import { AccountModel } from '@/domain/models'

type SutTypes = {
  validationStub: ValidationStub
  addAccountSpy: AddAccountSpy
  setCurrentAccountMock: (account: AccountModel) => void
}

const history = createMemoryHistory({ initialEntries: ['/signup'] })
const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub()
  const addAccountSpy = new AddAccountSpy()
  const setCurrentAccountMock = jest.fn()
  render(
    <ApiContext.Provider value={{ setCurrentAccount: setCurrentAccountMock }}>
      <Router history={history}>
        <ThemeProvider theme={light}>
          <Signup validation={validationStub} addAccount={addAccountSpy} />
        </ThemeProvider>
      </Router>
    </ApiContext.Provider>
  )
  return { validationStub, addAccountSpy, setCurrentAccountMock }
}

const simulateValidSubmit = async (
  name = faker.random.words(),
  email = faker.internet.email(),
  password = faker.internet.password(),
  passwordConfirmation = faker.internet.password()
): Promise<void> => {
  Helper.populateField('name', name)
  Helper.populateField('email', email)
  Helper.populateField('password', password)
  Helper.populateField('passwordConfirmation', passwordConfirmation)
  const form = screen.getByTestId('signup-form')
  fireEvent.submit(form)
  await waitFor(() => form)
}

describe('Signup component', () => {
  test('should start with initial state', () => {
    makeSut()
    const statusWrap = screen.getByTestId('status-wrap')
    expect(statusWrap.childElementCount).toBe(0)

    /* const submitButton = screen.getByTestId('submit-button') as HTMLButtonElement
    expect(submitButton.disabled).toBeTruthy() */
  })

  test('should show name valid name state if Validation succeeds', () => {
    const { validationStub } = makeSut()
    validationStub.errorMessage = null
    Helper.populateField('name', faker.random.word())
    const errorMessage = screen.getByTestId('nameError')
    expect(errorMessage.textContent.length).toBe(0)
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
    Helper.populateField('name', faker.name.findName())
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

  test('should call AddAccount with correct values', async () => {
    const { validationStub, addAccountSpy } = makeSut()
    validationStub.errorMessage = null
    const name = faker.name.findName()
    const email = faker.internet.email()
    const password = faker.internet.password()
    const passwordConfirmation = faker.internet.password()
    await simulateValidSubmit(name, email, password, passwordConfirmation)
    expect(addAccountSpy.params).toEqual({
      name,
      email,
      password,
      passwordConfirmation
    })
  })

  test('should call AddAccount only once', async () => {
    const { addAccountSpy } = makeSut()
    await simulateValidSubmit()
    await simulateValidSubmit()
    expect(addAccountSpy.callsCount).toBe(1)
  })

  test('should present error if AddAccount fails', async () => {
    const { addAccountSpy } = makeSut()
    const error = new EmailInUseError()
    jest.spyOn(addAccountSpy, 'add').mockRejectedValueOnce(error)
    await simulateValidSubmit()
    const statusWrap = screen.getByTestId('status-wrap')
    const mainError = screen.getByTestId('main-error')
    expect(mainError.textContent).toBe(error.message)
    expect(statusWrap.childElementCount).toBe(1)
  })

  test('should call updateCurrentAccount on success', async () => {
    const { addAccountSpy, setCurrentAccountMock } = makeSut()
    await simulateValidSubmit()
    expect(setCurrentAccountMock).toHaveBeenCalledWith(addAccountSpy.account)
    expect(history.length).toBe(1)
    expect(history.location.pathname).toBe('/')
  })

  test('should go to login page', () => {
    makeSut()
    const register = screen.getByTestId('login')
    fireEvent.click(register)
    expect(history.length).toBe(1)
    expect(history.location.pathname).toBe('/login')
  })
})
