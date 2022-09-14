describe('My First Test', () => {
    it('Visits The Kitchen Sink', () => {
      cy.visit('https://example.cypress.io')

      //mencari konten h1 dengan nama Kitchen Sink
      cy.get('h1').contains('Kitchen Sink')

      //click on element
      cy.contains('get').click()

      cy.url().should('include', '/commands/querying')
    })
  })