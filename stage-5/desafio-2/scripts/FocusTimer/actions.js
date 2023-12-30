import state from "./state.js"
import * as timer from "./timer.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")
  sounds.buttonPressAudio.play()
  timer.countdown()
}

export function resetTimer() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  sounds.buttonPressAudio.play()
  timer.updateDisplay()
}

export function addTime() {
  if (state.minutes < 60) {
    state.minutes += 5
    timer.updateDisplay()
    return
  }
  return
}

export function removeTime() {
  if (state.minutes > 5) {
    state.minutes -= 5
    timer.updateDisplay()
    return
  }
  return
}

export function playAudio(soundName) {
  let isPaused = sounds[soundName].paused

  isPaused ? sounds[soundName].play() : sounds[soundName].pause()
}
