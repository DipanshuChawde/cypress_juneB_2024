///<reference types="cypress" />
describe('cy.task()',function(){
    it('task example 1',function(){
        //cy.task(task-name, arguments).then()

        //cy.task(task-name)

        cy.task('print')
    })

    it('task example 2',function(){
        cy.task('myLog','hi how are you')
    })

    it('task example 3',function(){
        cy.task('addition',{a:2,b:3}).then((sum)=>{
            cy.log(sum)
        })
    })
})