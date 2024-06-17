///<reference types="cypress" />

describe('verify contact us page', function () {
    it('verify contact us page for valid data', function () {
        //AAA
        //Arrengements
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        //Actions
        cy.get('[name="first_name"]').type('Dipanshu')
        cy.get('[name="last_name"]').type('Chawde')
        cy.get('[name="email"]').type('dipanshu@gmail.com')
        cy.get('[name="message"]').type('i am learning cypress')
        cy.get('[type="submit"]').click()

        //Assertions
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })

    it('verify contact us page for invalid email',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('dipanshu')
        cy.get('[name="last_name"]').type('chawde')
        cy.get('[name="email"]').type('dipanshu')
        cy.get('[name="message"]').type('hello')
        cy.get('[type="submit"]').click()

        cy.contains('Error: Invalid email address').should('be.visible')
    })
})
