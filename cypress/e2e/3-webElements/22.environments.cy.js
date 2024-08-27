///<reference types='cypress' />
describe('varify environments in cypress', function () {
    it('varify environments in cypress ', function () {
        // cy.visit('https://practice.automationtesting.in/my-account/')
        // cy.get('[id="username"]').type('productionTesting@gmail.com')
        // cy.get('[id="password"]').type('dipanshu@1')
        // cy.get('[name="login"]').click()
        // let email = 'productionTesting@gmail.com'
        // let uemai = email.split('@')
        // cy.log(uemai[0])
        // cy.get('strong').should('have.text', uemai[0])

        cy.visit('/my-account/')
        cy.get('[id="username"]').type(Cypress.env('uid'))
        cy.get('[id="password"]').type(Cypress.env('pw'))
        cy.get('[name="login"]').click()
        let email = Cypress.env('uid')
        let uid1 = email.split('@')
        cy.get('strong').should('have.text', uid1[0])

    })
})