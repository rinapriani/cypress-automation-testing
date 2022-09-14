/// <reference types ="cypress" />

describe('Working with input', () => {
    it('visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','login.html')
    });

    it('Should try to login', () => {
        cy.fixture("test-login").then(user => {
            const username =user.username
            const password = user.password

            //penambahan command.js
            cy.login(username,password)

            cy.url().should('include', '/bank/account-summary.html')

            cy.get('#pay_bills_tab').click()

        });
    });

    it('Should complete payment', () => {
        cy.fixture("bank-bills").then(complete => {
            const payee = complete.payee
            const account = complete.account
            const amount = complete.amount
            const date = complete.date
            const description = complete.description

            cy.bills(payee,account,amount,date,description)

        })
    });
    
});