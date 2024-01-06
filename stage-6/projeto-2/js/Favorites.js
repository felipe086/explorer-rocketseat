import { GithubUser } from "./GithubUser.js"

// Class que irá conter a lógica dos dados e como os dados serão estruturados
class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem("@github-favorites")) || []
  }

  async add(username) {
    try {
      const userExists = this.entries.find((entry) => entry.login === username)

      if (userExists) throw new Error("Usuário já cadastrado.")

      const user = await GithubUser.search(username)

      if (user.login === undefined) throw new Error("Usuário não encontrado.")

      this.entries = [user, ...this.entries]
      this.update()
      this.save()
    } catch (error) {
      alert(error.message)
    }
  }

  save() {
    localStorage.setItem("@github-favorites", JSON.stringify(this.entries))
  }

  delete(user) {
    const filteredEntries = this.entries.filter((entry) => entry.login !== user.login)
    this.entries = filteredEntries
    this.update()
    this.save()
  }
}
// Class que irá criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector("table tbody")
    this.update()
    this.onAdd()
  }

  onAdd() {
    const addButton = this.root.querySelector("#button-search")
    addButton.onclick = () => {
      const input = this.root.querySelector("#input-search")

      if (input.value) this.add(input.value)
      input.value = ""
    }
  }

  update() {
    this.removeAllTr()
    this.entries.forEach((entry) => {
      const row = this.createRow()
      row.querySelector(".user img").src = `https://github.com/${entry.login}.png`
      row.querySelector(".user img").alt = `Imagem de ${entry.name}`
      row.querySelector(".user a").href = `https://github.com/${entry.loin}`
      row.querySelector(".user p").textContent = entry.name
      row.querySelector(".user span").textContent = `@${entry.login}`
      row.querySelector(".repositories").textContent = entry.public_repos
      row.querySelector(".followers").textContent = entry.followers
      row.querySelector(".remove").onclick = () => {
        const isOkToDelete = confirm("Tem certeza que deseja deletar essa linha?")
        if (isOkToDelete) {
          this.delete(entry)
        }
      }
      this.tbody.append(row)
    })
  }

  removeAllTr() {
    if (this.tbody) this.tbody.querySelectorAll("tr").forEach((tr) => tr.remove())
  }

  createRow() {
    const tr = document.createElement("tr")
    const rowContent = `
      <td class="user">
        <img src="" alt="" />
        <a href="" target="_blank">
          <p></p>
          <span></span>
        </a>
      </td>
      <td class="repositories"></td>
      <td class="followers"></td>
      <td><button class="remove">&times;</button></td>
    `

    tr.innerHTML = rowContent
    return tr
  }
}

// this.entries.filter(user => user.login != data.login)
// event.target.dataset.id (id=login)
