export class Router {
  links = document.querySelectorAll("nav ul a")
  routes = {}

  add(routeName, pageUrl) {
    this.routes[routeName] = pageUrl
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState("", {}, event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location

    this.removeActiveClass()
    this.addActiveClass(pathname)

    const route = this.routes[pathname] || this.routes["/error"]
    fetch(route)
      .then((data) => data.text())
      .then((html) => (document.querySelector("#app").innerHTML = html))
  }

  removeActiveClass() {
    this.links.forEach((link) => link.classList.remove("active"))
  }

  addActiveClass(path) {
    const activeLink = document.querySelector(`a[href='${path}']`)
    if (activeLink) activeLink.classList.add("active")
  }
}
