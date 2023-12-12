export const Modal = {
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

Modal.btnClose.addEventListener("click", () => Modal.close())

window.addEventListener("keydown", handleKeydown)

function handleKeydown(event) {
  if (event.key === "Escape") {
    Modal.close()
  }
}
