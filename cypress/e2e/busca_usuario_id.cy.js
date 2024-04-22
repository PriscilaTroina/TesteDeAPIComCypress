import { faker } from '@faker-js/faker'


describe('Validação buscar usuário por ID', () => {

    it('CT-01 - Valida busca de usuário por ID com Sucesso', () => {

        const nome = faker.name.fullName()
        const email = faker.internet.email()

        cy.cadastroDeUsuario(nome, email)
            .then((response_post) => {
                expect(response_post.status).to.equal(201)

                var id_usuario = response_post.body._id

                cy.buscarUsuarioID(id_usuario)
                    .then((response_get) => {
                        expect(response_get.status).to.equal(200)
                    })
            })
    })

    it('CT-02 Valida busca de usuário por ID inválido', () => {

        cy.buscarUsuarioID('id_invalido')
            .then((response) => {
                expect(response.status).to.equal(400)
                expect(response.body.message).to.equal('Usuário não encontrado')
            })
    })



})
