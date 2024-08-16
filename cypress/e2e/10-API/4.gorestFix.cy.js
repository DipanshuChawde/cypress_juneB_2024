///<reference types="cypress" />
import postD from "../../fixtures/gorestFixPay/postGo"
import putD from "../../fixtures/gorestFixPay/putGo"


describe('verify API testing in cypress-gorest with fixture', function () {
    const token = '2e5d6a76c6c9f78db8669486a0bc356d8c5acaa7a0adac87796e8eaef1619f8e'

    postD.forEach((el, index) => {
        it('gorest e2e -POST/PUT/DELETE request with fixture', () => {
            cy.request({
                method: 'POST',
                url: '/public/v2/users',
                body : el,
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }).then((resC)=>{
                //cy.log(resC)
                expect(resC.status).to.eq(201)
                expect(resC.body.name).to.eq(el.name)
                return resC.body.id
            }).then((id)=>{
                cy.request({
                    method : 'PUT',
                    url : `/public/v2/users/${id}`,
                    body : putD[index],
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                }).then((resU)=>{
                    expect(resU.status).to.eq(200)
                    expect(resU.body.name).to.eq(putD[index].name)
                }).then(()=>{
                    cy.request({
                        method : 'DELETE',
                        url : `/public/v2/users/${id}`,
                        headers : {
                            Authorization : `Bearer ${token}`
                        }
                    }).then((resD)=>{
                        expect(resD.status).to.eq(204)
                        expect(resD.body).to.eq("")
                    })
                })
            })
        })
    })
})