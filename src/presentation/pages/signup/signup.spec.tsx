import React from 'react'
import {
  cleanup,
  fireEvent,
  render,
  RenderResult,
  waitFor
} from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { ThemeProvider } from 'styled-components'
import faker from 'faker'
import light from '@/presentation/theme/light'
import Signup from '.'
import { AddAccountSpy, ValidationStub } from '@/presentation/test'
import { EmailInUseError } from '@/domain/errors'

type SutTypes = {
  sut: RenderResult
  validationStub: ValidationStub
  addAccountSpy: AddAccountSpy
}

const history = createMemoryHistory({ initialEntries: ['/signup'] })
const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub()
  const addAccountSpy = new AddAccountSpy()
  const sut = render(
    <Router history={history}>
      <ThemeProvider theme={light}>
        <Signup validation={validationStub} addAccount={addAccountSpy} />
      </ThemeProvider>
    </Router>
  )
  return { sut, validationStub, addAccountSpy }
}

const populateNameField = (sut: RenderResult, name = faker.random.word()): void => {
  const nameInput = sut.getByTestId('name')
  fireEvent.input(nameInput, { target: { value: name } })
}

const populateEmailField = (
  sut: RenderResult,
  email = faker.internet.email()
): void => {
  const emailInput = sut.getByTestId('email')
  fireEvent.input(emailInput, { target: { value: email } })
}

const populatePasswordField = (
  sut: RenderResult,
  password = faker.internet.password()
): void => {
  const passwordInput = sut.getByTestId('password')
  fireEvent.input(passwordInput, { target: { value: password } })
}

const populatePasswordConfirmationField = (
  sut: RenderResult,
  password = faker.internet.password()
): void => {
  const passwordInput = sut.getByTestId('passwordConfirmation')
  fireEvent.input(passwordInput, { target: { value: password } })
}

const simulateValidSubmit = async (
  sut: RenderResult,
  name = faker.random.words(),
  email = faker.internet.email(),
  password = faker.internet.password(),
  passwordConfirmation = faker.internet.password()
): Promise<void> => {
  populateNameField(sut, name)
  populateEmailField(sut, email)
  populatePasswordField(sut, password)
  populatePasswordConfirmationField(sut, passwordConfirmation)
  const form = sut.getByTestId('signup-form')
  fireEvent.submit(form)
  await waitFor(() => form)
}

describe('Signup component', () => {
  afterEach(cleanup)

  test('should start with initial state', () => {
    const { sut } = makeSut()
    const statusWrap = sut.getByTestId('status-wrap')
    expect(statusWrap.childElementCount).toBe(0)

    /* const submitButton = sut.getByTestId('submit-button') as HTMLButtonElement
    expect(submitButton.disabled).toBeTruthy() */
  })

  test('should show name valid name state if Validation succeeds', () => {
    const { sut, validationStub } = makeSut()
    validationStub.errorMessage = null
    populateNameField(sut)
    const errorMessage = sut.getByTestId('nameError')
    expect(errorMessage.textContent.length).toBe(0)
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
    populateNameField(sut)
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

  test('should call AddAccount with correct values', async () => {
    const { sut, validationStub, addAccountSpy } = makeSut()
    validationStub.errorMessage = null
    const name = faker.name.findName()
    const email = faker.internet.email()
    const password = faker.internet.password()
    const passwordConfirmation = faker.internet.password()
    await simulateValidSubmit(sut, name, email, password, passwordConfirmation)
    expect(addAccountSpy.params).toEqual({
      name,
      email,
      password,
      passwordConfirmation
    })
  })

  test('should call AddAccount only once', async () => {
    const { sut, addAccountSpy } = makeSut()
    await simulateValidSubmit(sut)
    await simulateValidSubmit(sut)
    expect(addAccountSpy.callsCount).toBe(1)
  })

  test('should present error if AddAccount fails', async () => {
    const { sut, addAccountSpy } = makeSut()
    const error = new EmailInUseError()
    jest.spyOn(addAccountSpy, 'add').mockRejectedValueOnce(error)
    await simulateValidSubmit(sut)
    const statusWrap = sut.getByTestId('status-wrap')
    const mainError = sut.getByTestId('main-error')
    expect(mainError.textContent).toBe(error.message)
    expect(statusWrap.childElementCount).toBe(1)
  })
})
