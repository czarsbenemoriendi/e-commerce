describe('User', () => {
  it('can navigate on main page', () => {
    cy.visit('/')

    cy.getClass('bottom-button').each(($button) => {
      cy.wrap($button)
        .invoke('attr', 'href')
        .then((href) => {
          cy.wrap($button).click()
          cy.location().should((loc) => {
            expect(loc.pathname).to.eq(href)
          })
        })
    })
    cy.getId('dashBoard-button').click()
    cy.url().should('eq', Cypress.config('baseUrl'))

    cy.getClass('featured-meal').first().click()
    cy.getId('meal-page').should('exist')
  })

  it.skip('can see error page and back to main page', () => {
    cy.visit('/s', { failOnStatusCode: false })
    cy.getId('error-message').click()
  })
})
