///<reference types="cypress" />
import homep from "../pages/1.logpage"

describe('verify contact us page', function () {
    let hp = new homep()
    it('verify contact us page for valid data', function () {
        hp.visitUrl()

        hp.loginPage('dipanshu', 'chawde', 'dipanshu@gmail.com', 'i m learning POM')

        hp.positiveValidation()


    })
})