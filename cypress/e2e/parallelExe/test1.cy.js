///<reference types="cypress" />

describe('verify contact us page', function () { //scenario
    it('verify contact us page for valid data', function () { //test case
        // AAA
        // Arrangements
        // Actions
        //Assertion

        // Arrangements
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        // Actions
        cy.get('input[name="first_name"]').type('dipanshu')
        cy.get('input[name="last_name"]').type('chawde')
        cy.get('input[name="email"]').type('dipanshu@gmail.com')
        cy.get('textarea[name="message"]').type('i am learning cypress')
        cy.screenshot()
        cy.get('[type="submit"]').screenshot('submitbtn')
        cy.get('[type="submit"]').click()

        //Assertion
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })


})