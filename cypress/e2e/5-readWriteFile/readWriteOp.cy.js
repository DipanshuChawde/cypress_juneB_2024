///<reference types='cypress' />
describe('read write operation in cypress',function(){
    it('read write op 1',function(){
        let str1=' dipanshu '
        let str2=' chawde '
        //reading from file
        cy.readFile('cypress/e2e/5-readWriteFile/files/info1.txt').then((data)=>{
            cy.log(data)
        })

        //writing in file
        cy.writeFile('cypress/e2e/5-readWriteFile/files/info1.txt', str1)

        cy.readFile('cypress/e2e/5-readWriteFile/files/info1.txt').then((data)=>{
            cy.log(data)
        })

        cy.writeFile('cypress/e2e/5-readWriteFile/files/info1.txt', str2, {flag: 'a+'})

        cy.readFile('cypress/e2e/5-readWriteFile/files/info1.txt').then((data)=>{
            cy.log(data)
        })
    })

    it.only('read write flipkart',function(){
        
        cy.visit('https://www.flipkart.com/search?q=i%20phone&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')
        cy.writeFile('cypress/e2e/5-readWriteFile/files/infoExel.csv',`Name , Price \n`)
        cy.get('[class="yKfJKb row"]').each((el)=>{
           
            let nameM = el.find('[class="KzDlHZ"]').text()
            let price =el.find('[class="Nx9bqj _4b5DiR"]').text().replace('₹',"").replace(',',"")
            if(price < 70000){
            cy.writeFile('cypress/e2e/5-readWriteFile/files/infoExel.csv',`"${nameM}","${price}"\n` , {flag: 'a+'} )
            }
            //cy.log(price)
        })
    })
})