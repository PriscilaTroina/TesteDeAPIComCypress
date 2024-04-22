


describe('Validação fluxo de listagem de usuários', () => {

    it('CT-01 - Valida listagem de usuários com Sucesso', () => {

        cy.buscaListaUsuarios()
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.usuarios).not.empty
            })
    })

})