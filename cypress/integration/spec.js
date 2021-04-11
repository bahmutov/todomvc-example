/// <reference types="cypress" />
it('works', () => {
  cy.visit('/')
  cy.get('.new-todo').type('write code{enter}')
})
