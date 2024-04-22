import { faker } from '@faker-js/faker'


describe('Validação exclusão de usuário por ID', () => {

    it('CT-01 - Valida exclusão de usuário por ID com Sucesso', () => {

        const nome = faker.name.fullName()
        const email = faker.internet.email()

        cy.cadastroDeUsuario(nome, email)
            .then((response_post) => {
                expect(response_post.status).to.equal(201)

                var id_usuario = response_post.body._id

                cy.deletaUsuarioID(id_usuario)
                    .then((response_del) => {
                        expect(response_del.status).to.equal(200)
                        expect(response_del.body.message).to.equal('Registro excluído com sucesso')
                    })
            })
    })

    it('CT-02 Valida exclusão por ID inválido', () => {

        cy.deletaUsuarioID('id_usuario')
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.message).to.equal('Nenhum registro excluído')
            })
    })



})
