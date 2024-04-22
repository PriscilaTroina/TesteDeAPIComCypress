import { faker } from '@faker-js/faker'


describe('Validação fluxo de Cadastro de usuários', () => {

    it('CT-01 - Valida cadastro de usuários com Sucesso', () => {

        const nome = faker.name.fullName()
        const email = faker.internet.email()

        cy.cadastroDeUsuario(nome, email)
            .then((response) => {
                expect(response.status).to.equal(201)
                expect(response.body.message).equal('Cadastro realizado com sucesso')
            })
    })

    it('CT-02 - Valida cadastro de usuários com e-mail já cadastrado', () => {

        const nome = faker.name.fullName()
        const email = faker.internet.email()

        cy.cadastroDeUsuario(nome, email)

        cy.cadastroDeUsuario(nome, email)
            .then((response) => {
                expect(response.status).to.equal(400)
                expect(response.body.message).equal('Este email já está sendo usado')
            })
    })

})