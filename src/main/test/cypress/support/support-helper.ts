import faker from 'faker'

export const simulateValidLogin = (): void => {
  cy.getByTestId('email').type(faker.internet.email())
  cy.getByTestId('password').type(faker.random.alphaNumeric(6))
  cy.getByTestId('submit-button').click()
}

export const simulateValidSignup = (): void => {
  const pass = faker.random.alphaNumeric(6)
  cy.getByTestId('name').type(faker.random.words())
  cy.getByTestId('email').type(faker.internet.email())
  cy.getByTestId('password').type(pass)
  cy.getByTestId('passwordConfirmation').type(pass)
  cy.getByTestId('submit-button').click()
}
