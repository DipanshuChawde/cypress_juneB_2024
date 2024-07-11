///<reference types='cypress' />
//js alart ,we can not inspect
//window:alart()
//window:confirm()
//window:prompt()

describe("handeling js alarts",function(){

    it('handle window:alart',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //handle alart
        cy.on('window:alart',function(text){
            expect(text).to.eq('I am a JS Alert')
            return true
        })

        //trigger event
        cy.get('[onclick="jsAlert()"]').click()
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    it('handle window:confirm',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.on('window:confirm',function(text){
            expect(text).to.eq('I am a JS Confirm')
            return true
        })

        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text','You clicked: Ok')

        
    })

    it('handle window:confirm',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.on('window:confirm',function(text){
            expect(text).to.eq('I am a JS Confirm')
            return false
        })

        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text','You clicked: Cancel')

        
    })


    it.only('handeling window:prompt',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('i am learning cypress')
            return true
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text','You entered: i am learning cypress')
        
    })

    it.only('handeling window:prompt',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('null')
            return false
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text','You entered: null')
        
    })
    
})