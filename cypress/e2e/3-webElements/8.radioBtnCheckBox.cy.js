///<reference types='cypress' />
describe('verify radip button and check box',function(){
    it.skip('verify radio button -webdriver uni',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="blue"]').check().should('be.checked')
        cy.get('[value="purple"]').check().should('be.checked')
        cy.get('[value="blue"]').should('not.be.checked')
        
        //cy.get('input[value="orange"]').click().should('be.checked')
        cy.get('[id="radio-buttons"]').find('[value="orange"]').click().should('be.checked')

        cy.get('[value="purple"]').should('not.be.checked')

    })

    it.skip('verify radio button letkodeit',function(){
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#bmwradio').should('not.be.checked')
        cy.get('#bmwradio').click().should('be.checked')
        //cy.get('#bmwradio').uncheck().should('not.be.checked') //will not work
        cy.get('#benzradio').click().should('be.checked')
        cy.get('#bmwradio').should('not.be.checked')
    })

    it('verify check box -webdriver uni',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="option-3"]').should('be.checked')
        cy.get('[value="option-3"]').uncheck().should('not.be.checked')
        cy.get('[value="option-2"]').click().should('be.checked')
        cy.get('[value="option-2"]').click().should('not.be.checked')


    })

})