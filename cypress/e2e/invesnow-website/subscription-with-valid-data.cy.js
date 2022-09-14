/// <reference types ="cypress" />


describe('Working with input', () => {
    it('visit the website', () => {
        cy.visit('https://invesnow:invesnow2017@test-app.investamart.net')
    });

    it('Should try to login', () => {
        cy.fixture("/invesnow/login-invesnow").then(user => {
            const email =user.email
            const password = user.password

            //penambahan command invesnow.js
            cy.invesnow(email,password)

        });
    });

    it('Should choose reksadana', () => {
       
        cy.contains("Reksa Dana").should("have.attr", "href", "/reksadana").click()
        // cy.url().should('include', '/reksadana', { setTimeout : 10000})
        //cy.wait(15000)
        cy.intercept('http://test-app.investamart.net/reksadana').as('getReksadana')

        // once a request to get settings responds, 'cy.wait' will resolve
        cy.wait('@getReksadana')

        //input in search box
        cy.get('#filterInput').type('Semesta Dana Maxima')

        cy.contains("Semesta Dana Maxima").click()
        cy.url().should('include', '/subscription-product-detail/MG002MXCSEDAMA00/1772/Semesta%20Dana%20Maxima')
    });
});