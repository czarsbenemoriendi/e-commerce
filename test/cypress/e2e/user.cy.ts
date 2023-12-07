describe('User', () => {
  it.only('can navigate on main page', () => {
    cy.visit('/')
    cy.getId('top-bar').should('exist')
    cy.getId('right-nav').getClass('nav-link').last().click()
    cy.getId('cart').should('exist')
    cy.getId('collapsed-menu').click()
    cy.getClass('collapsed-menu-category').first().click()
    cy.getId('category-name').should('exist')
  })

  it('can see error page and back to main page', () => {
    cy.visit('/s', {'failOnStatusCode': false})
    cy.getId('error-message').should('exist')
  })
})
