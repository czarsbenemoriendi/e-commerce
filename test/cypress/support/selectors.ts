declare namespace Cypress {
  interface Chainable {
    getId(selector: string): Cypress.Chainable<JQuery<HTMLElement>>
    getClass(selector: string): Cypress.Chainable<JQuery<HTMLElement>>
    getUid(selector: string): Cypress.Chainable<JQuery<HTMLElement>>
  }
}

type CommandName = keyof Cypress.Chainable

const addSelectorCommand = (
  commandName: CommandName,
  dataAttribute: string,
) => {
  Cypress.Commands.add(
    commandName,
    {
      // @ts-expect-error - cypress types don't contain definitions for prevSubject
      prevSubject: 'optional',
    },
    (subject: JQuery<HTMLElement>, selector: string) => {
      let chainableElement: Cypress.Chainable<JQuery<HTMLElement>>

      if (subject) {
        chainableElement = cy.wrap(
          subject.find(`[${dataAttribute}="${selector}"]`),
          { log: false },
        )
      } else {
        chainableElement = cy.get(`[${dataAttribute}="${selector}"]`, {
          log: false,
        })
      }

      chainableElement.then(($el) => {
        Cypress.log({
          $el,
          displayName: commandName,
          message: selector,
          name: commandName,
          type: subject ? 'child' : 'parent',
        })
      })

      return chainableElement
    },
  )
}

addSelectorCommand('getId', 'data-id')
addSelectorCommand('getClass', 'data-class')
addSelectorCommand('getUid', 'data-uid')
