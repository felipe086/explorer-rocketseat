/*
  Capture 10 items para compor a lista de um supermercado.

  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

const items = []

for (let i = 1; i <= 10; i++) {
  let item = prompt(`Digite o item ${i}`)
  items.push(item)
}
console.log(items)
alert(items)
