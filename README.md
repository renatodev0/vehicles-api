# API Veículos

## Descrição

A API Veículos é uma aplicação de backend para gerenciamento de veículos. Ela permite realizar operações de CRUD (Create, Read, Update, Delete) em veículos, como adicionar um novo veículo, recuperar informações de um veículo, atualizar os detalhes de um veículo e excluir um veículo.

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- PostgreSQL
- Sequelize (ORM)

## Pré-requisitos

- Node.js (versão 12 ou superior)
- PostgreSQL (instalado e configurado)

## Instalação

1. Clone o repositório:
    ```git clone https://github.com/seu-usuario/vehicles-api.git```
2. Navegue até o diretório do projeto:
    ```cd vehicles-api```
3. Instale as dependências:
    ```npm install```
4. Crie um arquivo ".env" na raiz do projeto e configure as seguintes variáveis de ambiente:
    ```
    DB_HOST=seu-host-do-postgres
    DB_PORT=sua-porta-do-postgres
    DB_USERNAME=seu-username-do-postgres
    DB_PASSWORD=sua-senha-do-postgres
    DB_NAME=seu-nome-do-banco-de-dados
    PORT=3000
    ```
Certifique-se de substituir os valores acima pelas configurações do seu ambiente.

6. Inicie o servidor: 
    ``` npm start ```

O servidor será iniciado na porta especificada no arquivo `.env`.

## Endpoints da API
- `GET /vehicles`: Retorna todos os veículos cadastrados.
- `GET /vehicles/:id`: Retorna os detalhes de um veículo específico.
- `POST /vehicles`: Cria um novo veículo.
- `PUT /vehicles/:id`: Atualiza os detalhes de um veículo específico.
- `DELETE /vehicles/:id`: Exclui um veículo específico.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar este projeto.

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).


