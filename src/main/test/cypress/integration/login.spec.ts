import faker from 'faker'

const baseUrl: string = Cypress.config('baseUrl')

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
  it('should present error if wrong credencials', () => {
    cy.getByTestId('email').type(faker.internet.email())
    cy.getByTestId('password').type(faker.random.alphaNumeric(6))
    cy.getByTestId('submit-button').click()
    cy.getByTestId('status-wrap')
      .getByTestId('spinner')
      .should('exist')
      .getByTestId('main-error')
      .should('not.exist')
      .getByTestId('spinner')
      .should('not.exist')
      .getByTestId('main-error')
      .should('exist')
      .should('contain.text', 'Credenciais inválidas')
    cy.url().should('eq', `${baseUrl}/login`)
  })
  it('should present save accessToken if valid credencials', () => {
    cy.getByTestId('email').type('mango@gmail.com')
    cy.getByTestId('password').type('12345')
    cy.getByTestId('submit-button').click()
    cy.getByTestId('status-wrap')
      .getByTestId('spinner')
      .should('exist')
      .getByTestId('main-error')
      .should('not.exist')
    cy.url().should('eq', `${baseUrl}/`)
    cy.window().then(window =>
      assert.isOk(window.localStorage.getItem('accessToken'))
    )
  })
})
