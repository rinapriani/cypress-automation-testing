/// <reference types ="cypress" />

const { get } = require("lodash");


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
        cy.url().should('include', '/reksadana', { setTimeout : 10000})
        //cy.wait(15000)
        //cy.intercept('http://test-app.investamart.net/reksadana').as('getReksadana')

        // once a request to get settings responds, 'cy.wait' will resolve
        //cy.wait('@getReksadana')

        //input in search box
        cy.get('#filterInput').type('Semesta Dana Maxima')

        cy.contains("Semesta Dana Maxima").click()
        cy.url().should('include', '/subscription-product-detail/MG002MXCSEDAMA00/1772/Semesta%20Dana%20Maxima')

        cy.contains('Beli').should("have.attr", "href", "/subscription/MG002MXCSEDAMA00").click()
        cy.url().should('include', '/subscription/MG002MXCSEDAMA00', {setTimeout : 10000})

        //input nominal subscription
        cy.get('#minimum-buy').type('100000')
        cy.contains("Lanjut").should("have.class", "btn mt-2 btn-tertiary py-2 btn-secondary btn-block").click()
        //cy.get('.btn mt-2 btn-tertiary py-2 btn-secondary btn-block').click()
    });
});