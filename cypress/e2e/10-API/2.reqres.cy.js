///<reference types="cypress" />
import ud1 from "../../fixtures/api1-reqres.json"
import ud2 from "../../fixtures/api1.1-reqres.json"

describe('verify API testing in cypress', function () {
    it('reqres-GET request (retrive)', function () {
        cy.request({
            url : "https://reqres.in/api/users?page=2",
            method : 'GET'
        }).then((res1)=>{
            cy.log(res1)
            expect(res1.body.data[0].first_name).to.eq("Michael")
            expect(res1.status).to.eq(200)
        })
    })

    it('reqres-POST request (create)', function () {
        cy.request({
            url:"https://reqres.in/api/users",
            method : "POST",
            body:ud1
            // {
            //     "name": "Dipanshu",
            //     "job": "leader"
            // }
        }).then((res2)=>{
            cy.log(res2)
            expect(res2.body.name).to.eq(ud1.name)
            //expect(res2.body.name).to.eq('Dipanshu')
            expect(res2.status).to.eq(201)
        })
    })

    ud2.forEach((el)=>{
    it(`reqres-POST request (create) ${el.name}`, function () {
        cy.request({
            url:"https://reqres.in/api/users",
            method : "POST",
            body:el
            // {
            //     "name": "Dipanshu",
            //     "job": "leader"
            // }
        }).then((res2)=>{
            cy.log(res2)
            expect(res2.body.name).to.eq(el.name)
            //expect(res2.body.name).to.eq('Dipanshu')
            expect(res2.status).to.eq(201)
        })
    })
})


it('reqres-PUT request (Update) ', function () {
    cy.request({
        url:"https://reqres.in/api/users/2",
        method:"PUT",
        body:{
            "name": "Tanish",
            "job": "zion resident"
        }
    }).then((res3)=>{
        cy.log(res3)
        expect(res3.body.name).to.eq("Tanish")
        expect(res3.status).to.eq(200)

    })
})

it('reqres-DELETE request (Delete) ', function () {
    cy.request({
        url:"https://reqres.in/api/users/2",
        method:"DELETE"
    }).then((res4)=>{
        cy.log(res4)
        expect(res4.body).to.eq("")
        expect(res4.status).to.eq(204)
        expect(res4.statusText).to.eq("No Content")
    })
})

})