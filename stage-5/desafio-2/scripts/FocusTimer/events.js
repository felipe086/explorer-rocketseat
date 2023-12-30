import * as actions from "./actions.js"
import * as elements from "./elements.js"

export function registerControls() {
  elements.controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action

    if (typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })

  elements.soundsButtons.forEach((soundButton) => {
    soundButton.addEventListener("click", (event) => {
      const action = event.target.dataset.action
      soundButton.classList.toggle("active")
      actions.playAudio(action)
    })
  })
}
