export default class hpmePage {
    selector = {
        url: 'https://webdriveruniversity.com/Contact-Us/contactus.html',
        firstName : '[name="first_name"]',
        lastName : '[name="last_name"]',
        email : '[name="email"]',
        textMsg : '[name="message"]',
        submitBtn : '[type="submit"]',
        successH1 : 'h1'
    }

    //methods
    visitUrl() {
        cy.visit(this.selector.url)
    }

    loginPage(fn,ln,em,txt){
        cy.get(this.selector.firstName).type(fn)
        cy.get(this.selector.lastName).type(ln)
        cy.get(this.selector.email).type(em)
        cy.get(this.selector.textMsg).type(txt)
        cy.get(this.selector.submitBtn).click()

    }

    positiveValidation(){
        cy.get(this.selector.successH1).should('have.text', 'Thank You for your Message!')
    }

}