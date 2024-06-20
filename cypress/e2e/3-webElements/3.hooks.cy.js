//hooks in cypress
//before , beforeEach, afterEach , after
///<reference types="cypress" />

before(function(){
    cy.log("i will execute first ")
})

beforeEach(function(){
    cy.log('i will execute before each test case')
})

it('test case one',function(){
    cy.log('i am test case one TC1')
})
it('test case two',function(){
    cy.log('i am test case two TC2')
})
afterEach(function(){
    cy.log('i will execute after each test case ')
})
after(function(){
    cy.log('i will execute last ')
})
