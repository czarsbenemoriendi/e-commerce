describe('User', () => {
  it('can navigate on main page', () => {
    cy.visit('/')
    cy.getId('top-bar').should('exist')
    cy.getId('right-nav').getClass('nav-link').last().click()
    cy.getId('cart').should('exist')
  })

  it('can see error page and back to main page', () => {
    cy.visit('/s', {'failOnStatusCode': false})
    cy.getId('error-message').should('exist')
  })
})
