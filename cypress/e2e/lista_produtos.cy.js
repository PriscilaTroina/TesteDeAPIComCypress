


describe('Validação fluxo de listagem de produtos', () => {

    it('CT-01 - Valida listagem de produtos com Sucesso', () => {

        cy.listaProdutos()
            .then((response) => {
                console.log(response)
                expect(response.status).to.equal(200)
                expect(response.body.produtos).not.empty
            })
    })

})