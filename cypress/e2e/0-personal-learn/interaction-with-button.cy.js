/// <reference types = 'cypress'/>

describe('Browser Actions', () => {
    it('Should load book website', () => {
        cy.visit('https://books.toscrape.com/index.html', {timeout : 10000})
        cy.url().should('include', 'index.html')
    })

    it('Shoule click on Travel category', () =>{
        //nama elemennya 'a' dan mengandung kata Travel
        cy.get('a').contains('Travel').click()

        //redirect ke halaman travel dengan type h1
        cy.get('h1').should('have.text', 'Travel')
    })
})