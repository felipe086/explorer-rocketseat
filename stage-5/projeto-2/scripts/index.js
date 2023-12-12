import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { notANumber, calculateIMC, cleanField } from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResult(result)

  cleanField(inputWeight)
  cleanField(inputHeight)
})

function displayResult(result) {
  const resultMessage = `Seu IMC é de ${result}`

  Modal.text.innerText = resultMessage
  Modal.open()
}

inputWeight.addEventListener("input", () => AlertError.close())
inputHeight.addEventListener("input", () => AlertError.close())
