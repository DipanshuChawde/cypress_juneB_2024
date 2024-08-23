///<reference types="cypress" />
import user1 from "../../fixtures/api1-reqres.json"
import user2 from "../../fixtures/api1.1-reqres.json"
// request CURD operation
// GET - retrive 
// POST - create 
// PUT - update 
// DELETE - delete
describe('verify API testing in cypress',function(){
    it.only('reqres-GET request (retrive)',function(){
        cy.request({
            url:'https://reqres.in/api/users?page=2',
            method : "GET"
        }).then((res)=>{
            cy.log(res)
            cy.log(res.body.data[0].first_name)
            expect(res.body.data[0].first_name).to.eq('Michael')
            expect(res.status).to.eq(200)
            expect(res.statusText).to.eq('OK')
        })
    })

    it('reqres POST request (create)',function(){
        let user={
                "name": "Rucha",
                "job": "manager"
            }
        cy.request({
            url:'https://reqres.in/api/users',
            method:'POST',
            body:user1
            //user
            // {
            //     "name": "dipanshu",
            //     "job": "leader"
            // }
        }).then((res)=>{
            cy.log(res)
            //expect(res.body.name).to.eq('dipanshu')
            //expect(res.body.name).to.eq(user.name)
            expect(res.body.name).to.eq(user1.name)

            expect(res.status).to.eq(201)
            expect(res.statusText).to.eq('Created')
        })
    })
 
    user2.forEach((el)=>{
    it(`reqres POST request2 (create) for ${el.name}`,function(){
        
        cy.request({
            url:'https://reqres.in/api/users',
            method:'POST',
            body:el
            
        }).then((res)=>{
            cy.log(res)
            //expect(res.body.name).to.eq('dipanshu')
            //expect(res.body.name).to.eq(user.name)
            //expect(res.body.name).to.eq(user1.name)
            expect(res.body.name).to.eq(el.name)

            expect(res.status).to.eq(201)
            expect(res.statusText).to.eq('Created')
        })
    })
})
})