import faker from 'faker'
import { simulateValidLogin } from '../support/support-helper'

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
    cy.intercept('POST', '/login', {
      statusCode: 401
    })
    simulateValidLogin()
    cy.getByTestId('status-wrap')
      .getByTestId('spinner')
      .should('not.exist')
      .getByTestId('main-error')
      .should('exist')
      .should('contain.text', 'Credenciais inválidas')
    cy.url().should('eq', `${baseUrl}/login`)
  })

  it('should present save accessToken if valid credencials', () => {
    cy.intercept('POST', '/login', {
      statusCode: 200
    })
    simulateValidLogin()
    cy.url().should('eq', `${baseUrl}/`)
    cy.window().then(window =>
      assert.isOk(window.localStorage.getItem('accessToken'))
    )
  })

  it('should present UnexpectedError on default error cases', () => {
    cy.intercept('POST', '/login', {
      statusCode: 400
    })
    simulateValidLogin()
    cy.getByTestId('status-wrap')
      .getByTestId('spinner')
      .should('not.exist')
      .getByTestId('main-error')
      .should('exist')
      .should('contain.text', 'Algo de errado aconteceu. Tente novamente em breve.')
    cy.url().should('eq', `${baseUrl}/login`)
  })
})
