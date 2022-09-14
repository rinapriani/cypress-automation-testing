// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type('username')
    
    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type('password')

    cy.get('[type ="checkbox"]').check()
    cy.contains('Sign in').click() // Click on first el containing 'Welcome'
})

Cypress.Commands.add('bills', (payee,account, amount, date, description) => {
    cy.get('#sp_payee').select('Bank of America').should('have.value', 'bofa')
    cy.get('#sp_account').select('Credit Card').should('have.value', '5')
    cy.get('input[name="amount"]').type('100')
    cy.get('input[name="date"]').type('2022-09-11')
    cy.contains('11').click()
    cy.get('#sp_description').type('This is my real credit card')

    cy.get('#pay_saved_payees').click()
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
