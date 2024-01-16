import { GithubUser } from "./fetchData.js"

class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.githubFavorites = JSON.parse(localStorage.getItem("@github-favorites")) || []
  }

  save() {
    localStorage.setItem("@github-favorites", JSON.stringify(this.githubFavorites))
  }

  delete(login) {
    const filteredFavorites = this.githubFavorites.filter((favorite) => favorite.login != login)
    this.githubFavorites = filteredFavorites
    this.save()
    this.update()
  }

  async add(username) {
    try {
      const userExists = this.githubFavorites.find(({ login }) => login == username)

      if (userExists) {
        throw new Error("Usuário já cadastrado.")
      }

      const user = await GithubUser.search(username)

      if (user.login === undefined) {
        throw new Error("Usuário não encontrado.")
      }

      this.githubFavorites = [user, ...this.githubFavorites]
      this.save()
      this.update()
    } catch (error) {
      alert(error.message)
    }
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector("table tbody")
    this.update()
    this.registerEvents()
  }

  registerEvents() {
    const searchButton = this.root.querySelector("#search-button")
    if (!searchButton) {
      throw new Error("Error ao encontrar o botão de busca.")
    }
    searchButton.onclick = () => {
      const searchInput = this.root.querySelector("#search-input")

      if (!searchInput) {
        throw new Error("Error ao encontrar o campo de busca.")
      }

      this.add(searchInput.value)
      searchInput.value = ""
    }
  }

  update() {
    this.removeAllRows()
    if (this.githubFavorites.length > 0) {
      this.root.querySelector(".no-favorites").classList.remove("active")
    } else {
      this.root.querySelector(".no-favorites").classList.add("active")
    }

    this.githubFavorites.forEach((favorite) => {
      const row = this.createRow(favorite)

      if (this.tbody) {
        this.tbody.append(row)
      }
    })
  }

  removeAllRows() {
    const trs = this.tbody.querySelectorAll("tr")
    if (trs[0]) trs.forEach((tr) => tr.remove())
  }

  createRow({ login, name, public_repos, followers }) {
    const row = document.createElement("tr")
    const rowContent = `
      <td>
      <a href="https://github.com/${login}" target="_blank" class="user">
        <img src="https://github.com/${login}.png" alt="" />
        <div class="">
          <p class="name">${name}</p>
          <p class="username">@${login}</p>
        </div>
      </a>
    </td>
    <td class="repositories">${public_repos}</td>
    <td class="followers">${followers}</td>
    <td class="action">Remover</td>
    `

    row.innerHTML = rowContent

    row.querySelector(".action").onclick = () => {
      const isOkToDelete = confirm("Tem certeza que deseja deletar essa linha?")
      if (isOkToDelete) {
        this.delete(login)
      }
    }
    return row
  }
}
