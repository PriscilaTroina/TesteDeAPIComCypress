

Cypress.Commands.add('cadastroDeUsuario', (nome, email) => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        failOnStatusCode: false,
        body: {
            "nome": nome,
            "email": email,
            "password": "teste",
            "administrador": "true"
        }
    }).then((response) => { return response })
})


Cypress.Commands.add('login', (email, password) => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        failOnStatusCode: false,
        body: {
            "email": email,
            "password": password,
        }
    })
})

Cypress.Commands.add('buscarUsuarioID', (id_usuario) => {
    cy.request({
        method: 'GET',
        url: `https://serverest.dev/usuarios/${id_usuario}`,
        failOnStatusCode: false,
    })
})

Cypress.Commands.add('buscaListaUsuarios', () => {
    cy.request({
        method: 'GET',
        url: 'https://serverest.dev/usuarios',
        failOnStatusCode: false,
    })
})

Cypress.Commands.add('listaProdutos', () => {
    cy.request({
        method: 'GET',
        url: 'https://serverest.dev//produtos',
        failOnStatusCode: false,
    })
})

Cypress.Commands.add('deletaUsuarioID', (id_usuario) => {
    cy.request({
        method: 'DELETE',
        url: `https://serverest.dev/usuarios/${id_usuario}`,
        failOnStatusCode: false,
    })
})

Cypress.Commands.add('cadastraProduto', (nome, authorization) => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        failOnStatusCode: false,
        headers: { Authorization: ` ${authorization}` },
        body: {
            "nome": nome,
            "preco": 470,
            "descricao": "Mouse",
            "quantidade": 381
        }
    })
})

Cypress.Commands.add('deletaProduto', (id_produto, authorization) => {
    cy.request({
        method: 'DELETE',
        url: `https://serverest.dev/produtos/${id_produto}`,
        failOnStatusCode: false,
        headers: { Authorization: ` ${authorization}` },
    })
})

