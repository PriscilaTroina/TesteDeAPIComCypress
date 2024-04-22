# Teste de API com Cypress


💡 Esse projeto foi construído de forma a exercitar o desenvolvimento de automações para API com o framework Cypress. O foco principal é demonstrar conhecimento em automação de API que necessita de autenticação, já que o projeto anteriormente disponibilizado não necessitava de token.

# Link da API alvo: https://serverest.dev/

## 🔖 Cenários de Teste

### Rota de Login
    - Login com sucesso
    - Login com email e/ou senha incorreto

### Rota de listagem de Usuários
    - Listar usuários cadastrados com sucesso

### Rota de Cadastro de Usuários
    - Cadastro de Usuário com sucesso
    - Cadastro de usuário com e-mail já cadastrado

### Rota Buscar usuário por ID
    - Busca de usuário por ID com sucesso
    - Busca de usuário com ID inexistente 

### Rota de Exclusão de Usuário por ID
    - Exclusão de usuário por ID com sucesso
    - Exclusão de usuário com ID inválido

### Rota de listagem de Produtos
    - Listar produtos cadastrados com sucesso

### Rota de Cadastro de Produtos
    - Valida cadastro de produto com sucesso
    - Valida cadastro de produto já existente
    - Valida cadastro de produto com token inválido

### Rota de Exclusão de Produtos
    - Valida exclusão de produto com sucesso
    - Valida exclusão com token inválido

## Informações sobre o projeto

💡 Projeto desenvolvimento com o padrão Custom Commands.

📌 Os cenários de testes podem ser encontrados dentro da pasta e2e.

📌 Já dentro da pasta support/commands podem ser encontrados os commands.

🖥️ Instalação do Projeto

1. Faça um clone do projeto;

2. Instale o Node.js no computador;

3. Acesse a pasta onde clonou o repositório via terminal;

4. Execute o seguinte comando para instalar as dependências do projeto:

    * npm install
    
5. Execute o seguinte comando para abrir o Cypress:

    * npx cypress open