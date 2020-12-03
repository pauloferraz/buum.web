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
})
