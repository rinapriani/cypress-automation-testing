// <reference types ="cypress" />

describe('Login with fixture data', function() {
    it('Should try to login', () => {
        cy.visit('https://www.saucedemo.com/', {timeout : 10000})
        

        cy.fixture("saucedemo").then(user => {
            const username = user.username
            const password = user.password
            
            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)

            cy.get('#password').clear()
            cy.get('#password').type(password)

            cy.get('#login-button').click()

            cy.url().should('include', '/inventory.html')

            //add to cart sauce labs backpack
            cy.contains('Sauce Labs Backpack')
            cy.get('#add-to-cart-sauce-labs-backpack').click()

             //add to cart sauce labs fleece jacket
             cy.contains('Sauce Labs Fleece Jacket')
             cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()

             //checkout cart
             cy.get('#shopping_cart_container').click()
             cy.url().should('include','/cart.html')
             cy.get('#checkout').click()

             //input name, dan postal code
             cy.fixture("saucedemo2").then(address => {
                const firstName = address.firstName
                const lastName = address.lastName
                const postalCode = address.postalCode

                cy.get('#first-name').clear()
                cy.get('#first-name').type(firstName)
    
                cy.get('#last-name').clear()
                cy.get('#last-name').type(lastName)

                cy.get('#postal-code').clear()
                cy.get('#postal-code').type(postalCode)
    
                cy.get('#continue').click()
             })
        })
    });
});