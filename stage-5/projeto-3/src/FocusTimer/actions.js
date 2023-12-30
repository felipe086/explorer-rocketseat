import state from "./state.js"
import * as timer from "./timer.js"
import * as elements from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running") // Retorna true or false, true se colocou
  sounds.buttonPressAudio.play()
  timer.countdown()
}

export function setTimer() {
  elements.minutes.setAttribute("contenteditable", true)
  elements.minutes.focus()
}

export function resetTimer() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  sounds.buttonPressAudio.play()
  timer.updateDisplay()
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on")

  if (state.isMute) {
    sounds.bgAudio.play()
    return
  }
  sounds.bgAudio.pause()
}
