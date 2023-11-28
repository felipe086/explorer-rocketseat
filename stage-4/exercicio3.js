/*
  Capturar 2 números
  e fazer as operações matem  áticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

const firstNumber = Number(prompt("Insira o primeiro valor."))
const secondNumber = Number(prompt("Insira o segundo valor."))

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mul = firstNumber * secondNumber
const div = firstNumber / secondNumber
const mod = firstNumber % secondNumber

alert(`O resultado das operações é:
  Soma: ${sum}
  Subtração: ${sub}
  Multiplicação: ${mul}
  Divisão: ${div}
  Resto da divisão: ${mod}
`)
