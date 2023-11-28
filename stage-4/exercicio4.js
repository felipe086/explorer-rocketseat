/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os
  parabéns.

  Se o aluno não passou no bimestre,
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

const studentName = prompt("Insira o nome do aluno.")
const studentGrades = []
let averageGrade = 0

for (let i = 1; i <= 3; i++) {
  const grade = Number(prompt(`Insira a ${i} nota.`))
  studentGrades.push(grade)
}

for (let i = 0; i < studentGrades.length; i++) {
  averageGrade += studentGrades[i]
}

averageGrade /= studentGrades.length
averageGrade.toFixed(2)
const aboveAverage = averageGrade > 6

if (aboveAverage) {
  alert(`Parabéns ${studentName}, você passou de bimestre e sua média foi de: ${averageGrade}`)
} else if (averageGrade <= 3) {
  alert(`${studentName}, você foi reprovado.`)
} else {
  alert(`${studentName}, estude para sua prova de recuperação! Sua média foi de: ${averageGrade}`)
}
