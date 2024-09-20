/// <reference types='cypress' />
describe('verify multitab and multi window', function () {

    it('verify contact us page for valid data', function () { //test case
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('input[name="first_name"]').type('dipanshu')
        cy.get('input[name="last_name"]').type('chawde')
        cy.get('input[name="email"]').type('dipanshu@gmail.com')
        cy.get('textarea[name="message"]').type('i am learning cypress')
        cy.screenshot()
        //cy.get('[type="submit"]').screenshot('submitbtn')
        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text', 'Thank You for your Message!')
        cy.screenshot()
    })

    it('verify multi tab by removing target attribute', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[class="logoClass"]').screenshot('logo')
        cy.wait(2000)
        cy.get('h1').screenshot('practice page')
    })


    it.only('verify contact us page for valid data', function () { //test case
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('input[name="first_name"]').type('dipanshu')
        cy.get('input[name="last_name"]').type('chawde')
        cy.get('input[name="email"]').type('dipanshu@gmail.com')
        cy.get('textarea[name="message"]').type('i am learning cypress')
        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text', 'Thank You for you')
    })
})
