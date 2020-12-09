describe('Signup', () => {
  beforeEach(() => {
    cy.visit('signup')
  })
  it('should load correct values', () => {
    cy.getByTestId('submit-button').should('be.disabled')
    cy.getByTestId('name').should('be.empty')
    cy.getByTestId('email').should('be.empty')
    cy.getByTestId('password').should('be.empty')
    cy.getByTestId('passwordConfirmation').should('be.empty')
    cy.getByTestId('status-wrap').should('not.have.descendants')
  })
})
