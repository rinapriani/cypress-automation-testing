/// <reference types ='cypress' />

describe('My First Test', () => {
    it('visit ', () => {
        cy.visit('https://invesnow:invesnow2017@test-app.investamart.net')

    }); 
    
    it('Should try to login invesnow website', () => {
        cy.fixture("invesnow/login-invesnow").then(user => {
            const email =user.email
            const password = user.password

            cy.get('#email').type(email)
            cy.get('#password').type(password)

            cy.get("[type = 'submit']").click()

            cy.url().should('include', '/portfolio')

        });
    });
})

