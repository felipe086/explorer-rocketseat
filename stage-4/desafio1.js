/*
A soma dos dois números
A subtração dos dois números
A multiplicação dos dois números
A divisão dos dois números
O resto da divisão dos dois números
Verifique se a soma dos dois números é par ou ímpar
Verifique se os dois números inseridos são iguais ou diferentes
*/

const firstNumber = Number(prompt("Insira o primeiro número"))
const secondNumber = Number(prompt("Insira o segundo número"))

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mul = firstNumber * secondNumber
const div = firstNumber / secondNumber
const mod = firstNumber % secondNumber
const sumIsEven = sum % 2 === 0 ? "Par" : "Ímpar"
const numbersAreEquals = firstNumber === secondNumber ? "Iguais" : "Diferentes"

alert(`
O resultado da soma dos números é: ${sum},
O resultado da subtração dos números é: ${sub},
O resultado da multiplicação dos números é: ${mul},
O resultado da divisão dos números é: ${div},
O resultado do resto da divisão dos números é: ${mod},
A soma dos dois números é: ${sumIsEven},
Os dois números inseridos são: ${numbersAreEquals}
`)
