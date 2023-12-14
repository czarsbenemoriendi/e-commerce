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

    cy.getId('sidebar-button').click()
    cy.getId('sidebar').should('exist')
  })

  it('can see error page and back to main page', () => {
    cy.visit('/s', { failOnStatusCode: false })
    cy.getId('error-message').should('exist')
  })
})
