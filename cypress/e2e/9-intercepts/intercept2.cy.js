/// <reference types ='cypress' />
import interData from "../../fixtures/interc2.json"
describe('verify intercept concept in cypress', function () {
    it('verify getComment', function () {
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments/1',
            method: 'GET'
        }, {
            body : interData
            // {
            //     "postId": 1,
            //     "id": 1,
            //     "name": "dipanshu",
            //     "email": "dipanshu@gmaol.com",
            //     "body": "i am learning cypress"
            // }
        }).as('getComment')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then((res) => {
            cy.log(res)
            expect(res.response.body.name).to.eq(interData.name)

        })
        cy.get('[class="network-comment"]').should('contain', interData.body)
    })

    it('verify postComment', function () {
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({
            url:'https://jsonplaceholder.cypress.io/comments',
            method : 'POST'
            
        // },{
        //     body:
        //     {
        //         "name": "Rucha",
        //         "email": "rucha@cypress.io",
        //         "body": "i am learning python",
        //         "id": 501
        //       }
            
        }).as('postComment')

        cy.contains('Post Comment').click()
        cy.wait('@postComment').then((res2)=>{
            cy.log(res2)
            expect(res2.response.statusCode).to.eq(201)
        })

        cy.get('[class="network-post-comment"]').should('have.text','POST successful!')
    })

    it('verify updateComment', function () {
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments/1',
            method:'PUT'
        }).as('updateComment')

        cy.contains('Update Comment').click()
        cy.wait('@updateComment').then((res)=>{
            cy.log(res)
            expect(res.response.body.name).to.eq("Using PUT in cy.intercept()")
        })

    })

})