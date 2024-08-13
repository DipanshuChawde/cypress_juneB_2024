///<reference types="cypress" />
describe('verify API testing in cypress-gorest', function () {
    const token='2e5d6a76c6c9f78db8669486a0bc356d8c5acaa7a0adac87796e8eaef1619f8e'
    it('gorest-GET request (retrive)', function () {
        
        cy.request({
            method : 'GET',
            url : '/public/v2/users', //set baseUrl : 'https://gorest.co.in/' in config.js
            headers : {
                Authorization : `Bearer ${token}`
            } 
        }).then((res)=>{
            //cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.body[0]).to.have.keys('id','name','email','gender','status')
        })
    })

    it('gorest -POST request',()=>{
        cy.request({
            method : 'POST',
            url : '/public/v2/users',
            body : {
                "name" : "Dipanshu chawde", 
                "gender" : "male", 
                "email" : `dipanshu${Math.floor(Math.random()*1000)}@15ce.com`, 
                "status" : "active"
            },
            headers : {
                Authorization : `Bearer ${token}`
            }
        }).then((resP)=>{
            cy.log(resP)
            //cy.log(resP.body.id)
            expect(resP.status).to.eq(201)
            expect(resP.body).to.have.keys('id','name','email','gender','status')
            //return resP.body.id
         })
        //.then((id)=>{

        // })

    })
})