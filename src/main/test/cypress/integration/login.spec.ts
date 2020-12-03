import faker from 'faker'

describe('Login', () => {
  beforeEach(() => {
    cy.visit('login')
  })
  it('should load correct values', () => {
    cy.getByTestId('submit-button').should('be.disabled')
    cy.getByTestId('email').should('be.empty')
    cy.getByTestId('password').should('be.empty')
    cy.getByTestId('status-wrap').should('not.have.descendants')
  })
  it('should present error state if form is invalid', () => {
    cy.getByTestId('email').type(faker.random.word())
    cy.getByTestId('password').type(faker.random.alphaNumeric(3))
    cy.getByTestId('status-wrap').should('not.have.descendants')
    cy.getByTestId('submit-button').should('be.disabled')
  })
  it('should present valid state if form is valid', () => {
    cy.getByTestId('email').type(faker.internet.email())
    cy.getByTestId('password').type(faker.random.alphaNumeric(6))
    cy.getByTestId('status-wrap').should('not.have.descendants')
    cy.getByTestId('submit-button').should('not.be.disabled')
  })
})
