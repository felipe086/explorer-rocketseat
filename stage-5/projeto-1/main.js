const gameScreen = document.querySelector(".gameScreen")
const resultScreen = document.querySelector(".resultScreen")
const inputNumber = document.querySelector("#number")
const triesText = resultScreen.querySelector("[data-js='gameResultText']")
const playAgainButton = document.querySelector("[data-js='playAgain']")
const tryButton = document.querySelector("[data-js='try']")

let attempts = 1
const randomNumber = Math.round(Math.random() * 10)

function toggleScreen() {
  gameScreen.classList.toggle("hide")
  resultScreen.classList.toggle("hide")
}

function handleResetGame() {
  toggleScreen()
  attempts = 1
  // inputNumber.focus()
  // location.reload()
}

function handleTry(event) {
  event.preventDefault()

  if (inputNumber.value === "") {
    alert("O campo não pode ser vazio")
  }

  if (inputNumber.value < 0 || inputNumber.value > 10) {
    alert("O número não pode ser maior que 10 nem menor que 0. Digite um número entre 0 e 10.")
  }

  if (Number(inputNumber.value) === randomNumber) {
    toggleScreen()
    triesText.innerText = `Acertou em ${
      attempts === 1 ? `${attempts} tentativa!` : `${attempts} tentativas!`
    }`
  }

  inputNumber.value = ""
  inputNumber.focus()
  attempts++
}

function pressEnter(event) {
  if (event.key === "Enter" && gameScreen.classList.contains("hide")) {
    handleResetGame()
  }
}

tryButton.addEventListener("click", handleTry)
playAgainButton.addEventListener("click", handleResetGame)
document.addEventListener("keydown", pressEnter)
