import { faker } from '@faker-js/faker'


describe('Validação fluxo de Cadastro de produtos', () => {

    it('CT-01 - Valida cadastro de produto com Sucesso', () => {

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
                        expect(response_prod.body.message).to.equal('Cadastro realizado com sucesso')
                    })
            })

    })

    it('CT-02 - Valida cadastro de produto já existente', () => {

        const nome = faker.name.fullName()
        const email = faker.internet.email()
        const password = 'teste'
        const produto = faker.word.sample()

        cy.cadastroDeUsuario(nome, email)
            .then((response) => {
                expect(response.status).to.equal(201)
                expect(response.body.message).equal('Cadastro realizado com sucesso')
            })

        cy.login(email, password).its('body.authorization').should('not.be.empty')
            .then(authorization => {

                cy.cadastraProduto(produto, authorization)
                console.log(produto)

                cy.cadastraProduto(produto, authorization)
                    .then((response) => {
                        expect(response.status).to.equal(400)
                        expect(response.body.message).to.equal('Já existe produto com esse nome')
                    })
            })
    })

    it('CT-03 - Valida cadastro de produto com token inválido', () => {

        const produto = faker.word.sample()

        cy.cadastraProduto(produto)
            .then((response) => {
                expect(response.status).to.equal(401)
                expect(response.body.message).to.equal('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais')
            })
    })
})

