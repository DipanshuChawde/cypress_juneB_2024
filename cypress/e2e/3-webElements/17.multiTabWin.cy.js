/// <reference types='cypress' />
describe('verify multitab and multi window',function(){
    it('verify multi tab href attribute',function(){
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#opentab').should('have.attr','href').and('include','/courses')
    })

    it('verify multi tab by removing target attribute',function(){
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('contain','/courses')
    })

    it('verify multi tab without removing target attribute',function(){
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#opentab').then(function(newTab){
            let url= newTab.prop('href')
            cy.visit(url)
            cy.url().should('contain','/courses')
        })
    
    })

    //rahul shetty
    it.only('verify multi tab by removing target attribute',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').first().invoke('removeAttr','target').click()
        cy.url().should('contain','qaclickacademy')
    })

    it.only('verify multi tab without removing target attribute',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').first().then(function(newTab){
            let url= newTab.prop('href')
            cy.visit(url)
            cy.url().should('contain','qaclickacademy')
        })
    
    })
})