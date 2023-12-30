export const buttonPressAudio = new Audio("./assets/button-press.wav")
export const fireplaceAudio = new Audio("./assets/fireplace.wav")
export const forestAudio = new Audio("./assets/forest.wav")
export const coffeeShopAudio = new Audio("./assets/coffee.wav")
export const rainAudio = new Audio("./assets/rain.wav")
export const kitchenTimer = new Audio("./assets/kitchen-timer.mp3")

const audios = [fireplaceAudio, forestAudio, coffeeShopAudio, rainAudio]

buttonPressAudio.volume = 0.03
kitchenTimer.volume = 0.05

audios.forEach((audio) => (audio.loop = true))
