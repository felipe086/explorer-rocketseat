<h1 align="center">Movie Notes</h1>

<p align="center">
  <a href="#requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#configuração">Configuração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#HTTP">Rotas</a>
</p>

A ideia agora é criar uma aplicação em Node.js onde o usuário cadastra um filme, preenche com algumas informações (nome, descrição, nota) e cria tags relacionadas a ele.

## Requisitos

- [NodeJs](https://nodejs.org)

## Configuração

- Clone o repositório.
- Instale as dependências (`npm install`).
- Rode as migrations do banco de dados (`npm run migrate`)
- Execute a aplicação (`npm run start`).
  - Para executar em desenvolvimento execute (`npm run dev`)

## HTTP

### POST `/users`

Crie um novo usuário.

#### Corpo da requisição

```json
{
  "name": "Felipe",
  "email": "contato@felipe.com",
  "password": "123"
}
```

### GET `/users/:userId`

Retorna dados de um usuário.

#### Corpo da resposta

```json
{
  "id": 4,
  "name": "Felipe",
  "email": "contato@felipe.com",
  "avatar": null,
  "created_at": "2024-02-13 18:07:30"
}
```

### PUT `/users/:userId`

Atualiza os dados de um usuário.

#### Corpo da requisição

```json
{
 "name": "Felipe", // Alterar nome
 "old_email": "contato@felipe.com", // Alterar email
 "new_email": "felipe@contato.com",
 "old_password": "123", // Alterar senha
 "new_password": "1234
}
```

### DELETE `/users/:userId`

Delete um usuário.

### POST `/movie-notes/:userId`

Cria uma nova nota.

#### Corpo da requisição

```json
{
  "title": "Desenvolvimento Web Moderno",
  "description": "Explore as tecnologias mais recentes no desenvolvimento web, incluindo HTML5, CSS3 e JavaScript.",
  "rating": 4.3,
  "tags": ["Programação", "Desenvolvimento Web", "HTML", "CSS"]
}
```

### PUT `/movie-notes/:userId`

Atualiza uma nota.

#### Corpo da requisição

```json
{
  "title": "Desenvolvimento Web Moderno Edição 2",
  "description": "Explore as tecnologias mais recentes no desenvolvimento web, incluindo HTML5, CSS3 e JavaScript.",
  "rating": 4.5,
  "tags": ["Programação", "Desenvolvimento Web", "JavaScript", "HTML", "CSS"]
}
```

### GET `/movie-notes/:userId`

Retorna dados das notas do usuário.

#### Corpo da resposta

```json
{
  "total_notes": 2,
  "notes": [
    {
      "user_id": 4,
      "note_id": 23,
      "title": "Desenvolvimento Web Moderno",
      "description": "Explore as tecnologias mais recentes no desenvolvimento web, incluindo HTML5, CSS3 e JavaScript.",
      "rating": 4.6,
      "created_at": "2024-02-15 14:29:25",
      "tag": {
        "tag_id": 3,
        "tags": [
          "Programação",
          "Desenvolvimento Web",
          "JavaScript"
        ]
      }
    }
    .....
}
```

### GET `/movie-notes`

Retorna notas de acordo com os parâmetros da requisição.

- Parâmetros da requisição:
  - `title`: Título da nota.
  - `description`: Descrição da nota.
  - `tags`: Tags da nota.
- Exemplo de rota: `/movie-notes?title=web`

#### Corpo da resposta

```json
[
  {
    "user_id": 6,
    "note_id": 21,
    "title": "Desenvolvimento Web Moderno",
    "description": "Explore as tecnologias mais recentes no desenvolvimento web, incluindo HTML5, CSS3 e JavaScript.",
    "rating": 4.6,
    "created_at": "2024-02-15 14:25:10",
    "tag": {
      "tag_id": 1,
      "tags": [
        "Programação",
        "Desenvolvimento Web",
        "JavaScript"
      ]
    }
  }
  .....

```
