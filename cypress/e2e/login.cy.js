import { faker } from '@faker-js/faker'


describe('Validação fluxo de login', () => {

    it('CT-01 - Valida Login com Sucesso', () => {

        const nome = faker.name.fullName()
        const email = faker.internet.email()
        const password = 'teste'

        cy.cadastroDeUsuario(nome, email)
            .then((response) => {
                expect(response.status).to.equal(201)
            })


        cy.login(email, password)
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.authorization).not.empty
                expect(response.body.message).equal('Login realizado com sucesso')
            })
    })

    it('CT-02 - Login com E-mail Ou senha Inválido', () => {
        cy.login('priscila@qa.com.br', '123')
            .then((response) => {
                expect(response.status).to.equal(401)
                expect(response.body.message).equal('Email e/ou senha inválidos')
            })
    })
})