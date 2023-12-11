const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  text: document.querySelector(".modal .title"),
  btnClose: document.querySelector(".close-modal"),
  open() {
    this.wrapper.classList.add("open")
  },
  close() {
    this.wrapper.classList.remove("open")
  },
}

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const weight = inputWeight.value
  const height = inputHeight.value
  const result = calculateIMC(weight, height)
  const resultMessage = `Seu IMC é de ${result}`
  Modal.text.innerHTML = resultMessage
  Modal.open()
  cleanFields()
  // toggleModal()
})

function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

Modal.btnClose.addEventListener("click", () => Modal.close())

window.addEventListener("keyup", ({ key }) => {
  if (key === "Escape" && modalWrapper.classList.contains("open")) {
    toggleModal()
  }
})

function toggleModal() {
  Modal.wrapper.classList.toggle("open")
}

function cleanFields() {
  inputHeight.value = ""
  inputWeight.value = ""
}
