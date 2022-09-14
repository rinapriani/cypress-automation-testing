/// <reference types ="cypress" />

describe('Login with fixture data', function() {
    it('Should try to login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')

        cy.fixture("test-login").then(user => {
            const username = user.username
            const password = user.password
            
            cy.get('#user_login').clear()
            cy.get('#user_login').type('rinapriani')

            cy.get('#user_password').clear()
            cy.get('#user_password').type('rinapriani123')

            cy.contains('Sign in').click()

            cy.get('.alert-error').should('contain.text','Login and/or password are wrong.')
        })
    });
});