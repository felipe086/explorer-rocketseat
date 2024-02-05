<h1 align="center">RocketNotes</h1>

<p align="center">
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rotas">Rotas da API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>
</p>

## Projeto

Esta é uma aplicação backend com NodeJS, onde o usuário pode cadastrar notas (anotações), podendo preencher com algumas informações: Título, descrição, tags e links.

## Requisitos

Para o desenvolvimento, você precisará apenas do Node.js e de um instalador de pacotes Node, o npm, instalados em seu ambiente.

### Node

- #### Instalação do Node no Windows

  Basta acessar o [site oficial do Node.js](https://nodejs.org/) e baixar o instalador.. Além disso, certifique-se de ter o git disponível em seu PATH, pois o npm pode precisar dele (você pode encontrar o git [aqui](https://git-scm.com/)).

- #### Instalação do Node no Linux

  Você pode instalar o nodejs e o npm facilmente com o apt install, basta executar os seguintes comandos.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Outros Sistemas Operacionais
  Você pode encontrar mais informações sobre a instalação no [site oficial do Node.js](https://nodejs.org/) e no [site oficial do NPM](https://npmjs.org/).

Se a instalação for bem-sucedida, você deverá ser capaz de executar os seguintes comandos.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

---

### Instale as dependências

    $ npm install

### Inicie o projeto

    $ npm start

---

## Rotas da API

### Cadastro de usuários

- Descrição: Cria um novo usuário no sistema.
- Método: `POST`
- Endpoint: `/users`
- Corpo da requisição (JSON):

```JSON
{
 "name" : "Felipe",
 "email": "felipe@contato.com",
 "password": "123"
}
```

- Resposta de sucesso (201 - Created):

```JSON
{
  "message": "Usuário criado com sucesso."
}
```

---

### Atualizar usuário

- Descrição: Atualiza um usuário de acordo com os dados passados no body da requisição.
- Método: `PUT`
- Endpoint: `/users/:id`
- Parâmetros da requisição:
  - `id`: Id do usuário.
- Exemplo de requisição:
  - `/users/6`
- Corpo da requisição (JSON):

```JSON
{
   "name": "Felipe G O",
   "password": "1234",
   "old_password": "123"
}
```

- Resposta de sucesso (200 - OK):

```JSON
{
  "message": "Usuário atualizado com sucesso."
}
```

---

### Cadastrar nota

- Descrição: Cria uma nova nota associada a um usuário.
- Método: `POST`
- Endpoint: `/notes/:user_id`
- Parâmetros da requisição:
  - `user_id`: Id do usuário.
- Exemplo de requisição:
  - `/notes/6`
- Corpo da requisição (JSON):

```JSON
{
   "title":"Introdução ao NodeJS com Express",
   "description": "Aula introdutória ao NodeJS utilizando o framework Express",
   "tags": ["express","node"],
   "links": ["https://expressjs.com","https://nodejs.org"]
}
```

- Resposta de sucesso (201 - Created):

```JSON
{
  "message": "Nota criada com sucesso."
}
```

---

### Buscar notas

- Descrição: Retorna a nota com base no ID fornecido como parâmetro.
- Método: `GET`
- Endpoint: `/notes/:note_id`
- Parâmetros da requisição:
  - `note_id`: Id da nota.
- Exemplo de requisição:
- `/notes/7`

- Resposta de sucesso (200 - OK):

```JSON
{
  "id": 7,
  "title": "Introdução ao NodeJS com Express",
  "description": "Aula introdutória ao NodeJS utilizando o framework Express",
  "user_id": 6,
  "created_at": "2024-02-02 03:03:02",
  "updated_at": "2024-02-02 03:03:02",
  "tags": [
    {
      "id": 8,
      "name": "express",
      "user_id": 6,
      "note_id": 7
    },
    {
      "id": 7,
      "name": "node",
      "user_id": 6,
      "note_id": 7
    }
  ],
  "links": [
    {
      "id": 7,
      "url": "https://expressjs.com",
      "note_id": 7,
      "created_at": "2024-02-02 03:03:02"
    },
    {
      "id": 8,
      "url": "https://nodejs.org",
      "note_id": 7,
      "created_at": "2024-02-02 03:03:02"
    }
  ]
}
```

---

### Buscar notas por id, título e tags

- Descrição: Retorna as notas com base nos parâmetros fornecidos.
- Método: `GET`
- Endpoint: `/notes/`
- Parâmetros da requisição:
  - `user_id`: Id do usuário.
  - `title`: Título da nota.
  - `tags`: Tags da nota (opcional).
- Exemplo de requisição:

  - `/notes?user_id=6&title=node`
  - `/notes?user_id=6&title=node&tags=`

- Resposta de sucesso (200 - OK):

```JSON
[
  {
    "id": 11,
    "title": "Introdução ao NodeJS com Express",
    "description": "Aula introdutória ao NodeJS utilizando o framework Express",
    "user_id": 6,
    "created_at": "2024-02-05 00:46:36",
    "updated_at": "2024-02-05 00:46:36",
    "tags": [
      {
        "id": 15,
        "name": "express",
        "user_id": 6,
        "note_id": 11
      },
      {
        "id": 16,
        "name": "node",
        "user_id": 6,
        "note_id": 11
      }
    ]
  }
]
```

---

### Deletar nota

- Descrição: Deleta um nota com base no ID fornecido como parâmetro.
- Método: `POST`
- Endpoint: `/notes/:note_id`
- Parâmetros da requisição:
  - `note_id`: Id da nota.
- Exemplo de requisição:

  - `/notes/6`

- Resposta de sucesso (200 - OK):

```JSON
{
  "message": "Nota deletada com sucesso"
}
```

---

### Buscar tags

- Descrição: Retorna as tags com base no ID fornecido como parâmetro.
- Método: `POST`
- Endpoint: `/tags/:user_id`
- Parâmetros da requisição:
  - `user_id`: Id do usuário.
- Exemplo de requisição:

  - `/tags/6`

- Resposta de sucesso (200 - OK):

```JSON
{
  "tags": [
    {
      "id": 15,
      "name": "express",
      "user_id": 6,
      "note_id": 11
    },
    {
      "id": 16,
      "name": "node",
      "user_id": 6,
      "note_id": 11
    }
  ]
}
```

## Tecnologias

Esse projeto foi desenvolvido utilizando as seguintes tecnologias:

- JavaScript
  - NodeJS
    - Express
    - Knex
- SQL
  - SQLite
