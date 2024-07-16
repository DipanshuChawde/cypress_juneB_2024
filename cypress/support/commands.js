// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// -- This is a parent command --

// Cypress.Commands.add('getIFrameBody',(str)=>{
//     return cy.get(str).its('0.contentDocument.body').then(cy.wrap)
//     })
Cypress.Commands.add('contactUs', (fn,ln,em,msg,css) => { 
    cy.get('[name="first_name"]').type(fn)
    cy.get('[name="last_name"]').type(ln)
    cy.get('[name="email"]').type(em)
    cy.get('[name="message"]').type(msg)
    cy.get(css).click()
})


Cypress.Commands.add('OHRMLogin',(un,pw)=>{
    cy.get('[name="username"]').type(un)
    cy.get('[name="password"]').type(pw)

    cy.get('[type="submit"]').click()
})

Cypress.Commands.add('getIFrameBody', (css) => { 
    return cy.get(css).its('0.contentDocument.body').then(cy.wrap)
 })
