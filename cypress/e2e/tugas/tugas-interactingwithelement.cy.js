/// <reference types ="cypress" />

describe('Working with input', () => {
    it('visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','login.html')
    });
    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });
    it('Should fill password', () => {
        cy.get('input[name = "user_password"]').clear()
        cy.get('input[name = "user_password"]').type('password')
    });

    it('Should checkbox keep me sign in up', () => {
        cy.get('[type ="checkbox"]').check()
    });

    it('Should click sign in button', () => {
        //cy.get('.btn').click() // Click on button
        //cy.focused().click() // Click on el with focus
        cy.contains('Sign in').click() // Click on first el containing 'Welcome'
    });
});