const luckMessages = [
  "A vida trará coisas boas se tiver paciência.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Uma bela flor é incompleta sem as suas folhas.",
  "O riso é a menor distância entre duas pessoas.",
  "Os defeitos são mais fortes quando o amor é fraco.",
  "A sorte favorece a mente bem preparada.",
  "Quem olha para fora sonha; quem olha para dentro acorda.",
  "Espere pelo mais sábio dos conselhos: o tempo.",
  "Deixe de lado as preocupações e seja feliz.",
  "A maior barreira para o sucesso é o medo do fracasso.",
  "A inspiração vem dos outros. A motivação vem de dentro de nós.",
  "Você sempre será a sua melhor companhia!",
]

const homeScreen = document.querySelector(".homeScreen")
const luckScreen = document.querySelector(".luckScreen")
const openLuckCookie = homeScreen.querySelector("img")
const luckMessage = document.querySelector("[data-js='message']")
const openNewCookie = document.querySelector("[data-js='openCookie']")

function toggleScreen() {
  homeScreen.classList.toggle("hide")
  luckScreen.classList.toggle("hide")
}

function randomMessage() {
  return luckMessages[Math.round(Math.random() * (luckMessages.length - 1))]
}

function changeMessage(message) {
  luckMessage.innerText = message
}

openLuckCookie.addEventListener("click", () => {
  const message = randomMessage()
  changeMessage(message)
  toggleScreen()
})

openNewCookie.addEventListener("click", () => {
  const message = randomMessage()
  changeMessage(message)
})
