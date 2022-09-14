describe ('Browser action', () => {
    it('Should load correct url', () => {
        cy.visit('https://example.com/', {timeout : 10000})
    });
    it('should check correct url', () => {
        cy.url().should('include', 'example.com')
    });
    //check element visible
    it('should check for correct element on the page', () => {
        cy.get('h1').should('be.visible')
    });
});