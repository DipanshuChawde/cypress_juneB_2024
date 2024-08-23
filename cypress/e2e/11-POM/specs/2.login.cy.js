///<reference types = 'cypress' />
import homeP from "../pages/2.loginpage"
import userD from "../../../fixtures/contactA3.json"

describe('verify contact us page using pom pages', () => {
    let hp = new homeP()
    it('contact us page', () => {
        hp.visitUrl()
        hp.loginPage('dipanshu', 'chawde', 'dipanshu@gmail.com', 'i am learning pom')
        hp.loginSuccess()

    })

    it('contact us page', () => {
        hp.visitUrl()
        hp.loginPage('dipanshu', 'chawde', 'dipanshugmail.com', 'i am learning pom')
        hp.loginError()

    })
    userD.forEach((el, indx) => {
        it(`contact us page using fixture payload for user ${el.firstName}`, () => {
            hp.visitUrl()
            hp.loginPage(el.firstName, el.lastName, el.email, el.msg)
            hp.loginSuccess()

        })
    })
})
