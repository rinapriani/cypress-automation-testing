Cypress.Commands.add('invesnow', (email, password) => {
    cy.get('#email').clear()
    cy.get('#email').type(email)
    
    cy.get('#password').clear()
    cy.get('#password').type(password)

    cy.get("[type = 'submit']").click()

    cy.url().should('include', '/portfolio')
})