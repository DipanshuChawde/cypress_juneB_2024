/// <reference types='cypress' />
describe('verify shadowdom in cypress',function(){
    it('type1',function(){
        cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
        cy.get('shadow-signup-form').shadow().find('[name="username"]').type('dipanshu')
        cy.get('shadow-signup-form').shadow().find('[name="email"]').type('dipanshu@gmail.com')
        cy.get('shadow-signup-form').shadow().find('[name="password"]').type('dipanshu26')
        cy.get('shadow-signup-form').shadow().find('[name="confirm_password"]').type('dipanshu26')
        cy.get('shadow-signup-form').shadow().find('[type="button"]').click()
    })

    it.only('type2',function(){
        cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
        cy.get('[name="username"]',{includeShadowDom:true}).type('dipanshu')
        cy.get('[type="email"]',{includeShadowDom:true}).first().type('dipanshu@gmail.com')
        cy.get('[name="password"]',{includeShadowDom:true}).type('dipanshu26')
        cy.get('[name="confirm_password"]',{includeShadowDom:true}).type('dipanshu26')
        cy.get('[type="button"]',{includeShadowDom:true}).click()
    })

    //type3 includeShadowDom:true in config.js file inside e2e
})