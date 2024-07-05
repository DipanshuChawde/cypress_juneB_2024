///<reference types='cypress' />
describe('varify static and dynamic dropdown', function () {
    it('static dropdown ', function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('Python')

        cy.get('#dropdowm-menu-2').select('TestNG')
    })

    it('dynamic dropdown 1', function () {
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('a')
        cy.get('#myInputautocomplete-list > div').each(function (el) {
            //cy.log(el.text())
            if (el.text() == 'Almond') {
                cy.wrap(el).click()
                cy.get('#submit-button').click()
                cy.url().should('contain', 'Almond')
            }

        })
    })

    it('dynamic dropdown 1', function () {
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('ca')
        cy.get('#myInputautocomplete-list > div').each(function ($el) {
            if ($el.text() == 'Carrots') {
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('contain', 'Carrots')
            }
        })
    })

    it.only('dynamic dropdown 1', function () {
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('d')
        cy.get('#myInputautocomplete-list > div').each(function (el) {
            cy.wrap(el).invoke('text').then((text) => {
                if (text == 'Duck') {
                    cy.wrap(el).click()
                    cy.get('#submit-button').click()
                    cy.url().should('contain', 'Duck')

                }
            })

        })

    })
})
