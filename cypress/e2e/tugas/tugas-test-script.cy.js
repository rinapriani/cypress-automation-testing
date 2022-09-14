describe ('My First Test',() => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        //should be on a new url which include '/command.actions'
        cy.url().should('include', '/commands/actions')

        //Get an input, type into it and verify that the value has been updated
        cy.get('.action-email').type('rina.apriani498@gmail.com')
        .should('have.value','rina.apriani498@gmail.com')


        
    })
})