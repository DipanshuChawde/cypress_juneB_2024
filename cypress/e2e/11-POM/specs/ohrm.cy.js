///<reference types='cypress' />
import myPage from "../pages/ohrmPage"
import user from "../../../fixtures/ohrm.json"
describe("orange Hrm login",()=>{
    let mp=new myPage()
    user.forEach((el)=>{
    it('login',()=>{
        mp.loginPage(el.un,el.pw)
    })
})
})