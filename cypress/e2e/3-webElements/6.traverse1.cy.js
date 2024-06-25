///<reference types="cypress" />
describe('verify DOM element using various functions',function(){
    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })

    it('to get DOM element within element using .children()',function(){
        cy.get('.traversal-drinks-list').children().should('have.length',5)
    })

    it('to get DOM element within element using .first()',function(){
        cy.get('.traversal-drinks-list').children().first().should('have.text','Coffee')
    })

    it('to get DOM element within element using .last()',function(){
        cy.get('.traversal-drinks-list').children().last().should('have.text','Sugar')
    })

    it('to get DOM element within element using .eq(index)',function(){
        cy.get('.traversal-drinks-list').children().eq(1).should('have.text','Tea')
    })
    it('to get DOM element within element using .eq(index)',function(){
        cy.get('.traversal-drinks-list').children().eq(2).should('have.text','Milk')
    })

    it('to get DOM element within element using .prev()',function(){
       cy.get('#espresso').prev().should('have.text','Milk')
    })
    it('to get DOM element within element using .next()',function(){
       cy.get('#espresso').next().should('have.text','Sugar')
    })
})