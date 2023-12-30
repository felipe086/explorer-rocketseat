let darkMode = false
const buttonToggle = document.querySelector("#toggle-mode")

buttonToggle.addEventListener("click", (event) => {
  document.documentElement.classList.toggle("dark")

  const mode = darkMode ? "dark" : ""
  event.currentTarget.querySelector("span").textContent = `${mode} mode ativado.`

  darkMode = !darkMode
})
