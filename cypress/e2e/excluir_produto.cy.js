import { faker } from '@faker-js/faker'


describe('Validação fluxo de exclusão de produtos', () => {

    it('CT-01 - Valida exclusão de produto com Sucesso', () => {

        const nome = faker.name.fullName()
        const email = faker.internet.email()
        const password = 'teste'
        const produto = faker.word.sample()

        cy.cadastroDeUsuario(nome, email)
            .then((response) => {
                expect(response.status).to.equal(201)
                expect(response.body.message).equal('Cadastro realizado com sucesso')
            })

        cy.login(email, password)
            .its('body.authorization').should('not.be.empty')
            .then(authorization => {

                cy.cadastraProduto(produto, authorization)
                    .then((response_prod) => {
                        expect(response_prod.status).to.equal(201)

                        var id_produto = response_prod.body._id
                        //console.log(id_produto)

                        cy.deletaProduto(id_produto, authorization)
                            .then((response_del) => {
                                expect(response_del.status).to.equal(200)
                                expect(response_del.body.message).to.equal('Registro excluído com sucesso')
                            })
                    })
            })
    })

    it('CT-02 - Valida tentativa de exclusão com token inválido', () => {

        const nome = faker.name.fullName()
        const email = faker.internet.email()
        const password = 'teste'
        const produto = faker.word.sample()

        cy.cadastroDeUsuario(nome, email)
            .then((response) => {
                expect(response.status).to.equal(201)
                expect(response.body.message).equal('Cadastro realizado com sucesso')
            })

        cy.login(email, password)
            .its('body.authorization').should('not.be.empty')
            .then(authorization => {

                cy.cadastraProduto(produto, authorization)
                    .then((response_prod) => {
                        expect(response_prod.status).to.equal(201)

                        var id_produto = response_prod.body._id

                        cy.deletaProduto(id_produto)
                            .then((response) => {
                                expect(response.status).to.equal(401)
                                expect(response.body.message).to.equal('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais')
                            })
                    })
            })
    })
})
